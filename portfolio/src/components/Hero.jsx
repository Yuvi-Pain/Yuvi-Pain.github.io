import { profile } from "../data/profile.js";

export default function Hero() {
  return (
    <header className="hero">
      <div className="page">
        <p className="hero__boot">
          <span>&gt;</span> system.identify() <span>&gt;</span> running...
        </p>
        <h1>{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View projects
          </a>
          <a
            className="btn btn--ghost"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>
      </div>
    </header>
  );
}
