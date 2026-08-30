// Turn the client build into fully static HTML:
//  - render every route with the SSR bundle,
//  - drop the <script>/<noscript> tags from the template,
//  - re-add only the tiny /editor-enhance.js on the /editor page,
//  - write dist/<route>/index.html + dist/404.html,
//  - emit the /editor colourway SVGs,
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

const TITLES = {
    "/": "Dachboden Sessions (Est. 2016)",
    "/mixes": "Mixes · Dachboden Sessions",
    "/gallery": "Gallery · Dachboden Sessions",
    "/editor": "Logo editor · Dachboden Sessions",
    "/impressum": "Impressum · Dachboden Sessions",
};

// Only /editor gets a script — the progressive-enhancement helper.
const EDITOR_SCRIPT = '<script type="module" src="/editor-enhance.js"></script>';

function pageFor(path, bodyHtml) {
    const title = TITLES[path] ?? "Dachboden Sessions";
    let html = stripped
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
        .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
    if (path === "/editor") {
        html = html.replace("</body>", `    ${EDITOR_SCRIPT}\n  </body>`);
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

// Downloadable logo colourways, alongside dist/editor/index.html
const editorDir = join(dist, "editor");
mkdirSync(editorDir, { recursive: true });
for (const { name, svg } of renderPresetSvgs()) {
    writeFileSync(join(editorDir, `db-${name}.svg`), svg);
    console.log(`prerender: editor/db-${name}.svg`);
}

// Drop the client SPA bundle — nothing references it any more.
// (public/editor-enhance.js lives in dist/ root, not dist/assets/, so it stays.)
const assetsDir = join(dist, "assets");
for (const file of readdirSync(assetsDir)) {
    if (file.endsWith(".js") || file.endsWith(".js.map")) {
        rmSync(join(assetsDir, file));
        console.log(`prerender: removed assets/${file}`);
    }
}

rmSync(ssr, { recursive: true, force: true });
console.log("prerender: done");
