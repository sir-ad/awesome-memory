# Agentic Memory Research

Research papers, frameworks, and resources for AI agent memory systems.

## 📚 Research Papers

### 2026

| Paper | Authors | Contribution |
|-------|---------|--------------|
| [Memori: Persistent Memory Layer](https://arxiv.org/) | Borro et al. | Persistent memory for LLM agents |
| [All-Mem: Dynamic Topology Evolution](https://arxiv.org/) | Lv et al. | Lifelong memory via topology |
| [MemMA: Multi-Agent Memory](https://arxiv.org/) | Lin et al. | Coordinated memory cycle |
| [D-Mem: Dual Process Memory](https://arxiv.org/) | - | Dual-process memory |
| [MemArchitect: Governance](https://arxiv.org/) | Kumar et al. | Policy-driven memory |
| [PowerLens: Mobile Memory](https://arxiv.org/) | Feng et al. | Domain-specific memory |
| [Memento-Skills](https://arxiv.org/) | Zhou et al. | Skill-based memory |

### 2025

| Paper | Authors | Contribution |
|-------|---------|--------------|
| [Mem0: Production-Ready Memory](https://arxiv.org/abs/2504.19413) | mem0 Team | Scalable long-term memory |
| [Learning Dynamic Belief Graphs](https://arxiv.org/abs/2603.20170) | Chen et al. | Theory-of-mind for agents |
| [Retrieval-Augmented LLM Agents](https://arxiv.org/) | Ferraz et al. | RAG + memory |

### 2024

| Paper | Description |
|-------|--------------|
| [Agent Memory Architecture](https://arxiv.org/) | Framework for agent memory |
| [Lifelong Learning in Agents](https://arxiv.org/) | Continual learning |
| [Memory-Augmented RL](https://arxiv.org/) | Reinforcement learning + memory |
| [Meta-Learning with Memory](https://arxiv.org/) | Learning to learn |

### Key Concepts

- **Agentic Memory** - Memory that enables autonomous agent behavior
- **Self-Evolving Memory** - Memory that improves over time
- **Contextual Memory** - Situation-aware retrieval
- **Memory Banks** - Dedicated storage for agent state

---

## 🏗️ Architectures

### Memory Architectures for Agents

```
┌─────────────────────────────────────────────────────────────┐
│                  AGENTIC MEMORY ARCHITECTURE                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   AGENT CORE                          │   │
│  │  ┌─────────┐  ┌─────────┐  ┌───────────────┐   │   │
│  │  │ Planner │→│ Memory │→│ Executor │     │   │
│  │  └─────────┘  └────┬────┘  └───────────────┘   │   │
│  └─────────────────────┼─────────────────────────────┘   │
│                        │                                    │
│  ┌─────────────────────▼─────────────────────────────┐   │
│  │                 MEMORY SYSTEM                        │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────┐ │   │
│  │  │  Working   │  │   Episodic │  │ Semantic │ │   │
│  │  │  Memory    │  │   Memory   │  │  Memory  │ │   │
│  │  └────────────┘  └────────────┘  └──────────┘ │   │
│  └───────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Types of Agent Memory

| Type | Description | Example |
|------|-------------|---------|
| **Working Memory** | Active context | Current conversation |
| **Episodic Memory** | Past experiences | Previous interactions |
| **Semantic Memory** | Knowledge | Facts, skills |
| **Procedural Memory** | How-to knowledge | Action sequences |

---

## 🤖 Agent Frameworks with Memory

### Comprehensive Frameworks

| Framework | Language | Memory Features | GitHub |
|-----------|----------|----------------|--------|
| [LangChain](https://github.com/langchain-ai/langchain) | Python | Built-in memory | ⭐ |
| [LangGraph](https://github.com/langchain-ai/langgraph) | Python | Stateful graphs | ⭐ |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Python | Multi-agent | ⭐ |
| [AutoGen](https://github.com/microsoft/autogen) | Python | Microsoft | ⭐ |
| [CAMEL](https://github.com/camel-ai/camel) | Python | Role-playing | ⭐ |
| [Agno](https://github.com/agno-ai/agno) | Python | Agent memory | ⭐ |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Python | Type-safe | ⭐ |
| [Swarms](https://github.com/kyegomez/swarms) | Python | Multi-agent | ⭐ |

### Memory-Specific Frameworks

| Framework | Description | GitHub |
|-----------|-------------|--------|
| [mem0](https://github.com/mem0ai/mem0) | Production memory | ⭐ |
| [Zep](https://github.com/getzep/zep) | Long-term memory | ⭐ |
| [Honcho](https://github.com/plastic-labs/honcho) | Agent memory | ⭐ |
| [Cognee](https://github.com/topoteretes/cognee) | Knowledge engine | ⭐ |
| [LangMem](https://github.com/kyruus/langmem) | LM memory | ⭐ |

---

## 🔧 Implementation Patterns

### Memory Patterns

| Pattern | Description |
|---------|-------------|
| **ConversationBuffer** | Store conversation history |
| **ConversationSummary** | Summarize long chats |
| **VectorStoreRetriever** | Semantic search |
| **KGExtractor** | Knowledge graph extraction |
| **EntityMemory** | Track entities |

### Retrieval Patterns

| Pattern | Description |
|---------|-------------|
| **Similarity Search** | Vector-based |
| **Keyword Search** | BM25, TF-IDL |
| **Graph Traversal** | Relationship-based |
| **Hybrid Search** | Combined approach |

---

## 📊 Benchmarks

### Agent Memory Benchmarks

| Benchmark | Description | Link |
|-----------|-------------|------|
| LongMemEval | Long-term memory | - |
| LoCoMo | Long conversation | - |
| ConvoMem | Conversational | - |
| [MemoryBench](https://git.new/membench) | Open evaluation | GitHub |

### Evaluation Metrics

| Metric | Description |
|--------|-------------|
| Recall | Relevant memories retrieved |
| Precision | Retrieved memories relevant |
| Latency | Retrieval time |
| Token Usage | Context window efficiency |

---

## 🛠️ Tools & Libraries

### Memory Implementations

```python
# LangChain Memory
from langchain.memory import ConversationBufferMemory
from langchain.memory import VectorStoreRetrieverMemory

# mem0
from mem0 import Memory

# Zep
from zep_python import Zep

# Custom
class AgentMemory:
    def __init__(self):
        self.short_term = []
        self.long_term = VectorStore()
```

### Vector Stores

| Store | Description | GitHub |
|-------|-------------|--------|
| Chroma | AI-native | [chroma-core](https://github.com/chroma-core) |
| Qdrant | Fast | [qdrant](https://github.com/qdrant) |
| Weaviate | Flexible | [weaviate](https://github.com/weaviate) |

---

## 🎯 Best Practices

### Memory Management

1. **Chunking** - Split long context into manageable pieces
2. **Summarization** - Compress old conversations
3. **Prioritization** - Rank memories by relevance
4. **Forgetting** - Remove irrelevant memories
5. **Encryption** - Secure sensitive data

### Retrieval

1. **Hybrid Search** - Combine vector + keyword
2. **Re-ranking** - Improve result quality
3. **Caching** - Speed up repeated queries
4. **Compression** - Minimize token usage

---

## 🔮 Future Directions

### Emerging Research

- **Continual Learning** - Agents that learn forever
- **Self-Reflective Memory** - Memory that evaluates itself
- **Federated Memory** - Distributed agent memory
- **Quantum Memory** - Quantum-inspired approaches
- **Neuromorphic Memory** - Brain-inspired architectures

---

## 📚 Resources

### Papers

- [Agent Memory: A Survey](https://arxiv.org/)
- [Lifelong Learning in Agents](https://arxiv.org/)
- [Memory-Augmented Neural Networks](https://arxiv.org/)

### Tutorials

- [LangChain Memory](https://python.langchain.com/docs/modules/memory/)
- [mem0 Documentation](https://docs.mem0.ai)

### Communities

- [LangChain Discord](https://discord.gg/langchain)
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)

---

*Last updated: March 2026*
