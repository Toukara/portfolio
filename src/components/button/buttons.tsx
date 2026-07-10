import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowUpIcon, GlobeIcon } from "../../assets/svg/customSVG";
import { useTranslation } from "../../i18n";
import { useTheme } from "../../utils/theme";

const LanguageSwitcher = () => {
  const { locale, toggleLocale } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        className="ctrl-btn language-switch"
        id="lang-btn"
        onClick={toggleLocale}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover");
        }}
      >
        <GlobeIcon />
        <span id="lang-label">{locale === "en" ? "FR" : "EN"}</span>
      </button>
    </div>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="theme-switcher">
      <button
        className="ctrl-btn theme-switch"
        id="theme-btn"
        onClick={toggle}
        aria-pressed={isDark}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover");
        }}
      >
        <span className="theme-switch-track">
          <span className={`theme-switch-thumb ${isDark ? "active" : ""}`} />
        </span>
        <span id="theme-label" className="theme-switch-label">
          {isDark ? "Dark" : "Light"}
        </span>
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
      <ArrowUpIcon width="20" height="20" />
    </div>
  );
};

export { GoTop, LanguageSwitcher, ThemeSwitcher };
