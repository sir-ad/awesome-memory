import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const errors = [];

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

if (!existsSync(resolve(root, 'LICENSE'))) {
	errors.push('LICENSE: missing CC0 license file');
}

for (const file of markdownFiles(root)) {
	const lines = readFileSync(file, 'utf8').split('\n');
	for (const [index, line] of lines.entries()) {
		for (const match of line.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)) {
			const target = match[1].replace(/^<|>$/g, '');
			if (/^https?:\/\/arxiv\.org\/?$/i.test(target)) {
				report(file, index + 1, 'arXiv links must target a specific paper');
				continue;
			}

			if (/^(?:https?:|mailto:|#)/i.test(target)) {
				continue;
			}

			const relativeTarget = decodeURIComponent(target.split(/[?#]/, 1)[0]);
			const absoluteTarget = resolve(dirname(file), relativeTarget);
			if (absoluteTarget !== root && !absoluteTarget.startsWith(`${root}${sep}`)) {
				report(file, index + 1, `relative link escapes the repository: ${target}`);
			} else if (!existsSync(absoluteTarget)) {
				report(file, index + 1, `missing relative link target: ${target}`);
			}
		}
	}
}

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else {
	console.log('Curation contract passed.');
}
