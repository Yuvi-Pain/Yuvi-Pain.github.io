import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

export default function Nav() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <nav className="nav">
      <Link to="/" className="nav__mark">
        {initials}
      </Link>
      <div className="nav__links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}
