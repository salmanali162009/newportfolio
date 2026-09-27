import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectRow from "../ProjectRow/ProjectRow";

export default function ProjectGrid({ projects, variant = "grid", itemClassName = "" }) {
  if (!projects.length) return null;

  if (variant === "row") {
    return (
      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => (
          <div key={project.id} className={itemClassName}>
            <ProjectRow project={project} index={i} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <div key={project.id} className={itemClassName}>
          <ProjectCard project={project} index={i + 1} />
        </div>
      ))}
    </div>
  );
}