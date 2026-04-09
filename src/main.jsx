import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { CityContextProvider } from "./context/CityContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CityContextProvider>
      <App />
    </CityContextProvider>
  </StrictMode>,
);
