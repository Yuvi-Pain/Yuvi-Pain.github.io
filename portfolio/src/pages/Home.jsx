import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
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
