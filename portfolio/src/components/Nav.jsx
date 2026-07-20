import { useActiveSection } from "../hooks/useActiveSection.js";

const LINKS = [
  { id: "about", label: "./about" },
  { id: "experience", label: "./experience" },
  { id: "projects", label: "./projects" },
  { id: "contact", label: "./contact" },
];

export default function Nav() {
  const active = useActiveSection(LINKS.map((l) => l.id));

  return (
    <nav className="nav">
      <a href="#top" className="nav__mark">
        Yuvraj Bains
      </a>
      <div className="nav__links">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "nav__link nav__link--active" : "nav__link"}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
