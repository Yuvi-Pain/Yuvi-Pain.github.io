import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Client-side routing doesn't reset scroll position the way a normal page
// load does, so without this, opening a project page keeps whatever scroll
// position you were at on the homepage. Skipped when Nav has asked Home to
// scroll to a specific section instead (see Home.jsx).
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
