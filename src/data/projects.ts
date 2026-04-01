import type { Project } from "@/data/types";

export const workProjects: Project[] = [
  {
    id: "aria",
    name: "ARIA",
    type: "work",
    company: "OnePoint × VINCI Construction",
    period: "2025–Present",
    description: {
      en: "Production Legal RAG system helping lawyers assess contractual risks in tenders and construction contracts.",
      fr: "Système RAG légal en production pour l'évaluation des risques contractuels dans les appels d'offres et contrats de construction.",
    },
    longDescription: {
      en: "ARIA is a production-grade Legal RAG system designed to assist lawyers at VINCI Construction in assessing contractual and tender-related risks. The system combines Elasticsearch retrieval with LLM orchestration and operates on an async Azure architecture.",
      fr: "ARIA est un système RAG légal en production conçu pour aider les juristes de VINCI Construction à évaluer les risques contractuels et liés aux appels d'offres.",
    },
    tags: ["RAG", "Elasticsearch", "Azure", "LangChain", "Promptflow"],
    highlights: {
      en: [
        "Led retrieval and answer robustness optimization for high-stakes legal documents",
        "Built async architecture: Azure Service Bus + Promptflow + Azure Functions",
        "Designed evaluation pipelines for legal reasoning precision",
      ],
      fr: [
        "Optimisation de la recherche et de la robustesse des réponses pour des documents juridiques à forts enjeux",
        "Construction d'une architecture asynchrone avec Azure Service Bus et Azure Functions",
        "Conception de pipelines d'évaluation pour améliorer la précision du raisonnement juridique",
      ],
    },
  },
  {
    id: "site-reporter",
    name: "Site Reporter",
    type: "work",
    company: "OnePoint × VINCI Construction",
    period: "2025",
    description: {
      en: "End-to-end AI assistant replacing manual construction site reporting. Workers speak, the system generates structured DOCX reports.",
      fr: "Assistant IA remplaçant les rapports manuels de chantier. Les opérateurs dictent, le système génère des rapports DOCX structurés.",
    },
    longDescription: {
      en: "Site Reporter is an AI MVP that replaces manual construction site report writing. Workers speak their observations; the system transcribes via Azure OpenAI, extracts structured data with Mistral LLM, and generates a formatted DOCX report via FastAPI.",
      fr: "Site Reporter est un MVP IA qui remplace la rédaction manuelle des rapports de chantier.",
    },
    tags: ["Azure OpenAI", "Mistral", "FastAPI", "Speech-to-text"],
    highlights: {
      en: [
        "Full voice → structured extraction → DOCX generation pipeline",
        "Modular system: Streamlit frontend + REST API + LLM services",
        "Validated with real domain users on construction sites",
      ],
      fr: [
        "Pipeline complète voix → texte structuré → DOCX",
        "Architecture modulaire : frontend Streamlit + API REST + services LLM",
        "Validé avec des utilisateurs métier sur de vrais chantiers",
      ],
    },
  },
  {
    id: "docuscore",
    name: "DocuScore",
    type: "work",
    company: "OnePoint",
    period: "2025",
    description: {
      en: "AI platform scoring document corpus RAG-readiness — detects duplicates, outliers, and structural anomalies at scale.",
      fr: "Plateforme IA évaluant la RAG-readiness des corpus documentaires — détection de doublons, anomalies et valeurs aberrantes à l'échelle.",
    },
    longDescription: {
      en: "DocuScore helps enterprises understand if their document corpus is ready for RAG deployment. It detects duplicates, outdated documents, and outliers using embedding similarity pipelines.",
      fr: "DocuScore aide les entreprises à comprendre si leur corpus documentaire est prêt pour un déploiement RAG.",
    },
    tags: ["Embeddings", "Vector Search", "Python", "FastAPI"],
    highlights: {
      en: [
        "Embedding + similarity pipelines for large-scale document evaluation",
        "Custom anomaly detection: duplicates, outdated docs, outliers",
        "Scoring algorithms for structure, quality, and retrieval suitability",
      ],
      fr: [
        "Pipelines d'embeddings et de similarité pour l'évaluation de documents à grande échelle",
        "Détection d'anomalies sur mesure : doublons, documents obsolètes et valeurs aberrantes",
        "Algorithmes de scoring pour la structure, la qualité et l'aptitude à la recherche",
      ],
    },
  },
];

