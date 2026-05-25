# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — Run ESLint across the project
- `npm run preview` — Preview the production build locally

## Architecture

Single-page React 19 portfolio site built with TypeScript, Tailwind CSS v4, and Vite. Deployed on Vercel.

### Key files

- `src/main.tsx` — Entry point, renders `<App />` into `#root`
- `src/App.tsx` — Root component; manages dark mode state (class-based toggle on `<html>`) and composes all page sections
- `src/App.css` — Global styles, Tailwind import, dark mode custom variant, custom animations

### Page sections (rendered in order in App.tsx)

`Navbar` → `Hero` → `Activities` → `Skills` → `Projects`

All section components live in `src/components/`.

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config` file — config is CSS-based)
- Dark mode uses a custom variant: `@custom-variant dark (&:where(.dark, .dark *))` toggled by adding/removing the `dark` class on `<html>`
- Font stack: Pretendard, Noto Sans KR

### Animations

- `motion` (Framer Motion) library used for component animations
- `ScatterText` component provides a reusable text scatter animation

### Analytics

Vercel Analytics (`@vercel/analytics`) and Speed Insights (`@vercel/speed-insights`) are integrated in App.tsx.
