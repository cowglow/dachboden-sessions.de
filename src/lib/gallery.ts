export interface GalleryImage {
    slug: string;
    src: string;
    title: string;
}

// Build-time include: every image dropped into src/gallery/ becomes a gallery
// entry. `query: "?url"` makes Vite hash + copy the file and hand back its URL.
const modules = import.meta.glob<string>(
    "../gallery/*.{jpg,jpeg,png,webp,avif,gif,svg}",
    { eager: true, query: "?url", import: "default" }
);

function toTitle(slug: string): string {
    return slug
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const galleryImages: GalleryImage[] = Object.entries(modules)
    .map(([path, src]) => {
        const file = path.split("/").pop() ?? path;
        const slug = file.replace(/\.[^.]+$/, "");
        return { slug, src, title: toTitle(slug) };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true }));

export function findGalleryImage(slug: string): GalleryImage | undefined {
    return galleryImages.find((image) => image.slug === slug);
}
