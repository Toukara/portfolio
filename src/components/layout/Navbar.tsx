import { useTranslation } from "../../i18n";
import { LanguageSwitcher, ThemeSwitcher } from "../button/buttons";
import HandleLink from "../../utils/handleLink";

export default function Navbar() {
  const { t } = useTranslation();

  document.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    nav?.classList.toggle("scrolled", window.scrollY > 0);
  });

  return (
    <nav id="nav">
      <div
        className="nav-logo"
        id="nav-logo"
        onClick={(e) => HandleLink(e, "hero")}
        onMouseEnter={() => {
          document.getElementById("cursor")?.classList.add("hover-large");
          document.getElementById("logo")?.classList.add("logo-hovered");
        }}
        onMouseLeave={() => {
          document.getElementById("cursor")?.classList.remove("hover-large");
          document.getElementById("logo")?.classList.remove("logo-hovered");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "30px", fontFamily: "Roboto" }}>&lt;</span>
        <div id="logo">
          BENJAMIN<span> C.</span>
        </div>
        <span style={{ fontSize: "30px", fontFamily: "Roboto" }}>/&gt;</span>
      </div>
      <ul className="nav-links">
        <li
          onMouseEnter={() => {
            document.getElementById("cursor")?.classList.add("hover");
          }}
          onMouseLeave={() => {
            document.getElementById("cursor")?.classList.remove("hover");
          }}
          onClick={(e) => HandleLink(e, "skills")}
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
          onClick={(e) => HandleLink(e, "projects")}
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
          onClick={(e) => HandleLink(e, "contact")}
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
