import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { filterEntries } from '../docs/search.mjs';

const [guideHtml, indexHtml, sitemapXml, catalog] = await Promise.all([
  readFile(new URL('../docs/guide.html', import.meta.url), 'utf8'),
  readFile(new URL('../docs/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../docs/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../docs/catalog.json', import.meta.url), 'utf8').then(JSON.parse),
]);

const primarySources = [
  'https://arxiv.org/abs/2404.13501',
  'https://arxiv.org/abs/2310.08560',
  'https://arxiv.org/abs/2501.13956',
  'https://arxiv.org/abs/2304.03442',
  'https://arxiv.org/abs/2410.10813',
  'https://arxiv.org/abs/2402.17753',
  'https://arxiv.org/abs/2409.07429',
];

const patternSources = [
  ['Bounded context + checkpoints', 'https://arxiv.org/abs/2310.08560'],
  ['Retrieval store', 'https://arxiv.org/abs/2410.10813'],
  ['Temporal fact graph', 'https://arxiv.org/abs/2501.13956'],
  ['Episodic → semantic layers', 'https://arxiv.org/abs/2304.03442'],
  ['Procedural library', 'https://arxiv.org/abs/2409.07429'],
];

const catalogQueries = [
  'working memory',
  'semantic memory',
  'episodic memory',
  'procedural memory',
  'memory retrieval',
  'temporal knowledge graph',
  'episodic semantic',
];

test('publishes a canonical guide with complete social metadata', () => {
  const required = [
    'https://sir-ad.github.io/awesome-memory/guide.html',
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'property="og:image:alt"',
    'name="twitter:title"',
    'name="twitter:description"',
    'name="twitter:image"',
    'name="twitter:image:alt"',
  ];

  for (const value of required) {
    assert.ok(guideHtml.includes(value), `guide metadata must include ${value}`);
  }
});

test('keeps every architecture pattern grounded in a primary source', () => {
  for (const source of primarySources) {
    assert.ok(guideHtml.includes(source), `guide must link ${source}`);
  }

  for (const [pattern, source] of patternSources) {
    const rowStart = guideHtml.indexOf(`<th scope="row">${pattern}</th>`);
    const rowEnd = guideHtml.indexOf('</tr>', rowStart);
    assert.ok(rowStart > -1, `guide must include the ${pattern} pattern`);
    assert.ok(guideHtml.slice(rowStart, rowEnd).includes(source), `${pattern} must link ${source}`);
  }
});

test('routes every guide query to at least one catalog result', () => {
  for (const query of catalogQueries) {
    const href = `./?q=${query.replaceAll(' ', '+')}`;
    assert.ok(guideHtml.includes(href), `guide must link catalog query ${query}`);

    const results = filterEntries(catalog.entries, {
      query,
      collection: '',
      kind: '',
    });
    assert.ok(results.length > 0, `${query} must return at least one catalog result`);
  }
});

test('links the guide from the home page and sitemap', () => {
  assert.ok(indexHtml.includes('<a href="guide.html">Decision guide</a>'));
  assert.ok(sitemapXml.includes('<loc>https://sir-ad.github.io/awesome-memory/guide.html</loc>'));
});
