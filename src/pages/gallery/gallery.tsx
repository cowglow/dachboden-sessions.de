import { Link } from "react-router-dom";
import { useI18n } from "src/i18n";
import { galleryImages } from "src/lib/gallery";
import { IG_ACCOUNT, instagramPosts, instagramUrl } from "src/data/instagram";
import { formatDate } from "src/service/mixcloud";
import styles from "./gallery.module.css";

const GalleryPage = () => {
    const { t, locale } = useI18n();
    const g = t.gallery;

    return (
        <section>
            <h1>{g.title}</h1>

            {galleryImages.length === 0 ? (
                <p className={styles.empty}>
                    {g.emptyA}
                    <code>{g.emptyCode}</code>
                    {g.emptyB}
                </p>
            ) : (
                <ul className={`${styles.grid} h-feed`}>
                    {galleryImages.map((image) => (
                        <li key={image.slug} className={`${styles.cell} h-entry`}>
                            <Link
                                to={`/gallery/${image.slug}`}
                                className={`${styles.cellLink} u-url`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    className={`${styles.thumb} u-photo p-name`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <h2 className={styles.igHeading}>{g.igHeading}</h2>
            <p className={styles.igLead}>
                {g.igLeadA}
                <a
                    href={`https://www.instagram.com/${IG_ACCOUNT}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @{IG_ACCOUNT}
                </a>
                {g.igLeadB}
            </p>
            <ul className={`${styles.igList} h-feed`}>
                {instagramPosts.map((post) => (
                    <li key={post.shortcode} className={`${styles.igItem} h-entry`}>
                        <a
                            href={instagramUrl(post)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="u-url p-name"
                        >
                            {post.caption}
                        </a>
                        <span className={styles.igMeta}>
                            {post.media === "video" ? g.video : g.photo} ·{" "}
                            <time className="dt-published" dateTime={post.date}>
                                {formatDate(post.date, locale)}
                            </time>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GalleryPage;