export const personalProjects: Project[] = [
  {
    id: "arxiv-copilot",
    name: "ArXiv Research Copilot",
    type: "personal",
    period: "2025",
    description: {
      en: "Advanced RAG system for ArXiv paper search with semantic retrieval, citations, and multi-modal support.",
      fr: "Système RAG avancé pour la recherche d'articles ArXiv avec récupération sémantique, citations et support multi-modal.",
    },
    longDescription: {
      en: "A research copilot that lets you semantically search and query ArXiv papers. Built with LangChain, ChromaDB for vector storage, and OpenAI for generation.",
      fr: "Un copilote de recherche pour chercher et interroger sémantiquement des articles ArXiv.",
    },
    tags: ["RAG", "LangChain", "ChromaDB", "OpenAI", "FastAPI"],
    github: "https://github.com/SalmaOuardi/arxiv-research-copilot",
    highlights: {
      en: [
        "Semantic retrieval over ArXiv papers with ChromaDB vector store",
        "Citation tracking and source attribution in generated answers",
        "FastAPI backend with clean query interface",
      ],
      fr: [
        "Récupération sémantique sur des articles ArXiv avec ChromaDB",
        "Suivi des citations et attribution des sources",
        "Backend FastAPI avec interface de requête claire",
      ],
    },
  },
  {
    id: "mediguide",
    name: "MediGuide",
    type: "personal",
    period: "2024",
    description: {
      en: "Fully local RAG assistant answering medical queries from drug PDF documents — no API calls, no data leaves the machine.",
      fr: "Assistant RAG entièrement local répondant à des questions médicales depuis des PDFs — aucun appel API, aucune donnée ne quitte la machine.",
    },
    longDescription: {
      en: "MediGuide is a fully local RAG application that lets users ask questions about medications by querying actual drug PDF documents.",
      fr: "MediGuide est une application RAG entièrement locale qui permet de poser des questions sur des médicaments.",
    },
    tags: ["LangChain", "FAISS", "Ollama", "Docker", "CI/CD"],
    github: "https://github.com/SalmaOuardi/mediguide",
    highlights: {
      en: [
        "Fully local inference — zero data leaves the machine",
        "FAISS vector store for fast semantic retrieval",
        "Docker + GitHub Actions CI/CD pipeline",
      ],
      fr: [
        "Inférence entièrement locale — aucune donnée ne sort de la machine",
        "Stockage vectoriel FAISS pour une recherche sémantique rapide",
        "Pipeline CI/CD avec Docker et GitHub Actions",
      ],
    },
  },
  {
    id: "find-my-doc",
    name: "FindMyDoc",
    type: "personal",
    period: "2024",
    description: {
      en: "Intelligent medical query interpreter — classifies intent, extracts entities (symptoms, location, specialties), and links to structured data.",
      fr: "Interpréteur intelligent de requêtes médicales — classification d'intention, extraction d'entités, liaison aux données structurées.",
    },
    longDescription: {
      en: "FindMyDoc classifies user intent, extracts key medical entities, then links them to structured data using transformers and Elasticsearch.",
      fr: "FindMyDoc classifie l'intention utilisateur, extrait les entités médicales clés, puis les lie aux données structurées.",
    },
    tags: ["NER", "Transformers", "Elasticsearch", "GPT-4", "HuggingFace"],
    github: "https://github.com/SalmaOuardi/find_my_doc",
    highlights: {
      en: [
        "Intent classification + named entity recognition pipeline",
        "Compared Mistral 7B, LLaMA 3, GPT-4 for entity extraction",
        "Elasticsearch reranking for structured result matching",
      ],
      fr: [
        "Pipeline classification d'intention + reconnaissance d'entités",
        "Comparaison Mistral 7B, LLaMA 3, GPT-4 pour l'extraction",
        "Reranking Elasticsearch pour le matching structuré",
      ],
    },
  },
  {
    id: "langgraph-multiagent",
    name: "Multi-Agent System",
    type: "personal",
    period: "2025",
    description: {
      en: "Multi-agent system with intelligent tool routing, web search, calculations, and conversational memory. Production-ready architecture.",
      fr: "Système multi-agents avec routage intelligent, recherche web, calculs et mémoire conversationnelle.",
    },
    longDescription: {
      en: "A multi-agent system built with LangGraph featuring intelligent tool routing, web search, calculations, and conversational memory.",
      fr: "Un système multi-agents construit avec LangGraph, avec routage intelligent et mémoire conversationnelle.",
    },
    tags: ["LangGraph", "Agentic AI", "Mistral", "Ollama"],
    github: "https://github.com/SalmaOuardi/langgraph-multiagent",
    highlights: {
      en: [
        "StateGraph with conditional edges for dynamic tool routing",
        "Modular agent design with web search + calculator tools",
        "Fully local inference with Mistral 7B via Ollama",
      ],
      fr: [
        "StateGraph avec arêtes conditionnelles pour le routage dynamique",
        "Architecture modulaire avec outils recherche web + calculatrice",
        "Inférence locale avec Mistral 7B via Ollama",
      ],
    },
  },
];

export const projects: Project[] = [...workProjects, ...personalProjects];
