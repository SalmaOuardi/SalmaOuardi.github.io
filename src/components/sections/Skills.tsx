"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";

type Category = {
  label: { en: string; fr: string };
  skills: string[];
};

const categories: Category[] = [
  {
    label: { en: "Core", fr: "Fondamentaux" },
    skills: ["Python", "SQL", "Bash", "Linux"],
  },
  {
    label: { en: "LLM & NLP", fr: "LLM & NLP" },
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Embeddings",
      "spaCy",
      "Elasticsearch",
    ],
  },
  {
    label: { en: "ML / Deep Learning", fr: "ML / Deep Learning" },
    skills: ["PyTorch", "Transformers", "HuggingFace", "Scikit-learn"],
  },
  {
    label: { en: "Models", fr: "Modèles" },
    skills: ["GPT-4o", "Mistral 7B", "LLaMA 3", "RoBERTa"],
  },
  {
    label: { en: "MLOps & Infra", fr: "MLOps & Infra" },
    skills: ["FastAPI", "Docker", "MLflow", "DVC", "vLLM", "CI/CD"],
  },
  {
    label: { en: "Cloud", fr: "Cloud" },
    skills: [
      "Azure OpenAI",
      "Azure Databricks",
      "GCP Vertex AI",
      "BigQuery",
      "Spark",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-sm text-text-muted mb-4"
        >
          {"// 03. skills"}
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          {lang === "fr" ? "Compétences" : "Skills"}
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.label.en}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-white/5 rounded-xl p-5"
            >
              <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                {category.label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-sm font-mono rounded-md bg-base border border-white/[0.06] text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
