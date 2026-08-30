import { Route, Routes } from "react-router-dom";
import { I18nProvider, type Locale } from "src/i18n";
import SiteHeader from "../site-header/site-header";
import SiteFooter from "../site-footer/site-footer";
import AboutPage from "../../pages/about/about";
import MixesPage from "../../pages/mixes/mixes";
import GalleryPage from "../../pages/gallery/gallery";
import GalleryItemPage from "../../pages/gallery/gallery-item";
import BrandPage from "../../pages/brand/brand";
import BrandColourways from "../../pages/brand/brand-colourways";
import BrandEditor from "../../pages/brand/brand-editor";
import ImpressumPage from "../../pages/impressum/impressum";
import NotFoundPage from "../../pages/not-found/not-found";

const App = ({ locale }: { locale: Locale }) => (
    <I18nProvider locale={locale}>
        <SiteHeader />
        <main className="container">
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/mixes" element={<MixesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/gallery/:slug" element={<GalleryItemPage />} />
                <Route path="/brand" element={<BrandPage />}>
                    <Route index element={<BrandEditor />} />
                    <Route path="colourways" element={<BrandColourways />} />
                </Route>
                <Route path="/impressum" element={<ImpressumPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
        <SiteFooter />
    </I18nProvider>
);

export default App;
