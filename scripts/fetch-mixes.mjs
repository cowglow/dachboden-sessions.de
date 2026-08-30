// Snapshot the public Mixcloud profile + every cloudcast into src/data/mixes.json
// so the site ships the archive as static content (no runtime API dependency).
// Run manually to refresh:  yarn fetch:mixes
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const USER = "dachboden";
const API = "https://api.mixcloud.com";
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/mixes.json");

async function getJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} -> ${res.status}`);
    return res.json();
}

function pickPictures(p = {}) {
    return {
        medium: p.medium ?? p.thumbnail,
        large: p.large ?? p.medium,
        xl: p["640wx640h"] ?? p.extra_large ?? p.large,
    };
}

async function main() {
    const profileRaw = await getJson(`${API}/${USER}/`);
    const profile = {
        name: profileRaw.name,
        username: profileRaw.username,
        url: profileRaw.url,
        location: [profileRaw.city, profileRaw.country].filter(Boolean).join(", "),
        biog: profileRaw.biog ?? "",
        createdTime: profileRaw.created_time,
        cloudcastCount: profileRaw.cloudcast_count,
        followerCount: profileRaw.follower_count,
        picture: pickPictures(profileRaw.pictures).large,
    };

    const mixes = [];
    let url = `${API}/${USER}/cloudcasts/?limit=50`;
    for (let guard = 0; url && guard < 20; guard += 1) {
        const page = await getJson(url);
        for (const c of page.data) {
            mixes.push({
                key: c.key,
                slug: c.slug,
                name: c.name,
                url: c.url,
                createdTime: c.created_time,
                audioLength: c.audio_length ?? null,
                playCount: c.play_count ?? null,
                favoriteCount: c.favorite_count ?? null,
                tags: (c.tags ?? []).map((t) => t.name),
                pictures: pickPictures(c.pictures),
            });
        }
        url = page.paging?.next ?? "";
    }

    mixes.sort((a, b) => (a.createdTime < b.createdTime ? 1 : -1));

    const payload = {
        generatedAt: new Date().toISOString(),
        source: profile.url,
        profile,
        mixes,
    };

    writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
    console.log(`fetch-mixes: wrote ${mixes.length} mixes -> ${OUT}`);
}

main().catch((err) => {
    console.error("fetch-mixes failed:", err);
    process.exit(1);
});
