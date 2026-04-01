"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Briefcase, Code2 } from "lucide-react";
import { useLang } from "@/lib/lang";
import { workProjects, personalProjects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const { lang } = useLang();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-sm text-text-muted mb-4"
        >
          {"// 04. projects"}
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {lang === "fr" ? "Projets" : "Projects"}
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-text-secondary max-w-2xl mb-16 leading-relaxed"
        >
          <span className="lang-en-text">
            Production systems I&apos;ve built at work, and side projects where I
            explore ideas end-to-end.
          </span>
          <span className="lang-fr-text hidden">
            Systèmes en production que j&apos;ai construits au travail, et projets
            perso où j&apos;explore des idées de bout en bout.
          </span>
        </motion.p>

        {/* ── Work Projects ── */}
        <div className="mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Briefcase size={16} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">
              {lang === "fr" ? "Projets professionnels" : "Work"}
            </h3>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <div className="space-y-6">
            {workProjects.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-white/5 rounded-2xl p-8 hover:border-accent/20 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  {/* Left: info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="text-2xl font-bold text-text-primary">
                        {project.name}
                      </h4>
                      {project.period && (
                        <span className="text-xs font-mono text-text-muted bg-white/5 px-2.5 py-1 rounded-full">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {project.company && (
                      <p className="text-sm font-mono text-accent/80 mb-4">
                        {project.company}
                      </p>
                    )}

                    <p className="text-text-secondary leading-relaxed mb-5">
                      {project.description[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-base border border-white/[0.06] text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: highlights */}
                  <div className="lg:w-[340px] shrink-0 mt-6 lg:mt-0 lg:border-l lg:border-white/5 lg:pl-10">
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                      {lang === "fr" ? "Points clés" : "Highlights"}
                    </p>
                    <ul className="space-y-3">
                      {project.highlights[lang].map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Personal Projects ── */}
        <div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Code2 size={16} className="text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">
              {lang === "fr" ? "Projets personnels" : "Personal"}
            </h3>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalProjects.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-white/5 rounded-xl p-6 flex flex-col hover:border-accent/20 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-lg font-semibold text-text-primary leading-snug">
                    {project.name}
                  </h4>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-text-muted hover:text-accent transition-colors"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                {project.period && (
                  <p className="text-xs font-mono text-text-muted mb-3">
                    {project.period}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description[lang]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-base border border-white/[0.06] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                {project.github && (
                  <div className="pt-3 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dim transition-colors"
                    >
                      <ExternalLink size={13} />
                      {lang === "fr" ? "Voir le code" : "View source"}
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
