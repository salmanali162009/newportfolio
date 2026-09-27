import { useState, useMemo } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import Reveal from "../../components/Reveal/Reveal";
import projectDetail from "../../data/projectDetail";

const categories = ["All", "React", "Frontend", "Dashboard", "Web Apps", "Tools", "Featured"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projectDetail;
    if (active === "Featured") return projectDetail.filter((p) => p.featured);
    return projectDetail.filter(
      (p) =>
        p.category === active ||
        p.category.toLowerCase().includes(active.toLowerCase())
    );
  }, [active]);

  return (
    <section className="container-portfolio py-16 md:py-24" aria-label="Projects">
      <Reveal>
        <SectionHeader
          index="02"
          eyebrow="Portfolio"
          title="Featured Work"
          description="A selection of projects I've designed and built — each one a functional application, from React interfaces to Firebase-powered services."
        />
      </Reveal>

      <ProjectFilter categories={categories} active={active} onChange={setActive} />

      <div className="flex items-baseline justify-between gap-4 mb-2">
        <span className="numeral">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
        <span className="hidden sm:block h-px flex-1 bg-[var(--hairline)]" aria-hidden="true" />
        <span className="numeral">{active}</span>
      </div>

      <Reveal key={active} targets=".project-item" stagger={0.08}>
        <ProjectGrid variant="row" itemClassName="project-item" projects={filtered} />
      </Reveal>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
            404 / empty state
          </span>
          <p className="text-[var(--text-secondary)]">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
}