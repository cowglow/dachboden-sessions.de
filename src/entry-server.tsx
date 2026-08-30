import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./component/app/app";
import DsbLogo from "./component/dsb-logo/dsb-logo";
import { galleryImages } from "./lib/gallery";
import { logoPresets } from "./lib/presets";

/** Render a route to a static HTML string (no hydration markers). */
export function render(url: string): string {
    return renderToStaticMarkup(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
}

/** Every concrete path the prerender step should emit. */
export const allPaths: string[] = [
    "/",
    "/mixes",
    "/gallery",
    "/editor",
    "/impressum",
    ...galleryImages.map((image) => `/gallery/${image.slug}`),
];

/** The path whose render is written to dist/404.html (hits the `*` route). */
export const notFoundPath = "/__not_found__";

/** Standalone SVG files for the /editor colourway download links. */
export function renderPresetSvgs(): { name: string; svg: string }[] {
    return logoPresets.map((preset) => ({
        name: preset.name,
        svg:
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            renderToStaticMarkup(<DsbLogo {...preset.colors} />),
    }));
}
