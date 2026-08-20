import Badge from "@/components/ui/Badge";
import MediaReveal from "@/components/ui/MediaReveal";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "grid";
};

export default function ProjectCard({
  project,
  variant = "grid",
}: ProjectCardProps) {
  if (variant === "grid") {
    return (
      <article className="project-card project-card--grid" id={project.slug}>
        <p className="project-card__kicker">
          {project.category}
          {project.status === "development" ? " · Developing" : ""}
        </p>
        <h3 className="project-card__grid-title">{project.title}</h3>
        <p className="project-card__grid-copy">{project.description}</p>
      </article>
    );
  }

  const hasLinks = Boolean(project.website || project.linkedin);

  return (
    <article
      id={project.slug}
      className={cn(
        "project-card project-card--featured",
        project.imagePosition === "left" && "project-card--flip",
      )}
    >
      <div className="project-card__body">
        <div className="project-card__top">
          <div className="project-card__title-row">
            {project.logo ? (
              <span className="project-card__logo">
                <img src={project.logo} alt="" />
              </span>
            ) : null}
            <h3 className="project-card__title">{project.title}</h3>
            <Badge variant={project.categoryTone}>{project.category}</Badge>
          </div>
          <p className="project-card__copy">{project.description}</p>
          {project.modules && project.modules.length > 0 ? (
            <div>
              <p className="project-card__metric-label">What we built</p>
              <div className="project-card__tags">
                {project.modules.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {project.stack.length > 0 ? (
            <div className="project-card__tags">
              {project.stack.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="project-card__footer">
          {project.quote ? (
            <>
              <blockquote className="project-card__quote">
                “{project.quote.text}”
              </blockquote>
              <div className="project-card__author">
                <span className="project-card__avatar">
                  {project.quote.initials}
                </span>
                <span className="project-card__author-meta">
                  <span className="project-card__name">{project.quote.name}</span>
                  <span className="project-card__role">{project.quote.role}</span>
                </span>
              </div>
            </>
          ) : null}
          {project.metrics ? (
            <div className="project-card__metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p
                    className={cn(
                      "project-card__metric-value",
                      project.categoryTone === "olive" &&
                        "project-card__metric-value--olive",
                    )}
                  >
                    {metric.value}
                  </p>
                  <p className="project-card__metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}
          {hasLinks ? (
            <div className="project-card__tags">
              {project.website ? (
                <a
                  className="tech-tag"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title} website
                </a>
              ) : null}
              {project.linkedin ? (
                <a
                  className="tech-tag"
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title} on LinkedIn
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <MediaReveal
        className={cn(
          "project-card__media",
          project.slug === "track-my-startup" && "project-card__media--top",
          (project.slug === "judge-my-lawyer" ||
            project.slug === "startup-nation-india") &&
            "project-card__media--contain",
        )}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} platform screenshot`}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </MediaReveal>
    </article>
  );
}
