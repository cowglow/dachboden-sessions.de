import React from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as ColorPickerIcon } from "../../assets/ColorPicker.svg";

import ColorPicker from "material-ui-color-picker";
import { useColorState } from "../../context/color-state-context";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { download } from "../../service/download";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80%",
      height: "50%",
      margin: "0 auto",
      position: "relative",
      top: "25%",
      maxWidth: 380,
    },
    wrapper: {
      padding: theme.spacing(2),
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    icon: {
      height: "50%",
      padding: 0,
      margin: "auto",
    },
  })
);

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const styles = useStyles();
  const { left, right, border, background, setColor } = useColorState();

  return (
    <Drawer anchor="bottom" {...props} classes={{ paper: styles.paper }}>
      <div className={styles.wrapper}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sm={1} style={{ fill: left }} className={styles.icon}>
            <ColorPickerIcon />
          </Grid>
          <Grid item sm={11}>
            <ColorPicker
              variant="outlined"
              aria-label="Letter D color"
              defaultValue="Dach"
              value={left}
              onChange={(color) => setColor("left", color)}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.wrapper}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sm={1} style={{ fill: right }} className={styles.icon}>
            <ColorPickerIcon />
          </Grid>
          <Grid item sm={11}>
            <ColorPicker
              variant="outlined"
              aria-label="Letter B color"
              defaultValue="Boden"
              value={right}
              onChange={(color) => setColor("right", color)}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.wrapper}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sm={1} style={{ fill: border }} className={styles.icon}>
            <ColorPickerIcon />
          </Grid>
          <Grid item sm={11}>
            <ColorPicker
              variant="outlined"
              aria-label="border color"
              defaultValue="Border"
              value={border}
              onChange={(color) => setColor("border", color)}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.wrapper}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid
            item
            sm={1}
            style={{ fill: background }}
            className={styles.icon}
          >
            <ColorPickerIcon />
          </Grid>
          <Grid item sm={11}>
            <ColorPicker
              variant="outlined"
              aria-label="background color"
              defaultValue="Background"
              value={background}
              onChange={(color) => setColor("background", color)}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.wrapper}>
        <Button
          onClick={() =>
            download({
              left,
              right,
              border,
              background,
            })
          }
          variant="contained"
          color="primary"
          fullWidth={true}
        >
          Download SVG
        </Button>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
