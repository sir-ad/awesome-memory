import assert from 'node:assert/strict';
import test from 'node:test';

import { filterEntries, normalizeSearch } from '../docs/search.mjs';

const entries = [
  {
    name: 'LongMemEval',
    description: 'Evaluates long-term conversational memory.',
    collection: 'core-map',
    collectionLabel: 'Core map',
    domain: 'Cross-disciplinary',
    kind: 'Benchmark',
    locations: [{ section: 'Evaluation benchmarks' }],
  },
  {
    name: 'Mem0',
    description: 'Memory layer for applications and agents.',
    collection: 'open-source-tools',
    collectionLabel: 'Tools directory',
    domain: 'AI engineering',
    kind: 'Project',
    locations: [{ section: 'General-purpose memory layers' }],
  },
  {
    name: 'Hippocampal replay',
    description: 'Offline consolidation of memory traces.',
    collection: 'brain-memory',
    collectionLabel: 'Brain memory',
    domain: 'Neuroscience',
    kind: 'Paper',
    locations: [{ section: 'Memory consolidation' }],
  },
];

test('normalizes case and diacritics', () => {
  assert.equal(normalizeSearch('  MéMORY  '), 'memory');
});

test('matches every query token across entry fields', () => {
  const matches = filterEntries(entries, {
    query: 'conversational benchmark',
    collection: '',
    kind: '',
  });
  assert.deepEqual(matches.map(({ name }) => name), ['LongMemEval']);
});

test('combines collection and kind filters', () => {
  const matches = filterEntries(entries, {
    query: '',
    collection: 'brain-memory',
    kind: 'Paper',
  });
  assert.deepEqual(matches.map(({ name }) => name), ['Hippocampal replay']);
});

test('ranks exact and prefix name matches before description-only matches', () => {
  const matches = filterEntries(entries, {
    query: 'mem',
    collection: '',
    kind: '',
  });
  assert.deepEqual(matches.slice(0, 2).map(({ name }) => name), ['Mem0', 'LongMemEval']);
});

test('returns the same filtered result for a decoded shared URL state', () => {
  const params = new URLSearchParams('q=hippocampal+memory&collection=brain-memory&kind=Paper');
  const matches = filterEntries(entries, {
    query: params.get('q'),
    collection: params.get('collection'),
    kind: params.get('kind'),
  });

  assert.deepEqual(matches.map(({ name }) => name), ['Hippocampal replay']);
});
