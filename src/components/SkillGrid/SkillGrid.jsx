import SkillCard from "../SkillCard/SkillCard";

function groupSkills(skills) {
  const groups = [];
  for (const skill of skills) {
    const existing = groups.find((g) => g.category === skill.category);
    if (existing) existing.skills.push(skill);
    else groups.push({ category: skill.category, skills: [skill] });
  }
  return groups;
}

export default function SkillGrid({ skills, itemClassName = "", compact = false, grouped = false }) {
  if (!skills.length) return null;

  if (grouped) {
    const groups = groupSkills(skills);
    return (
      <div className="flex flex-col gap-16">
        {groups.map((group) => (
          <div key={group.category}>
            <div className="flex items-baseline justify-between gap-4 mb-6">
              <div className="flex items-baseline gap-4">
                <h3
                  className={`font-mono text-xs uppercase tracking-[0.2em] ${
                    group.category === "Learning"
                      ? "text-[var(--text-muted)]"
                      : "text-[var(--accent)]"
                  }`}
                >
                  {group.category === "Learning" ? "Currently Learning" : group.category}
                </h3>
                <span className="numeral">/ {String(group.skills.length).padStart(2, "0")}</span>
              </div>
              <span className="hidden sm:block h-px flex-1 bg-[var(--hairline)]" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.skills.map((skill) => (
                <div key={skill.id} className={itemClassName}>
                  <SkillCard skill={skill} compact={compact} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const cols = compact
    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  return (
    <div className={cols}>
      {skills.map((skill) => (
        <div key={skill.id} className={itemClassName}>
          <SkillCard skill={skill} compact={compact} />
        </div>
      ))}
    </div>
  );
}