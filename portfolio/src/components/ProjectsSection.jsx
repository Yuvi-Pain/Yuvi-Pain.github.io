import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="page">
        <p className="eyebrow">./projects</p>
        <h2 className="section-title">Recent projects</h2>
        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
