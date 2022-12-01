import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MuiThemeProvider } from "./infrastructure/theme.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
