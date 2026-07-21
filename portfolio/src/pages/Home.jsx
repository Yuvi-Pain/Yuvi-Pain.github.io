import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      // Small delay so this section is actually painted before we scroll to it.
      const t = setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  return (
    <>
      <Nav />
      <Hero />
      <main className="site-body">
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
