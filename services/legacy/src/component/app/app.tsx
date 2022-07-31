import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import AppToolbar from "./app-toolbar";
import AppDrawer from "./app-drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import HocDbsLogo from "../hoc-dbs-logo/hoc-dbs-logo";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100%",
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const App = () => {
  const styles = useStyles();
  const [active, updateDrawer] = React.useState<boolean>(false);

  return (
    <Container>
      <AppBar position="fixed">
        <AppToolbar
          brandLabel="Dachboden Logo Editor"
          onOpen={() => updateDrawer(true)}
        />
        <AppDrawer open={active} onClose={() => updateDrawer(false)} />
      </AppBar>
      <Toolbar />
      <br />

      <Paper elevation={3}>
        <div className={styles.wrapper}>
          <HocDbsLogo randomPlay={false} />
        </div>
      </Paper>

      <Fab
        color="secondary"
        arial-label="Edit"
        onClick={() => updateDrawer(true)}
        className={styles.fab}
      >
        <SvgIcon>
          <EditIcon />
        </SvgIcon>
      </Fab>
    </Container>
  );
};

export default App;
