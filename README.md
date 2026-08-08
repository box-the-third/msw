# My Saudi Wellness (MSW)

Marketing website for **My Saudi Wellness** — corporate, school & community
wellness programs across Saudi Arabia. Built with **Next.js (App Router)** and
deployed as a **static export** to **GitHub Pages** at
`https://box-the-third.github.io/msw/`.

## Tech

- **Next.js 14** (App Router, React 18)
- Static export (`output: "export"`) — no server needed, just static files
- Plain CSS design system in `app/globals.css` (brand colours sampled from the
  logo: blue `#2E3192`, green `#78C03C`)
- Zero third-party UI dependencies

## Project structure

```
app/
  layout.js        # <html> shell, fonts, SEO metadata
  page.js          # Home page — composes the sections below
  globals.css      # design tokens + all component styles
components/
  Header.js        # sticky white nav, dropdowns, mobile drawer
  HeroCarousel.js  # 6-banner auto-playing slider with dark overlay box
  Milestones.js    # "Million Health Scans" stat band
  Services.js      # 6-card services grid with inline SVG icons
  PastEvents.js    # placeholder event gallery
  Clients.js       # placeholder client-logo row
  Footer.js        # contact info + quick links
  BackToTop.js     # scroll-to-top button
lib/
  site.js          # all page copy, nav config + asset() helper
public/
  assets/images/   # logos, hero backgrounds, partner logos
  .nojekyll        # keep GitHub Pages from stripping /_next
.github/workflows/
  deploy.yml       # build + deploy to GitHub Pages on push to main
```

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build (static export)

```bash
npm run build      # emits ./out — a fully static site
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages.

**One-time setup:** in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

> The site is served from a project path (`/msw`), so `next.config.mjs` sets
> `basePath: "/msw"` in production. All image URLs go through the `img()` helper
> in `lib/site.js` so they resolve correctly both locally and on Pages.

## Editing content

Almost all copy (nav, hero slides, services, footer links) lives in
[`lib/site.js`](lib/site.js) — edit there rather than in the components.

## Legacy

The previous single-file static site is preserved in this repo history
(`index.html`, `css/`, `script.js`).
