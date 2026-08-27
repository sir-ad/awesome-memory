# Agent-memory evaluation guide

## Problem

The catalog names memory benchmarks, but a builder still has to infer which suite
matches the failure they need to expose. Benchmark pages also make it easy to
copy an aggregate score while omitting baselines, system cost, failure rate, or
the memory lifecycle stage that failed. That produces comparisons that look
precise but cannot support an architecture decision.

## Non-goals

- Run a benchmark or publish a leaderboard.
- Reproduce or compare model, product, or vendor scores.
- Claim that one suite covers every memory behavior.
- Replace each benchmark's paper, code, data, or scoring instructions.
- Add tracking, accounts, client-side state, or a runtime dependency.

## Smallest shippable slice

Publish one static `/evaluate.html` page that:

1. maps eight evaluation questions to primary benchmark papers;
2. distinguishes memory-specific suites from a long-context control;
3. defines four minimum baselines;
4. defines a system-level reporting contract; and
5. localizes failures to formation, evolution, retrieval, reading/action, or
   system execution.

## Interface sketch

- Page title: `Evaluate agent memory · Awesome Memory`
- H1: `Evaluate memory, not demos.`
- Three-step spine:
  - `01 Choose the failure to expose`
  - `02 Compare against honest baselines`
  - `03 Report the whole system`
- Benchmark rows link to both the primary paper and a populated catalog query.
- The decision guide, evaluation guide, catalog, and sitemap link to one another.

## Done criteria

- Cover LongMemEval, LoCoMo, MemoryAgentBench, PersonaMem, MemoryBench, HaluMem,
  BEAM, and HELMET.
- Bind every benchmark row to its exact arXiv source in a deterministic test.
- Route every benchmark name to at least one generated catalog result.
- Require no-memory, full-context, simple-retrieval, and candidate-system
  baselines under the same model, prompt, corpus, hardware, and run budget.
- Require task outcome, write/index and recall p50/p95 latency, end-to-end
  latency, storage, cold start, token/compute cost, failure count, and no-harm
  cases.
- Render at 360 pixels without page-level horizontal overflow; any comparison
  table must be a labeled, keyboard-focusable scroller.
- Support dark mode and reduced motion with body-text contrast of at least 4.5:1.
- Publish canonical, Open Graph, and Twitter metadata without analytics.
- Pass the repository's full validation suite and a production browser check.

## Metric

Qualified evaluation actions: external source clicks, benchmark-related issues,
or pull requests that cite the reporting contract. GitHub referral and
contribution evidence is sufficient; do not add phone-home analytics.

## Risks and kill criteria

- **False comparability:** remove any field that implies scores are comparable
  across different models, corpora, hardware, or run budgets.
- **Source drift:** keep only benchmarks with a stable primary paper and a live
  catalog entry.
- **Choice overload:** keep one question per row; move exhaustive benchmark
  inventories back to the catalog.
- **Decorative reporting:** if a requested metric cannot change a ship/no-ship
  decision, omit it.
- **Maintenance cost:** if the page cannot reuse the site's navigation, tokens,
  table, and source-link patterns, keep the reporting contract in Markdown.
