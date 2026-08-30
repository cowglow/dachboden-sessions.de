import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./component/app/app";
import DsbLogo from "./component/dsb-logo/dsb-logo";
import { galleryImages } from "./lib/gallery";
import { logoPresets } from "./lib/presets";
import { localeFromPath } from "./i18n";

/** Render a route to a static HTML string (no hydration markers). */
export function render(url: string): string {
    const locale = localeFromPath(url);
    return renderToStaticMarkup(
        <StaticRouter location={url} basename={locale === "en" ? "/en" : undefined}>
            <App locale={locale} />
        </StaticRouter>
    );
}

const basePaths: string[] = [
    "/",
    "/mixes",
    "/gallery",
    "/brand",
    "/brand/colourways",
    "/impressum",
    ...galleryImages.map((image) => `/gallery/${image.slug}`),
];

/** Every concrete path the prerender step should emit — both language trees. */
export const allPaths: string[] = [
    ...basePaths,
    ...basePaths.map((p) => (p === "/" ? "/en" : `/en${p}`)),
];

/** The path whose render is written to dist/404.html (hits the `*` route). */
export const notFoundPath = "/__not_found__";

/** Standalone SVG files for the /brand colourway download links. */
export function renderPresetSvgs(): { name: string; svg: string }[] {
    return logoPresets.map((preset) => ({
        name: preset.name,
        svg:
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            renderToStaticMarkup(<DsbLogo {...preset.colors} />),
    }));
}
