# Contributing to Awesome Memory

Thank you for taking the time to contribute! This guide explains how to add, update, or fix entries so the list stays high-signal and consistent.

---

## How to Add an Entry

1. **Fork** the repository and create a branch: `git checkout -b add/your-resource-name`
2. **Find the right section** in `README.md` or the relevant sub-directory under `papers/` or `apps/`.
3. **Add your entry** following the format below.
4. **Open a pull request** with a short description of what you're adding and why it belongs here.

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

---

## Section Guidelines

### papers/

- Papers must be peer-reviewed, workshop papers, or established preprints (cited elsewhere).
- Add the arXiv ID if one exists. Unknown IDs should be left blank rather than guessed.
- Sort new rows by year (descending) within each section table.

### apps/open-source/

- Tools must be genuinely open-source (have a public GitHub/GitLab repo) **or** be a well-established commercial tool that practitioners widely reference.
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
- Self-promotional entries without independent validation
- Entries without a description

---

## Updating Existing Entries

If a link is broken, a project has been renamed, or a description is outdated:

1. Fix the link or description in place.
2. In your PR description, explain what changed and why (e.g., "MemGPT was renamed to Letta in 2024").

---

## Code of Conduct

Be respectful. This is a community resource. Disagreements about inclusion should be argued on merit, not personality.

---

*By contributing, you agree that your additions will be released under [CC0 1.0 Universal](LICENSE).*
