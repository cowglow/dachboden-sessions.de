export function formatDuration(seconds?: number | null): string {
    if (!seconds || seconds < 0) return "";
    const total = Math.round(seconds);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) {
        return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    return `${m}:${String(s).padStart(2, "0")}`;
}

// Pin the BCP-47 tag so prerender (Node, whatever its system locale) and the
// browser agree: German pages get "26. Nov. 2016", English "26 Nov 2016".
const DATE_LOCALE: Record<"de" | "en", string> = {
    de: "de-DE",
    en: "en-GB",
};

export function formatDate(iso?: string, locale: "de" | "en" = "de"): string {
    if (!iso) return "";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(DATE_LOCALE[locale], {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function formatYear(iso?: string): string {
    if (!iso) return "";
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? "" : String(date.getFullYear());
}
