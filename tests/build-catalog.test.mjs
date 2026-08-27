import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { buildCatalog, parseSource, SOURCES } from '../scripts/build-catalog.mjs';

const ROOT_DIR = fileURLToPath(new URL('../', import.meta.url));
const FIXTURE_SOURCE = {
  path: 'fixture.md',
  key: 'fixture',
  label: 'Fixture',
  domain: 'Test',
};

test('parses linked bullets and preserves source context', () => {
  const entries = parseSource(
    ['## Systems', '', '- [Example](https://example.com) - A useful memory layer.'].join('\n'),
    FIXTURE_SOURCE,
  );

  assert.equal(entries.length, 1);
  assert.equal(entries[0].name, 'Example');
  assert.equal(entries[0].description, 'A useful memory layer.');
  assert.equal(entries[0].locations[0].line, 3);
  assert.equal(entries[0].locations[0].section, 'Systems');
});

test('parses linked table rows and ignores navigation and separators', () => {
  const entries = parseSource(
    [
      '## Papers',
      '',
      '- [Contents](#contents)',
      '',
      '| Paper | Year | Contribution |',
      '|---|---|---|',
      '| [Memory Work](https://example.com/paper) | 2026 | Tests durable recall |',
    ].join('\n'),
    FIXTURE_SOURCE,
  );

  assert.equal(entries.length, 1);
  assert.equal(entries[0].name, 'Memory Work');
  assert.equal(entries[0].description, 'Tests durable recall');
});

test('uses semantic description columns instead of volatile stars or repository links', () => {
  const entries = parseSource(
    [
      '## Frameworks',
      '',
      '| Framework | Language | Memory Features | Stars |',
      '|---|---|---|---|',
      '| [Recall Kit](https://example.com/kit) | TypeScript | Episodic and semantic recall | 2k |',
    ].join('\n'),
    FIXTURE_SOURCE,
  );

  assert.equal(entries.length, 1);
  assert.equal(entries[0].description, 'Episodic and semantic recall');
  assert.equal(entries[0].kind, 'Project');
});

test('builds a deterministic, unique catalog from every declared collection', async () => {
  const first = await buildCatalog(ROOT_DIR);
  const second = await buildCatalog(ROOT_DIR);

  assert.deepEqual(first, second);
  assert.equal(first.collections.length, SOURCES.length);
  assert.ok(first.entries.length >= 100, 'expected at least 100 linked resources');
  assert.equal(new Set(first.entries.map(({ id }) => id)).size, first.entries.length);
  assert.equal(new Set(first.entries.map(({ url }) => url)).size, first.entries.length);

  for (const entry of first.entries) {
    assert.match(entry.url, /^https:\/\//);
    assert.ok(entry.name.length > 0);
    assert.ok(entry.description.length > 0);
    assert.ok(entry.locations.length > 0);
  }
});
