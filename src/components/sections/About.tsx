"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "3", label: "Years in ML" },
  { value: "NLP & LLMs", label: "Focus" },
  { value: "Healthcare & Legal", label: "Domains" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-text-muted mb-4"
        >
          {"// 01. about"}
        </motion.p>

        {/* Section title */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          About Me
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </motion.h2>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — photo + text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-card">
                <Image
                  src="/images/me-real2.jpg"
                  alt="Portrait of Salma Ouardi"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed">
              <span className="lang-en-text">
                I&apos;m a Paris-based ML engineer working on NLP and LLM
                systems. At OnePoint, I build legal and construction AI —
                RAG pipelines, evaluation, and retrieval optimization for
                systems used by real end users. Before that, I was part of
                the NLP team at Ryte AI (healthtech), where I contributed to
                entity extraction, intent classification, and data pipelines.
                I&apos;m still early in my career and learning a lot — what I
                care most about is building things that actually work in
                production, not just in notebooks.
              </span>
              <span className="lang-fr-text hidden">
                Je suis ingénieure ML basée à Paris, spécialisée en NLP et
                LLMs. Chez OnePoint, je travaille sur des systèmes IA
                juridiques et chantier — pipelines RAG, évaluation et
                optimisation du retrieval pour des utilisateurs réels. Avant,
                j&apos;ai fait partie de l&apos;équipe NLP de Ryte AI
                (healthtech), où j&apos;ai contribué à l&apos;extraction
                d&apos;entités, la classification d&apos;intention et les
                pipelines de données. Je suis encore au début de ma carrière
                et j&apos;apprends beaucoup — ce qui m&apos;importe le plus,
                c&apos;est de construire des choses qui fonctionnent vraiment
                en production, pas seulement dans des notebooks.
              </span>
            </p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start"
          >
            <div className="w-full bg-card border border-white/[0.06] rounded-xl p-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
