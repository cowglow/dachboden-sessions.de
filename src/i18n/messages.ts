export type Locale = "de" | "en";

// German is the default (served at the root); English lives under /en. The `en`
// object is the shape of record; `de` must match it (TS enforces via `Dict`).
const en = {
    nav: { mixes: "Mixes", gallery: "Gallery", brand: "Brand" },
    footer: {
        listen: "Listen on Mixcloud →",
        impressum: "Impressum",
        source: "Source",
    },
    langToggle: { label: "Language" },
    about: {
        title: "Dachboden Sessions (Est. 2016)",
        p1a:
            "Dachboden Sessions was a drum & bass mix project from Middle " +
            "Franconia, Bavaria, founded and led by Zimmy. Its guiding " +
            "concept, described in a ",
        p1Interview: "Radio Z Nürnberg interview",
        p1b:
            " on 20 December 2017, is simple: a “Dachboden Session” means " +
            "twelve months, twelve mixes, and seeing the idea through.",
        p2:
            "For 2018, Zimmy planned to open the project up beyond his own " +
            "mixes, with more involvement from ThinA1r.",
        p3:
            "The project’s featured MC is MC SCRPT — it’s where he began " +
            "MCing, in preparation for The LightUp! #36 on 26 November 2016. " +
            "He’d followed drum & bass since Roni Size’s Reprezent in 1997.",
        p4: "Still up on Mixcloud and Facebook.",
        archiveHeading: "The archive",
        archA: "{count} sessions are archived on ",
        archMixcloud: "Mixcloud",
        archB: ", recorded between {first} and {last}. Browse the ",
        archMixes: "mixes",
        archC: ", look through the ",
        archGallery: "gallery",
        archD: ", or recolour the ",
        archLogo: "logo",
        archE: ".",
    },
    mixes: {
        title: "Mixes",
        leadA:
            "Every recorded Dachboden session — {count} in total, from " +
            "{first} to {last}. Archived from ",
        leadLink: "mixcloud.com/dachboden",
        leadB: ".",
        crewHeading: "Crew on Mixcloud",
        plays: "{n} plays",
    },
    gallery: {
        title: "Gallery",
        emptyA: "No photos here yet. Drop image files into ",
        emptyCode: "src/gallery/",
        emptyB: " and they’ll show up automatically.",
        back: "← Back to gallery",
        igHeading: "On Instagram",
        igLeadA: "Clips and photos from ",
        igLeadB: ".",
        photo: "Photo",
        video: "Video",
    },
    brand: {
        title: "Brand",
        lead:
            "The Dachboden mark, yours to recolour and download. Grab a " +
            "ready-made colourway, or open the editor to pick your own colours " +
            "and export an SVG or PNG (needs JavaScript).",
        sectionsLabel: "Brand sections",
        tabEditor: "Logo editor",
        tabColourways: "Colourways",
        fieldD: "Letter D",
        fieldB: "Letter B",
        fieldBorder: "Border",
        fieldBackground: "Background",
        downloadSvg: "Download SVG",
        downloadPng: "Download PNG",
        openInEditor: "Open in editor",
    },
    notFound: {
        title: "Page not found",
        body: "That page doesn’t exist (or moved).",
        back: "← Back to the start",
    },
} as const;

export type Dict = {
    -readonly [K in keyof typeof en]: {
        -readonly [P in keyof (typeof en)[K]]: string;
    };
};

const de: Dict = {
    nav: { mixes: "Mixes", gallery: "Galerie", brand: "Marke" },
    footer: {
        listen: "Auf Mixcloud hören →",
        impressum: "Impressum",
        source: "Quellcode",
    },
    langToggle: { label: "Sprache" },
    about: {
        title: "Dachboden Sessions (seit 2016)",
        p1a:
            "Dachboden Sessions war ein Drum-&-Bass-Mix-Projekt aus " +
            "Mittelfranken, Bayern, gegründet und geleitet von Zimmy. Das " +
            "Grundprinzip, in einem ",
        p1Interview: "Interview bei Radio Z Nürnberg",
        p1b:
            " am 20. Dezember 2017 erklärt, ist einfach: Eine „Dachboden " +
            "Session“ heißt zwölf Monate, zwölf Mixe – und die Idee durchziehen.",
        p2:
            "Für 2018 wollte Zimmy das Projekt über seine eigenen Mixe " +
            "hinaus öffnen, mit mehr Beteiligung von ThinA1r.",
        p3:
            "Der Stamm-MC des Projekts ist MC SCRPT – hier begann er mit dem " +
            "MCing, in Vorbereitung auf das The LightUp! #36 am 26. November " +
            "2016. Drum & Bass verfolgt er seit Roni Sizes Reprezent 1997.",
        p4: "Weiterhin auf Mixcloud und Facebook zu finden.",
        archiveHeading: "Das Archiv",
        archA: "{count} Sessions sind auf ",
        archMixcloud: "Mixcloud",
        archB:
            " archiviert, aufgenommen zwischen {first} und {last}. Stöbere " +
            "durch die ",
        archMixes: "Mixe",
        archC: ", schau dir die ",
        archGallery: "Galerie",
        archD: " an oder färbe das ",
        archLogo: "Logo",
        archE: " um.",
    },
    mixes: {
        title: "Mixes",
        leadA:
            "Jede aufgenommene Dachboden-Session – {count} insgesamt, von " +
            "{first} bis {last}. Archiviert von ",
        leadLink: "mixcloud.com/dachboden",
        leadB: ".",
        crewHeading: "Crew auf Mixcloud",
        plays: "{n} Plays",
    },
    gallery: {
        title: "Galerie",
        emptyA: "Noch keine Fotos. Leg Bilddateien in ",
        emptyCode: "src/gallery/",
        emptyB: " ab, dann erscheinen sie automatisch.",
        back: "← Zurück zur Galerie",
        igHeading: "Auf Instagram",
        igLeadA: "Clips und Fotos von ",
        igLeadB: ".",
        photo: "Foto",
        video: "Video",
    },
    brand: {
        title: "Marke",
        lead:
            "Das Dachboden-Zeichen – zum Umfärben und Herunterladen. Nimm eine " +
            "fertige Farbvariante oder öffne den Editor, um eigene Farben zu " +
            "wählen und als SVG oder PNG zu exportieren (benötigt JavaScript).",
        sectionsLabel: "Marken-Bereiche",
        tabEditor: "Logo-Editor",
        tabColourways: "Farbvarianten",
        fieldD: "Buchstabe D",
        fieldB: "Buchstabe B",
        fieldBorder: "Kontur",
        fieldBackground: "Hintergrund",
        downloadSvg: "SVG herunterladen",
        downloadPng: "PNG herunterladen",
        openInEditor: "Im Editor öffnen",
    },
    notFound: {
        title: "Seite nicht gefunden",
        body: "Diese Seite gibt es nicht (oder sie ist umgezogen).",
        back: "← Zurück zum Anfang",
    },
};

export const strings: Record<Locale, Dict> = { de, en };
