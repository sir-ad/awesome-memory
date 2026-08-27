# Agent Memory Architecture Guide

## Problem

The catalog answers “what exists,” but not “what should I build first?” Developers can add a vector store before defining which facts are allowed to persist, how contradictions resolve, or whether retrieval improves the task. The result is more state without more reliability.

## Non-goals

- Rank vendors, libraries, papers, or storage engines.
- Present one architecture as correct for every workload.
- Repeat benchmark scores that were not reproduced in this repository.
- Provide production code or replace primary documentation.
- Add tracking, accounts, or a runtime dependency.

## Smallest shippable slice

Add a static decision guide that moves through three decisions: define the memory job, choose the smallest matching architecture, and prove it helps. Each architecture pattern states its fit, failure mode, minimum controls, and primary evidence. Every path ends in a relevant catalog search or contribution route.

## Interface

```text
https://sir-ad.github.io/awesome-memory/guide.html
```

Navigation label:

```text
Decision guide
```

The guide uses plain HTML and the existing stylesheet. It requires no JavaScript.

## Done criteria

- Distinguish working, factual, episodic, and procedural memory jobs.
- Cover bounded context, retrieval stores, temporal fact graphs, episodic-to-semantic layers, and procedural libraries.
- State a bad-fit condition and minimum safety controls for every pattern.
- Define a pre-ship evaluation gate with no-memory and full-context baselines where feasible.
- Link claims to primary papers and link each pattern to a live catalog search.
- Render as a clear linear reading path at 360 pixels and with dark mode or reduced motion enabled.
- Publish complete canonical, Open Graph, and Twitter metadata without analytics.

## Metric

Qualified use: accepted issues or pull requests that cite the guide when proposing a resource, correction, or architecture pattern. GitHub traffic and stars remain secondary signals because the site has no client-side analytics.

## Risks and kill criteria

- **False authority:** label the guide as a decision aid and require workload-specific evaluation. Remove any recommendation that cannot state its failure mode.
- **Source drift:** use stable primary paper links and verify them with the repository’s link checks.
- **Choice overload:** keep one three-step spine. If a new pattern cannot change a concrete architecture decision, leave it in the catalog.
- **Maintenance cost:** if the guide and catalog cannot share navigation, styling, and source links without manual duplication becoming error-prone, keep the guide in Markdown instead of adding a second application.
