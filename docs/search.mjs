export function normalizeSearch(value) {
  return value
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('en')
    .trim();
}

function relevance(entry, query) {
  if (!query) return 0;
  const name = normalizeSearch(entry.name);
  const section = normalizeSearch(entry.locations.map(({ section: value }) => value).join(' '));
  if (name === query) return 0;
  if (name.startsWith(query)) return 1;
  if (name.includes(query)) return 2;
  if (section.includes(query)) return 3;
  return 4;
}

export function filterEntries(entries, filters) {
  const query = normalizeSearch(filters.query || '');
  const tokens = query.split(/\s+/).filter(Boolean);

  return entries
    .filter((entry) => !filters.collection || entry.collection === filters.collection)
    .filter((entry) => !filters.kind || entry.kind === filters.kind)
    .filter((entry) => {
      if (tokens.length === 0) return true;
      const searchable = normalizeSearch(
        [
          entry.name,
          entry.description,
          entry.collectionLabel,
          entry.domain,
          entry.kind,
          ...entry.locations.map(({ section }) => section),
        ].join(' '),
      );
      return tokens.every((token) => searchable.includes(token));
    })
    .sort((left, right) => {
      const rankDelta = relevance(left, query) - relevance(right, query);
      if (rankDelta !== 0) return rankDelta;
      return left.name.localeCompare(right.name, 'en', { sensitivity: 'base' });
    });
}
