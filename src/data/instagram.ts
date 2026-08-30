import type { InstagramPost } from "../types";

// Hand-curated from the list in src/gallery/README.md (account: @mc.scrpt).
// Instagram embeds need JavaScript and the media is hotlink-protected, so these
// are rendered as plain links out on the /gallery page.
export const IG_ACCOUNT = "mc.scrpt";

export const instagramPosts: InstagramPost[] = [
    {
        shortcode: "Bp9SAf0Fgh3",
        kind: "p",
        media: "photo",
        date: "2018-11-09",
        caption: "Dachboden Sessions stickers are back!",
    },
    {
        shortcode: "BchEV7elsTJ",
        kind: "p",
        media: "photo",
        date: "2017-12-10",
        caption: "A very jungle xmas — from all of us at Dachboden.",
    },
    {
        shortcode: "BZbXM1eFPsm",
        kind: "reel",
        media: "video",
        date: "2017-09-24",
        caption: "Dachboden session clip.",
    },
    {
        shortcode: "BVfBNjhl9uN",
        kind: "reel",
        media: "video",
        date: "2017-06-18",
        caption: "Back at it again — resurrecting some 17-year-old tracks.",
    },
    {
        shortcode: "BQJHVllA6Ep",
        kind: "p",
        media: "photo",
        date: "2017-02-05",
        caption: "DJ JO & MC SCRPT — Dachboden Sessions, Mittelfranken.",
    },
    {
        shortcode: "BNXfrHdAQFP",
        kind: "reel",
        media: "video",
        date: "2016-11-28",
        caption: "Drum & bass is alive and well in Lauf! (with @lightup_dnb)",
    },
];

export function instagramUrl(post: InstagramPost): string {
    return `https://www.instagram.com/${IG_ACCOUNT}/${post.kind}/${post.shortcode}/`;
}
