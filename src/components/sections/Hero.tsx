"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Github, Linkedin } from "lucide-react";

const roles = ["ML Engineer", "NLP Engineer", "LLM Builder", "Systems Builder"];

const floatingSnippets = [
  { text: "import torch", top: "10%", left: "5%", delay: 0 },
  { text: "def train():", top: "20%", right: "8%", delay: 2 },
  { text: "model.fit()", top: "60%", left: "3%", delay: 4 },
  { text: "{ }", top: "75%", right: "5%", delay: 6 },
  { text: "loss.backward()", top: "40%", left: "8%", delay: 1 },
  { text: "pip install", top: "85%", right: "12%", delay: 3 },
  { text: "torch.nn", top: "15%", right: "20%", delay: 5 },
  { text: "optimizer.step()", top: "50%", right: "3%", delay: 7 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.slice(0, displayText.length - 1)
          : currentRole.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating code snippets */}
      {floatingSnippets.map((snippet, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-sm text-white pointer-events-none select-none"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            opacity: 0.05,
          }}
          animate={{ y: [0, -100] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "loop",
            delay: snippet.delay,
            ease: "linear",
          }}
        >
          {snippet.text}
        </motion.span>
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text-secondary text-lg mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Salma Ouardi
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 mb-8"
        >
          <span className="text-xl md:text-2xl font-mono text-accent">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10"
        >
          <span className="lang-en-text">
            ML Engineer focused on NLP &amp; LLMs. I build retrieval and
            language systems that go from prototype to production — used by
            lawyers, doctors, and construction teams.
          </span>
          <span className="lang-fr-text hidden">
            Ingénieure ML spécialisée en NLP et LLMs. Je construis des
            systèmes de retrieval et de langage qui passent du prototype à la
            production — utilisés par des juristes, médecins et équipes de
            chantier.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:bg-accent-dim text-white font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/docs/Salma OUARDI CV.pdf"
            download="Salma OUARDI CV.pdf"
            className="px-6 py-3 border border-white/10 hover:border-accent text-text-secondary hover:text-accent rounded-lg transition-all duration-200"
          >
            Download CV
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/SalmaOuardi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/salma-ouardi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://curius.app/salma-ouardi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curius bookshelf"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <BookOpen size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
