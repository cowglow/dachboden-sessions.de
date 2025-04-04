import React from "react";
import App from "./component/app/app";
import theme from "./service/theme";
import {ColorStateProvider} from "./context/color-state-context";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ColorStateProvider>
                <App />
            </ColorStateProvider>
        </ThemeProvider>
    </React.StrictMode>
);