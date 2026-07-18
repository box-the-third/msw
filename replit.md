# My Saudi Wellness — Project Overview

A static HTML marketing website for **My Saudi Wellness**, a corporate wellness company serving Saudi Arabian organizations.

## Stack
- Pure HTML / CSS / JavaScript — no build step required
- Bootstrap/NPM dependencies: none (all styles are inline in `index.html`)
- Fonts: Google Fonts — Open Sans (LTR) + Tajawal (Arabic/RTL)

## Running Locally (Replit)
The workflow `Start application` serves the site with Python's built-in HTTP server on port 5000:
```
python3 -m http.server 5000
```
Just click **Run** or ensure the workflow is started.

## Deploying to GoDaddy
This is a pure static site — deploy by uploading all files via GoDaddy's File Manager or FTP:
1. Upload `index.html`, `css/`, `assets/`, `script.js` to the root of your domain's `public_html` folder.
2. No server configuration needed.

## Features
- **Bilingual (EN / AR)** — Language toggle in the navbar switches the entire page between English (LTR) and Arabic (RTL), with proper Tajawal font for Arabic. Language choice persists via `localStorage`.
- **Fully responsive** — Mobile, tablet, and desktop layouts including hamburger nav, collapsible package cards, and fluid grids.
- **Formspree contact form** — AJAX submission (no redirect). Configure by replacing `YOUR_FORM_ID` in `index.html`.

## Formspree Setup
1. Sign up at https://formspree.io (free: 50 submissions/month)
2. Create a new form → copy your Form ID (e.g. `xpwzabcd`)
3. In `index.html`, find `var FORMSPREE_URL` and replace `YOUR_FORM_ID` with your actual ID

## Adding Images
Place the original images in `assets/images/` using these filenames (see README.md for Wayback Machine URLs):
- `1_logo.png`, `1_sw1.jpg` (hero bg), `1_my_saudi_wellness_side.jpg` (about)
- `1_rchp logo.jpg`, `2_peabodieslogo.jpg`, `3_CS_Wort-Bildmarke.jpg`
- `5_DisciplineXgames-logo.jpg`, `7_Hyjiya-logo-25.2.14.jpg`, `9_AeroFit_logo600.jpg`, `10_european-lifestyle-logo.jpg`

## User Preferences
- Keep the project as a single-file static site (all styles inline in `index.html`) — no build tools.
- Maintain bilingual support for all new text content added.
