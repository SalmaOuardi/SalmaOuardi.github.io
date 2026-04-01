import type { ExperienceEntry } from "@/data/types";

export const experiences: ExperienceEntry[] = [
  {
    company: "OnePoint",
    companyShort: "OP",
    role: {
      en: "Machine Learning Engineer — AI Department",
      fr: "Ingénieure Machine Learning — Département IA",
    },
    location: "Paris, France",
    period: "Sep 2025 – Present",
    periodFr: "Sep 2025 – Présent",
    description: {
      en: "Building production-grade AI systems for enterprise clients at a leading digital transformation consultancy.",
      fr: "Conception de systèmes IA en production pour des clients entreprise au sein d'un cabinet de conseil en transformation digitale.",
    },
    projects: [
      {
        name: "ARIA — Legal Risk Assessment RAG",
        description: {
          en: "Production Legal RAG system supporting contractual and tender risk assessment for VINCI Construction.",
          fr: "Système RAG légal en production pour l'évaluation des risques contractuels et d'appels d'offres chez VINCI Construction.",
        },
        bullets: [
          {
            en: "Led optimization of ARIA, a production Legal RAG system assisting lawyers in assessing contractual and tender-related risks",
            fr: "Piloté l'optimisation d'ARIA, un système RAG légal en production aidant les juristes à évaluer les risques contractuels et liés aux appels d'offres",
          },
          {
            en: "Improved retrieval and answer robustness using Elasticsearch + LLM orchestration for high-stakes legal document analysis",
            fr: "Amélioration de la robustesse de la recherche et des réponses via Elasticsearch et l'orchestration de LLMs pour l'analyse de documents juridiques à forts enjeux",
          },
          {
            en: "Strengthened reliability and traceability across async architecture (Azure Service Bus, Promptflow, Azure Functions)",
            fr: "Renforcement de la fiabilité et de la traçabilité d'une architecture asynchrone basée sur Azure Service Bus, Promptflow et Azure Functions",
          },
          {
            en: "Built evaluation pipelines to improve response precision in legal reasoning contexts",
            fr: "Construction de pipelines d'évaluation pour améliorer la précision des réponses dans des contextes de raisonnement juridique",
          },
        ],
        tags: [
          "RAG",
          "Elasticsearch",
          "Azure Service Bus",
          "Azure Functions",
          "Promptflow",
          "LangChain",
          "Python",
        ],
      },
      {
        name: "Site Reporter — Voice-to-Report AI Assistant",
        description: {
          en: "AI assistant converting spoken site observations into structured construction reports.",
          fr: "Assistant IA transformant des observations vocales de chantier en rapports structurés.",
        },
        bullets: [
          {
            en: "Designed and built an end-to-end AI MVP replacing manual construction site reporting",
            fr: "Conçu et développé un MVP IA de bout en bout remplaçant la rédaction manuelle des rapports de chantier",
          },
          {
            en: "Built full voice-to-report pipeline: Azure OpenAI speech-to-text → Mistral LLM extraction → DOCX via FastAPI",
            fr: "Construction d'une pipeline complète voix-vers-rapport : speech-to-text Azure OpenAI → extraction par LLM Mistral → génération DOCX via FastAPI",
          },
          {
            en: "Architected modular system: Streamlit frontend + REST API + LLM services",
            fr: "Architecture d'un système modulaire : frontend Streamlit + API REST + services LLM",
          },
          {
            en: "Automated full workflow and validated output quality with domain users",
            fr: "Automatisation du workflow complet et validation de la qualité des livrables avec les utilisateurs métier",
          },
        ],
        tags: [
          "Azure OpenAI",
          "Mistral",
          "FastAPI",
          "Streamlit",
          "Speech-to-text",
          "Python",
        ],
      },
      {
        name: "DocuScore — Enterprise RAG Readiness Platform",
        description: {
          en: "Platform evaluating document corpora for enterprise RAG readiness and anomaly detection.",
          fr: "Plateforme évaluant la préparation de corpus documentaires pour le RAG en entreprise et la détection d'anomalies.",
        },
        bullets: [
          {
            en: "Built AI platform scoring RAG-readiness of document corpora and detecting anomalies (duplicates, outdated docs, outliers)",
            fr: "Construction d'une plateforme IA évaluant la RAG-readiness de corpus documentaires et détectant les anomalies (doublons, documents obsolètes, valeurs aberrantes)",
          },
          {
            en: "Designed embedding + similarity pipelines for large-scale document evaluation",
            fr: "Conception de pipelines d'embeddings et de similarité pour l'évaluation de documents à grande échelle",
          },
          {
            en: "Implemented custom scoring algorithms to assess document structure, quality, and retrieval suitability",
            fr: "Implémentation d'algorithmes de scoring sur mesure pour évaluer la structure, la qualité et l'aptitude à la recherche des documents",
          },
        ],
        tags: ["Embeddings", "Similarity Search", "RAG", "Python", "Vector Search"],
      },
    ],
  },
  {
    company: "Ryte AI",
    companyShort: "RA",
    role: {
      en: "Machine Learning Engineer — NLP & LLMs in Healthcare",
      fr: "Ingénieure Machine Learning — NLP & LLMs en Santé",
    },
    location: "Paris, France",
    period: "Sep 2023 – Mar 2025",
    periodFr: "Sep 2023 – Mar 2025",
    description: {
      en: "First ML hire at a HealthTech startup building AI-powered patient-provider matching and medical NLP systems.",
      fr: "Première recrue ML d'une startup HealthTech construisant des systèmes de matching patient-médecin et de NLP médical.",
    },
    projects: [
      {
        name: "Key Achievements",
        description: {
          en: "Built the startup's core medical NLP, LLM, and large-scale data pipelines.",
          fr: "Construction des systèmes centraux de NLP médical, de LLMs et de pipelines data à grande échelle de la startup.",
        },
        bullets: [
          {
            en: "Built transformer intent classification (RoBERTa) on synthetic medical queries; deployed to Vertex AI with >90% accuracy",
            fr: "Construction d'un classifieur d'intention par transformer (RoBERTa) sur des requêtes médicales synthétiques ; déployé sur Vertex AI avec plus de 90 % de précision",
          },
          {
            en: "Created multi-strategy entity extraction pipeline: LLaMA 3 + Mistral 7B + spaCy NER, with span-level F1 tracking",
            fr: "Création d'une pipeline d'extraction d'entités multi-stratégies : LLaMA 3 + Mistral 7B + NER spaCy, avec suivi du F1 au niveau des spans",
          },
          {
            en: "Developed semantic entity linking using BioLORD embeddings + cross-encoder reranking",
            fr: "Développement d'un système de liaison sémantique d'entités avec embeddings BioLORD et reranking par cross-encoder",
          },
          {
            en: "Curated 1,000+ synthetic medical questions with GPT-assisted generation + Prodigy annotation",
            fr: "Constitution d'un jeu de plus de 1 000 questions médicales synthétiques via génération assistée par GPT et annotation avec Prodigy",
          },
          {
            en: "Reworked entity resolution pipeline: F1 77% → 98%, runtime 3 days → ~1 hour (fuzzy logic + TF-IDF + heuristics)",
            fr: "Refonte de la pipeline de résolution d'entités : F1 de 77 % à 98 %, temps de calcul de 3 jours à environ 1 heure (logique floue, TF-IDF et heuristiques)",
          },
          {
            en: "Engineered Spark pipelines (~10+ TB) with Scala UDFs on Azure Databricks",
            fr: "Conception de pipelines Spark (~10+ To) avec des UDF Scala sur Azure Databricks",
          },
          {
            en: "Set up CI/CD on Azure DevOps; managed experiment tracking with MLflow + DVC; optimized inference with vLLM + AWQ",
            fr: "Mise en place de la CI/CD sur Azure DevOps ; gestion du suivi d'expériences avec MLflow et DVC ; optimisation de l'inférence avec vLLM et AWQ",
          },
        ],
        tags: [
          "RoBERTa",
          "LLaMA 3",
          "Mistral 7B",
          "spaCy",
          "Vertex AI",
          "BioLORD",
          "Spark",
          "Azure Databricks",
          "MLflow",
          "DVC",
          "vLLM",
        ],
      },
    ],
  },
  {
    company: "Orange",
    companyShort: "OR",
    role: {
      en: "Data Scientist Intern — GCP & Complaint Classification",
      fr: "Stagiaire Data Scientist — GCP & Classification de Réclamations",
    },
    location: "Paris, France",
    period: "Mar 2023 – Sep 2023",
    periodFr: "Mar 2023 – Sep 2023",
    description: {
      en: "Worked on complaint classification and scalable prediction workflows on Google Cloud.",
      fr: "Travail sur la classification de réclamations et des workflows de prédiction scalables sur Google Cloud.",
    },
    projects: [
      {
        name: "Key Achievements",
        description: {
          en: "Built and operationalized a customer complaint classification workflow on GCP.",
          fr: "Construit et industrialisé un workflow de classification de réclamations clients sur GCP.",
        },
        bullets: [
          {
            en: "Built customer complaint classification model (Vertex AI + BigQuery): ~86% precision, ~75% recall",
            fr: "Construction d'un modèle de classification de réclamations clients (Vertex AI + BigQuery) : environ 86 % de précision et 75 % de rappel",
          },
          {
            en: "Applied active learning on 200K+ unlabeled records to boost model performance iteratively",
            fr: "Application d'active learning sur plus de 200 000 enregistrements non étiquetés pour améliorer itérativement les performances du modèle",
          },
          {
            en: "Designed scalable GCP prediction pipeline (BigQuery + Cloud Functions): 1,000 records in under 2 min",
            fr: "Conception d'une pipeline de prédiction scalable sur GCP (BigQuery + Cloud Functions) : 1 000 enregistrements traités en moins de 2 minutes",
          },
          {
            en: "Facilitated data science knowledge transfer through internal presentations and training sessions",
            fr: "Animation du transfert de connaissances data science via des présentations internes et des sessions de formation",
          },
        ],
        tags: [
          "GCP",
          "Vertex AI",
          "BigQuery",
          "Cloud Functions",
          "Active Learning",
          "Python",
        ],
      },
    ],
  },
];
