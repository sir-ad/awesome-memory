#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const REPOSITORY_URL = 'https://github.com/sir-ad/awesome-memory';
const ROOT_DIR = fileURLToPath(new URL('../', import.meta.url));
const OUTPUT_PATH = path.join(ROOT_DIR, 'docs', 'catalog.json');

export const SOURCES = Object.freeze([
  {
    path: 'README.md',
    key: 'core-map',
    label: 'Core map',
    domain: 'Cross-disciplinary',
  },
  {
    path: 'apps/open-source/README.md',
    key: 'open-source-tools',
    label: 'Tools directory',
    domain: 'AI engineering',
  },
  {
    path: 'papers/agentic-memory/README.md',
    key: 'agent-memory-papers',
    label: 'Agent memory papers',
    domain: 'AI research',
  },
  {
    path: 'papers/llm-memory/README.md',
    key: 'llm-memory-papers',
    label: 'LLM memory papers',
    domain: 'AI research',
  },
  {
    path: 'papers/brain-memory/README.md',
    key: 'brain-memory',
    label: 'Brain memory',
    domain: 'Neuroscience',
  },
  {
    path: 'papers/psychology/README.md',
    key: 'cognitive-psychology',
    label: 'Cognitive psychology',
    domain: 'Psychology',
  },
]);

function cleanInline(value) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[\*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanHeading(value) {
  return cleanInline(value).replace(/^[^\p{L}\p{N}]+/u, '').trim();
}

function canonicalUrl(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
      if (key.startsWith('utm_')) url.searchParams.delete(key);
    }
    url.hostname = url.hostname.toLowerCase();
    url.pathname = url.pathname.replace(/\/$/, '') || '/';
    return url.toString();
  } catch {
    return value;
  }
}

function extractMarkdownLink(value) {
  const match = value.match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
  if (!match) return null;
  return { name: cleanInline(match[1]), url: match[2] };
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function isTableSeparator(cells) {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function looksLikeTableHeader(cells) {
  const headerTerms = new Set([
    'algorithm',
    'app',
    'arxiv',
    'author',
    'authors',
    'benchmark',
    'book',
    'database',
    'description',
    'framework',
    'key contribution',
    'language',
    'link',
    'memory features',
    'paper',
    'platform',
    'project',
    'repo',
    'resource',
    'source',
    'stars',
    'type',
    'use case',
    'website',
    'year',
  ]);
  return cells.filter((cell) => headerTerms.has(cleanInline(cell).toLowerCase())).length >= 2;
}

function inferKind(source, section) {
  const context = `${source.path} ${section}`.toLowerCase();
  if (context.includes('benchmark') || context.includes('evaluation')) return 'Benchmark';
  if (context.includes('workshop') || context.includes('conference')) return 'Event';
  if (context.includes('course') || context.includes('book') || context.includes('reading')) {
    return 'Learning';
  }
  if (context.includes('lab')) return 'Research lab';
  if (context.includes('storage') || context.includes('retrieval infrastructure')) {
    return 'Infrastructure';
  }
  if (
    context.includes('framework') ||
    context.includes('implementation') ||
    context.includes('agent memory systems')
  ) {
    return 'Project';
  }
  if (source.path.startsWith('apps/')) return 'Tool';
  if (source.path.startsWith('papers/')) return 'Paper';
  if (context.includes('paper') || context.includes('survey')) return 'Paper';
  return 'Resource';
}

function sourceLocation(source, line, section) {
  return {
    path: source.path,
    line,
    section,
    url: `${REPOSITORY_URL}/blob/main/${source.path}#L${line}`,
  };
}

function entryFromBullet(line, source, lineNumber, section) {
  const match = line.match(
    /^\s*[-*]\s+\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)(?:\s+[-—]\s+(.+))?\s*$/,
  );
  if (!match) return null;

  return {
    name: cleanInline(match[1]),
    url: match[2],
    description: cleanInline(match[3] || section),
    collection: source.key,
    collectionLabel: source.label,
    domain: source.domain,
    kind: inferKind(source, section),
    locations: [sourceLocation(source, lineNumber, section)],
  };
}

function entryFromTable(line, source, lineNumber, section, headers = []) {
  if (!line.trim().startsWith('|')) return null;
  const cells = splitTableRow(line);
  if (isTableSeparator(cells)) return null;

  const linkedCellIndex = cells.findIndex((cell) => extractMarkdownLink(cell));
  if (linkedCellIndex === -1) return null;
  const link = extractMarkdownLink(cells[linkedCellIndex]);
  const descriptionHeader = /^(description|key contribution|contribution|memory features|focus|purpose|best for|key finding|finding|context|use case)$/i;
  const preferredIndex = headers.findIndex((header) => descriptionHeader.test(header));
  const preferredDescription = preferredIndex >= 0 ? cleanInline(cells[preferredIndex] || '') : '';
  const descriptionCell =
    preferredDescription ||
    [...cells]
      .reverse()
      .map((cell, reversedIndex) => {
        const originalIndex = cells.length - reversedIndex - 1;
        if (originalIndex === linkedCellIndex || extractMarkdownLink(cell)) return '';
        return cleanInline(cell);
      })
      .find(Boolean);

  return {
    name: link.name,
    url: link.url,
    description: descriptionCell || section,
    collection: source.key,
    collectionLabel: source.label,
    domain: source.domain,
    kind: inferKind(source, section),
    locations: [sourceLocation(source, lineNumber, section)],
  };
}

export function parseSource(markdown, source) {
  const headings = [];
  const entries = [];
  let tableHeaders = [];

  markdown.split(/\r?\n/).forEach((line, index) => {
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      headings[level - 2] = cleanHeading(headingMatch[2]);
      headings.length = level - 1;
      tableHeaders = [];
      return;
    }

    const section = headings.filter(Boolean).join(' › ') || source.label;
    const lineNumber = index + 1;
    if (line.trim().startsWith('|')) {
      const cells = splitTableRow(line);
      if (looksLikeTableHeader(cells)) {
        tableHeaders = cells.map(cleanInline);
        return;
      }
    } else if (line.trim()) {
      tableHeaders = [];
    }
    const entry =
      entryFromBullet(line, source, lineNumber, section) ||
      entryFromTable(line, source, lineNumber, section, tableHeaders);

    if (entry) entries.push(entry);
  });

  return entries;
}

