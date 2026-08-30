import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./component/app/app";
import "./styles/global.css";

// Dev-only client render. Production ships prerendered, script-free HTML
// (see scripts/prerender.mjs); this entry exists so `vite build` emits the
// CSS asset and so `yarn dev` stays interactive.
const container = document.getElementById("root");
if (container) {
    createRoot(container).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
