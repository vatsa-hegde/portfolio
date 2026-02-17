# Shreevatsa Ganapathy Hegde – Portfolio

Personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Showcases experience, education, projects, resume, and contact info with dark mode and smooth animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, tw-animate-css
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Development server (Turbopack)
- `npm run build` – Production build
- `npm run start` – Start production server

## Required Assets

Add these files for the site to work as intended:

| File / folder        | Purpose                          |
|----------------------|-----------------------------------|
| `public/photo.webp`  | Profile photo on the home page   |
| `public/resume.pdf`  | Resume view and download         |
| `public/transcripts/`| PDF transcripts (e.g. UW, VTU)   |
| `public/certificates/` | Certificate PDFs (e.g. AWS, McKinsey) |

Place `photo.webp` and `resume.pdf` in `public/`. Place transcript and certificate PDFs in `public/transcripts/` and `public/certificates/` and ensure the paths in `src/app/education/page.tsx` match (e.g. `/transcripts/UWTranscript.pdf`).

## Deploy

The app is static-friendly and can be deployed to [Vercel](https://vercel.com), Netlify, or any Node host. Run `npm run build` then `npm run start`, or use the platform’s Next.js preset.
