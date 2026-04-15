# Memory Apps & Tools

A comprehensive list of memory-related applications and tools — from production AI memory layers to personal knowledge management, spaced repetition, and vector databases.

---

## 🤖 AI Memory Apps

### Production-Ready

> Ordered roughly by adoption. Star counts shown for quick reference.

| App | Description | Stars | Repo |
|-----|-------------|-------|------|
| [Mem0](https://mem0.ai) [[paper]](https://arxiv.org/abs/2504.19413) | Hybrid vector + graph + KV memory layer; most widely adopted | ![](https://img.shields.io/github/stars/mem0ai/mem0.svg?style=social) | [mem0ai/mem0](https://github.com/mem0ai/mem0) |
| [Letta](https://letta.com) [[paper]](https://arxiv.org/abs/2310.08560) | Stateful agents with tiered virtual memory (MemGPT successor) | ![](https://img.shields.io/github/stars/letta-ai/letta.svg?style=social) | [letta-ai/letta](https://github.com/letta-ai/letta) |
| [Cognee](https://cognee.ai) [[paper]](https://arxiv.org/abs/2505.24478) | Knowledge engine building semantic memory graphs from unstructured data | ![](https://img.shields.io/github/stars/topoteretes/cognee.svg?style=social) | [topoteretes/cognee](https://github.com/topoteretes/cognee) |
| [Honcho](https://honcho.dev) | User-centric memory and identity layer for AI agents | ![](https://img.shields.io/github/stars/plastic-labs/honcho.svg?style=social) | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) |
| [Second Me](https://home.second.me) [[paper]](https://arxiv.org/abs/2503.08102) | Personal AI with long-term memory of your life, preferences, and goals | ![](https://img.shields.io/github/stars/mindverse/Second-Me.svg?style=social) | [mindverse/Second-Me](https://github.com/mindverse/Second-Me) |
| [MemOS](https://memos.openmem.net) [[paper]](https://arxiv.org/abs/2507.03724) | Memory operating system for AI; persistent unified memory for agents | ![](https://img.shields.io/github/stars/MemTensor/MemOS.svg?style=social) | [MemTensor/MemOS](https://github.com/MemTensor/MemOS) |
| [Memobase](https://memobase.io) | User-profile-centric memory store for personalized AI interactions | ![](https://img.shields.io/github/stars/memodb-io/memobase.svg?style=social) | [memodb-io/memobase](https://github.com/memodb-io/memobase) |
| [Hindsight](https://hindsight.vectorize.io) [[paper]](https://arxiv.org/abs/2512.12818) | Auto-learns from past agent interactions to improve future responses | ![](https://img.shields.io/github/stars/vectorize-io/hindsight.svg?style=social) | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) |
| [Zep / Graphiti](https://getzep.com) [[paper]](https://arxiv.org/abs/2501.13956) | Temporal knowledge graph engine; bi-temporal fact and entity extraction | ![](https://img.shields.io/github/stars/getzep/graphiti.svg?style=social) | [getzep/graphiti](https://github.com/getzep/graphiti) |
| [Supermemory](https://supermemory.ai) | Context infrastructure for personal memory across apps | ![](https://img.shields.io/github/stars/supermemoryai/supermemory.svg?style=social) | [supermemoryai](https://github.com/supermemoryai) |
| [OMEGA](https://omegamax.co) | MCP server with 25 memory tools; #1 on LongMemEval (95.4%) | ![](https://img.shields.io/github/stars/omega-memory/core.svg?style=social) | [omega-memory/core](https://github.com/omega-memory/core) |
| [widemem-ai](https://widemem.ai) | Lightweight memory with importance scoring, temporal decay, 3-tier hierarchy | ![](https://img.shields.io/github/stars/remete618/widemem-ai.svg?style=social) | [remete618/widemem-ai](https://github.com/remete618/widemem-ai) |

### Developer Frameworks & Libraries

| App | Description | Repo |
|-----|-------------|------|
| [Agno](https://agno.com) | Agent framework with built-in agent + team memory | [agno-agi/agno](https://github.com/agno-agi/agno) |
| [AutoGen](https://microsoft.github.io/autogen/) | Microsoft multi-agent framework with teachable memory | [microsoft/autogen](https://github.com/microsoft/autogen) |
| [CrewAI Memory](https://docs.crewai.com) | Short-term, long-term, entity, and contextual memory for multi-agent crews | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) |
| [LangChain Memory](https://python.langchain.com/docs/modules/memory/) | Standardized memory primitives (Buffer, Summary, Entity, VectorStore) | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) |
| [LangGraph](https://python.langchain.com/docs/langgraph) | Stateful graph agents with built-in persistence | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) |
| [LangMem](https://github.com/langchain-ai/langmem) | Long-term memory management for LangGraph agents | [langchain-ai/langmem](https://github.com/langchain-ai/langmem) |

---

## 📝 Personal Knowledge Management (PKM)

### Note-Taking Apps

| App | Description | Platform | Repo |
|-----|-------------|----------|------|
| [Craft](https://craft.do) | Beautiful block-based documents | Mac, iOS | — |
| [Foam](https://foambubble.github.io/foam/) | VS Code-based personal wiki with bidirectional links | Desktop | [foambubble/foam](https://github.com/foambubble/foam) |
| [Logseq](https://logseq.com) | Outliner with bidirectional linking, local-first | Desktop, Mobile | [logseq/logseq](https://github.com/logseq/logseq) |
| [Mem](https://mem.ai) | AI-powered notes with semantic search | Web, Mobile | — |
| [Notion](https://notion.so) | Flexible all-in-one workspace | Web, Desktop, Mobile | — |
| [Obsidian](https://obsidian.md) | Markdown-based local-first PKM with graph view | Desktop, Mobile | — |
| [RemNote](https://remnote.com) | Notes integrated with spaced repetition flashcards | Web, Desktop | — |
| [Roam Research](https://roamresearch.com) | Networked thought with bidirectional links | Web | — |
| [The Archive](https://zettelkasten.de/the-archive/) | Minimal Zettelkasten-focused plaintext notes | Desktop | — |
| [TiddlyWiki](https://tiddlywiki.com) | Non-linear personal notebook, runs in browser | Web | [TiddlyWiki/TiddlyWiki5](https://github.com/TiddlyWiki/TiddlyWiki5) |

### Second Brain Methods

| Method | Description | Resource |
|--------|-------------|----------|
| [PARA Method](https://fortelabs.com/blog/para/) | Projects, Areas, Resources, Archives organization system | Forte Labs |
| [CODE Method](https://fortelabs.com/blog/the-code-method/) | Capture, Organize, Distill, Express | Forte Labs |
| [Building a Second Brain](https://www.buildingasecondbrain.com/) | Tiago Forte's system and book | buildingasecondbrain.com |
| [Zettelkasten](https://zettelkasten.de/introduction/) | Niklas Luhmann's slip-box method for knowledge networking | zettelkasten.de |

---

## 🧠 Spaced Repetition

### Flashcard Apps

| App | Description | Platform | Repo |
|-----|-------------|----------|------|
| [Anki](https://ankiweb.net) | Most powerful open-source flashcard app; uses SM-2 | Desktop, Mobile, Web | [ankitects/anki](https://github.com/ankitects/anki) |
| [Brainscape](https://brainscape.com) | Confidence-based repetition (CBR) | Web, Mobile | — |
| [Mochi](https://mochi.cards) | Cards that make spaced repetition feel natural | Web, Desktop | — |
| [Quizlet](https://quizlet.com) | Flashcards with collaborative sets | Web, Mobile | — |
| [RemNote](https://remnote.com) | Notes + integrated spaced repetition | Web, Desktop | — |
| [SuperMemo](https://supermemo.com) | The original spaced repetition system (SM-2 inventor) | Web, Windows | — |

### Algorithms

| Algorithm | Description | Source |
|-----------|-------------|--------|
| SM-2 | SuperMemo 2 — most widely used algorithm | [Wozniak (1987)](https://www.supermemo.com/en/archives1990-2015/english/ol/sm2) |
| FSRS | Free Spaced Repetition Scheduler — next-gen, outperforms SM-2 | [open-spaced-repetition](https://github.com/open-spaced-repetition) |
| Leitner System | Box-based physical card sorting | Leitner (1972) |
| SM-18 | Latest SuperMemo algorithm with neural scheduling | SuperMemo Research |

---

## 🗄️ Knowledge Management

### Zettelkasten Tools

| App | Description | Repo |
|-----|-------------|------|
| [Obsidian](https://obsidian.md) | Most popular Zettelkasten implementation; plugin ecosystem | — |
| [The Archive](https://zettelkasten.de/the-archive/) | Purpose-built minimal Zettelkasten app | — |
| [Zettlr](https://zettlr.com) | Open-source Markdown editor with Zettelkasten features | [Zettlr/Zettlr](https://github.com/Zettlr/Zettlr) |
| [nvALT](https://brettterpstra.com/projects/nvalt/) | Simple fast-search plaintext notes | — |

---

## 🧪 Experimental & Research Tools

### Memory Research

| Tool | Description | Repo |
|------|-------------|------|
| [Hopfield Networks](https://www.nature.com/articles/s42256-020-0208-3) | Modern Hopfield networks as associative memory | — |
| [Numenta](https://numenta.com) | Hierarchical Temporal Memory (HTM) based on neocortical theory | [numenta/nupic](https://github.com/numenta/nupic) |

### Neural Network Memory Architectures

| Architecture | Description | Paper |
|--------------|-------------|-------|
| Differentiable Neural Computers (DNC) | Neural Turing Machine with dynamic memory allocation | [Graves et al., 2016](https://arxiv.org/abs/1606.04138) |
| LSTM | Long Short-Term Memory; gated recurrent memory | [Hochreiter & Schmidhuber, 1997](https://arxiv.org/abs/1503.04069) |
| Memory Networks | External addressable memory for QA | [Weston et al., 2014](https://arxiv.org/abs/1410.3916) |
| Neural Turing Machines | Differentiable read/write external memory | [Graves et al., 2014](https://arxiv.org/abs/1410.5401) |

---

## 🌐 Browser Extensions

| Extension | Description | Store |
|-----------|-------------|-------|
| [Memex](https://memex.garden) | Personal search and annotation across the web | Chrome, Firefox |
| [Omnivore](https://omnivore.app) | Read-it-later with offline sync and highlights | Chrome, Firefox |
| [Raindrop.io](https://raindrop.io) | Full-featured bookmark manager with tagging | Chrome, Firefox, Safari |
| [Recall](https://www.getrecall.ai) | Automatically summarizes and connects saved content | Chrome |
| [Supermemory](https://supermemory.ai) | Save anything from the web to your memory layer | Chrome |

---

## 📱 Mobile Apps

### Memory Training

| App | Description | Platform |
|-----|-------------|----------|
| [BrainHQ](https://brainhq.com) | Evidence-based brain exercises from Posit Science | Web, iOS, Android |
| [Elevate](https://elevateapp.com) | Brain training for focus, processing speed, memory | iOS, Android |
| [Lumosity](https://lumosity.com) | Cognitive training games | iOS, Android |
| [Peak](https://peak.net) | Brain training with progress tracking | iOS, Android |

### Note-Taking

| App | Description | Platform |
|-----|-------------|----------|
| [Apple Notes](https://apple.com/notes) | Lightweight built-in notes | iOS, Mac |
| [Evernote](https://evernote.com) | Full-featured notes with web clipper | iOS, Android |
| [Google Keep](https://keep.google.com) | Quick capture with labels and reminders | iOS, Android |
| [Microsoft OneNote](https://onenote.com) | Hierarchical notebook organization | iOS, Android |

---

## 💾 Data Storage

### Vector Databases

| Database | Description | Repo |
|----------|-------------|------|
| [Chroma](https://trychroma.com) | Developer-first open-source embedding database | [chroma-core/chroma](https://github.com/chroma-core/chroma) |
| [Faiss](https://github.com/facebookresearch/faiss) | Facebook AI Similarity Search; high-performance ANN | [facebookresearch/faiss](https://github.com/facebookresearch/faiss) |
| [Milvus](https://milvus.io) | Cloud-native, highly scalable vector database | [milvus-io/milvus](https://github.com/milvus-io/milvus) |
| [pgvector](https://github.com/pgvector/pgvector) | Vector extension for PostgreSQL | [pgvector/pgvector](https://github.com/pgvector/pgvector) |
| [Pinecone](https://pinecone.io) | Fully managed serverless vector DB | — |
| [Qdrant](https://qdrant.tech) | Rust-based with advanced payload filtering | [qdrant/qdrant](https://github.com/qdrant/qdrant) |
| [Weaviate](https://weaviate.io) | AI-native with built-in hybrid search modules | [weaviate/weaviate](https://github.com/weaviate/weaviate) |

### Graph Databases

| Database | Description | Repo |
|----------|-------------|------|
| [ArangoDB](https://arangodb.com) | Multi-model: document + graph + key-value | [arangodb/arangodb](https://github.com/arangodb/arangodb) |
| [FalkorDB](https://falkordb.com) | Low-latency graph DB optimized for AI knowledge graphs | [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) |
| [Memgraph](https://memgraph.com) | In-memory streaming graph DB | [memgraph/memgraph](https://github.com/memgraph/memgraph) |
| [Neo4j](https://neo4j.com) | Market-leading graph DB with Cypher | [neo4j/neo4j](https://github.com/neo4j/neo4j) |
| [TigerGraph](https://tigergraph.com) | Parallel graph analytics at scale | [tigergraph](https://github.com/tigergraph) |

---

## 🔧 CLI Tools

| Tool | Description | Repo |
|------|-------------|------|
| [Obsidian Shell Commands](https://github.com/Taitava/obsidian-shellcommands) | Run shell commands from inside Obsidian | [Taitava](https://github.com/Taitava/obsidian-shellcommands) |
| [tldr](https://tldr.sh) | Community-maintained simplified man pages | [tldr-pages/tldr](https://github.com/tldr-pages/tldr) |
| [Zettel](https://github.com/nschloe/zettel) | Minimal CLI for Zettelkasten notes | [nschloe/zettel](https://github.com/nschloe/zettel) |

---

## 📊 Comparison Matrices

### AI Memory Systems

| Feature | Mem0 | Letta | Zep/Graphiti | Honcho | Cognee | Second Me |
|---------|------|-------|-------------|--------|--------|-----------|
| Vector Storage | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Graph Storage | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Key-Value Storage | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Fact Extraction | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| User Identity Layer | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Long-term Personal Memory | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Self-hosted | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Production SDK | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### PKM Apps

| Feature | Obsidian | Logseq | Roam | Notion |
|---------|----------|--------|------|--------|
| Local-first | ✅ | ✅ | ❌ | ❌ |
| Markdown | ✅ | ✅ | ✅ | ❌ |
| Bidirectional Links | ✅ | ✅ | ✅ | ❌ |
| Graph View | ✅ | ✅ | ✅ | Partial |
| Free Tier | ✅ | ✅ | ❌ | ✅ |
| Open Source | ❌ | ✅ | ❌ | ❌ |
| Plugin Ecosystem | ✅ | ✅ | ✅ | ✅ |

---

## 🚀 Getting Started

### AI Memory

```bash
# mem0
pip install mem0ai

# Zep
docker run -p 8000:8000 getzep/zep

# Letta (MemGPT)
pip install letta
letta server

# Qdrant
docker run -p 6333:6333 qdrant/qdrant

# Chroma
pip install chromadb
```

### Personal Knowledge

```bash
# Obsidian — download from https://obsidian.md

# Logseq — download from https://logseq.com

# Anki — download from https://ankiweb.net

# FSRS algorithm for Anki
# Install the FSRS4Anki add-on: https://ankiweb.net/shared/info/759844606
```

---

## 🤝 Communities & Forums

### AI / Agents

- [LangChain Discord](https://discord.gg/langchain) — Active community for LangChain, LangGraph, LangMem
- [Letta Discord](https://discord.gg/letta) — MemGPT / Letta framework discussion
- [mem0 Discord](https://discord.gg/mem0) — Production memory systems for agents
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) — Local models, agents, and memory
- [r/MachineLearning](https://reddit.com/r/MachineLearning) — Research-focused ML community

### Knowledge Management

- [r/Zettelkasten](https://reddit.com/r/Zettelkasten) — Zettelkasten method discussion
- [r/PKMS](https://reddit.com/r/PKMS) — Personal Knowledge Management Systems
- [Obsidian Forum](https://forum.obsidian.md) — Obsidian plugins, workflows, and community
- [Logseq Discord](https://discord.gg/logseq) — Logseq user community
- [Building a Second Brain Community](https://www.buildingasecondbrain.com/community) — Tiago Forte's BASB community

### Neuroscience

- [r/Neuroscience](https://reddit.com/r/neuroscience) — Academic neuroscience discussion
- [Society for Neuroscience Forums](https://www.sfn.org/) — Professional neuroscience network

---

## 📦 Related Awesome Lists

- [Awesome AI Agents](https://github.com/e2b-dev/awesome-ai-agents)
- [Awesome LLM](https://github.com/Hannibal046/Awesome-LLM)
- [Awesome Vector Search](https://github.com/currents-api/awesome-vector-search)
- [Awesome Knowledge Graphs](https://github.com/nicholsn/awesome-knowledge-graphs)
- [Awesome Self-Hosted](https://github.com/awesome-selfhosted/awesome-selfhosted)

---

*Last updated: April 2026*
