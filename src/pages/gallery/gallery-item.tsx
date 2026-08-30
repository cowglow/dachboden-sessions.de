import { Link, Navigate, useParams } from "react-router-dom";
import { useI18n } from "src/i18n";
import { findGalleryImage } from "src/lib/gallery";
import styles from "./gallery.module.css";

const GalleryItemPage = () => {
    const { t } = useI18n();
    const { slug } = useParams<{ slug: string }>();
    const image = slug ? findGalleryImage(slug) : undefined;

    if (!image) {
        return <Navigate to="/gallery" replace />;
    }

    return (
        <section className={styles.detail}>
            <Link to="/gallery" className={styles.back}>
                {t.gallery.back}
            </Link>
            <img src={image.src} alt={image.title} className={styles.full} />
            <h1 className={styles.caption}>{image.title}</h1>
        </section>
    );
};

export default GalleryItemPage;
