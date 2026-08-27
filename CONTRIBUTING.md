# Contributing to Awesome Memory

Thank you for taking the time to contribute! This guide explains how to add, update, or fix entries so the list stays high-signal and consistent.

---

## Fastest Ways to Help

- **No Git workflow required:** [suggest one resource](https://github.com/sir-ad/awesome-memory/issues/new?template=add-resource.yml) or [report a broken entry](https://github.com/sir-ad/awesome-memory/issues/new?template=report-broken-link.yml).
- **Small correction:** use GitHub's edit button on the relevant Markdown file and open a pull request.
- **Larger curation change:** open a discussion first so taxonomy changes do not arrive as a surprise rewrite.

One resource per issue or pull request keeps review fast and gives each inclusion decision a clear record.

---

## How to Add an Entry

1. **Fork** the repository and create a branch: `git checkout -b add/your-resource-name`
2. **Find the right section** in `README.md` or the relevant sub-directory under `papers/` or `apps/`.
3. **Add your entry** following the format below.
4. Run `node .github/scripts/validate-curation.mjs`.
5. **Open a pull request** with the primary source, inclusion evidence, and any affiliation disclosed.

---

## Entry Format

### In README.md (list items)

```markdown
- [Resource Name](https://link-to-resource) — One sentence that says *what it is* and *why it matters here*. Be specific.
```

### In sub-directory tables

```markdown
| [Paper Title](https://arxiv.org/abs/XXXXXXX) | Author(s) | Year | What makes it distinctive |
```

---

## Quality Bar

Every entry must pass all of these:

| Criterion | Rule |
|-----------|------|
| **Working link** | URL must resolve to a real, accessible page. No paywalled landing pages. |
| **Specific link** | For arXiv papers: link to the abstract page (`arxiv.org/abs/XXXX`), not the bare domain. |
| **Primary source** | Prefer official repos, arXiv, and project docs over blog posts summarizing them. |
| **Description** | Must be factual and specific — not marketing copy or vague superlatives. |
| **Relevance** | Must be directly about memory (biological, psychological, or computational). |
| **Not a duplicate** | Search the file before adding; use `Ctrl+F` on the section name. |
| **Evidence** | Claims about adoption, benchmarks, or maturity must link to supporting evidence. |
| **Affiliation** | Disclose if you created, maintain, fund, or work for the resource. |

---

## Section Guidelines

### papers/

- Papers must be peer-reviewed, workshop papers, or established preprints (cited elsewhere).
- Add the arXiv ID if one exists. Unknown IDs should be left blank rather than guessed.
- Sort new rows by year (descending) within each section table.

### apps/open-source/

- Tools described as open source must have a public source repository and an identifiable license.
- Closed-source products belong only in clearly labeled application categories, not open-source project tables.
- Entries in each table are sorted alphabetically by name.
- GitHub stars columns are omitted intentionally — they change; the description should carry the weight.

### README.md sections

- Alphabetical order within bullet lists.
- One entry per line.
- Use `—` (em dash) to separate the link from the description, not `-` (hyphen).

---

## What We Don't Accept

- Personal blog posts without substantial original content
- Tools in early alpha/concept stage with no public usage
- Duplicate entries (same tool listed under multiple sections without good reason)
- Undisclosed self-promotional entries or submissions without evidence
- Entries without a description

---

## Updating Existing Entries

If a link is broken, a project has been renamed, or a description is outdated:

1. Fix the link or description in place.
2. In your PR description, explain what changed and why (e.g., "MemGPT was renamed to Letta in 2024").

---

## Code of Conduct

Be respectful. This is a community resource. Disagreements about inclusion should be argued on merit, not personality.

## Automated Checks

Every pull request checks repository invariants and external links. The local, dependency-free validation command is:

```bash
node .github/scripts/validate-curation.mjs
```

The link workflow also runs weekly so redirects and abandoned resources are caught after merge. Some publishers block automated requests; domain-specific exclusions are documented in `.lychee.toml` and should not be expanded to hide genuine failures.

---

*By contributing, you agree that your additions will be released under [CC0 1.0 Universal](LICENSE).*
