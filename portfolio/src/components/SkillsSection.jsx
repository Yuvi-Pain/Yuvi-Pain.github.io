import {
  SiC,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiLeaflet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiLinux,
  SiGit,
  SiGithub,
  SiDocker,
  SiJunit5,
  SiApachemaven,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { profile, skillGroups } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

// Every icon here was checked against the installed react-icons package
// before use, so nothing here should 404 at build time.
const ICONS = {
  C: SiC,
  Java: FaJava,
  JavaScript: SiJavascript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss,
  "Spring Boot": SiSpringboot,
  "Spring MVC": SiSpring,
  Hibernate: SiHibernate,
  React: SiReact,
  Django: SiDjango,
  "Node.js": SiNodedotjs,
  "Java Swing": FaJava,
  "Leaflet.js": SiLeaflet,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Linux: SiLinux,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  JUnit: SiJunit5,
  Maven: SiApachemaven,
  Azure: TbBrandAzure,
};

export default function SkillsSection() {
  return (
    <section className="section" id="about">
      <div className="page">
        <p className="eyebrow">./about</p>
        <h2 className="section-title">About</h2>
        <p className="about-line">{profile.bio}</p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 80} className="skill-card">
              <p className="skill-card__label">{group.label}</p>
              <div className="icon-row">
                {group.items.map((item) => {
                  const Icon = ICONS[item];
                  return (
                    <div className="icon-item" key={item} title={item}>
                      {Icon ? <Icon className="icon-item__glyph" /> : null}
                      <span className="icon-item__label">{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
