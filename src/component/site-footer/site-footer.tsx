import { Link } from "react-router-dom";
import { useI18n } from "src/i18n";
import LangToggle from "../lang-toggle/lang-toggle";
import styles from "./site-footer.module.css";

const SITE_URL = "https://dachboden-sessions.de/";

const SiteFooter = () => {
    const { t } = useI18n();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.inner} h-card`}>
                <a
                    className={styles.listen}
                    href="https://www.mixcloud.com/dachboden/"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    {t.footer.listen}
                </a>
                <data className="u-logo" value={`${SITE_URL}logo512.png`} />
                <p className={styles.copy}>
                    © {new Date().getFullYear()}{" "}
                    <a className="p-name u-url u-uid" href={SITE_URL}>
                        Dachboden Sessions
                    </a>{" "}
                    · Est. 2016
                </p>
                <div className={styles.meta}>
                    <Link className={styles.impressum} to="/impressum">
                        {t.footer.impressum}
                    </Link>
                    <LangToggle />
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
