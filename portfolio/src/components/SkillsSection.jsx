import { skillGroups } from "../data/profile.js";

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="page">
        <p className="eyebrow">// skills</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <p className="skill-card__label">{group.label}</p>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
