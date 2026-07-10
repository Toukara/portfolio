import { useTranslation } from "../../i18n";

export default function Contact() {
  const { t } = useTranslation();

  function encryptEmail(user: string, domain: string) {
    return () => {
      window.location.href = atob(btoa(`mailto:${user}@${domain}`));
    };
  }
  return (
    <section id="contact">
      <p className="contact-eyebrow">{t("contact.eyebrow")}</p>
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.sub")}</p>
      <a
        className="btn-primary"
        style={{
          display: "inline-block",
          fontSize: "16px",
          padding: "16px 40px",
        }}
        data-i18n="contact.cta"
        onClick={encryptEmail("camus.benjamin", "hotmail.com")}
      >
        Dire bonjour 👋
      </a>

      <div className="contact-social">
        <a href="#" className="social-link">
          GitHub
        </a>
        <a href="#" className="social-link">
          LinkedIn
        </a>
        <a href="#" className="social-link">
          Twitter/X
        </a>
        <a href="#" className="social-link">
          Dribbble
        </a>
      </div>
    </section>
  );
}
