# Gallery images

Drop image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`, `.svg`)
straight into this folder. Each one is picked up at build time by
`src/lib/gallery.ts` (via `import.meta.glob`) and shown on the `/gallery` page —
no code changes or list to maintain.

The filename becomes the caption and the URL slug:

| File | Caption | URL |
| --- | --- | --- |
| `attic-2016-first-session.jpg` | "Attic 2016 First Session" | `/gallery/attic-2016-first-session` |
| `crew_2019.png` | "Crew 2019" | `/gallery/crew_2019` |

Images are sorted by filename, so a `NN-` numeric prefix controls the order.
Keep files web-sized (long edge ~2000px) — they are served as-is.

## Instagram source material

Posts from [@mc.scrpt](https://www.instagram.com/mc.scrpt/) worth pulling into
the gallery. Instagram media is hotlink-protected, so download each one manually
and drop it in this folder. The link list itself is rendered (as links out) on
`/gallery` from `src/data/instagram.ts`.

- https://www.instagram.com/mc.scrpt/p/Bp9SAf0Fgh3/ — photo, 2018-11-09, "Dachboden Sessions stickers are back!"
- https://www.instagram.com/mc.scrpt/p/BchEV7elsTJ/ — photo, 2017-12-10, "A very jungle xmas"
- https://www.instagram.com/mc.scrpt/reel/BZbXM1eFPsm/ — video, 2017-09-24, session clip
- https://www.instagram.com/mc.scrpt/reel/BVfBNjhl9uN/ — video, 2017-06-18, "resurrecting some 17-year-old tracks"
- https://www.instagram.com/mc.scrpt/p/BQJHVllA6Ep/ — photo, 2017-02-05, "DJ JO & MC SCRPT"
- https://www.instagram.com/mc.scrpt/reel/BNXfrHdAQFP/ — video, 2016-11-28, "drum & bass is alive and well in Lauf!" (@lightup_dnb)
