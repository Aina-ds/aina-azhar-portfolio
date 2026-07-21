# Aina Azhar — Data Science Portfolio

A premium, responsive portfolio website built for Data Science / Machine Learning
internship applications. Built with Next.js 14 (App Router), React, TypeScript,
Tailwind CSS, and Framer Motion.

All content (projects, skills, experience, education, certifications) is sourced
directly from `lib/data.ts`, which mirrors the resume — nothing is invented.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **lucide-react** for icons

## Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout: fonts, SEO metadata, Open Graph
│   ├── page.tsx           # Assembles all sections in order
│   └── globals.css        # Global styles, scroll behavior, focus states
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx             # Headline, summary, CTA buttons, animated dots
│   ├── About.tsx            # About Me section
│   ├── Skills.tsx           # Skill category cards
│   ├── Projects.tsx         # Project cards grid
│   ├── Experience.tsx       # Internship timeline
│   ├── Education.tsx        # Education card
│   ├── Certifications.tsx   # Certification cards
│   ├── Resume.tsx           # Download/View resume CTA
│   ├── Contact.tsx          # Contact info + form (opens mail client)
│   └── Footer.tsx           # Footer, social icons, back-to-top
├── lib/
│   └── data.ts              # Single source of truth — all resume content
├── public/
│   ├── resume.pdf            # Downloadable resume
│   ├── favicon.svg
│   └── og-image.svg          # Open Graph share image
├── tailwind.config.ts        # Design tokens: colors, fonts, shadows
├── next.config.js
├── tsconfig.json
└── package.json
```

## Run Locally

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

To create a production build:

```bash
npm run build
npm start
```

> Note: the site uses `next/font/google` to load Inter, Space Grotesk, and
> JetBrains Mono at build time, so an internet connection is required the
> first time you run `npm run dev` or `npm run build`.

## Deploy to Vercel

**Option A — Vercel Dashboard (recommended)**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave the default build settings.
4. Click **Deploy**. Your site will be live at `your-project.vercel.app`.

**Option B — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

## Updating Content

Everything the recruiter sees comes from `lib/data.ts`. To update projects,
skills, experience, education, or certifications, edit that file only — every
component reads from it, so the whole site stays in sync.

To replace the resume PDF, drop a new file at `public/resume.pdf` (keep the
same filename so the Download/View buttons keep working).

To add a real professional photo, replace the placeholder block inside
`components/Hero.tsx` with a Next.js `<Image />` component pointing at a
photo placed in `public/`.
