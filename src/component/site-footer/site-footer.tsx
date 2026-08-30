import { Link } from "react-router-dom";
import styles from "./site-footer.module.css";

const SiteFooter = () => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <a
                className={styles.listen}
                href="https://www.mixcloud.com/dachboden/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Listen on Mixcloud →
            </a>
            <p className={styles.meta}>
                <span>© {new Date().getFullYear()} Dachboden Sessions · Est. 2016</span>
                <Link to="/impressum">Impressum</Link>
            </p>
        </div>
    </footer>
);

export default SiteFooter;
