import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useActiveSection.js";

const LINKS = [
  { id: "about", label: "./about" },
  { id: "experience", label: "./experience" },
  { id: "projects", label: "./projects" },
  { id: "contact", label: "./contact" },
];

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  const active = useActiveSection(onHome ? LINKS.map((l) => l.id) : []);

  // HashRouter treats "#about" as a route change (it doesn't know that's a
  // section id, not a path) — so plain <a href="#about"> silently breaks.
  // Instead: if we're already on the homepage, just scroll to the section.
  // If we're on a project page, navigate home first and pass along which
  // section to land on via router state, then Home.jsx scrolls to it.
  function goToSection(id) {
    return (e) => {
      e.preventDefault();
      if (onHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    };
  }

  function goHome(e) {
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // otherwise let the Link navigate to "/" normally
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav__mark" onClick={goHome}>
        Yuvraj Bains
      </Link>
      <div className="nav__links">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={goToSection(link.id)}
            className={active === link.id ? "nav__link nav__link--active" : "nav__link"}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
