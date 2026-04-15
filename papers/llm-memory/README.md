# LLM Memory Research Papers

A comprehensive collection of academic papers on LLM and AI memory systems.

## 2026 Papers

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| Memori: A Persistent Memory Layer for Efficient, Context-Aware LLM Agents | Borro, Macarini, Tindall, Montero, Struck | preprint | Persistent memory layer for long-running agents |
| All-Mem: Agentic Lifelong Memory via Dynamic Topology Evolution | Lv, Chang, Guo, Tao, Zhou | preprint | Dynamic topology for evolving agent memory |
| MemMA: Coordinating the Memory Cycle through Multi-Agent Reasoning | Lin, Zhang, Lu, Liu, Tang, He, Zhang, Wang | preprint | Multi-agent coordinated memory cycle |
| D-Mem: A Dual-Process Memory System for LLM Agents | — | preprint | Dual-process (fast/slow) memory architecture |
| MemArchitect: A Policy-Driven Memory Governance Layer | Kumar, Ba, Pan | preprint | Governance framework for agent memory decisions |
| Memento-Skills: Let Agents Design Agents | Zhou et al. | preprint | Skill-based memory for agent composition |

## 2025 Papers

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | mem0 Team | 2504.19413 | Production-ready hybrid memory at scale |
| [Learning Dynamic Belief Graphs for Theory-of-Mind Reasoning](https://arxiv.org/abs/2603.20170) | Chen et al. | 2603.20170 | Belief graphs enabling theory-of-mind in agents |
| [A-MEM: Agentic Memory System for LLM Agents](https://arxiv.org/abs/2502.12110) | Xu et al. | 2502.12110 | Zettelkasten-inspired dynamic memory linking |
| Retrieval-Augmented LLM Agents | Ferraz, Deffayet, Nikoulina, Déjean, Clinchant | preprint | RAG tightly integrated into agent action loops |
| A Trace-Based Assurance Framework for Agentic AI Orchestration | Paduraru, Bouruc | preprint | Auditability layer for agent memory operations |

## 2024 Papers

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [HippoRAG: Neurologically Inspired Long-Term Memory for LLMs](https://arxiv.org/abs/2405.14831) | Gutierrez et al. | 2405.14831 | Hippocampus-inspired graph + vector retrieval |
| [Memory in the Age of AI Agents: A Survey](https://arxiv.org/abs/2404.13501) | Zhang et al. | 2404.13501 | Comprehensive taxonomy of agent memory types |
| [AI-native Memory: A Pathway from LLMs Towards AGI](https://arxiv.org/abs/2402.11666) | — | 2402.11666 | From retrieval-augmented to reasoning-integrated memory |
| [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://arxiv.org/abs/2410.10813) | — | 2410.10813 | Evaluation framework for conversational memory |
| [Graph-Based Memory for LLM Agents](https://arxiv.org/) | — | preprint | Structured relational memory via knowledge graphs |

## 2023 Papers

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [Empowering Working Memory for LLM Agents](https://arxiv.org/abs/2312.17259) | Wang et al. | 2312.17259 | Dedicated working memory module for multi-step tasks |
| [LONGMEM: Enabling LLMs to Use 10,000+ Long Context](https://arxiv.org/abs/2306.07174) | Wang et al. | 2306.07174 | Memory distillation for very long effective context |
| [Lost in the Middle: How LLMs Use Long Contexts](https://arxiv.org/abs/2307.03172) | Liu et al. | 2307.03172 | Demonstrates primacy/recency bias; critical for memory system design |
| [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Packer et al. | 2310.08560 | Tiered virtual memory for unbounded agent context |
| [MemoryBank: Enhancing LLMs with Long-Term Memory](https://arxiv.org/abs/2305.10250) | Zhong et al. | 2305.10250 | Ebbinghaus-inspired strength decay for memory updates |
| [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | Park et al. | 2304.03442 | Memory stream + reflection loop for agent believability |
| [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Shinn et al. | 2303.11366 | Self-reflection as episodic memory for agent improvement |
| [Voyager: An Open-Ended Embodied Agent with LLMs](https://arxiv.org/abs/2305.16291) | Wang et al. | 2305.16291 | Skill library as procedural memory |

## 2021–2022 Papers (Foundations)

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [Memorizing Transformers](https://arxiv.org/abs/2203.08913) | Wu et al. | 2203.08913 | Approximate kNN over past token representations |
| [RETRO: Improving Language Models by Retrieving from Trillions of Tokens](https://arxiv.org/abs/2112.04426) | Borgeaud et al. | 2112.04426 | kNN retrieval over massive external memory corpus |
| [Unlimiformer: Long-Range Transformers with Unlimited Length Input](https://arxiv.org/abs/2305.01625) | Bertsch et al. | 2305.01625 | Cross-attention over all encoder hidden states |

## 2017–2020 Papers (Seminal Work)

| Paper | Authors | arXiv | Key Contribution |
|-------|---------|-------|-----------------|
| [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Vaswani et al. | 1706.03762 | Transformer; context window as working memory |
| [Differentiable Neural Computers](https://arxiv.org/abs/1606.04138) | Graves et al. | 1606.04138 | Extended NTM with dynamic memory allocation |
| [Memory Networks](https://arxiv.org/abs/1410.3916) | Weston et al. | 1410.3916 | External addressable memory for QA tasks |
| [Neural Turing Machines](https://arxiv.org/abs/1410.5401) | Graves et al. | 1410.5401 | Differentiable read/write over external memory |
| [RAG: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) | Lewis et al. | 2005.11401 | Original RAG paper; retrieval as soft external memory |

---

## Key Concepts

### Vector Memory
- Embedding-based storage for semantic similarity retrieval
- Approximate nearest neighbors (HNSW, IVF indexing)
- Bi-encoder retrieval + cross-encoder reranking for best precision

### Graph Memory
- Entity-relationship modeling with knowledge graphs
- Belief graphs for theory-of-mind reasoning
- GraphRAG for community-level knowledge synthesis

### Hybrid Memory
- Combined vector + graph retrieval
- Required for complex multi-hop reasoning tasks
- Best overall recall and precision in practice

### Temporal Memory
- Time-decay functions for memory relevance scoring
- Recency vs. importance weighting
- Ebbinghaus forgetting curve applied to agent memory management

---

## Benchmark Datasets

| Benchmark | Description | arXiv / Link |
|-----------|-------------|-------------|
| [HELMET](https://arxiv.org/abs/2410.02694) | How Models Handle Extended Long-form Text | 2410.02694 |
| [LoCoMo](https://arxiv.org/abs/2402.11649) | Long conversation memory benchmark | 2402.11649 |
| [LongMemEval](https://arxiv.org/abs/2410.10813) | Long-term memory in chat assistants | 2410.10813 |
| [MemoryBench](https://git.new/membench) | Open evaluation platform | GitHub |

---

## Citation Examples

```bibtex
@article{mem0,
  title={Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory},
  author={mem0 Team},
  year={2025},
  eprint={2504.19413},
  archivePrefix={arXiv}
}

@article{hipporag,
  title={HippoRAG: Neurologically Inspired Long-Term Memory for Large Language Models},
  author={Gutierrez et al.},
  year={2024},
  eprint={2405.14831},
  archivePrefix={arXiv}
}

@article{rag,
  title={Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks},
  author={Lewis et al.},
  year={2020},
  eprint={2005.11401},
  archivePrefix={arXiv}
}

@article{memgpt,
  title={MemGPT: Towards LLMs as Operating Systems},
  author={Packer et al.},
  year={2023},
  eprint={2310.08560},
  archivePrefix={arXiv}
}
```

---

## Resources

### Surveys & Overviews

- [Memory in the Age of AI Agents](https://arxiv.org/abs/2404.13501) — Agent-specific taxonomy (2024)
- [Lilian Weng — LLM-powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) — Accessible breakdown of memory types in agents

### Leaderboards

- [LongBench Leaderboard](https://github.com/THUDM/LongBench) — Long-context understanding benchmarks
- [LMSYS Chatbot Arena](https://chat.lmsys.org/) — Comparative model evaluation including long-context tasks

---

*Last updated: April 2026*
