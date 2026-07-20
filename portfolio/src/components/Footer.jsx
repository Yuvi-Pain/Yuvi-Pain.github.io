import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page site-footer__row">
        <span className="site-footer__note">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="site-footer__note">
          Built with React · source on{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
