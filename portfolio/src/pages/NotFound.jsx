import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";

export default function NotFound() {
  return (
    <div className="page">
      <Nav />
      <div className="not-found">
        <p className="hero__boot">
          <span>&gt;</span> error: <code>404</code>
        </p>
        <h1 style={{ fontFamily: "var(--font-display)" }}>Page not found</h1>
        <p>
          <Link to="/" className="btn btn--primary">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
