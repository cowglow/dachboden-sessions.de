import { Fragment } from "react";
import { useI18n } from "src/i18n";
import type { Mix, MixesSnapshot } from "src/types";
import { formatDate, formatDuration, formatYear } from "src/service/mixcloud";
import snapshotJson from "../../data/mixes.json";
import styles from "./mixes.module.css";

const snapshot = snapshotJson as MixesSnapshot;

// biog is plain text: a headline line, then "Name: https://url" lines.
const crew = snapshot.profile.biog
    .split("\n")
    .map((line) => line.trim())
    .map((line) => {
        const match = line.match(/^(.+?):\s*(https?:\/\/\S+)$/);
        return match ? { name: match[1], url: match[2] } : null;
    })
    .filter((entry): entry is { name: string; url: string } => entry !== null);

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
    const { t } = useI18n();
    const m = t.mixes;
    const { profile, mixes } = snapshot;
    const years = groupByYear(mixes);

    return (
        <section className="h-feed">
            <h1 className="p-name">{m.title}</h1>
            <p className={styles.lead}>
                {m.leadA
                    .replace("{count}", String(mixes.length))
                    .replace(
                        "{first}",
                        formatYear(mixes[mixes.length - 1]?.createdTime)
                    )
                    .replace("{last}", formatYear(mixes[0]?.createdTime))}
                <a href={profile.url} target="_blank" rel="me noopener noreferrer">
                    {m.leadLink}
                </a>
                {m.leadB}
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
                                    ? m.plays.replace(
                                          "{n}",
                                          numberFmt.format(mix.playCount)
                                      )
                                    : "";
                            const tags = mix.tags.slice(0, 4);
                            return (
                                <li key={mix.key} className={`${styles.card} h-entry`}>
                                    <a
                                        className={`${styles.cardLink} u-url`}
                                        href={mix.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className={`${styles.art} u-photo`}
                                            src={mix.pictures.large}
                                            alt=""
                                            loading="lazy"
                                            width={96}
                                            height={96}
                                        />
                                        <div className={styles.body}>
                                            <span className={`${styles.title} p-name`}>
                                                {mix.name}
                                            </span>
                                            <span className={styles.sub}>
                                                <time
                                                    className="dt-published"
                                                    dateTime={mix.createdTime}
                                                >
                                                    {date}
                                                </time>
                                                {duration && ` · ${duration}`}
                                                {plays && ` · ${plays}`}
                                            </span>
                                            {tags.length > 0 && (
                                                <span className={styles.tags}>
                                                    {tags.map((tag, i) => (
                                                        <Fragment key={tag}>
                                                            {i > 0 && " · "}
                                                            <span className="p-category">
                                                                {tag}
                                                            </span>
                                                        </Fragment>
                                                    ))}
                                                </span>
                                            )}
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            {crew.length > 0 && (
                <div className={styles.yearBlock}>
                    <h2 className={styles.year}>{m.crewHeading}</h2>
                    <ul className={styles.crew}>
                        {crew.map((member) => (
                            <li key={member.url} className="h-card">
                                <a
                                    className="u-url p-name"
                                    href={member.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {member.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default MixesPage;
