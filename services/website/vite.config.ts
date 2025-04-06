import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [tsconfigPaths(), react(), svgr(), checker({typescript: true})],
    server: {
        port: 3000,
    },
});