import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: "#666666",
    },
  },
  components: {
    MuiFab: {
      defaultProps: {
        size: "large",
      },
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
        },
      },
    },
  },
});

export default theme;
