import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import ProjectImage from "../ProjectImage/ProjectImage";

export default function ProjectCard({ project, index = 0 }) {
  const techNames = project.technologies.map((t) => t.name).join("  •  ");

  return (
    <article
      className="group flex flex-col h-full border border-[var(--border-color)] bg-[var(--bg-secondary)] card-hover"
      aria-label={project.title}
    >
      <div className="relative overflow-hidden border-b border-[var(--border-color)]">
        <ProjectImage
          src={project.image}
          alt={`${project.title} preview`}
          title={project.title}
          aspect="aspect-[16/10]"
        />
        <span className="absolute top-3 right-3 px-2 py-1 bg-[var(--bg-primary)]/90 border border-[var(--hairline)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {project.category}
        </span>
        {index > 0 && (
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-xl tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        {techNames && (
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {techNames}
          </p>
        )}

        <div className="mt-auto pt-3">
          <Link to={`/projects/${project.slug}`} className="link-arrow">
            View Case Study
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}