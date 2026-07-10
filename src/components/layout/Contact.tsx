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
        {t("contact.cta")}
      </a>

      <div className="contact-social">
        <a href="https://github.com/toukara" className="social-link">
          GitHub
        </a>
        {/* <a href="#" className="social-link">
          LinkedIn
        </a>
        <a href="#" className="social-link">
          Twitter/X
        </a>
        <a href="#" className="social-link">
          Dribbble
        </a> */}
      </div>
    </section>
  );
}
