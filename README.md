# Usman Ghani: Portfolio

The personal site of Usman Ghani, software engineer building mobile apps, AI agents and web platforms.

**Live:** https://usmanghanics.vercel.app

## Pages

| Path | What it shows |
|---|---|
| `/` | Hero with proof, shipped apps, web platforms, experience, achievements, education, certificates, tools, contact |
| `/work` | All apps, web platforms and university projects |
| `/work/[slug]` | App case studies: `snapcut`, `makki-autocare`, `madadgar-kisan`, `bizcare` |
| `/about` | Bio, achievements with photos, experience, education, tools |
| `/certifications` | All certificates, most important first |

## Search and sharing

- Static pages with a title, description and canonical address each
- Structured data (JSON-LD): Person, WebSite, ProfilePage, AboutPage, CollectionPage, CreativeWork, BreadcrumbList
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `llms.txt` for AI assistants
- Open Graph and Twitter card image at `public/og.png` (1200 × 630)
- The old Netlify address forwards every page here with a permanent redirect (see `next.config.mjs`)

## Stack

Next.js 16 (App Router, every page prerendered), React 19, TypeScript, plain CSS with design tokens in `src/app/globals.css`, Geist font, Phosphor icons, brand logos from Simple Icons (`tools/brands.py`). No animation or 3D libraries: motion is CSS only and respects reduced motion.

## Editing content

All words and numbers live in `src/data`:

- `site.ts`: name, links, headline numbers, jobs, education, awards, skills
- `work.ts`: case studies, apps, websites and smaller projects
- `certifications.ts`: certificates

Images live in `public/img` as WebP. The app showcase images in `public/img/work` are built from real app screens by `tools/mockups.py`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # type check
```

After a deploy that adds or changes pages, tell Bing and other IndexNow engines: `node tools/indexnow.mjs`

Icons: add a Phosphor name to `tools/icons.py`, then run `python3 -I tools/icons.py`.

## Deploying

The GitHub repo is connected to Vercel, so every push to `main` deploys to production. Set `NEXT_PUBLIC_SITE_URL` in Vercel when a custom domain is added, then redeploy.

© Usman Ghani
