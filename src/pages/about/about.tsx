import { Link } from "react-router-dom";
import { useI18n } from "src/i18n";
import DsbLogo from "../../component/dsb-logo/dsb-logo";
import { formatYear } from "src/service/mixcloud";
import snapshotJson from "../../data/mixes.json";
import type { MixesSnapshot } from "src/types";
import styles from "./about.module.css";

const { profile, mixes } = snapshotJson as MixesSnapshot;

const firstMixYear = formatYear(mixes[mixes.length - 1]?.createdTime);
const lastMixYear = formatYear(mixes[0]?.createdTime);

const AboutPage = () => {
    const { t } = useI18n();
    const a = t.about;

    return (
        <article>
            <div className={styles.hero}>
                <DsbLogo
                    colorLeft="#00ff00"
                    colorRight="#ffff00"
                    colorBackground="#000000"
                    colorBorder="#ffffff"
                />
            </div>

            <h1>{a.title}</h1>

            <p>
                {a.p1a}
                <a
                    href="https://www.youtube.com/watch?v=H7w4jipfuio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {a.p1Interview}
                </a>
                {a.p1b}
            </p>

            <p>{a.p2}</p>

            <p>{a.p3}</p>

            <p>{a.p4}</p>

            <h2>{a.archiveHeading}</h2>
            <p>
                {a.archA.replace("{count}", String(mixes.length))}
                <a href={profile.url} target="_blank" rel="me noopener noreferrer">
                    {a.archMixcloud}
                </a>
                {a.archB
                    .replace("{first}", firstMixYear)
                    .replace("{last}", lastMixYear)}
                <Link to="/mixes">{a.archMixes}</Link>
                {a.archC}
                <Link to="/gallery">{a.archGallery}</Link>
                {a.archD}
                <Link to="/brand">{a.archLogo}</Link>
                {a.archE}
            </p>
        </article>
    );
};

export default AboutPage;
