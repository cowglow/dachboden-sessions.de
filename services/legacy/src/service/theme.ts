import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: "#666666",
    },
  },
  props: {
    MuiFab: {
      size: "large",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        // top: "auto",
        // bottom: 0,
      },
    },
    MuiFab: {
      root: {
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
      },
    },
  },
});

export default theme;
