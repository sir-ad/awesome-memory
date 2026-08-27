import { filterEntries, normalizeSearch } from './search.mjs';

const PAGE_SIZE = 24;
const elements = {
  catalogSummary: document.querySelector('#catalog-summary'),
  status: document.querySelector('#catalog-status'),
  results: document.querySelector('#results'),
  search: document.querySelector('#search'),
  clearSearch: document.querySelector('#clear-search'),
  collection: document.querySelector('#collection'),
  kind: document.querySelector('#kind'),
  showMore: document.querySelector('#show-more'),
};

const state = {
  catalog: null,
  matches: [],
  visible: PAGE_SIZE,
};

function option(value, label) {
  const element = document.createElement('option');
  element.value = value;
  element.textContent = label;
  return element;
}

function readUrlState() {
  const params = new URLSearchParams(window.location.search);
  elements.search.value = params.get('q') || '';
  elements.collection.value = params.get('collection') || '';
  elements.kind.value = params.get('kind') || '';
}

function writeUrlState() {
  const url = new URL(window.location.href);
  const values = {
    q: elements.search.value.trim(),
    collection: elements.collection.value,
    kind: elements.kind.value,
  };

  for (const [key, value] of Object.entries(values)) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  window.history.replaceState(values, '', url);
}

function appendHighlightedText(parent, value, query) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) {
    parent.textContent = value;
    return;
  }

  const normalizedValue = normalizeSearch(value);
  const index = normalizedValue.indexOf(normalizedQuery);
  if (index === -1) {
    parent.textContent = value;
    return;
  }

  parent.append(document.createTextNode(value.slice(0, index)));
  const mark = document.createElement('mark');
  mark.textContent = value.slice(index, index + normalizedQuery.length);
  parent.append(mark, document.createTextNode(value.slice(index + normalizedQuery.length)));
}

function resultElement(entry) {
  const item = document.createElement('li');
  const article = document.createElement('article');
  const meta = document.createElement('p');
  const title = document.createElement('h3');
  const link = document.createElement('a');
  const description = document.createElement('p');
  const provenance = document.createElement('p');
  const source = document.createElement('a');

  article.className = 'result-card';
  meta.className = 'result-meta';
  description.className = 'result-description';
  provenance.className = 'result-provenance';

  meta.textContent = `${entry.collectionLabel} · ${entry.kind}`;
  link.href = entry.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  appendHighlightedText(link, entry.name, elements.search.value.trim());
  title.append(link);
  appendHighlightedText(description, entry.description, elements.search.value.trim());

  source.href = entry.locations[0].url;
  source.textContent = 'Source context';
  const locationCount = entry.locations.length;
  provenance.append(source);
  if (locationCount > 1) {
    provenance.append(document.createTextNode(` · Listed in ${locationCount} places`));
  }

  article.append(meta, title, description, provenance);
  item.append(article);
  return item;
}

function render() {
  if (!state.catalog) return;

  const filters = {
    query: elements.search.value,
    collection: elements.collection.value,
    kind: elements.kind.value,
  };
  state.matches = filterEntries(state.catalog.entries, filters);
  const visibleEntries = state.matches.slice(0, state.visible);
  elements.results.replaceChildren(...visibleEntries.map(resultElement));

  const total = state.catalog.entries.length;
  const count = state.matches.length;
  elements.catalogSummary.textContent = `${count.toLocaleString()} of ${total.toLocaleString()} resources`;
  elements.clearSearch.hidden = elements.search.value.length === 0;
  elements.showMore.hidden = state.visible >= count;

  if (count === 0) {
    elements.status.hidden = false;
    elements.status.replaceChildren();
    const heading = document.createElement('strong');
    const message = document.createElement('p');
    const contribution = document.createElement('a');
    heading.textContent = 'No matching resources';
    message.textContent = 'Try fewer terms or clear a filter. If the field is missing something important, suggest it.';
    contribution.href = 'https://github.com/sir-ad/awesome-memory/issues/new?template=add-resource.yml';
    contribution.textContent = 'Suggest a resource';
    elements.status.append(heading, message, contribution);
  } else {
    elements.status.hidden = true;
  }

  writeUrlState();
}

function resetPageAndRender() {
  state.visible = PAGE_SIZE;
  render();
}

function populateFilters(catalog) {
  for (const collection of catalog.collections) {
    if (collection.count > 0) {
      elements.collection.append(option(collection.key, `${collection.label} (${collection.count})`));
    }
  }

  const kinds = [...new Set(catalog.entries.map(({ kind }) => kind))].sort((left, right) =>
    left.localeCompare(right, 'en'),
  );
  for (const kind of kinds) elements.kind.append(option(kind, kind));
}

function bindEvents() {
  elements.search.addEventListener('input', resetPageAndRender);
  elements.collection.addEventListener('change', resetPageAndRender);
  elements.kind.addEventListener('change', resetPageAndRender);
  elements.clearSearch.addEventListener('click', () => {
    elements.search.value = '';
    elements.search.focus();
    resetPageAndRender();
  });
  elements.showMore.addEventListener('click', () => {
    state.visible += PAGE_SIZE;
    render();
  });
  window.addEventListener('popstate', () => {
    readUrlState();
    resetPageAndRender();
  });
}

function bindSearchShortcut() {
  document.addEventListener('keydown', (event) => {
    const tagName = document.activeElement?.tagName;
    if (event.key === '/' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(tagName)) {
      event.preventDefault();
      elements.search.focus();
    }
  });
}

async function initialize() {
  bindEvents();

  try {
    const response = await fetch('catalog.json');
    if (!response.ok) throw new Error(`Catalog request returned ${response.status}`);
    const catalog = await response.json();
    if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries)) {
      throw new Error('Catalog schema is not supported');
    }

    state.catalog = catalog;
    populateFilters(catalog);
    readUrlState();
    render();
  } catch (error) {
    console.error(error);
    elements.catalogSummary.textContent = 'Catalog unavailable';
    elements.status.hidden = false;
    elements.status.replaceChildren();
    const heading = document.createElement('strong');
    const message = document.createElement('p');
    const fallback = document.createElement('a');
    heading.textContent = 'The searchable catalog could not load.';
    message.textContent = 'The curated Markdown collection is still available in the repository.';
    fallback.href = 'https://github.com/sir-ad/awesome-memory#readme';
    fallback.textContent = 'Browse the repository';
    elements.status.append(heading, message, fallback);
  }
}

bindSearchShortcut();

const hasSharedCatalogState = window.location.search.length > 1 || window.location.hash === '#catalog';

if (hasSharedCatalogState) {
  void initialize();
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some(({ isIntersecting }) => isIntersecting)) return;
      observer.disconnect();
      void initialize();
    },
    { threshold: 0.1 },
  );
  observer.observe(document.querySelector('#catalog'));
} else {
  window.setTimeout(() => void initialize(), 0);
}
