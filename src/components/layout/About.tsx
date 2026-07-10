import { useTranslation } from "../../i18n";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="about-text">
        <h2 className="section-eyebrow">{t("about.eyebrow")}</h2>
        <p className="about-description">{t("about.description")}</p>
      </div>
      <div className="about-info-card">
        <div className="about-name">
          <img />
          <p>Name</p>
        </div>
        <div className="about-localisation">
          <img />
          <p>Lens</p>
        </div>
        <div className="about-languages">
          <img />
          <p>Languages</p>
        </div>
        <div className="about-avaible">
          <img />
          <p>Avaible</p>
        </div>
      </div>
    </section>
  );
}

// TODO
// FAIRE LA CARTE ET LA METTRE A DROITE
// REGARDER POUR LES TAILLES DE POLICE, (sentiments de petit)
// RECHERCHER DES SVG POUR FILL LA CARD INFO
