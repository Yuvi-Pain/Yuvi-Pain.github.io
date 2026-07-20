import { useParams, Link, Navigate } from "react-router-dom";
import { projects, getProjectBySlug } from "../data/projects.js";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import ChallengeLog from "../components/ChallengeLog.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="page">
        <Nav />
        <Link className="back-link" to="/">
          ← All projects
        </Link>

        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="hero__bio" style={{ marginBottom: "2rem" }}>
            {project.tagline}
          </p>
        </div>

        <dl className="datasheet">
          <div className="datasheet__cell">
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div className="datasheet__cell">
            <dt>Team</dt>
            <dd>{project.team}</dd>
          </div>
          <div className="datasheet__cell">
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div className="datasheet__cell">
            <dt>Repo</dt>
            <dd>
              <a href={project.repo} target="_blank" rel="noreferrer">
                View source →
              </a>
            </dd>
          </div>
        </dl>

        <section className="section" style={{ paddingTop: 0 }}>
          <p className="eyebrow">// summary</p>
          <p className="project-body__intro">{project.summary}</p>
        </section>

        <section className="section">
          <p className="eyebrow">// objectives</p>
          <h2 className="section-title">What it set out to do</h2>
          <ul className="checklist">
            {project.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="eyebrow">// stack</p>
          <h2 className="section-title">Technologies &amp; tools used</h2>
          <div className="tag-row">
            {project.techUsed.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">// achievements</p>
          <h2 className="section-title">What it actually does</h2>
          <ul className="checklist">
            {project.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <p className="eyebrow">// visuals</p>
          <h2 className="section-title">Visuals</h2>
          {project.visuals.length > 0 ? (
            <div className="visual-gallery">
              {project.visuals.map((v) => (
                <figure className="visual-figure" key={v.src}>
                  <img src={v.src} alt={v.caption} loading="lazy" />
                  <figcaption>{v.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="visual-placeholder">
              Add screenshots or a screen recording here — see the content
              draft doc for exactly which shots to prioritize for this
              project.
            </div>
          )}
        </section>

        <section className="section">
          <p className="eyebrow">// challenges &amp; solutions</p>
          <h2 className="section-title">Where it got hard</h2>
          <ChallengeLog challenges={project.challenges} />
        </section>

        <section className="section">
          <p className="eyebrow">// conclusion</p>
          <div className="conclusion-block">{project.conclusion}</div>
        </section>

        <nav className="project-footer-nav">
          <Link className="btn btn--ghost" to={`/projects/${prev.slug}`}>
            ← {prev.shortTitle}
          </Link>
          <Link className="btn btn--ghost" to="/">
            All projects
          </Link>
          <Link className="btn btn--ghost" to={`/projects/${next.slug}`}>
            {next.shortTitle} →
          </Link>
        </nav>
      </div>
      <Footer />
    </>
  );
}
