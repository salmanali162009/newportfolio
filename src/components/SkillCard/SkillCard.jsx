const isLearning = (skill) => skill.category === "Learning";

export default function SkillCard({ skill, compact = false }) {
  const Icon = skill.icon;
  const learning = isLearning(skill);

  if (compact) {
    return (
      <div className="group flex items-center gap-3 px-4 py-3 border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all duration-300 hover:border-[var(--accent-border)] hover:-translate-y-0.5">
        <span className="grid place-items-center w-8 h-8 shrink-0 text-base text-[var(--accent)]">
          <Icon aria-hidden="true" />
        </span>
        <span className="font-display font-medium text-[14px] tracking-tight truncate">
          {skill.name}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`group h-full flex flex-col gap-3 p-5 bg-[var(--bg-secondary)] transition-all duration-300 hover:-translate-y-1 ${
        learning
          ? "border border-dashed border-[var(--border-strong)]"
          : "border border-[var(--border-color)] hover:border-[var(--accent-border)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid place-items-center w-11 h-11 text-xl transition-transform duration-300 group-hover:scale-105 ${
            learning ? "text-[var(--text-muted)] group-hover:text-[var(--accent)]" : "text-[var(--accent)]"
          }`}
        >
          <Icon aria-hidden="true" />
        </span>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
            learning ? "text-[var(--text-muted)]" : "text-[var(--accent)]"
          }`}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
          {learning ? "Learning" : skill.level}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display font-semibold text-[17px] tracking-tight">
          {skill.name}
        </h3>
        <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
          {skill.description}
        </p>
      </div>
    </div>
  );
}