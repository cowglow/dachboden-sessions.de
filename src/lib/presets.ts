import type { DbsLogoProps } from "../component/dsb-logo/dsb-logo";

export interface LogoPreset {
    name: string;
    label: string;
    colors: DbsLogoProps;
}

// Shared by the /editor page and scripts/prerender.mjs (which writes each one to
// dist/editor/db-<name>.svg for download).
export const logoPresets: LogoPreset[] = [
    {
        name: "classic",
        label: "Classic",
        colors: {
            colorBackground: "#000000",
            colorLeft: "#00ff00",
            colorRight: "#ffff00",
            colorBorder: "#ffffff",
        },
    },
    {
        name: "mono-light",
        label: "Mono (light)",
        colors: {
            colorBackground: "transparent",
            colorLeft: "#f2f3f7",
            colorRight: "#f2f3f7",
            colorBorder: "#f2f3f7",
        },
    },
    {
        name: "mono-dark",
        label: "Mono (dark)",
        colors: {
            colorBackground: "transparent",
            colorLeft: "#14161c",
            colorRight: "#14161c",
            colorBorder: "#14161c",
        },
    },
    {
        name: "ragga",
        label: "Ragga",
        colors: {
            colorBackground: "#000000",
            colorLeft: "#12d97a",
            colorRight: "#ffd24a",
            colorBorder: "#e5484d",
        },
    },
    {
        name: "accent",
        label: "Accent",
        colors: {
            colorBackground: "#14161c",
            colorLeft: "#ffd24a",
            colorRight: "#ffd24a",
            colorBorder: "#14161c",
        },
    },
];
