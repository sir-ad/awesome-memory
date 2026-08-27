# Awesome Memory [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated map of memory across AI agents, language models, cognitive architectures, neuroscience, and psychology. Use it to compare systems, trace ideas to primary research, and choose evaluation targets.

[![GitHub stars](https://img.shields.io/github/stars/sir-ad/awesome-memory.svg?style=social&label=Star)](https://github.com/sir-ad/awesome-memory)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Last Commit](https://img.shields.io/github/last-commit/sir-ad/awesome-memory)](https://github.com/sir-ad/awesome-memory/commits/main)

Deep collections: [agentic memory papers](https://github.com/sir-ad/awesome-memory/blob/main/papers/agentic-memory/README.md), [LLM memory papers](https://github.com/sir-ad/awesome-memory/blob/main/papers/llm-memory/README.md), [brain memory research](https://github.com/sir-ad/awesome-memory/blob/main/papers/brain-memory/README.md), [cognitive psychology](https://github.com/sir-ad/awesome-memory/blob/main/papers/psychology/README.md), and the [open-source tools directory](https://github.com/sir-ad/awesome-memory/blob/main/apps/open-source/README.md).

## Contents

- [Choose by memory design](#choose-by-memory-design)
- [Agent memory systems](#agent-memory-systems)
- [Surveys and landmark papers](#surveys-and-landmark-papers)
- [Evaluation benchmarks](#evaluation-benchmarks)
- [Cognitive architectures and biological memory](#cognitive-architectures-and-biological-memory)
- [Storage and retrieval infrastructure](#storage-and-retrieval-infrastructure)
- [Courses and reference material](#courses-and-reference-material)
- [Workshops](#workshops)

## Choose by memory design

**Form.** Token memory stores text or records outside the model and retrieves them into context. Parametric memory changes model weights or adapters. Latent memory carries state in activations or learned internal representations. Many practical systems combine forms.

**Function.** Factual memory preserves knowledge about the world or a user. Experiential memory preserves prior actions, outcomes, and reusable skills. Working memory holds the active state needed to complete a task.

**Lifecycle.** Formation decides what enters memory and how it is represented. Evolution updates, consolidates, links, or forgets stored information. Retrieval decides what returns, when it returns, and how it affects an answer or action.

Evaluate a system against all three dimensions. A large context window is not, by itself, evidence of durable memory.

## Agent memory systems

### General-purpose memory layers

- [Mem0](https://github.com/mem0ai/mem0) - Memory layer combining vector, graph, and key-value representations for applications and agents.
- [Letta](https://github.com/letta-ai/letta) - Framework for stateful agents with in-context, archival, and external memory.
- [Graphiti](https://github.com/getzep/graphiti) - Temporal knowledge graph for facts and relationships extracted from changing data.
- [Cognee](https://github.com/topoteretes/cognee) - Data pipeline that creates semantic memory graphs from unstructured sources.
- [MemOS](https://github.com/MemTensor/MemOS) - Memory operating-system project for organizing and serving multiple memory types.
- [LangMem](https://github.com/langchain-ai/langmem) - Utilities for extracting and managing long-term memory in LangGraph applications.
- [Memobase](https://github.com/memodb-io/memobase) - Profile-based memory store for personalized interactions.
- [Hindsight](https://github.com/vectorize-io/hindsight) - Long-term memory service organized around retaining, recalling, and reflecting on information.
- [OMEGA](https://github.com/omega-memory/omega-memory) - MCP-compatible server exposing persistent memory operations to clients.

### Identity and personal memory

- [Honcho](https://github.com/plastic-labs/honcho) - User-modeling and identity layer for applications that need persistent representations of people.
- [Second Me](https://github.com/mindverse/Second-Me) - Personal AI project built around a persistent model of a user's information and preferences.

### Retrieval frameworks

- [LlamaIndex](https://github.com/run-llama/llama_index) - Framework for ingestion, indexing, retrieval, and agent access to external data.

## Surveys and landmark papers

### Surveys and taxonomies

- [A Survey on the Memory Mechanism of Large Language Model based Agents](https://arxiv.org/abs/2404.13501) - Taxonomy of sensory, short-term, long-term, and procedural memory in agents.
- [Rethinking Memory in AI](https://arxiv.org/abs/2505.00675) - Survey of memory taxonomy, operations, research topics, and open directions.
- [From Human Memory to AI Memory](https://arxiv.org/abs/2504.15965) - Maps biological and cognitive memory concepts to language-model systems.
- [Externalization in LLM Agents](https://arxiv.org/abs/2604.08224) - Organizes memory, skills, protocols, and harness engineering as forms of externalized capability.
- [The AI Hippocampus](https://arxiv.org/abs/2601.09113) - Examines the gap between artificial memory systems and human memory.
- [Cognitive Architectures for Language Agents](https://arxiv.org/abs/2309.02427) - Survey connecting cognitive-architecture research with language-agent design.

### Landmark papers

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Introduced the Transformer architecture and attention-based context processing.
- [Memory Networks](https://arxiv.org/abs/1410.3916) - Introduced an addressable external memory component for question answering.
- [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) - Combined parametric generation with retrieved non-parametric memory.
- [RETRO](https://arxiv.org/abs/2112.04426) - Augmented language modeling with retrieval from a large external corpus.
- [Generative Agents](https://arxiv.org/abs/2304.03442) - Combined memory streams, reflection, and planning in simulated agents.
- [Reflexion](https://arxiv.org/abs/2303.11366) - Stored verbal feedback as episodic experience for later decisions.
- [MemoryBank](https://arxiv.org/abs/2305.10250) - Applied long-term storage and forgetting-inspired updates to conversational memory.
- [Voyager](https://arxiv.org/abs/2305.16291) - Used an evolving skill library as procedural memory for an embodied agent.
- [MemGPT](https://arxiv.org/abs/2310.08560) - Applied virtual-memory concepts to tiered language-model context.
- [HippoRAG](https://arxiv.org/abs/2405.14831) - Combined graph and dense retrieval using a hippocampus-inspired design.
- [Graphiti](https://arxiv.org/abs/2501.13956) - Described a bi-temporal knowledge graph for changing agent memory.
- [Mem0](https://arxiv.org/abs/2504.19413) - Evaluated a hybrid long-term memory architecture for conversational agents.
- [A-MEM](https://arxiv.org/abs/2502.12110) - Applied dynamic note linking and evolution to agent memory.
- [MAGMA](https://arxiv.org/abs/2601.03236) - Proposed multiple graph views for structured agent memory.

## Evaluation benchmarks

### Conversational and agent memory

- [LongMemEval](https://arxiv.org/abs/2410.10813) - Tests long-term interactive memory in chat assistants.
- [LoCoMo](https://arxiv.org/abs/2402.17753) - Evaluates very long conversational histories and temporal reasoning.
- [MemoryAgentBench](https://arxiv.org/abs/2507.05257) - Evaluates memory through incremental multi-turn interaction.
- [PersonaMem](https://arxiv.org/abs/2504.14225) - Measures dynamic user profiling and personalized responses.
- [MemoryBench](https://arxiv.org/abs/2510.17281) - Combines memory evaluation with continual-learning tasks.
- [HaluMem](https://arxiv.org/abs/2511.03506) - Measures hallucination behavior in agent memory systems.

### Long-context retrieval and reasoning

- [BEAM](https://arxiv.org/abs/2510.27246) - Evaluates memory behavior at million-token scale.
- [NoLiMa](https://arxiv.org/abs/2502.05167) - Tests long-context retrieval beyond literal matching.
- [LongBench v2](https://arxiv.org/abs/2412.15204) - Tests reasoning over realistic long-context tasks.
- [InfiniteBench](https://arxiv.org/abs/2402.13718) - Evaluates language models on contexts beyond 100,000 tokens.
- [HELMET](https://arxiv.org/abs/2410.02694) - Evaluates long-context models across retrieval, generation, and reasoning tasks.

### Multimodal memory

- [TeleEgo](https://arxiv.org/abs/2510.23981) - Evaluates egocentric assistants operating over extended experience.
- [LVBench](https://arxiv.org/abs/2406.08035) - Tests understanding of long-form video.
- [Video-MME](https://arxiv.org/abs/2405.21075) - Evaluates multimodal models across varied video durations and domains.

## Cognitive architectures and biological memory

### Cognitive architectures

- [Soar](https://soar.eecs.umich.edu/) - Cognitive architecture using procedural learning and chunking.
- [ACT-R](http://act-r.psy.cmu.edu/) - Architecture separating declarative and procedural memory systems.
- [OpenCog](https://opencog.org/) - Cognitive architecture and knowledge-representation framework built around a hypergraph.
- [LIDA](https://www.memphis.edu/cs/research/cognitive_computing.php) - Global Workspace Theory-based architecture with multiple learning and memory processes.
- [CLARION](https://homepages.hass.rpi.edu/~rsun/folder-files/sun-COGSYS-2014.pdf) - Dual-process architecture separating implicit and explicit knowledge.
- [Sigma](https://cogarch.ict.usc.edu/) - Cognitive architecture based on graphical models.

### Biological and psychological foundations

- [Atkinson-Shiffrin Memory Model](https://en.wikipedia.org/wiki/Atkinson%E2%80%93Shiffrin_memory_model) - Multi-store model of sensory, short-term, and long-term memory.
- [Baddeley's Model of Working Memory](https://en.wikipedia.org/wiki/Baddeley%27s_model_of_working_memory) - Model of working memory with phonological, visuospatial, episodic, and executive components.
- [Where Are Memories Stored?](https://qbi.uq.edu.au/memory/where-are-memories-stored) - Overview of synaptic plasticity, consolidation, and distributed storage from the Queensland Brain Institute.
- [Hippocampal Indexing Theory](https://pubmed.ncbi.nlm.nih.gov/20346399/) - Review of the hippocampus as an index for distributed cortical memory.
- [Forgetting Curve](https://en.wikipedia.org/wiki/Forgetting_curve) - Ebbinghaus's model of retention loss over time.

## Storage and retrieval infrastructure

### Vector retrieval

- [Chroma](https://github.com/chroma-core/chroma) - Open-source embedding database designed for application development.
- [Qdrant](https://github.com/qdrant/qdrant) - Vector search engine with payload filtering, written in Rust.
- [Weaviate](https://github.com/weaviate/weaviate) - Vector database supporting vector, keyword, and hybrid search.
- [Milvus](https://github.com/milvus-io/milvus) - Distributed vector database for similarity search at scale.
- [pgvector](https://github.com/pgvector/pgvector) - Vector similarity-search extension for PostgreSQL.
- [Faiss](https://github.com/facebookresearch/faiss) - Library for dense-vector similarity search and clustering.

### Graph retrieval

- [Neo4j](https://github.com/neo4j/neo4j) - Graph database with the Cypher query language.
- [GraphRAG](https://github.com/microsoft/graphrag) - Pipeline for extracting graph structure and using it during retrieval.
- [Memgraph](https://github.com/memgraph/memgraph) - In-memory graph database for streaming and transactional workloads.
- [FalkorDB](https://github.com/FalkorDB/FalkorDB) - Graph database focused on low-latency knowledge-graph queries.

## Courses and reference material

### Courses

- [MIT 9.13: The Human Brain](https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/) - OpenCourseWare on functional organization of the human brain.
- [MIT 9.01: Introduction to Neuroscience](https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/) - Foundational neuroscience course covering learning and memory.
- [Computational Neuroscience](https://www.coursera.org/learn/computational-neuroscience) - University of Washington course on neural coding and computation.
- [Building and Evaluating Advanced RAG](https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag) - Course on retrieval, sentence-window methods, and evaluation.
- [Introduction to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph) - Course on stateful graph-based applications and agents.

### Reference material

- [LLM-powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) - Survey-style explanation of planning, memory, and tool use in agents.
- [Building LLM Applications for Production](https://huyenchip.com/2023/04/11/llm-engineering.html) - Engineering overview covering context and retrieval choices.
- [The Transmitter](https://www.thetransmitter.org/) - Neuroscience news, perspectives, and research resources.
- [BrainFacts](https://www.brainfacts.org/) - Public neuroscience material from the Society for Neuroscience.
- [Zettelkasten Overview](https://zettelkasten.de/overview/) - Guide to long-term linked-note practices.
- [Forte Labs](https://fortelabs.com/blog/) - Writing on personal knowledge management and external memory workflows.

## Workshops

- [L2M2](https://sites.google.com/view/memorization-workshop) - ACL 2025 workshop on memorization, privacy, unlearning, and controlled recall in language models.
- [From RAG to Long-Term Memory](https://sites.google.com/view/ltm-tutorial) - ACM SIGIR-AP 2025 tutorial on persistent memory for conversational agents.

## Contributing

Every entry must point to a specific primary source and use a factual description. Benchmark, adoption, and maturity claims need supporting evidence; affiliations must be disclosed.

Read [CONTRIBUTING.md](CONTRIBUTING.md), [suggest one resource](https://github.com/sir-ad/awesome-memory/issues/new?template=add-resource.yml), or join the [curation discussion](https://github.com/sir-ad/awesome-memory/discussions/3).

If this collection saves you research time, star it so other memory researchers and builders can find it.
