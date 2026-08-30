# dachboden-sessions.de

Static archive site for **Dachboden Sessions** — a Middle Franconian drum & bass
mix project (est. 2016). Prerendered React, ships as zero-JS HTML on GitHub
Pages. Bilingual (DE/EN).

**Live:** <https://dachboden-sessions.de>

## What it is

A small archive/tribute site: a short history, the full Mixcloud mix archive, a
photo gallery, and a recolourable version of the logo. It is deliberately
lightweight — the deployed site is plain static HTML with no client-side
framework runtime.

## How it works

The app is written as a normal React + React Router SPA, then turned into static
files at build time:

1. `vite build` — client bundle (only used in `yarn dev`) + CSS asset.
2. `vite build --ssr src/entry-server.tsx` — SSR bundle.
3. `node scripts/prerender.mjs` — renders every route to `dist/<route>/index.html`,
   strips all `<script>` tags, and re-adds only the few tiny progressive-
   enhancement scripts. Also emits `dist/404.html` and the downloadable
   colourway SVGs.

The result: every page works with JavaScript disabled. The only scripts shipped
are:

| Script | Where | Purpose |
| --- | --- | --- |
| `public/lang.js` | every page, `<head>` | client-side language routing (no server to read `Accept-Language`) |
| `public/logo-randomize.js` | every page | re-rolls the header logo's colours on each load |
| `public/brand-enhance.js` | `/brand` pages | makes the logo editor interactive + adds PNG/SVG download |

### Languages

German is the default and lives at the root (`/`, `/mixes`, …); English is
prerendered under `/en/*`. `lang.js` runs before first paint: an explicit choice
from the `EN | DE` toggle (stored in `localStorage`) always wins, otherwise
`navigator.languages` decides once. `<html lang>`, `<title>`, and
`<link rel="alternate" hreflang>` are set per page.

All copy lives in [`src/i18n/messages.ts`](src/i18n/messages.ts).

### IndieWeb / microformats

The footer is an `h-card` (with `rel="me"` to Mixcloud); the mixes, gallery, and
Instagram lists are marked up as `h-feed` / `h-entry` with `u-photo`,
`dt-published`, `p-category`, etc.

## Project layout

```
src/
  component/     header, footer, language toggle, logo components
  pages/         about (/), mixes, gallery, brand (logo editor + colourways), impressum, 404
  i18n/          messages.ts (all strings) + index.tsx (context/provider)
  lib/           gallery.ts (auto-collects src/gallery/*), presets.ts (logo colourways)
  data/          mixes.json (Mixcloud snapshot), instagram.ts (hand-curated links)
  service/       mixcloud.ts (date/duration formatting)
  entry-server.tsx   SSR entry + list of paths to prerender
  main.tsx           dev-only client entry
scripts/
  prerender.mjs      static-HTML generator
  fetch-mixes.mjs    refresh data/mixes.json from Mixcloud
public/          lang.js, logo-randomize.js, brand-enhance.js, favicons, CNAME
```

## Local development

Requires Node 22 and Yarn (Classic).

```bash
yarn install
yarn dev        # http://localhost:3000  (client-rendered, all routes live)
yarn build      # produce the static dist/ that gets deployed
yarn preview    # serve the built dist/ locally
```

Note: `lang.js` also runs in `yarn dev`. If your browser prefers English it will
bounce you to `/en`; run `localStorage.setItem("db-lang", "de")` once in the
console to pin.

## Updating content

- **Mixes** — `yarn fetch:mixes` refreshes `src/data/mixes.json` from
  `mixcloud.com/dachboden`.
- **Gallery** — drop image files into `src/gallery/`; they are picked up
  automatically (filename becomes the caption and URL slug). See
  [`src/gallery/README.md`](src/gallery/README.md).
- **Instagram links** — edit `src/data/instagram.ts`.
- **Logo colourways** — edit `src/lib/presets.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows` → `yarn build` → GitHub Pages.
The custom domain is set via `public/CNAME`.

## License

Code: no licence set yet. Mixes, artwork, and photos remain with their
respective creators (see the [Impressum](https://dachboden-sessions.de/impressum)).
