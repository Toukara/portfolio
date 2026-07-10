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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Voir le site</span>
                </a>
                <a href="#" className="project-link">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
