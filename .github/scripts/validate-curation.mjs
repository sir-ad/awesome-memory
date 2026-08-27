import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const errors = [];
const arxivLinks = [];
const auditArxiv = process.argv.includes('--arxiv');
const selfTest = process.argv.includes('--self-test');

const arxivStopWords = new Set([
	'a', 'an', 'and', 'agent', 'agents', 'ai', 'for', 'from', 'in', 'into', 'language', 'large',
	'llm', 'llms', 'memory', 'model', 'models', 'of', 'on', 'paper', 'review', 'survey', 'the',
	'to', 'toward', 'towards', 'using', 'via', 'with',
]);

function markdownFiles(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
		if (entry.name === '.git' || entry.name === 'node_modules') {
			return [];
		}

		const path = resolve(directory, entry.name);
		if (entry.isDirectory()) {
			return markdownFiles(path);
		}
		return entry.name.endsWith('.md') ? [path] : [];
	});
}

function report(file, line, message) {
	errors.push(`${relative(root, file)}:${line}: ${message}`);
}

function decodeXml(value) {
	return value
		.replace(/<[^>]+>/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
		.replace(/\s+/g, ' ')
		.trim();
}

function significantTokens(value) {
	return (value.normalize('NFKD').toLowerCase().match(/[a-z0-9]+/g) ?? [])
		.filter(token => token.length >= 3 && !arxivStopWords.has(token));
}

function hasSemanticOverlap(label, metadata) {
	const labelTokens = significantTokens(label);
	const metadataTokens = significantTokens(metadata);
	return labelTokens.length > 0 && labelTokens.some(labelToken =>
		metadataTokens.some(metadataToken =>
			labelToken === metadataToken
			|| (labelToken.length >= 4 && metadataToken.includes(labelToken))
			|| (metadataToken.length >= 4 && labelToken.includes(metadataToken)),
		),
	);
}

function validateSemanticAuditLogic() {
	const fixtures = [
		{
			label: 'Cognitive Architectures for Language Agents',
			metadata: 'Cognitive Architectures for Language Agents. CoALA organizes language agents around modular memory and action.',
			expected: true,
		},
		{
			label: 'BEAM',
			metadata: 'Beyond a Million Tokens. We construct BEAM, a benchmark of coherent long conversations.',
			expected: true,
		},
		{
			label: '∞Bench',
			metadata: 'InfiniteBench evaluates language models beyond 100K tokens.',
			expected: true,
		},
		{
			label: 'Cognitive Architectures for Language Agents',
			metadata: 'Implementing biosensing based user preference visualisation in architectural spaces.',
			expected: false,
		},
	];

	for (const [index, fixture] of fixtures.entries()) {
		if (hasSemanticOverlap(fixture.label, fixture.metadata) !== fixture.expected) {
			errors.push(`semantic audit self-test ${index + 1} failed`);
		}
	}
	if (errors.length === 0) {
		console.log(`Semantic audit self-test passed (${fixtures.length} cases).`);
	}
}

async function fetchArxivEntries(ids) {
	const metadata = new Map();
	const batchSize = 40;
	for (let start = 0; start < ids.length; start += batchSize) {
		if (start > 0) {
			await new Promise(resolveDelay => setTimeout(resolveDelay, 3000));
		}

		const batch = ids.slice(start, start + batchSize);
		const url = `https://export.arxiv.org/api/query?id_list=${batch.join(',')}&max_results=${batch.length}`;
		let response;
		for (let attempt = 0; attempt < 4; attempt += 1) {
			response = await fetch(url, {
				headers: { 'User-Agent': 'awesome-memory-curation/1.0 (https://github.com/sir-ad/awesome-memory)' },
				signal: AbortSignal.timeout(30_000),
			});
			if (response.ok) {
				break;
			}
			if (response.status !== 429 && response.status < 500) {
				throw new Error(`arXiv API returned HTTP ${response.status}`);
			}
			if (attempt === 3) {
				throw new Error(`arXiv API returned HTTP ${response.status} after 4 attempts`);
			}

			const retryAfter = Number(response.headers.get('retry-after'));
			const delay = Number.isFinite(retryAfter) && retryAfter > 0
				? Math.min(retryAfter * 1000, 30_000)
				: response.status === 429 ? 30_000 : 3000 * (2 ** attempt);
			console.warn(`arXiv API returned HTTP ${response.status}; retrying in ${delay / 1000}s`);
			await new Promise(resolveDelay => setTimeout(resolveDelay, delay));
		}

		const xml = await response.text();
		for (const entryMatch of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
			const entry = entryMatch[1];
			const idMatch = entry.match(/<id>https?:\/\/arxiv\.org\/abs\/(\d{4}\.\d{4,5})(?:v\d+)?<\/id>/i);
			const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/i);
			const summaryMatch = entry.match(/<summary>([\s\S]*?)<\/summary>/i);
			if (idMatch && titleMatch) {
				metadata.set(idMatch[1], {
					title: decodeXml(titleMatch[1]),
					searchable: decodeXml(`${titleMatch[1]} ${summaryMatch?.[1] ?? ''}`),
				});
			}
		}
	}
	return metadata;
}

