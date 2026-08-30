import type { Mix, MixesSnapshot } from "src/types";
import { formatDate, formatDuration, formatYear } from "src/service/mixcloud";
import snapshotJson from "../../data/mixes.json";
import styles from "./mixes.module.css";

const snapshot = snapshotJson as MixesSnapshot;

function groupByYear(mixes: Mix[]): [string, Mix[]][] {
    const groups = new Map<string, Mix[]>();
    for (const mix of mixes) {
        const year = formatYear(mix.createdTime) || "—";
        const bucket = groups.get(year) ?? [];
        bucket.push(mix);
        groups.set(year, bucket);
    }
    return [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}

const numberFmt = new Intl.NumberFormat();

const MixesPage = () => {
    const { profile, mixes } = snapshot;
    const years = groupByYear(mixes);

    return (
        <section>
            <h1>Mixes</h1>
            <p className={styles.lead}>
                Every recorded Dachboden session — {mixes.length} in total, from{" "}
                {formatYear(mixes[mixes.length - 1]?.createdTime)} to{" "}
                {formatYear(mixes[0]?.createdTime)}. Archived from{" "}
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    mixcloud.com/dachboden
                </a>
                .
            </p>

            {years.map(([year, yearMixes]) => (
                <div key={year} className={styles.yearBlock}>
                    <h2 className={styles.year}>{year}</h2>
                    <ul className={styles.list}>
                        {yearMixes.map((mix) => {
                            const duration = formatDuration(mix.audioLength);
                            const date = formatDate(mix.createdTime);
                            const plays =
                                mix.playCount != null
                                    ? `${numberFmt.format(mix.playCount)} plays`
                                    : "";
                            const tags = mix.tags.slice(0, 4).join(" · ");
                            return (
                                <li key={mix.key} className={styles.card}>
                                    <a
                                        className={styles.cardLink}
                                        href={mix.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className={styles.art}
                                            src={mix.pictures.large}
                                            alt=""
                                            loading="lazy"
                                            width={96}
                                            height={96}
                                        />
                                        <div className={styles.body}>
                                            <span className={styles.title}>{mix.name}</span>
                                            <span className={styles.sub}>
                                                {[date, duration, plays].filter(Boolean).join(" · ")}
                                            </span>
                                            {tags && <span className={styles.tags}>{tags}</span>}
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default MixesPage;
