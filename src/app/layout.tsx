import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Salma Ouardi — ML Engineer",
  description:
    "ML Engineer specializing in NLP & LLMs. Building production AI systems at the intersection of language and intelligence.",
  keywords:
    "ML Engineer, NLP, LLMs, RAG, Python, AI, Machine Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVariables = [spaceGrotesk.variable, spaceMono.variable].join(" ");

  return (
    <html lang="en" className={`${fontVariables} lang-en`}>
      <body className="bg-base text-text-primary min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
