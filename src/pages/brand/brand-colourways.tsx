import { Link } from "react-router-dom";
import { useI18n } from "src/i18n";
import DsbLogo, { type DbsLogoProps } from "../../component/dsb-logo/dsb-logo";
import { logoPresets } from "src/lib/presets";
import styles from "./brand.module.css";

// Deep-link into the editor with this palette preloaded. brand-enhance.js reads
// these params on /brand and applies them once the panel is wired up.
const editorHref = (colors: DbsLogoProps) =>
    `/brand?${new URLSearchParams({
        background: colors.colorBackground.replace(/^#/, ""),
        left: colors.colorLeft.replace(/^#/, ""),
        right: colors.colorRight.replace(/^#/, ""),
        border: colors.colorBorder.replace(/^#/, ""),
    }).toString()}`;

const BrandColourways = () => {
    const { t } = useI18n();

    return (
    <ul className={styles.grid}>
        {logoPresets.map((preset) => (
            <li key={preset.name} className={styles.card}>
                <div className={styles.art}>
                    <DsbLogo {...preset.colors} />
                </div>
                <div className={styles.meta}>
                    <span className={styles.name}>{preset.label}</span>
                    <span className={styles.cardActions}>
                        <Link
                            className={styles.loadBtn}
                            to={editorHref(preset.colors)}
                        >
                            {t.brand.openInEditor}
                        </Link>
                        <span className={styles.downloadRow}>
                            <a
                                className={styles.loadBtn}
                                href={`/brand/db-${preset.name}.svg`}
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
    );
};

export default BrandColourways;
