import styles from "./impressum.module.css";

const ImpressumPage = () => (
    <section className={styles.legal}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
            Philip Saa
            <br />
            Meckenhausen C 8
            <br />
            91161 Hilpoltstein
            <br />
            Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
            E-Mail: <a href="mailto:cowglow@gmail.com">cowglow@gmail.com</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
            Philip Saa
            <br />
            Anschrift wie oben
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Mixes, Artwork und
            Fotos verbleiben beim jeweiligen Urheber.
        </p>
    </section>
);

export default ImpressumPage;
