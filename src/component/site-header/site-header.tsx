import { NavLink } from "react-router-dom";
import { useI18n } from "src/i18n";
import RandomizedDbsLogo from "../dsb-logo/RandomizedDbsLogo";
import styles from "./site-header.module.css";

const SiteHeader = () => {
    const { t } = useI18n();
    // "About" is reachable via the brand link on the left, so it's not repeated.
    const links = [
        { to: "/mixes", label: t.nav.mixes, end: false },
        { to: "/gallery", label: t.nav.gallery, end: false },
        { to: "/brand", label: t.nav.brand, end: false },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.brand}>
                    <span
                        className={styles.brandMark}
                        aria-hidden="true"
                        data-random-logo
                    >
                        <RandomizedDbsLogo />
                    </span>
                    <span className={styles.brandText}>Dachboden Sessions</span>
                </NavLink>
                <nav className={styles.nav} aria-label="Primary">
                    {links.map(({ to, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                        }
                    >
                        {label}
                    </NavLink>
                ))}
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;
