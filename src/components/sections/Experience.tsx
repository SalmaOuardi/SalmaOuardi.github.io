"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "@/lib/lang";

type LangText = {
  en: string;
  fr: string;
};

type Project = {
  title: string;
  description: LangText;
  impact?: LangText;
  tags: string[];
};

type Company = {
  initials: string;
  name: string;
  monogramClass: string;
  period: LangText;
  role: LangText;
  location: string;
  summary: LangText;
  techStack: string[];
  projects?: Project[];
  achievements?: LangText[];
};

const companies: Company[] = [
  {
    initials: "OP",
    name: "OnePoint",
    monogramClass:
      "text-rose-200 border-rose-400/30 bg-gradient-to-br from-rose-500/25 to-pink-500/15",
    period: { en: "Sep 2025 - Present", fr: "Sep 2025 - Présent" },
    role: {
      en: "Machine Learning Engineer — AI Department",
      fr: "Ingénieure Machine Learning — Département IA",
    },
    location: "Paris, France",
    summary: {
      en: "Building production AI products for legal, construction, and document intelligence workflows.",
      fr: "Conception de produits IA en production pour des workflows juridiques, chantier et intelligence documentaire.",
    },
    techStack: [
      "FastAPI",
      "Azure OpenAI",
      "Mistral",
      "RAG",
      "Elasticsearch",
      "Promptflow",
      "Azure Functions",
      "Service Bus",
    ],
    projects: [
      {
        title: "ARIA",
        description: {
          en: "Built a legal assistant using advanced retrieval with grounded citations over large legal corpora.",
          fr: "Conçu un assistant juridique avec récupération avancée et citations vérifiables sur des corpus légaux volumineux.",
        },
        impact: {
          en: "Improved reliability and traceability for high-stakes legal analysis.",
          fr: "Amélioration de la fiabilité et de la traçabilité pour l'analyse juridique à forts enjeux.",
        },
        tags: ["RAG", "Elasticsearch", "Promptflow", "Evaluation"],
      },
      {
        title: "Site Reporter",
        description: {
          en: "Designed a voice-to-report assistant that turns field notes into structured site reports for construction teams.",
          fr: "Développé un assistant voix-vers-rapport transformant des notes terrain en rapports structurés pour les équipes de chantier.",
        },
        impact: {
          en: "Shipped an end-to-end pipeline from STT to DOCX generation with human-in-the-loop options.",
          fr: "Livraison d'une pipeline de bout en bout du STT à la génération DOCX avec options human-in-the-loop.",
        },
        tags: ["Speech-to-Text", "FastAPI", "Streamlit", "Automation"],
      },
      {
        title: "DocuScore",
        description: {
          en: "Implemented a document scoring engine to prioritize incomplete or high-risk files with model signals and business rules.",
          fr: "Implémenté un moteur de scoring documentaire pour prioriser les dossiers incomplets ou à risque avec signaux modèles et règles métier.",
        },
        impact: {
          en: "Made corpus quality and retrieval-readiness measurable before production rollout.",
          fr: "Rendu mesurable la qualité de corpus et la readiness retrieval avant mise en production.",
        },
        tags: ["Embeddings", "Similarity Search", "Scoring", "Python"],
      },
    ],
  },
  {
    initials: "RA",
    name: "Ryte AI",
    monogramClass:
      "text-indigo-200 border-indigo-400/30 bg-gradient-to-br from-indigo-500/25 to-violet-500/15",
    period: { en: "Sep 2023 - Mar 2025", fr: "Sep 2023 - Mar 2025" },
    role: {
      en: "Machine Learning Engineer — NLP & LLMs in Healthcare",
      fr: "Ingénieure Machine Learning — NLP & LLMs en Santé",
    },
    location: "Paris, France",
    summary: {
      en: "Built healthcare AI systems from modeling to deployment, evaluation, and data pipelines at scale.",
      fr: "Construction de systèmes IA santé du modeling au déploiement, à l'évaluation et aux pipelines data à grande échelle.",
    },
    techStack: [
      "RoBERTa",
      "LLaMA 3",
      "Mistral 7B",
      "spaCy",
      "Vertex AI",
      "Azure Databricks",
      "MLflow",
      "DVC",
    ],
    achievements: [
      {
        en: "Transformer intent classification (RoBERTa), >90% accuracy on Vertex AI",
        fr: "Classification d'intentions par Transformer (RoBERTa), >90% de précision sur Vertex AI",
      },
      {
        en: "Multi-strategy entity extraction: LLaMA 3 + Mistral 7B + spaCy NER",
        fr: "Extraction d'entités multi-stratégie : LLaMA 3 + Mistral 7B + spaCy NER",
      },
      {
        en: "Semantic entity linking: BioLORD embeddings + cross-encoder reranking",
        fr: "Liage sémantique d'entités : embeddings BioLORD + reranking cross-encoder",
      },
      {
        en: "Entity resolution rework: F1 77% -> 98%, runtime 3 days -> ~1 hour",
        fr: "Refonte d'entity resolution : F1 77% -> 98%, temps de calcul de 3 jours -> ~1 heure",
      },
      {
        en: "Spark data pipelines ~10+ TB on Azure Databricks with Scala UDFs",
        fr: "Pipelines de données Spark (~10+ To) sur Azure Databricks avec UDFs Scala",
      },
      {
        en: "CI/CD on Azure DevOps; MLflow + DVC tracking; vLLM + AWQ inference",
        fr: "CI/CD sur Azure DevOps ; suivi MLflow + DVC ; inférence vLLM + AWQ",
      },
    ],
  },
  {
    initials: "OR",
    name: "Orange",
    monogramClass:
      "text-orange-200 border-orange-400/35 bg-gradient-to-br from-orange-500/25 to-amber-500/20",
    period: { en: "Mar 2023 - Sep 2023", fr: "Mar 2023 - Sep 2023" },
    role: {
      en: "Data Scientist Intern — GCP & Complaint Classification",
      fr: "Stagiaire Data Scientist — GCP & Classification de Réclamations",
    },
    location: "Paris, France",
    summary: {
      en: "Built cloud-based classification workflows and active-learning loops for telecom complaint analysis.",
      fr: "Construction de workflows cloud de classification et de boucles d'active learning pour l'analyse de réclamations télécom.",
    },
    techStack: [
      "GCP",
      "Vertex AI",
      "BigQuery",
      "Cloud Functions",
      "Active Learning",
      "Python",
    ],
    achievements: [
      {
        en: "Complaint classification (Vertex AI + BigQuery): ~86% precision, ~75% recall",
        fr: "Classification de réclamations (Vertex AI + BigQuery) : ~86% de précision, ~75% de rappel",
      },
      {
        en: "Active learning on 200K+ unlabeled records",
        fr: "Mise en place d'active learning sur plus de 200K enregistrements non annotés",
      },
      {
        en: "GCP prediction pipeline: 1,000 records in under 2 minutes",
        fr: "Pipeline de prédiction GCP : 1 000 enregistrements traités en moins de 2 minutes",
      },
    ],
  },
];

