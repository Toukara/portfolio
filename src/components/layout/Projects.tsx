import { ExternalLinkIcon, GitHubIcon } from "../../assets/svg/customSVG";
import { useTranslation } from "../../i18n";

interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
}

export default function Projects() {
  const { t } = useTranslation();

  const projectsData = t(`projects.list`) as unknown as Project[];
  const projects = Array.isArray(projectsData) ? projectsData : [];

  const gridClass =
    projects.length > 3
      ? "projects-container projects-two-col"
      : "projects-container projects-three-col";

  return (
    <section id="projects">
      <div className="projects-header">
        <h2 className="section-eyebrow">{t("projects.title")}</h2>
        <a className="btn-outline" style={{ fontSize: "13px" }}>
          {t("projects.all")} →
        </a>
      </div>

      <div className={gridClass}>
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div className="project-thumb">
              <div className="project-thumb-inner">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                <a href="#" className="project-link">
                  <ExternalLinkIcon />
                  <span>Voir le site</span>
                </a>
                <a href="#" className="project-link">
                  <GitHubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
