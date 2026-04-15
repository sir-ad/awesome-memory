# Agentic Memory Research

Research papers, frameworks, and resources for AI agent memory systems.

## 📚 Research Papers

### 2026

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [MAGMA: A Multi-Graph Based Agentic Memory Architecture](https://arxiv.org/abs/2601.03236) | Jiang et al. | 2601.03236 | Multi-graph topology for structured agent memory with concurrent read/write |
| [MemRL: Self-Evolving Agents via Runtime RL on Episodic Memory](https://arxiv.org/abs/2601.03192) | MemTensor | 2601.03192 | RL-driven episodic memory that improves with each agent interaction |
| [SimpleMem: Efficient Lifelong Memory for LLM Agents](https://arxiv.org/abs/2601.02553) | — | 2601.02553 | Lightweight approach to lifelong agent memory without retraining |
| [TraceMem: Weaving Narrative Memory Schemata from Conversational Traces](https://arxiv.org/abs/2602.09712) | Shu et al. | 2602.09712 | Builds narrative schemas from conversation history |
| [PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents](https://arxiv.org/abs/2603.03296) | TIMAN Group | 2603.03296 | Plug-and-play memory module that works across task domains |
| [MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents](https://arxiv.org/abs/2602.02474) | — | 2602.02474 | Skill-based memory that agents learn and refine over time |
| [ProcMEM: Reusable Procedural Memory via Non-Parametric PPO](https://arxiv.org/abs/2602.01869) | — | 2602.01869 | Learns reusable procedural memory from experience via RL |
| [Memento-Skills: Let Agents Design Agents](https://arxiv.org/abs/2603.18743) | Zhou et al. | 2603.18743 | Skill-based memory enabling agents to compose and reuse capabilities |
| [Agentic Memory: Unified Long-Term and Short-Term Memory Management](https://arxiv.org/abs/2601.01885) | — | 2601.01885 | Unified framework managing both memory horizons simultaneously |
| [Memori: Persistent Memory Layer for Efficient, Context-Aware LLM Agents](https://arxiv.org/) | Borro et al. | preprint | Persistent memory layer separating hot/cold context for efficient retrieval |
| [All-Mem: Agentic Lifelong Memory via Dynamic Topology Evolution](https://arxiv.org/) | Lv et al. | preprint | Lifelong memory via topology-aware graph evolution |
| [MemMA: Coordinating the Memory Cycle through Multi-Agent Reasoning](https://arxiv.org/) | Lin et al. | preprint | Coordinated memory write/read/forget cycle across multi-agent systems |
| [D-Mem: A Dual-Process Memory System for LLM Agents](https://arxiv.org/) | — | preprint | System-1/System-2 inspired dual-process memory architecture |
| [MemArchitect: A Policy-Driven Memory Governance Layer](https://arxiv.org/) | Kumar et al. | preprint | Policy-based control over what agents remember and forget |

### 2025

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | mem0 Team | 2504.19413 | Hybrid vector + graph + key-value memory at production scale |
| [Learning Dynamic Belief Graphs for Theory-of-Mind Reasoning](https://arxiv.org/abs/2603.20170) | Chen et al. | 2603.20170 | Theory-of-mind representation via continuously updated belief graphs |
| [A-MEM: Agentic Memory System for LLM Agents](https://arxiv.org/abs/2502.12110) | Xu et al. | 2502.12110 | Dynamic memory organization with Zettelkasten-inspired note linking |
| [Nemori: Self-Organizing Agent Memory Inspired by Cognitive Science](https://arxiv.org/abs/2508.03341) | — | 2508.03341 | Cognitive science-grounded self-organization of agent memories |
| [From RAG to Memory: Non-Parametric Continual Learning for LLMs](https://arxiv.org/abs/2502.14802) | OSU-NLP Group | 2502.14802 | HippoRAG v2 — continual learning without forgetting |
| [Agent Workflow Memory](https://arxiv.org/abs/2409.07429) | Zr Wang et al. | 2409.07429 | Stores and retrieves successful task workflows as reusable memory |
| [MemoRAG: Global Memory-Enhanced Retrieval Augmentation](https://arxiv.org/abs/2409.05591) | — | 2409.05591 | Global memory layer boosts long-context RAG performance |
| [General Agentic Memory via Deep Research](https://arxiv.org/abs/2511.18423) | VectorSpaceLab | 2511.18423 | Deep research loop generates generalizable agent memory |
| [MemEvolve: Meta-Evolution of Agent Memory Systems](https://arxiv.org/abs/2512.18746) | — | 2512.18746 | Meta-learning evolves the memory system architecture itself |
| [MemAgent: Reshaping Long-Context LLM with Multi-Conv RL-based Memory Agent](https://arxiv.org/abs/2507.02259) | Bytedance | 2507.02259 | RL-based multi-conversation memory agent for long-context tasks |
| [Retrieval-Augmented LLM Agents](https://arxiv.org/) | Ferraz et al. | preprint | End-to-end RAG pipeline integrated into the agent action loop |

### 2024

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [HippoRAG: Neurologically Inspired Long-Term Memory for LLMs](https://arxiv.org/abs/2405.14831) | Gutierrez et al. | 2405.14831 | Hippocampus-inspired retrieval combining knowledge graphs + dense vectors |
| [Memory in the Age of AI Agents: A Survey](https://arxiv.org/abs/2404.13501) | Zhang et al. | 2404.13501 | Comprehensive taxonomy: sensory, short-term, long-term, and procedural agent memory |
| [Empowering Working Memory for Large Language Model Agents](https://arxiv.org/abs/2312.17259) | Wang et al. | 2312.17259 | Dedicated working memory module for multi-step task solving |
| [LONGMEM: Enabling LLMs to Use 10,000+ Long-Context by Distilling Memory](https://arxiv.org/abs/2306.07174) | Wang et al. | 2306.07174 | Distillation-based approach to give LLMs very long effective context |
| [Lifelong Learning in LLM Agents via Memory Consolidation](https://arxiv.org/) | — | preprint | Continual learning without catastrophic forgetting in deployed agents |
| [Memory-Augmented Reinforcement Learning](https://arxiv.org/) | — | preprint | External episodic memory for RL agents across long-horizon tasks |

### 2023

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Packer et al. | 2310.08560 | Tiered virtual memory (in-context, external, archival) for unbounded context |
| [MemoryBank: Enhancing LLMs with Long-Term Memory](https://arxiv.org/abs/2305.10250) | Zhong et al. | 2305.10250 | Memory updating mechanism using Ebbinghaus-inspired strength decay |
| [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | Park et al. | 2304.03442 | Memory stream + reflection + retrieval loop for believable agent behavior |
| [Voyager: An Open-Ended Embodied Agent with LLMs](https://arxiv.org/abs/2305.16291) | Wang et al. | 2305.16291 | Skill library as evolving procedural memory; self-improving via practice |
| [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Shinn et al. | 2303.11366 | Self-reflection stored as episodic memory drives future behavior |

## 🌐 Graph Memory Papers

*Papers specifically focused on graph-structured agent memory.*

| Paper | Year | arXiv | Contribution |
|-------|------|-------|-------------|
| [MAGMA: Multi-Graph Based Agentic Memory Architecture](https://arxiv.org/abs/2601.03236) | 2026 | 2601.03236 | Multi-graph topology for structured concurrent agent memory |
| [TraceMem: Weaving Narrative Memory Schemata from Conversational Traces](https://arxiv.org/abs/2602.09712) | 2026 | 2602.09712 | Narrative schemas extracted from conversation history |
| [Graphiti: A Temporal Knowledge Graph for LLM Agents](https://arxiv.org/abs/2501.13956) | 2025 | 2501.13956 | Bi-temporal fact extraction; powers Zep's memory graph engine |
| [From RAG to Memory: Non-Parametric Continual Learning for LLMs](https://arxiv.org/abs/2502.14802) | 2025 | 2502.14802 | HippoRAG v2 — knowledge graph memory + continual learning |
| [MIRIX: Multi-Agent Memory System for LLM-Based Agents](https://arxiv.org/abs/2507.07957) | 2025 | 2507.07957 | Multi-agent graph memory with specialised sub-systems |
| [HippoRAG: Neurobiologically Inspired Long-Term Memory for LLMs](https://arxiv.org/abs/2405.14831) | 2024 | 2405.14831 | Hippocampus-inspired graph + dense vector retrieval |
| [AriGraph: Learning Knowledge Graph World Models with Episodic Memory](https://arxiv.org/abs/2407.04363) | 2024 | 2407.04363 | KG world model for LLM agents; episodic + semantic integration |

---

### Key Concepts

- **Agentic Memory** — Memory that enables autonomous agent behavior across sessions and tasks
- **Self-Evolving Memory** — Memory that improves its structure and relevance over time
- **Contextual Memory** — Situation-aware retrieval that considers task context at query time
- **Memory Governance** — Policy-driven control of what gets written, retained, and forgotten
- **Belief Graphs** — Dynamic graph representations of agent beliefs for theory-of-mind reasoning

---

## 🏗️ Architectures

### Agentic Memory Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  AGENTIC MEMORY ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   AGENT CORE                          │    │
│  │  ┌─────────┐  ┌─────────┐  ┌───────────────┐        │    │
│  │  │ Planner │→ │ Memory  │→ │   Executor    │        │    │
│  │  └─────────┘  └────┬────┘  └───────────────┘        │    │
│  └──────────────────── ┼───────────────────────────────┘    │
│                         │                                     │
│  ┌──────────────────────▼────────────────────────────────┐  │
│  │                   MEMORY SYSTEM                         │  │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────┐    │  │
│  │  │  Working   │  │  Episodic  │  │   Semantic   │    │  │
│  │  │  Memory    │  │  Memory    │  │   Memory     │    │  │
│  │  │ (context)  │  │ (episodes) │  │   (facts)    │    │  │
│  │  └────────────┘  └────────────┘  └──────────────┘    │  │
│  │  ┌──────────────────────────────────────────────┐    │  │
│  │  │            Procedural Memory                  │    │  │
│  │  │         (skills, action sequences)            │    │  │
│  │  └──────────────────────────────────────────────┘    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Types of Agent Memory

| Type | Description | Typical Store | Example |
|------|-------------|---------------|---------|
| **Working Memory** | Active in-context state | LLM context window | Current conversation turn |
| **Episodic Memory** | Past interaction records | Vector DB + timestamps | "User prefers concise answers" |
| **Semantic Memory** | World knowledge / facts | Knowledge graph | Entity relationships |
| **Procedural Memory** | How-to knowledge / skills | Code store / tool registry | Agent skill library |

---

## 🤖 Agent Frameworks with Memory

### Full-Stack Agent Frameworks

| Framework | Language | Memory Features | Stars |
|-----------|----------|----------------|-------|
| [LangChain](https://github.com/langchain-ai/langchain) | Python/JS | Buffer, Summary, Entity, VectorStore | ⭐ 90k+ |
| [LangGraph](https://github.com/langchain-ai/langgraph) | Python/JS | Stateful graph nodes, persistence | ⭐ 9k+ |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Python | Short-term, long-term, entity, contextual | ⭐ 22k+ |
| [AutoGen](https://github.com/microsoft/autogen) | Python | Teachable agents, memory plugins | ⭐ 35k+ |
| [CAMEL](https://github.com/camel-ai/camel) | Python | Role-playing with persistent context | ⭐ 5k+ |
| [Agno](https://github.com/agno-agi/agno) | Python | Built-in agent memory, team memory | ⭐ 18k+ |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Python | Type-safe agent deps and result storage | ⭐ 7k+ |
| [Swarms](https://github.com/kyegomez/swarms) | Python | Multi-agent shared memory | ⭐ 4k+ |

### Memory-Specific Frameworks

| Framework | Description | Repo |
|-----------|-------------|------|
| [Cognee](https://github.com/topoteretes/cognee) | Knowledge graph memory from unstructured data | topoteretes/cognee |
| [Honcho](https://github.com/plastic-labs/honcho) | User identity + memory for AI apps | plastic-labs/honcho |
| [LangMem](https://github.com/langchain-ai/langmem) | Long-term memory for LangGraph agents | langchain-ai/langmem |
| [Letta](https://github.com/letta-ai/letta) | Stateful agents with tiered memory (MemGPT successor) | letta-ai/letta |
| [Mem0](https://github.com/mem0ai/mem0) | Production memory layer; hybrid storage | mem0ai/mem0 |
| [Zep](https://github.com/getzep/zep) | Long-term memory with fact extraction | getzep/zep |

---

## 🔧 Implementation Patterns

### Memory Patterns

| Pattern | When to Use | Description |
|---------|-------------|-------------|
| **ConversationBuffer** | Short sessions | Store full conversation history in context |
| **ConversationSummary** | Long sessions | Compress old turns into rolling summaries |
| **EntityMemory** | User/domain tracking | Track named entities and their properties across sessions |
| **KGExtractor** | Structured relationships | Extract entity-relation triples into a graph |
| **SlidingWindow** | Fixed budget | Keep the N most recent turns in context |
| **VectorStoreRetriever** | Large memory | Semantic search over past interactions |

### Retrieval Patterns

| Pattern | Description | Best For |
|---------|-------------|---------|
| **Graph Traversal** | Follow entity relationships | Multi-hop reasoning |
| **Hybrid Search** | Vector + keyword reranked | Best overall recall + precision |
| **Keyword Search** | BM25 / TF-IDF | Exact term matching, names, IDs |
| **Similarity Search** | Embedding-based nearest neighbor | Semantic "find related" queries |
| **Time-Weighted** | Decay by recency | Conversational agents, personal assistants |

---

## 📊 Benchmarks & Evaluation

### Agent Memory Benchmarks

| Benchmark | Description | Link |
|-----------|-------------|------|
| [HELMET](https://arxiv.org/abs/2410.02694) | How Models Handle Extended Long-form Text | arxiv 2410.02694 |
| [LoCoMo](https://arxiv.org/abs/2402.11649) | Long conversation memory benchmark | arxiv 2402.11649 |
| [LongMemEval](https://arxiv.org/abs/2410.10813) | Long-term memory evaluation for chat assistants | arxiv 2410.10813 |
| [MemoryBench](https://git.new/membench) | Open evaluation platform for agent memory | GitHub |

### Evaluation Metrics

| Metric | What It Measures |
|--------|-----------------|
| **Faithfulness** | Are responses grounded in retrieved memory? |
| **Latency** | Retrieval time under load |
| **Precision** | Are retrieved memories actually relevant? |
| **Recall@K** | Are the K most relevant memories retrieved? |
| **Temporal Accuracy** | Correct handling of time-sensitive facts |
| **Token Efficiency** | Context window usage per query |

---

## 🛠️ Implementation Snippets

```python
# mem0 — add and query memories
from mem0 import Memory

m = Memory()
m.add("User prefers Python over JavaScript", user_id="alice")
results = m.search("programming language preferences", user_id="alice")

# LangChain — vector store retriever memory
from langchain.memory import VectorStoreRetrieverMemory
from langchain_community.vectorstores import Chroma

vectorstore = Chroma(embedding_function=embeddings)
memory = VectorStoreRetrieverMemory(retriever=vectorstore.as_retriever(k=5))

# Zep — persistent temporal memory
from zep_python import ZepClient

client = ZepClient(api_key="...")
session = client.memory.add_session(session_id="my-session")
```

---

## 🎯 Best Practices

### Memory Management

1. **Chunk deliberately** — Split context into semantically coherent units, not arbitrary token counts
2. **Summarize aggressively** — Compress episodic memory; agents rarely need verbatim history
3. **Prioritize by recency + relevance** — Combine recency decay (Ebbinghaus) with semantic similarity
4. **Forget intentionally** — Remove outdated or contradicted facts; stale memory is worse than no memory
5. **Separate memory types** — Don't conflate working memory (context) with long-term (persistent store)

### Retrieval

1. **Hybrid search first** — Vector alone misses keywords; BM25 alone misses semantics
2. **Re-rank results** — Cross-encoders significantly improve precision over bi-encoder retrieval alone
3. **Cache hot memories** — Frequently accessed facts belong in context or a fast KV store
4. **Compress before storing** — Extract structured facts rather than storing raw text chunks

---

## 🔮 Future Directions

- **Continual Learning** — Agents that update memory without catastrophic forgetting
- **Federated Memory** — Distributed memory across agent networks with privacy preservation
- **Multimodal Memory** — Unified stores for text, images, audio, and sensor data
- **Neuromorphic Memory** — Spike-timing-dependent plasticity inspired architectures
- **Self-Reflective Memory** — Memory that evaluates its own reliability and freshness

---

## 📚 Resources

### Tutorials & Docs

- [LangChain Memory Guide](https://python.langchain.com/docs/modules/memory/)
- [LangGraph Memory How-To](https://langchain-ai.github.io/langgraph/how-tos/persistence/)
- [Letta Docs](https://docs.letta.com)
- [mem0 Documentation](https://docs.mem0.ai)

### Communities

- [LangChain Discord](https://discord.gg/langchain)
- [Letta Discord](https://discord.gg/letta)
- [mem0 Discord](https://discord.gg/mem0)
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)

---

*Last updated: April 2026*
