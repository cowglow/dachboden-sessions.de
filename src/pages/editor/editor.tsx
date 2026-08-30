import { useEffect } from "react";
import DsbLogo from "../../component/dsb-logo/dsb-logo";
import { logoPresets } from "src/lib/presets";
import styles from "./editor.module.css";

const DEFAULT = {
    colorBackground: "#000000",
    colorLeft: "#00ff00",
    colorRight: "#ffff00",
    colorBorder: "#ffffff",
};

const fields: { part: string; label: string; value: string }[] = [
    { part: "left", label: "Letter D", value: DEFAULT.colorLeft },
    { part: "right", label: "Letter B", value: DEFAULT.colorRight },
    { part: "border", label: "Border", value: DEFAULT.colorBorder },
    { part: "background", label: "Background", value: DEFAULT.colorBackground },
];

const EditorPage = () => {
    // In production the interactivity comes from /editor-enhance.js (injected on
    // this route only). In `yarn dev` that script runs once at page load, so
    // re-run it whenever this page mounts via client-side navigation.
    useEffect(() => {
        const w = window as unknown as { __dbEnhanceEditor?: () => void };
        w.__dbEnhanceEditor?.();
    }, []);

    return (
        <section>
            <h1>Logo editor</h1>
            <p className={styles.lead}>
                Recolour the Dachboden mark. With JavaScript on you can pick your
                own colours and download an SVG or PNG; either way you can grab one
                of the ready-made colourways below.
            </p>

            {/* Enhanced by /editor-enhance.js — hidden until that script wires it up. */}
            <div className={styles.editor} data-editor hidden>
                <div className={styles.preview}>
                    <DsbLogo {...DEFAULT} />
                </div>
                <div className={styles.controls}>
                    {fields.map((f) => (
                        <label key={f.part} className={styles.field}>
                            <span>{f.label}</span>
                            <input
                                type="color"
                                data-part={f.part}
                                defaultValue={f.value}
                                className={styles.swatch}
                            />
                        </label>
                    ))}
                </div>
                <div className={styles.actions}>
                    <button type="button" data-download="svg">
                        Download SVG
                    </button>
                    <button type="button" data-download="png">
                        Download PNG
                    </button>
                </div>
            </div>

            <h2 className={styles.colourwaysHeading}>Colourways</h2>
            <ul className={styles.grid}>
                {logoPresets.map((preset) => (
                    <li key={preset.name} className={styles.card}>
                        <div className={styles.art}>
                            <DsbLogo {...preset.colors} />
                        </div>
                        <div className={styles.meta}>
                            <span className={styles.name}>{preset.label}</span>
                            <span className={styles.cardActions}>
                                <button
                                    type="button"
                                    className={styles.loadBtn}
                                    data-load-preset
                                    hidden
                                >
                                    Edit these colours
                                </button>
                                <span className={styles.downloadRow}>
                                    <a
                                        className={styles.loadBtn}
                                        href={`/editor/db-${preset.name}.svg`}
                                        download
                                    >
                                        SVG
                                    </a>
                                    <button
                                        type="button"
                                        className={styles.loadBtn}
                                        data-download-png
                                        hidden
                                    >
                                        PNG
                                    </button>
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default EditorPage;
