import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="page">
        <p className="eyebrow">./contact</p>
        <h2 className="section-title">Contact me</h2>
        <a className="footer__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="footer__links">
          <a
            className="footer__link"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>

        <div className="footer__socials-wrap">
          <p className="footer__hint">psssttt, click on me *</p>
          <div className="footer__socials">
            <a
              className="social-icon"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <p className="site-footer__note">© {new Date().getFullYear()} Yuvraj Bains</p>
      </div>
    </footer>
  );
}
