import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "../../i18n";
import HandleLink from "../../utils/handleLink";

export default function Hero() {
  const { t } = useTranslation();
  const eyebrow = t("hero.eyebrow");
  const phrases = useMemo(
    () => (Array.isArray(eyebrow) ? eyebrow : [eyebrow ?? ""]),
    [eyebrow],
  );
  const [eyebrowText, setEyebrowText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const resetId = window.setTimeout(() => {
      if (!phrases.length || !phrases[0]) {
        setEyebrowText("");
        setCurrentPhraseIndex(0);
        setCharIndex(0);
        setIsDeleting(false);
        return;
      }

      setEyebrowText("");
      setCurrentPhraseIndex(0);
      setCharIndex(0);
      setIsDeleting(false);
    }, 0);

    return () => {
      window.clearTimeout(resetId);
    };
  }, [phrases]);

  useEffect(() => {
    if (!phrases.length || !phrases[0]) {
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex] ?? "";
    const hasFinishedTyping = !isDeleting && charIndex >= currentPhrase.length;
    const delay = hasFinishedTyping ? 1200 : isDeleting ? 45 : 80;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setEyebrowText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charIndex > 0) {
        setEyebrowText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [phrases, currentPhraseIndex, charIndex, isDeleting]);

  return (
    <section id="hero">
      <p className="hero-eyebrow-wrapper">
        <span className="hero-eyebrow">{eyebrowText}</span>
        <span className="hero-eyebrow-cursor"></span>
      </p>

      <h1
        className="hero-title"
        aria-label={`${t("hero.title1")} ${t("hero.title2")}`}
        style={{ textTransform: "uppercase" }}
      >
        <span id="hero-title1">{t("hero.title1")}</span>
        <br />
        <span id="hero-title2">{t("hero.title2")}</span>
      </h1>
      <p className="hero-sub">{t("hero.sub")}</p>
      <div className="hero-ctas">
        <a
          className="btn-primary"
          onClick={(e) => HandleLink(e, "projects")}
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
        >
          {t("hero.cta1")}
        </a>
        <a
          className="btn-outline"
          onClick={(e) => HandleLink(e, "contact")}
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
        >
          {t("hero.cta2")}
        </a>
      </div>
      {}
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span id="hero-scroll">{t("hero.scroll")}</span>
      </div>
    </section>
  );
}
