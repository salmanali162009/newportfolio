export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-x-1 gap-y-2 mb-12 md:mb-16"
      role="group"
      aria-label="Filter projects"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={`filter-tab ${active === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}