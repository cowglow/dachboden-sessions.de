import { createContext, useContext, type ReactNode } from "react";
import { strings, type Dict, type Locale } from "./messages";

export type { Locale } from "./messages";

interface I18n {
    locale: Locale;
    t: Dict;
}

const I18nContext = createContext<I18n>({ locale: "de", t: strings.de });

export const I18nProvider = ({
    locale,
    children,
}: {
    locale: Locale;
    children: ReactNode;
}) => (
    <I18nContext.Provider value={{ locale, t: strings[locale] }}>
        {children}
    </I18nContext.Provider>
);

export const useI18n = () => useContext(I18nContext);

/** "de" for the root tree, "en" for anything under /en. */
export function localeFromPath(pathname: string): Locale {
    return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}
