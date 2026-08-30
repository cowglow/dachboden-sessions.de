// Turn the client build into fully static HTML:
//  - render every route (both language trees: / = de, /en = en) with the SSR bundle,
//  - drop the <script>/<noscript> tags from the template,
//  - re-add /lang.js in <head> everywhere, /logo-randomize.js on every page,
//    and /brand-enhance.js on the /brand pages,
//  - set <html lang> + <title> + hreflang alternates per page,
//  - write dist/<route>/index.html + dist/404.html,
//  - emit the /brand colourway SVGs,
//  - delete the now-unreferenced client JS chunks.
import {
    readFileSync,
    writeFileSync,
    mkdirSync,
    rmSync,
    readdirSync,
} from "node:fs";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(process.cwd());
const dist = join(root, "dist");
const ssr = join(root, "dist-ssr");

const { render, allPaths, notFoundPath, renderPresetSvgs } = await import(
    pathToFileURL(join(ssr, "entry-server.js")).href
);

const template = readFileSync(join(dist, "index.html"), "utf8");

const stripped = template
    .replace(/\s*<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/gi, "");

if (!stripped.includes('<div id="root"></div>')) {
    throw new Error("prerender: '<div id=\"root\"></div>' not found in dist/index.html");
}

const SITE = "https://dachboden-sessions.de";

const TITLES = {
    de: {
        "/": "Dachboden Sessions (seit 2016)",
        "/mixes": "Mixes · Dachboden Sessions",
        "/gallery": "Galerie · Dachboden Sessions",
        "/brand": "Marke · Dachboden Sessions",
        "/brand/colourways": "Farbvarianten · Dachboden Sessions",
        "/impressum": "Impressum · Dachboden Sessions",
    },
    en: {
        "/": "Dachboden Sessions (Est. 2016)",
        "/mixes": "Mixes · Dachboden Sessions",
        "/gallery": "Gallery · Dachboden Sessions",
        "/brand": "Brand · Dachboden Sessions",
        "/brand/colourways": "Colourways · Dachboden Sessions",
        "/impressum": "Impressum · Dachboden Sessions",
    },
};

const DESCRIPTIONS = {
    de: "Mittelfrankens Dachboden Sessions – ein historisches Archiv, seit 2016",
    en: "Mittelfranken's Dachboden Sessions — a historical record, est. 2016",
};

// /lang.js does client-side language routing; it must run before paint.
const LANG_SCRIPT = '<script src="/lang.js"></script>';
// Every page re-rolls the header logo colours on load; only the /brand pages
// also get the recolour/download progressive-enhancement helper.
const LOGO_SCRIPT = '<script src="/logo-randomize.js"></script>';
const BRAND_SCRIPT = '<script type="module" src="/brand-enhance.js"></script>';

function localeOf(path) {
    return path === "/en" || path.startsWith("/en/") ? "en" : "de";
}

/** The route without the /en prefix (e.g. /en/mixes -> /mixes, /en -> /). */
function basePathOf(path, locale) {
    if (locale !== "en") return path;
    return path === "/en" ? "/" : path.slice(3);
}

function pageFor(path, bodyHtml) {
    const locale = localeOf(path);
    const base = basePathOf(path, locale);
    const title = TITLES[locale][base] ?? "Dachboden Sessions";
    const deUrl = SITE + (base === "/" ? "/" : base);
    const enUrl = SITE + "/en" + (base === "/" ? "" : base);
    const alternates =
        `<link rel="alternate" hreflang="de" href="${deUrl}" />\n` +
        `    <link rel="alternate" hreflang="en" href="${enUrl}" />\n` +
        `    <link rel="alternate" hreflang="x-default" href="${deUrl}" />`;

    let html = stripped
        .replace('<html lang="en">', `<html lang="${locale}">`)
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
        .replace(
            /(<meta name="description" content=")[^"]*(")/i,
            `$1${DESCRIPTIONS[locale]}$2`
        )
        .replace(
            "</head>",
            `    ${LANG_SCRIPT}\n    ${alternates}\n  </head>`
        )
        .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

    html = html.replace("</body>", `    ${LOGO_SCRIPT}\n  </body>`);
    if (base === "/brand" || base === "/brand/colourways") {
        html = html.replace("</body>", `    ${BRAND_SCRIPT}\n  </body>`);
    }
    return html;
}

function writePage(path, html) {
    const outDir = path === "/" ? dist : join(dist, path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);
}

// Routes
for (const path of allPaths) {
    writePage(path, pageFor(path, render(path)));
    console.log(`prerender: ${path}`);
}

// GitHub Pages fallback
writeFileSync(join(dist, "404.html"), pageFor(notFoundPath, render(notFoundPath)));
console.log("prerender: 404.html");

// Downloadable logo colourways, alongside dist/brand/index.html
const brandDir = join(dist, "brand");
mkdirSync(brandDir, { recursive: true });
for (const { name, svg } of renderPresetSvgs()) {
    writeFileSync(join(brandDir, `db-${name}.svg`), svg);
    console.log(`prerender: brand/db-${name}.svg`);
}

// Drop the client SPA bundle — nothing references it any more.
// (public/brand-enhance.js and public/logo-randomize.js live in dist/ root, not
// dist/assets/, so they stay.)
const assetsDir = join(dist, "assets");
for (const file of readdirSync(assetsDir)) {
    if (file.endsWith(".js") || file.endsWith(".js.map")) {
        rmSync(join(assetsDir, file));
        console.log(`prerender: removed assets/${file}`);
    }
}

rmSync(ssr, { recursive: true, force: true });
console.log("prerender: done");
