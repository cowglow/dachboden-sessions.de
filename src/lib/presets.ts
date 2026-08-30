import type { DbsLogoProps } from "../component/dsb-logo/dsb-logo";

export interface LogoPreset {
    name: string;
    label: string;
    colors: DbsLogoProps;
}

// Shared by the /brand pages and scripts/prerender.mjs (which writes each one to
// dist/brand/db-<name>.svg for download).
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
    {
        // Deutsche Bahn livery: DB Rot 500 ground, white lettering.
        name: "bahn",
        label: "Bahn",
        colors: {
            colorBackground: "#ec0016",
            colorLeft: "#ffffff",
            colorRight: "#ffffff",
            colorBorder: "#ec0016",
        },
    },
    {
        name: "mono-dark",
        label: "Mono (dark)",
        colors: {
            colorBackground: "#14161c",
            colorLeft: "#14161c",
            colorRight: "#14161c",
            colorBorder: "#000000",
        },
    },
    {
        name: "mono-light",
        label: "Mono (light)",
        colors: {
            colorBackground: "#f2f3f7",
            colorLeft: "#f2f3f7",
            colorRight: "#f2f3f7",
            colorBorder: "#000000",
        },
    },
];
