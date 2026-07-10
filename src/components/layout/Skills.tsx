import { useTranslation } from "../../i18n";

export default function Skills() {
  const { t } = useTranslation();
  const catKeys = ["language", "framework", "database", "other"] as const;

  const renderSkillsFor = (k: string) => {
    const raw = t(`skills.${k}.skills`) as unknown;
    if (!Array.isArray(raw)) return null;

    return raw.map((entry, idx) => {
      const subKey = `skills.${k}.${entry}`;
      const translated = t(subKey);
      const label = translated === subKey ? String(entry) : translated;
      const image = `../../src/assets/svg/${String(entry).toLowerCase()}.svg`;

      return (
        <li key={String(idx)}>
          <div className="skill-item">
            <img className="skill-img" src={image} alt="icon" />
            <p>{label}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <section id="skills">
      <h2 className="section-eyebrow">{t("skills.eyebrow")}</h2>
      <div className="skills-container">
        {catKeys.map((element) => (
          <div className="skills-category" key={element}>
            <h3>{t(`skills.${element}.name`)}</h3>
            <ul>{renderSkillsFor(element)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

{
  /* {skills.map((skill, index) => (
          <div className="skills-category" key={index}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <div className="skill-item">
                    {item.icon && (
                      <img className="skill-img" src={item.icon} alt="icon" />
                    )}
                    <p>{item.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))} */
}