async function validateArxivMetadata() {
	const ids = [...new Set(arxivLinks.map(link => link.id))];
	let metadata;
	try {
		metadata = await fetchArxivEntries(ids);
	} catch (error) {
		errors.push(`arXiv metadata audit failed: ${error.message}`);
		return;
	}

	for (const link of arxivLinks) {
		const entry = metadata.get(link.id);
		if (!entry) {
			report(link.file, link.line, `arXiv ID ${link.id} was not returned by the arXiv API`);
		} else if (!hasSemanticOverlap(link.label, entry.searchable)) {
			report(link.file, link.line, `link label "${link.label}" does not match arXiv ${link.id}: "${entry.title}"`);
		}
	}

	if (errors.length === 0) {
		console.log(`ArXiv metadata audit passed for ${ids.length} unique papers.`);
	}
}

if (!existsSync(resolve(root, 'LICENSE'))) {
	errors.push('LICENSE: missing CC0 license file');
}

for (const file of markdownFiles(root)) {
	const lines = readFileSync(file, 'utf8').split('\n');
	for (const [index, line] of lines.entries()) {
		for (const match of line.matchAll(/!?\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)) {
			const label = match[1];
			const target = match[2].replace(/^<|>$/g, '');
			if (/^https?:\/\/arxiv\.org\/?$/i.test(target)) {
				report(file, index + 1, 'arXiv links must target a specific paper');
				continue;
			}

			const arxivMatch = target.match(/^https?:\/\/arxiv\.org\/abs\/(\d{4}\.\d{4,5})(?:v\d+)?\/?$/i);
			if (arxivMatch) {
				arxivLinks.push({ file, line: index + 1, label, id: arxivMatch[1] });
			}

			if (/^(?:https?:|mailto:|#)/i.test(target)) {
				continue;
			}

			let relativeTarget;
			try {
				relativeTarget = decodeURIComponent(target.split(/[?#]/, 1)[0]);
			} catch {
				report(file, index + 1, `relative link has invalid percent-encoding: ${target}`);
				continue;
			}
			const absoluteTarget = resolve(dirname(file), relativeTarget);
			if (absoluteTarget !== root && !absoluteTarget.startsWith(`${root}${sep}`)) {
				report(file, index + 1, `relative link escapes the repository: ${target}`);
			} else if (!existsSync(absoluteTarget)) {
				report(file, index + 1, `missing relative link target: ${target}`);
			}
		}
	}
}

if (auditArxiv) {
	await validateArxivMetadata();
}

if (selfTest) {
	validateSemanticAuditLogic();
}

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else {
	console.log('Curation contract passed.');
}
