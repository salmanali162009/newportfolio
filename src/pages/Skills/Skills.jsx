import { useState, useMemo } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SkillFilter from "../../components/SkillFilter/SkillFilter";
import SkillGrid from "../../components/SkillGrid/SkillGrid";
import Reveal from "../../components/Reveal/Reveal";
import skillDetail from "../../data/skillDetail";

const categories = [
  "All",
  "Frontend",
  "UI & Design",
  "Animation",
  "State Management",
  "Backend & Services",
  "Tools",
  "AI",
  "Learning"
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return skillDetail;
    return skillDetail.filter((s) => s.category === active);
  }, [active]);

  return (
    <section className="container-portfolio py-16 md:py-24" aria-label="Skills">
      <Reveal>
        <SectionHeader
          index="01"
          eyebrow="Skills"
          title="Technical Stack"
          description="What I use every day to build across the stack — and what I'm currently exploring on top of it."
        />
      </Reveal>

      <SkillFilter categories={categories} active={active} onChange={setActive} />

      <div className="flex items-baseline justify-between gap-4 mb-8">
        <span className="numeral">{active}</span>
        <span className="hidden sm:block h-px flex-1 bg-[var(--hairline)]" aria-hidden="true" />
        <span className="numeral">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </span>
      </div>

      <Reveal key={active} targets=".skill-item" stagger={0.04}>
        <SkillGrid
          grouped
          itemClassName="skill-item"
          skills={filtered}
        />
      </Reveal>

      {active === "Learning" && (
        <div className="mt-12 border-l-2 border-[var(--accent)] bg-[var(--bg-secondary)] px-6 py-5">
          <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              Note —
            </span>{" "}
            These are active learning goals, not established production skills.
            I'm growing into databases, GraphQL, Docker, CI/CD and cloud
            deployment.
          </p>
        </div>
      )}
    </section>
  );
}