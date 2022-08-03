import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app/app";
import theme from "./service/theme";
import { ColorStateProvider } from "./context/color-state-context";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorStateProvider>
        <App />
      </ColorStateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
