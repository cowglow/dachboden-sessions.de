import { NavLink, Outlet } from "react-router-dom";
import { useI18n } from "src/i18n";
import styles from "./brand.module.css";

const BrandPage = () => {
    const { t } = useI18n();
    const b = t.brand;

    const tabs = [
        { to: "/brand", label: b.tabEditor, end: true },
        { to: "/brand/colourways", label: b.tabColourways, end: false },
    ];

    return (
        <section>
            <h1>{b.title}</h1>
            <p className={styles.lead}>{b.lead}</p>

            <nav className={styles.tabs} aria-label={b.sectionsLabel}>
                {tabs.map(({ to, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.tab} ${styles.tabActive}`
                                : styles.tab
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            <Outlet />
        </section>
    );
};

export default BrandPage;
