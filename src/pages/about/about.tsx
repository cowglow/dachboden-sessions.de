import { Link } from "react-router-dom";
import DsbLogo from "../../component/dsb-logo/dsb-logo";
import { formatYear } from "src/service/mixcloud";
import snapshotJson from "../../data/mixes.json";
import type { MixesSnapshot } from "src/types";
import styles from "./about.module.css";

const { profile, mixes } = snapshotJson as MixesSnapshot;

// biog is plain text: a headline line, then "Name: https://url" lines.
const crew = profile.biog
    .split("\n")
    .map((line) => line.trim())
    .map((line) => {
        const match = line.match(/^(.+?):\s*(https?:\/\/\S+)$/);
        return match ? { name: match[1], url: match[2] } : null;
    })
    .filter((entry): entry is { name: string; url: string } => entry !== null);

const firstMixYear = formatYear(mixes[mixes.length - 1]?.createdTime);
const lastMixYear = formatYear(mixes[0]?.createdTime);

const AboutPage = () => (
    <article>
        <div className={styles.hero}>
            <DsbLogo
                colorLeft="#00ff00"
                colorRight="#ffff00"
                colorBackground="#000000"
                colorBorder="#ffffff"
            />
        </div>

        <h1>Dachboden Sessions (Est. 2016)</h1>

        <p>
            Dachboden Sessions was a drum &amp; bass mix project from Middle
            Franconia, Bavaria, founded and led by Der Zimmy. Its guiding concept,
            described in a{" "}
            <a
                href="https://www.youtube.com/watch?v=H7w4jipfuio"
                target="_blank"
                rel="noopener noreferrer"
            >
                Radio Z Nürnberg interview
            </a>{" "}
            on 20 December 2017, is simple: a "Dachboden Session" means twelve
            months, twelve mixes, and seeing the idea through.
        </p>

        <p>
            For 2018, Der Zimmy planned to open the project up beyond his own
            mixes, with more involvement from ThinA1r.
        </p>

        <p>
            The project's featured MC is MC SCRPT. He began MCing at The LightUp! #36 at the end of November 2017,
            having followed drum &amp; bass since Roni Size's Reprezent in 1997.
        </p>

        <p>Dachboden Sessions publishes on Mixcloud and Facebook.</p>

        <h2>The archive</h2>
        <p>
            {mixes.length} sessions are archived on{" "}
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
                Mixcloud
            </a>
            , recorded between {firstMixYear} and {lastMixYear}. Browse the{" "}
            <Link to="/mixes">mixes</Link>, look through the{" "}
            <Link to="/gallery">gallery</Link>, or recolour the{" "}
            <Link to="/editor">logo</Link>.
        </p>

        {crew.length > 0 && (
            <>
                <h2>Crew on Mixcloud</h2>
                <ul className={styles.crew}>
                    {crew.map((member) => (
                        <li key={member.url}>
                            <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {member.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </article>
);

export default AboutPage;
