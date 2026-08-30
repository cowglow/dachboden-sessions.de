import { useLocation } from "react-router-dom";
import { useI18n } from "src/i18n";
import styles from "./lang-toggle.module.css";

// Plain <a> links (full navigation) to the same page in the other tree, so the
// prerendered HTML + /lang.js re-run cleanly. Clicking records the choice so
// /lang.js stops auto-detecting on later visits.
const remember = (locale: "de" | "en") => () => {
    try {
        localStorage.setItem("db-lang", locale);
    } catch {
        /* private mode / storage disabled — detection just keeps running */
    }
};

const LangToggle = () => {
    const { locale, t } = useI18n();
    const { pathname } = useLocation();
    // Works whether or not the router basename already stripped the prefix.
    const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const deHref = bare;
    const enHref = bare === "/" ? "/en" : `/en${bare}`;

    return (
        <span className={styles.toggle} aria-label={t.langToggle.label}>
            <a
                href={enHref}
                hrefLang="en"
                lang="en"
                onClick={remember("en")}
                aria-current={locale === "en" ? "true" : undefined}
                className={locale === "en" ? styles.active : undefined}
            >
                EN
            </a>
            <span aria-hidden="true" className={styles.sep}>
                |
            </span>
            <a
                href={deHref}
                hrefLang="de"
                lang="de"
                onClick={remember("de")}
                aria-current={locale === "de" ? "true" : undefined}
                className={locale === "de" ? styles.active : undefined}
            >
                DE
            </a>
        </span>
    );
};

export default LangToggle;
