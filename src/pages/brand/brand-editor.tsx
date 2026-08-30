import { useEffect } from "react";
import { useI18n } from "src/i18n";
import DsbLogo from "../../component/dsb-logo/dsb-logo";
import styles from "./brand.module.css";

const DEFAULT = {
    colorBackground: "#000000",
    colorLeft: "#00ff00",
    colorRight: "#ffff00",
    colorBorder: "#ffffff",
};

const BrandEditor = () => {
    const { t } = useI18n();
    const b = t.brand;

    const fields = [
        { part: "left", label: b.fieldD, value: DEFAULT.colorLeft },
        { part: "right", label: b.fieldB, value: DEFAULT.colorRight },
        { part: "border", label: b.fieldBorder, value: DEFAULT.colorBorder },
        {
            part: "background",
            label: b.fieldBackground,
            value: DEFAULT.colorBackground,
        },
    ];

    // In production the interactivity comes from /brand-enhance.js (injected on
    // /brand routes only). In `yarn dev` that script runs once at page load, so
    // re-run it whenever this tab mounts via client-side navigation.
    useEffect(() => {
        const w = window as unknown as { __dbEnhanceEditor?: () => void };
        w.__dbEnhanceEditor?.();
    }, []);

    return (
        // Enhanced by /brand-enhance.js — hidden until that script wires it up.
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
                    {b.downloadSvg}
                </button>
                <button type="button" data-download="png">
                    {b.downloadPng}
                </button>
            </div>
        </div>
    );
};

export default BrandEditor;
