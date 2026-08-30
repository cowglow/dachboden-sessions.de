import {Link} from "react-router-dom";
import {galleryImages} from "src/lib/gallery";
import {IG_ACCOUNT, instagramPosts, instagramUrl} from "src/data/instagram";
import {formatDate} from "src/service/mixcloud";
import styles from "./gallery.module.css";

const GalleryPage = () => (
    <section>
        <h1>Gallery</h1>

        {galleryImages.length === 0 ? (
            <p className={styles.empty}>
                No photos here yet. Drop image files into <code>src/gallery/</code>{" "}
                and they'll show up automatically.
            </p>
        ) : (
            <ul className={styles.grid}>
                {galleryImages.map((image) => (
                    <li key={image.slug} className={styles.cell}>
                        <Link to={`/gallery/${image.slug}`} className={styles.cellLink}>
                            <img
                                src={image.src}
                                alt={image.title}
                                loading="lazy"
                                className={styles.thumb}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        )}

        <h2 className={styles.igHeading}>On Instagram</h2>
        <p className={styles.igLead}>
            Clips and photos from{" "}
            <a
                href={`https://www.instagram.com/${IG_ACCOUNT}/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                @{IG_ACCOUNT}
            </a>
            .
        </p>
        <ul className={styles.igList}>
            {instagramPosts.map((post) => (
                <li key={post.shortcode} className={styles.igItem}>
                    <a
                        href={instagramUrl(post)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {post.caption}
                    </a>
                    <span className={styles.igMeta}>
                        {post.media === "video" ? "Video" : "Photo"} ·{" "}
                        {formatDate(post.date)}
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

export default GalleryPage;
