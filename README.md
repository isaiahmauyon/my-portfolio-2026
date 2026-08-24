# my-portfolio-2026

Personal portfolio built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the project |

## Customizing

- **Content** — edit `src/data/site.ts` for your name, role, skills, projects, and social links.
- **Styling** — global tokens live in `src/app/globals.css`; Tailwind config in `tailwind.config.ts`.
- **Sections** — the homepage (hero, projects, about, contact) is in `src/app/page.tsx`.

## Deploy

The easiest way to deploy is with [Vercel](https://vercel.com/new). Push to GitHub and import the repo.

## Structure

```
src/
  app/          # App Router pages, layout, global styles
  components/   # Reusable UI (Navbar, Footer, ProjectCard)
  data/         # Site content and configuration
```
