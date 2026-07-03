import { useTranslation } from "../../i18n";
import { LanguageSwitcher, ThemeSwitcher } from "../button/buttons";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav id="nav">
      <div
        className="nav-logo"
        onClick={() => (window.location.href = "#hero")}
        onMouseLeave={() =>
          window.document
            .getElementsByClassName("cursor")[0]
            .classList.remove("hover")
        }
        onMouseEnter={() =>
          window.document
            .getElementsByClassName("cursor")[0]
            .classList.add("hover")
        }
      >
        Benjamin<span> C.</span>
      </div>
      <ul className="nav-links">
        <li
          onMouseLeave={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.remove("hover")
          }
          onMouseEnter={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.add("hover")
          }
        >
          <a href="#about">{t("nav.about")}</a>
        </li>

        <li
          onMouseLeave={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.remove("hover")
          }
          onMouseEnter={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.add("hover")
          }
        >
          <a href="#skills">{t("nav.skills")}</a>
        </li>
        <li
          onMouseEnter={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.add("hover")
          }
          onMouseLeave={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.remove("hover")
          }
        >
          <a href="#projects">{t("nav.projects")}</a>
        </li>
        <li
          onMouseEnter={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.add("hover")
          }
          onMouseLeave={() =>
            window.document
              .getElementsByClassName("cursor")[0]
              .classList.remove("hover")
          }
        >
          <a href="#contact">{t("nav.contact")}</a>
        </li>
      </ul>
      <div className="nav-controls">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
