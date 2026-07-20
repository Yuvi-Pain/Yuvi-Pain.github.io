import { experience } from "../data/experience.js";

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="page">
        <p className="eyebrow">// experience</p>
        <h2 className="section-title">Where I've worked</h2>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-entry" key={job.company + job.title}>
              <div className="experience-entry__head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="experience-entry__meta">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="experience-entry__period">{job.period}</span>
              </div>
              <ul className="checklist">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
