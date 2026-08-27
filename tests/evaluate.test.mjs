import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { filterEntries } from '../docs/search.mjs';

const [evaluateHtml, guideHtml, indexHtml, sitemapXml, readme, catalog] = await Promise.all([
  readFile(new URL('../docs/evaluate.html', import.meta.url), 'utf8'),
  readFile(new URL('../docs/guide.html', import.meta.url), 'utf8'),
  readFile(new URL('../docs/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../docs/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../README.md', import.meta.url), 'utf8'),
  readFile(new URL('../docs/catalog.json', import.meta.url), 'utf8').then(JSON.parse),
]);

const benchmarkSources = [
  ['LongMemEval', 'https://arxiv.org/abs/2410.10813'],
  ['LoCoMo', 'https://arxiv.org/abs/2402.17753'],
  ['MemoryAgentBench', 'https://arxiv.org/abs/2507.05257'],
  ['PersonaMem', 'https://arxiv.org/abs/2504.14225'],
  ['MemoryBench', 'https://arxiv.org/abs/2510.17281'],
  ['HaluMem', 'https://arxiv.org/abs/2511.03506'],
  ['BEAM', 'https://arxiv.org/abs/2510.27246'],
  ['HELMET', 'https://arxiv.org/abs/2410.02694'],
];

test('publishes a canonical evaluation guide with complete social metadata', () => {
  const required = [
    '<link rel="canonical" href="https://sir-ad.github.io/awesome-memory/evaluate.html">',
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'property="og:image:alt"',
    'name="twitter:card" content="summary_large_image"',
    'name="twitter:title"',
    'name="twitter:description"',
    'name="twitter:image"',
    'name="twitter:image:alt"',
  ];

  for (const value of required) {
    assert.ok(evaluateHtml.includes(value), `evaluation metadata must include ${value}`);
  }
});

test('binds every benchmark question to its primary paper', () => {
  for (const [benchmark, source] of benchmarkSources) {
    const rowStart = evaluateHtml.indexOf(`<th scope="row">${benchmark}</th>`);
    const rowEnd = evaluateHtml.indexOf('</tr>', rowStart);
    assert.ok(rowStart > -1, `evaluation guide must include ${benchmark}`);
    assert.ok(
      evaluateHtml.slice(rowStart, rowEnd).includes(source),
      `${benchmark} must link ${source}`,
    );
  }
});

test('routes every benchmark to a populated catalog query', () => {
  for (const [benchmark] of benchmarkSources) {
    const href = `./?q=${benchmark}`;
    assert.ok(evaluateHtml.includes(href), `evaluation guide must link catalog query ${benchmark}`);

    const results = filterEntries(catalog.entries, {
      query: benchmark,
      collection: '',
      kind: '',
    });
    assert.ok(results.length > 0, `${benchmark} must return at least one catalog result`);
  }
});

test('requires honest baselines and a system-level reporting contract', () => {
  const baselines = ['No memory', 'Full context', 'Simple retrieval', 'Candidate system'];
  const reportingFields = [
    'Task-grounded outcome',
    'Write or indexing latency',
    'Recall latency',
    'End-to-end latency',
    'Storage footprint',
    'Cold-start time',
    'Token or compute cost',
    'Failures and retries',
    'No-harm cases',
    'total tokens = input tokens + output tokens',
  ];

  for (const value of [...baselines, ...reportingFields]) {
    assert.ok(evaluateHtml.includes(value), `evaluation contract must include ${value}`);
  }
});

test('localizes failures across the memory lifecycle and system boundary', () => {
  for (const stage of ['Formation', 'Evolution', 'Retrieval', 'Reading / action', 'System']) {
    assert.ok(evaluateHtml.includes(stage), `evaluation guide must include ${stage} failures`);
  }
});

test('links the evaluation guide from every public entry point', () => {
  const navLink = '<a href="evaluate.html">Evaluation guide</a>';
  assert.ok(indexHtml.includes(navLink));
  assert.ok(guideHtml.includes(navLink));
  assert.ok(evaluateHtml.includes('<a href="guide.html">Decision guide</a>'));
  assert.ok(readme.includes('https://sir-ad.github.io/awesome-memory/evaluate.html'));
  assert.ok(sitemapXml.includes('<loc>https://sir-ad.github.io/awesome-memory/evaluate.html</loc>'));
});
