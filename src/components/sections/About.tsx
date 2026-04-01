"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "3", label: "Years Experience" },
  { value: "5+", label: "Production AI Systems" },
  { value: "10+ TB", label: "Data Processed" },
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
                I&apos;m a Paris-based ML engineer with 3 years of experience,
                and I love building stuff end-to-end. I&apos;m also a puzzle
                addict, the kind of person who says &quot;one last try&quot; and
                then notices it&apos;s 2:33am. Current side quest: build a whole
                computer. Haven&apos;t touched metal yet, but that chapter is
                loading ... I&apos;m fascinated by how the brain works and how
                nature designs elegant systems. I strongly believe human
                innovation keeps borrowing from nature&apos;s playbook.
                I&apos;m also into history and geopolitics, because context is
                everything.
              </span>
              <span className="lang-fr-text hidden">
                Je suis une ingénieure ML basée à Paris avec 3 ans
                d&apos;expérience, et j&apos;aime construire des choses de bout
                en bout. Je suis aussi accro aux puzzles, du genre &quot;encore
                un essai&quot; puis je remarque qu&apos;il est 2 h 33. Quête du
                moment : construire un ordinateur complet. Je n&apos;ai pas
                encore touché le métal, mais ce chapitre est en cours de
                chargement. Je suis fascinée par le fonctionnement du cerveau et
                par la manière dont la nature conçoit des systèmes élégants. Je
                crois fortement que l&apos;innovation humaine emprunte
                constamment à la nature. Je suis aussi passionnée
                d&apos;histoire et de géopolitique, parce que le contexte
                explique tout.
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
