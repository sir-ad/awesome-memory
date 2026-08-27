# Searchable Catalog

## Problem

Awesome Memory spans six curated Markdown collections. Readers can browse each collection, but they cannot search the field across files or share a filtered view. That makes discovery serial and hides relevant work when a reader does not already know its category.

## Non-goals

- Rank projects or papers.
- Recommend one implementation for every use case.
- Add analytics, cookies, accounts, or an external search service.
- Replace the Markdown lists as the source of truth.

## Smallest shippable slice

A dependency-free generator extracts linked resources and their source context into `docs/catalog.json`. A static site searches and filters that catalog in the browser. The URL carries the active query and filters so a result set can be shared.

## Interface

```text
node scripts/build-catalog.mjs
node scripts/build-catalog.mjs --check
node --test tests/build-catalog.test.mjs
```

Public query parameters:

```text
?q=<search terms>&collection=<collection key>&kind=<resource kind>
```

## Done criteria

- Every generated result links to both the primary resource and its repository context.
- Repeated URLs collapse into one result while retaining every source location.
- Generation is deterministic and `--check` fails when the committed catalog is stale.
- Search, filtering, clearing, pagination, and the contribution path work by keyboard.
- Loading, empty, and failure states are visible and actionable.
- The site works at 360 pixels wide, respects reduced motion, and ships without runtime dependencies or tracking.

## Metric

Resource discovery that leads to contribution: repository page views and accepted resource suggestions, reviewed together. No client-side telemetry is collected.

## Risks and kill criteria

- **Staleness:** mitigated by checking the generated artifact in pull requests.
- **False classification:** kind inference stays deliberately coarse and source context remains visible.
- **Maintenance cost:** if a contributor cannot refresh and verify the catalog with the three commands above, remove the generated interface rather than maintaining a second hand-edited source of truth.
