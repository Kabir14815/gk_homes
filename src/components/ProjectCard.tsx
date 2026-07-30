import type { ProjectItem } from "../data/projects";

type Props = {
  project: ProjectItem;
  variant?: "2d" | "3d" | "live" | "done";
};

export function ProjectCard({ project, variant = "3d" }: Props) {
  const thumbClass = [
    "project-thumb",
    project.image ? "project-thumb-img" : "",
    variant === "2d" ? "project-thumb-2d" : "",
    variant === "live" && !project.image ? "project-thumb-live" : "",
    variant === "done" && !project.image ? "project-thumb-done" : "",
    variant === "2d" && project.image ? "project-thumb-plan" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="project-card reveal">
      <div className={thumbClass}>
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : null}
        {project.live ? <span className="live-badge">Live</span> : null}
      </div>
      <div className="project-meta">
        <span>{project.location}</span>
        <span>{project.tag}</span>
      </div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </article>
  );
}
