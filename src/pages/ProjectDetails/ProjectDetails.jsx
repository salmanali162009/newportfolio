import { useParams, Link } from "react-router";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import Reveal from "../../components/Reveal/Reveal";
import projectDetail from "../../data/projectDetail";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projectDetail.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container-portfolio py-24 text-center flex flex-col items-center gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          404 / Not found
        </span>
        <h1 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">
          Project not found
        </h1>
        <p className="text-[var(--text-secondary)] max-w-md">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/projects" className="btn btn-primary">
          <FaArrowLeft className="btn-arrow" aria-hidden="true" />
          Back to Projects
        </Link>
      </section>
    );
  }

  const related = projectDetail.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <section className="container-portfolio py-16 md:py-24" aria-label={project.title}>
      {/* Back link */}
      <Reveal>
        <Link
          to="/projects"
          className="link-arrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]"
        >
          <FaArrowLeft aria-hidden="true" />
          <span>All Projects</span>
        </Link>
      </Reveal>

      {/* Header */}
      <Reveal delay={0.05} className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)] border border-[var(--accent-border)] px-2 py-1 bg-[var(--accent-bg)]">
                Featured
              </span>
            )}
          </div>
          <h1 className="font-display font-semibold text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
                <FaExternalLinkAlt className="btn-arrow" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FaGithub aria-hidden="true" />
                View Code
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {/* Hero preview */}
      <Reveal delay={0.05} className="mt-12 md:mt-16 border border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)]">
          <span className="font-mono text-xs tracking-[0.14em] text-[var(--text-muted)]">
            {project.image.replace("/images/", "/public/")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
            preview
          </span>
        </div>
        <ProjectImage
          src={project.image}
          alt={`${project.title} screenshot`}
          title={project.title}
          aspect="aspect-[16/9]"
        />
      </Reveal>

      {/* Overview + Features */}
      <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <span className="numeral">(01)</span>
              <span className="eyebrow">Overview</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {project.longDescription}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="numeral">(02)</span>
              <span className="eyebrow">Key Features</span>
            </div>
            <ul className="flex flex-col">
              {project.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 py-4 border-b border-[var(--hairline)] last:border-b-0"
                >
                  <span className="mt-0.5 grid place-items-center w-6 h-6 shrink-0 border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)] text-[10px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-relaxed text-[var(--text-primary)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Technologies */}
      {project.technologies.length > 0 && (
        <div className="mt-14 md:mt-20">
          <Reveal className="flex items-center gap-4 mb-6">
            <span className="numeral">(03)</span>
            <span className="eyebrow">Technology Stack</span>
          </Reveal>
          <Reveal targets=".tech-chip" stagger={0.04}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
              {project.technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <li
                    key={tech.name}
                    className="tech-chip bg-[var(--bg-primary)] px-4 py-4 flex items-center gap-3"
                  >
                    <Icon className="text-[var(--accent)] text-base shrink-0" aria-hidden="true" />
                    <span className="text-[13px] font-medium">{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      )}

      {/* More projects */}
      <div className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeader align="left" eyebrow="Continue Browsing" title="More Projects" />
        </Reveal>
        <Reveal targets=".project-item" stagger={0.08}>
          <ProjectGrid variant="row" itemClassName="project-item" projects={related} />
        </Reveal>
      </div>
    </section>
  );
}