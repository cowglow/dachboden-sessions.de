import { Link } from "react-router-dom";

// Served as the single dist/404.html for both language trees, so it carries
// both languages.
const NotFoundPage = () => (
    <section>
        <h1>Seite nicht gefunden · Page not found</h1>
        <p lang="de">Diese Seite gibt es nicht (oder sie ist umgezogen).</p>
        <p lang="en">That page doesn’t exist (or moved).</p>
        <p>
            <Link to="/">← Zurück zum Anfang · Back to the start</Link>
        </p>
    </section>
);

export default NotFoundPage;
