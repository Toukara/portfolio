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
      <h3 className="contact-eyebrow">{t("contact.eyebrow")}</h3>
      <h2 className="contact-title">{t("contact.title")}</h2>
      <p>{t("contact.sub")}</p>
      <a
        className="btn-primary"
        style={{
          display: "inline-block",
          fontSize: "16px",
          padding: "16px 40px",
        }}
        onClick={encryptEmail("camus.benjamin", "hotmail.com")}
      >
        {t("contact.cta")} !
      </a>

      <div className="contact-social">
        <a
          href="https://github.com/toukara"
          id="github"
          className="social-link"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://codepen.io/toukara"
          id="codepen"
          className="social-link"
          target="_blank"
        >
          Codepen
        </a>
        <a
          href="https://x.com/Benjamincms_"
          id="twitter"
          className="social-link"
          target="_blank"
        >
          X / Twitter
        </a>
        <a
          href=" https://www.linkedin.com/in/benjamincamus01/"
          id="linkedin"
          className="social-link"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
