import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "../client/src/App";
import "../client/src/index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);