import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const thumbnail = project.visuals[0];

  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      {thumbnail && (
        <div className="project-card__thumb">
          <img src={thumbnail.src} alt="" loading="lazy" />
        </div>
      )}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="status-pill">{project.status}</span>
          <span className="category-pill">{project.category}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.tagline}</p>
        <div className="tag-row" style={{ marginBottom: "1rem" }}>
          {project.techTags.map((tag) => (
            <span className="tag tag--muted" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <span className="project-card__link">View project →</span>
      </div>
    </Link>
  );
}
