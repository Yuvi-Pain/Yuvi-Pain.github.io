import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="page">
        <p className="eyebrow">// projects</p>
        <h2 className="section-title">Things I've built</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