export default function Experience() {
  const { lang } = useLang();
  const [openCompany, setOpenCompany] = useState<string>(companies[0].name);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-[#64748b] mb-4">
          {"// 02. experience"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {lang === "fr" ? "Expérience" : "Experience"}
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </h2>

        <div className="relative pl-12 md:pl-16">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent to-transparent" />

          <div className="space-y-6">
            {companies.map((company) => {
              const expanded = openCompany === company.name;

              return (
                <div key={company.name} className="relative">
                  <span className="absolute left-4 top-8 -translate-x-1/2 z-20">
                    <span className="absolute -inset-[6px] rounded-full border border-accent/40 animate-ping" />
                    <span className="relative block w-2 h-2 rounded-full bg-accent" />
                  </span>

                  <article className="bg-[#111118] border border-white/5 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenCompany(expanded ? "" : company.name)}
                      aria-expanded={expanded}
                      className="w-full text-left p-5 md:p-6 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-start gap-4 md:gap-5">
                        <div
                          className={`relative w-12 h-12 rounded-xl border font-semibold tracking-[0.22em] text-[11px] leading-none flex items-center justify-center shrink-0 ${company.monogramClass}`}
                        >
                          <span className="pl-[0.22em]">{company.initials}</span>
                          <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-current opacity-70" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-[#e2e8f0]">
                            {company.name}
                          </h3>
                          <p className="text-[#94a3b8] mt-1">
                            {company.role[lang]}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-[#64748b]">
                            <span>{company.period[lang]}</span>
                            <span className="text-white/20">•</span>
                            <span>{company.location}</span>
                          </div>
                          <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
                            {company.summary[lang]}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {company.techStack.map((tech) => (
                              <span
                                key={`${company.name}-${tech}`}
                                className="px-2 py-1 text-[11px] md:text-xs font-mono bg-[#0a0a0f] border border-white/10 rounded-md text-[#94a3b8]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-[#64748b] pt-1">
                          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          key={`${company.name}-content`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 md:px-6 md:pb-6 space-y-4 border-t border-white/5">
                            {company.projects?.map((project) => (
                              <div
                                key={project.title}
                                className="bg-[#0a0a0f] border border-white/5 rounded-lg p-4"
                              >
                                <h4 className="font-semibold text-[#e2e8f0] text-sm md:text-base">
                                  {project.title}
                                </h4>
                                <p className="text-[#94a3b8] mt-2 text-sm leading-relaxed">
                                  {project.description[lang]}
                                </p>
                                {project.impact && (
                                  <p className="mt-2 text-sm text-[#cbd5e1]">
                                    {project.impact[lang]}
                                  </p>
                                )}
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {project.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-1 text-xs font-mono bg-[#111118] border border-white/10 rounded-md text-[#64748b]"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {company.achievements && (
                              <div className="bg-[#0a0a0f] border border-white/5 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-[#e2e8f0] mb-3">
                                  {lang === "fr" ? "Impacts Clés" : "Impact Highlights"}
                                </h4>
                                <ul className="space-y-2">
                                  {company.achievements.map((item, index) => (
                                    <li
                                      key={index}
                                      className="text-[#94a3b8] flex items-start gap-2 text-sm leading-relaxed"
                                    >
                                      <span className="text-accent mt-[7px] text-xs">
                                        ●
                                      </span>
                                      <span>{item[lang]}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
