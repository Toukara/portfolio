import { useTranslation } from "../../i18n";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      category: t("skills.language.name"),
      items: [t("skills.language.JavaScript"), t("skills.language.TypeScript")],
    },
    {
      category: t("skills.framework.name"),
      items: [t("skills.framework.React"), t("skills.framework.Vue")],
    },
    {
      category: t("skills.database.name"),
      items: [t("skills.database.MongoDB"), t("skills.database.MySQL")],
    },
    {
      category: t("skills.other.name"),
      items: [t("skills.other.scrapping")],
    },
  ];

  return (
    <section id="skills">
      <h2 className="skills-eyebrow">{t("skills.eyebrow")}</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skills-category" key={index}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
