import { Route, Routes } from "react-router-dom";
import SiteHeader from "../site-header/site-header";
import SiteFooter from "../site-footer/site-footer";
import AboutPage from "../../pages/about/about";
import MixesPage from "../../pages/mixes/mixes";
import GalleryPage from "../../pages/gallery/gallery";
import GalleryItemPage from "../../pages/gallery/gallery-item";
import EditorPage from "../../pages/editor/editor";
import ImpressumPage from "../../pages/impressum/impressum";
import NotFoundPage from "../../pages/not-found/not-found";

const App = () => (
    <>
        <SiteHeader />
        <main className="container">
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/mixes" element={<MixesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/gallery/:slug" element={<GalleryItemPage />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/impressum" element={<ImpressumPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
        <SiteFooter />
    </>
);

export default App;
