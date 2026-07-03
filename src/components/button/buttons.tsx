import { useTranslation } from "../../i18n";
import { useTheme } from "../../utils/theme";

export const LanguageSwitcher = () => {
  const { locale, toggleLocale } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        className="ctrl-btn"
        id="lang-btn"
        title={locale === "en" ? "Switch to French" : "Passer en anglais"}
        onClick={toggleLocale}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span id="lang-label">{locale.toUpperCase()}</span>
      </button>
    </div>
  );
};

export const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="theme-switcher">
      <button className="ctrl-btn" id="theme-btn" onClick={toggle}>
        <span id="theme-label">{theme === "dark" ? "Dark" : "Light"}</span>
      </button>
    </div>
  );
};
