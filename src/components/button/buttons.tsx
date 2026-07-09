import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n";
import { useTheme } from "../../utils/theme";

const LanguageSwitcher = () => {
  const { locale, toggleLocale } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        className="ctrl-btn"
        id="lang-btn"
        title={locale === "en" ? "Switch to French" : "Passer en anglais"}
        onClick={toggleLocale}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover");
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span id="lang-label">{locale === "en" ? "FR" : "EN"}</span>
      </button>
    </div>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="theme-switcher">
      <button
        className="ctrl-btn"
        id="theme-btn"
        onClick={toggle}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover");
        }}
      >
        <span id="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
};

import handleLink from "../../utils/handleLink";

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="goTop"
      style={{ display: visible ? "flex" : "none" }}
      onClick={(e: MouseEvent<HTMLElement>) => {
        handleLink(e, "hero");
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
};

export { GoTop, LanguageSwitcher, ThemeSwitcher };
