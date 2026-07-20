import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="site-body">
        <div className="page">
          <div className="not-found">
            <p className="hero__boot">
              <span>./error</span> 404
            </p>
            <h1 style={{ fontFamily: "var(--font-display)" }}>Page not found</h1>
            <p>
              <Link to="/" className="btn btn--primary">
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
