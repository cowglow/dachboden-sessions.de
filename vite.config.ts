import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    // Vite 8 resolves tsconfig `paths` natively (replaces vite-tsconfig-paths).
    resolve: {tsconfigPaths: true},
    // `enableBuild: false` — the build script already runs `tsc` first, so the
    // checker only needs to power the dev-server overlay.
    plugins: [react(), svgr(), checker({typescript: true, enableBuild: false})],
    server: {
        port: 3000,
    },
});