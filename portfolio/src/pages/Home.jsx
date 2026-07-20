import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="page">
        <Nav />
      </div>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
