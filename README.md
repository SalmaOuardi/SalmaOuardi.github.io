# Salma Ouardi Portfolio

Modern portfolio website built with Next.js (App Router), Tailwind CSS, and a file-based Markdown blog.

## Tech Stack

- Next.js 14 (App Router, static export)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Markdown blog pipeline with:
  - `gray-matter` (frontmatter)
  - `react-markdown` + `remark-gfm`
  - `reading-time`

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Run

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

### Build

```bash
npm run build
```

This project is configured with `output: "export"` in `next.config.js`, so the static site is generated in `out/`.

## Project Structure

```text
src/
  app/
    page.tsx                # Home page sections
    blog/page.tsx           # Writing archive
    blog/[slug]/page.tsx    # Individual article page
  components/
    Navbar.tsx
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx
      Skills.tsx
      Projects.tsx
      Education.tsx
      Blog.tsx
  data/                     # Structured content for projects/experience/etc.
  lib/
    blog.ts                 # Markdown post loader/parser
content/
  blog/                     # Markdown blog posts
    _TEMPLATE.md
```

## Content Editing

### Update portfolio sections

- Hero/About/Experience/Skills/Education:
  - edit files under `src/components/sections/`
- Project cards content:
  - edit `src/data/projects.ts`

### Update colors

- Accent themes are controlled from the navbar color picker.
- Theme variables are defined in `src/app/globals.css` (`.theme-violet`, `.theme-teal`, etc.).

## Blog Authoring Workflow

Blog posts are Markdown files in `content/blog/`.

### Create a new post

1. Copy `content/blog/_TEMPLATE.md`.
2. Save as `content/blog/<your-slug>.md`.
3. Fill frontmatter:

```yaml
---
title: "Your Post Title"
title_fr: "Ton Titre"
excerpt: "Short summary"
excerpt_fr: "Résumé court"
tags: ["Tag1", "Tag2"]
date: "2026-04-02"
draft: false
---
```

4. Write article body in Markdown.

### Draft vs published

A post is treated as draft if:

- `draft: true` in frontmatter, or
- filename starts with `_` (example: `_my-post.md`)

Published posts appear in the homepage Writing section and are accessible at:

`/blog/<slug>`

## Deployment

Deployment is automated via GitHub Actions:

- Workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main`
- Output deployed from `out/` to GitHub Pages

`CNAME` is copied into `out/` during the workflow for custom domain support.

## Useful Commands

```bash
# Start dev server
npm run dev

# Production build (also generates static export)
npm run build

# Run Next production server locally
npm run start
```
