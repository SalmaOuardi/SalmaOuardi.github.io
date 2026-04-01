"use client";

import { useEffect, useState } from "react";

export type Lang = "en" | "fr";

const DEFAULT_LANG: Lang = "en";

function normalizeLang(value: string | null): Lang {
  return value === "fr" ? "fr" : "en";
}

function applyLangClass(lang: Lang) {
  document.documentElement.classList.remove("lang-en", "lang-fr");
  document.documentElement.classList.add(`lang-${lang}`);
}

export function getLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  return normalizeLang(localStorage.getItem("lang"));
}

export function setLang(lang: Lang) {
  if (typeof window === "undefined") return;
  localStorage.setItem("lang", lang);
  applyLangClass(lang);
  window.dispatchEvent(new Event("langchange"));
}

export function t(obj: { en: string; fr: string }, lang: Lang): string {
  return obj[lang];
}

export function useLang() {
  const [lang, setCurrentLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const syncLang = (nextLang: Lang) => {
      setCurrentLang(nextLang);
      applyLangClass(nextLang);
    };

    syncLang(getLang());

    const handleLangChange = () => {
      syncLang(getLang());
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "lang") {
        syncLang(normalizeLang(event.newValue));
      }
    };

    window.addEventListener("langchange", handleLangChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("langchange", handleLangChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return {
    lang,
    setLang,
    t: (obj: { en: string; fr: string }) => t(obj, lang),
  };
}
