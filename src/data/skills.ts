import type { SkillCategory } from "@/data/types";

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Core Languages", fr: "Langages Principaux" },
    skills: [
      { name: "Python", level: 5 },
      { name: "SQL", level: 4 },
      { name: "Bash", level: 4 },
      { name: "Linux", level: 3 },
    ],
  },
  {
    name: { en: "ML & Deep Learning", fr: "ML & Deep Learning" },
    skills: [
      { name: "PyTorch", level: 4 },
      { name: "Scikit-learn", level: 5 },
      { name: "Transformers/HuggingFace", level: 5 },
      { name: "Probabilistic Modeling", level: 3 },
    ],
  },
  {
    name: { en: "LLM & NLP", fr: "LLM & NLP" },
    skills: [
      { name: "RAG", level: 5 },
      { name: "LangChain", level: 5 },
      { name: "LangGraph", level: 4 },
      { name: "spaCy", level: 4 },
      { name: "LLaMA/Mistral", level: 4 },
      { name: "Embeddings", level: 5 },
      { name: "Elasticsearch", level: 4 },
      { name: "Prompt Engineering", level: 5 },
      { name: "GPT APIs", level: 5 },
    ],
  },
  {
    name: { en: "MLOps & Deployment", fr: "MLOps & Déploiement" },
    skills: [
      { name: "MLflow", level: 4 },
      { name: "DVC", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "FastAPI", level: 5 },
      { name: "vLLM", level: 4 },
      { name: "AWQ", level: 3 },
      { name: "CI/CD", level: 4 },
    ],
  },
  {
    name: { en: "Cloud & Data", fr: "Cloud & Données" },
    skills: [
      { name: "GCP-VertexAI", level: 4 },
      { name: "GCP-BigQuery", level: 4 },
      { name: "Azure-Databricks", level: 4 },
      { name: "Azure-DevOps", level: 4 },
      { name: "Azure-OpenAI", level: 5 },
      { name: "Apache Spark", level: 4 },
      { name: "Airflow", level: 3 },
      { name: "PySpark", level: 4 },
    ],
  },
];
