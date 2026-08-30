import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <section>
        <h1>Page not found</h1>
        <p>That page doesn't exist (or moved).</p>
        <p>
            <Link to="/">← Back to the start</Link>
        </p>
    </section>
);

export default NotFoundPage;
