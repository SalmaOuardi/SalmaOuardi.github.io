export type Lang = { en: string; fr: string };

export type Project = {
  id: string;
  name: string;
  type: "work" | "personal";
  company?: string;
  period?: string;
  description: Lang;
  longDescription: Lang;
  tags: string[];
  github?: string;
  demo?: string;
  highlights: { en: string[]; fr: string[] };
};

export type ExperienceEntry = {
  company: string;
  companyShort: string;
  role: Lang;
  location: string;
  period: string;
  periodFr: string;
  description: Lang;
  projects: {
    name: string;
    description: Lang;
    bullets: Lang[];
    tags: string[];
  }[];
};

export type SkillCategory = {
  name: Lang;
  skills: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
};

export type EducationEntry = {
  institution: string;
  degree: Lang;
  year: string;
  location: string;
  flag: string;
};