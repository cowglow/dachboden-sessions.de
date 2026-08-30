import { NavLink } from "react-router-dom";
import DsbLogo from "../dsb-logo/dsb-logo";
import styles from "./site-header.module.css";

const links = [
    { to: "/", label: "About", end: true },
    { to: "/mixes", label: "Mixes", end: false },
    { to: "/gallery", label: "Gallery", end: false },
    { to: "/editor", label: "Editor", end: false },
    { to: "/impressum", label: "Impressum", end: false },
];

const SiteHeader = () => (
    <header className={styles.header}>
        <div className={styles.inner}>
            <NavLink to="/" className={styles.brand}>
                <span className={styles.brandMark} aria-hidden="true">
                    <DsbLogo
                        colorBackground="#14161c"
                        colorLeft="#12d97a"
                        colorRight="#ffd24a"
                        colorBorder="#f2f3f7"
                    />
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

export default SiteHeader;
