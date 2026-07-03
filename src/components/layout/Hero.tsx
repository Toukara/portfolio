import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n";

export default function Hero() {
  const { t } = useTranslation();
  const eyebrow = t("hero.eyebrow");
  const [eyebrowText, setEyebrowText] = useState<string>(() => {
    if (Array.isArray(eyebrow)) {
      return eyebrow[0] ?? "";
    }
    return eyebrow ?? "";
  });

  useEffect(() => {
    const value = Array.isArray(eyebrow)
      ? eyebrow[Math.floor(Math.random() * eyebrow.length)]
      : eyebrow;

    const timer = window.setTimeout(() => {
      setEyebrowText(value ?? "");
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [eyebrow]);

  return (
    <section id="hero">
      <p className="hero-eyebrow-wrapper">
        <span className="hero-eyebrow">{eyebrowText}</span>
        <span className="hero-eyebrow-cursor"></span>
      </p>

      <h1 className="hero-title">
        <span id="hero-title1">{t("hero.title1")}</span>
        <br />
        <span id="hero-title2">{t("hero.title2")}</span>
      </h1>
      <p className="hero-sub">{t("hero.sub")}</p>
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          {t("hero.cta1")}
        </a>
        <a href="#contact" className="btn-outline">
          {t("hero.cta2")}
        </a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span id="hero-scroll">{t("hero.scroll")}</span>
      </div>
    </section>
  );
}
