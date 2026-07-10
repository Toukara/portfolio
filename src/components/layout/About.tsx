import {
  LanguageIcon,
  LocationIcon,
  UserIcon,
} from "../../assets/svg/customSVG";
import { useTranslation } from "../../i18n";

export default function About() {
  const { t } = useTranslation();
  const cardKeys = ["name", "location", "languages", "avaible"] as const;

  const renderIcon = (key: (typeof cardKeys)[number]) => {
    switch (key) {
      case "name":
        return <UserIcon />;
      case "location":
        return <LocationIcon />;
      case "languages":
        return <LanguageIcon />;
      case "avaible":
        return <div className="dot"></div>;
    }
  };

  return (
    <section id="about">
      <div className="about-text">
        <h2 className="section-eyebrow">{t("about.eyebrow")}</h2>
        <p className="about-description">{t("about.description")}</p>
      </div>

      <div className="about-info-card">
        {cardKeys.map((key, index) => {
          const rawValue = t(`about.card.${key}`) as unknown;
          const values = Array.isArray(rawValue)
            ? rawValue.filter(
                (value): value is string => typeof value === "string",
              )
            : typeof rawValue === "string"
              ? [rawValue]
              : [];
          const label = values[0] ?? "";
          const details = values.slice(1);

          return (
            <div key={key}>
              {index > 0 && <div className="about-seperator" />}
              <div className={`about-info-${key} row`}>
                <div className="icon">{renderIcon(key)}</div>
                <div>
                  <div className="label">{label}</div>
                  {key === "languages" ? (
                    <div className="lang-group">
                      {details.map((item) => (
                        <span key={item} className="lang-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="value">{details[0] ?? ""}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
