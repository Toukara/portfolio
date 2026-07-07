import { useTranslation } from "../../i18n";
import { LanguageSwitcher, ThemeSwitcher } from "../button/buttons";

export default function Navbar() {
  const { t } = useTranslation();

  document.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    nav?.classList.toggle("scrolled", window.scrollY > 0);
  });

  function handleNavLinkClick(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    targetId: string,
  ) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav id="nav">
      <div
        className="nav-logo"
        onClick={(e) => handleNavLinkClick(e, "hero")}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover-logo");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover-logo");
        }}
      >
        BENJAMIN<span> C.</span>
      </div>
      <ul className="nav-links">
        <li
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
          onClick={(e) => handleNavLinkClick(e, "skills")}
        >
          <p>{t("nav.skills")}</p>
        </li>
        <li
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
        >
          <p>{t("nav.projects")}</p>
        </li>
        <li
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
        >
          <p>{t("nav.contact")}</p>
        </li>
      </ul>
      <div className="nav-controls">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
