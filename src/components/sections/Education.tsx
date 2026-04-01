"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";

const education = [
  {
    institution: "Université Paris-Saclay",
    degree: {
      en: "MSc in Artificial Intelligence",
      fr: "Master en Intelligence Artificielle",
    },
    year: "2023",
    location: "Paris, France",
    detail: {
      en: "Specialization: NLP, ML, Deep Learning",
      fr: "Spécialisation : NLP, ML, Deep Learning",
    },
    focus: {
      en: ["Machine Learning", "Deep Learning", "NLP"],
      fr: ["Machine Learning", "Deep Learning", "NLP"],
    },
  },
  {
    institution: "Ecole des Sciences de l'Information",
    degree: {
      en: "Engineering Degree in Data & Knowledge",
      fr: "Diplôme d'Ingénieur en Data & Knowledge",
    },
    year: "2022",
    location: "Rabat, Morocco",
    detail: {
      en: "Major: Data Engineering & Knowledge Systems",
      fr: "Majeure : Data Engineering & Knowledge Systems",
    },
    focus: {
      en: ["Data Engineering", "Knowledge Systems", "Distributed Data"],
      fr: ["Data Engineering", "Systèmes de Connaissances", "Données Distribuées"],
    },
  },
];

export default function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-[#64748b] mb-4">
          {"// 05. education"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {lang === "fr" ? "Formation" : "Education"}
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group relative overflow-hidden bg-card border border-white/5 rounded-2xl p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-[#0a0a0f] flex items-center justify-center text-accent shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="px-2 py-1 rounded-md bg-[#0a0a0f] border border-white/10 text-[11px] font-mono text-text-muted">
                    E{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mt-4">
                  {item.institution}
                </h3>
                <p className="mt-2 text-text-secondary">{item.degree[lang]}</p>

                <div className="mt-4 flex flex-wrap gap-3 text-sm font-mono text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-accent" />
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent" />
                    {item.location}
                  </span>
                </div>

                <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                  {item.detail[lang]}
                </p>

                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted inline-flex items-center gap-1.5">
                    <Sparkles size={12} className="text-accent" />
                    {lang === "fr" ? "Axes clés" : "Focus Areas"}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.focus[lang].map((topic) => (
                      <span
                        key={`${item.institution}-${topic}`}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0a0a0f] border border-white/10 text-text-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