function stableId(name, url) {
  const slug = name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48);
  const hash = createHash('sha256').update(canonicalUrl(url)).digest('hex').slice(0, 8);
  return `${slug || 'resource'}-${hash}`;
}

export async function buildCatalog(rootDir = ROOT_DIR) {
  const parsed = [];

  for (const source of SOURCES) {
    const markdown = await readFile(path.join(rootDir, source.path), 'utf8');
    parsed.push(...parseSource(markdown, source));
  }

  const unique = new Map();
  for (const entry of parsed) {
    const key = canonicalUrl(entry.url);
    const existing = unique.get(key);
    if (existing) {
      existing.locations.push(...entry.locations);
      continue;
    }
    unique.set(key, { ...entry, url: key });
  }

  const entries = [...unique.values()]
    .map((entry) => ({ ...entry, id: stableId(entry.name, entry.url) }))
    .sort((left, right) =>
      left.name.localeCompare(right.name, 'en', { sensitivity: 'base' }),
    );

  const counts = new Map();
  for (const entry of entries) {
    counts.set(entry.collection, (counts.get(entry.collection) || 0) + 1);
  }

  return {
    schemaVersion: 1,
    repository: REPOSITORY_URL,
    collections: SOURCES.map(({ key, label, domain, path: sourcePath }) => ({
      key,
      label,
      domain,
      sourcePath,
      count: counts.get(key) || 0,
    })),
    entries,
  };
}

export function serializeCatalog(catalog) {
  return `${JSON.stringify(catalog, null, 2)}\n`;
}

async function run() {
  const catalog = await buildCatalog();
  const output = serializeCatalog(catalog);

  if (process.argv.includes('--check')) {
    let current = '';
    try {
      current = await readFile(OUTPUT_PATH, 'utf8');
    } catch {
      // The diagnostic below also covers a missing output file.
    }

    if (current !== output) {
      console.error('docs/catalog.json is stale. Run: node scripts/build-catalog.mjs');
      process.exitCode = 1;
      return;
    }
    console.log(`Catalog is current: ${catalog.entries.length} unique resources.`);
    return;
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, output);
  console.log(`Wrote ${catalog.entries.length} unique resources to docs/catalog.json.`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  await run();
}
