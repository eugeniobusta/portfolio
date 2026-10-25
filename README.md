# eugeniobusta.com

Personal portfolio for [Eugenio Bustamante](https://www.eugeniobusta.com) — CS student at DCU, software developer.

**Live site:** https://www.eugeniobusta.com

---

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **Framer Motion** · **React Three Fiber**
- **EmailJS** (contact form) · **Vercel** (hosting)

---

## Running locally

```bash
npm ci
npm run dev   # http://localhost:3000
```

---

## Environment variables

The contact form requires three `NEXT_PUBLIC_EMAILJS_*` variables. In production these are set in Vercel → Project → Settings → Environment Variables. For local development, create `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Without them the form will fail gracefully with a direct-email fallback.

---

## Project structure

```
app/
  page.tsx              # Homepage (Hero, Projects, About, Skills, Contact)
  layout.tsx            # Root layout, metadata, fonts
  opengraph-image.tsx   # OG preview card (1200×630)
  about/page.tsx        # Hidden stub accessed from The Lab

components/
  sections/             # Page sections: Hero, Projects, About, Skills, Contact
  lab/                  # The Lab 3D game (LabGame, Props, Poster, ProjectBuildings)
  ui/                   # ProjectVisual (animated card previews)
  GamePortal.tsx        # Full-screen overlay that wraps The Lab

data/
  projects.ts           # ← single source of truth for all content
                        #   (projects, skills, status labels)

public/
  Eugenio_Bustamante_CV.pdf
  projects/             # Project screenshots used by ProjectVisual
```

**To update content:** edit `data/projects.ts`. Nothing else needs to change to add, reorder, or edit projects and skills.

---

## Deployment

Vercel is connected to this repo. Every push to `main` triggers a production deploy. Pushes to other branches get Vercel preview deployments.

---

## The Lab

"Enter the Lab" in the Hero opens a full-screen 3D world built with React Three Fiber. Drive a jeep around a city with WASD, explore project buildings, and find the secret dog house. See `handoff.md` for the full design notes.
