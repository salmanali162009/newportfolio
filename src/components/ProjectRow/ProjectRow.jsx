import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImage from "../ProjectImage/ProjectImage";
import { useGsapUtils } from "../../hooks/useGsapReveal";

export default function ProjectRow({ project, index }) {
  const { gsap, ScrollTrigger } = useGsapUtils();
  const mediaRef = useRef(null);
  const reversed = index % 2 === 1;

  useEffect(() => {
    const el = mediaRef.current.querySelector("img");
    if (!el) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    gsap.set(el, { scale: 1.12 });
    const st = ScrollTrigger.create({
      trigger: mediaRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.8,
      animation: gsap.fromTo(el, { yPercent: -6 }, { yPercent: 6, ease: "none" })
    });
    return () => st.kill();
  }, [gsap, ScrollTrigger]);

  return (
    <article
      className="project-row grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center"
      aria-label={project.title}
    >
      {/* Index numeral */}
      <div className="hidden md:block md:col-span-1 self-start pt-4">
        <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Media */}
      <div
        ref={mediaRef}
        className={`md:col-span-7 relative overflow-hidden border border-[var(--border-color)] ${
          reversed ? "md:order-3" : ""
        }`}
      >
        <ProjectImage
          src={project.image}
          alt={`${project.title} preview`}
          title={project.title}
          aspect="aspect-[16/11]"
          zoom={false}
        />
        <span className="absolute bottom-3 left-3 px-2 py-1 bg-[var(--bg-primary)]/90 border border-[var(--hairline)] font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className={`md:col-span-4 flex flex-col gap-5 ${reversed ? "md:order-1" : ""}`}>
        <div className="flex flex-col gap-2">
          <span className="eyebrow">Featured / 0{index + 1}</span>
          <h3 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight leading-[1.08]">
            {project.title}
          </h3>
        </div>

        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {project.technologies.map((tech) => (
              <li
                key={tech.name}
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-[var(--text-muted)]"
              >
                <tech.icon className="text-[var(--accent)]" aria-hidden="true" />
                {tech.name}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-6 pt-2">
          <Link to={`/projects/${project.slug}`} className="link-arrow">
            View Case Study
            <FaArrowRight aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow text-[var(--text-muted)]"
            >
              Live
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}