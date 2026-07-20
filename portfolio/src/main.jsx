import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Using HashRouter so this works with zero server config on
        GitHub Pages, Vercel, or Netlify. If you later host on Vercel/Netlify
        and want clean URLs (no # in the address bar), swap this for
        BrowserRouter — ask me and I'll walk you through the one-line change. */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
