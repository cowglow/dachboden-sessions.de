import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
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
      width: "50%",
      height: "50%",
      margin: "0 auto",
      position: "relative",
      top: "25%",
    },
    wrapper: {
      padding: theme.spacing(2),
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
    },
  })
);

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const styles = useStyles();
  const { left, right, border, background, setColor } = useColorState();

  return (
    <Drawer anchor="bottom" {...props} classes={{ paper: styles.paper }}>
      <div className={styles.wrapper}>
        <ColorPicker
          defaultValue="Dach"
          value={left}
          onChange={(color) => setColor("left", color)}
        />
        <ColorPicker
          defaultValue="Boden"
          value={right}
          onChange={(color) => setColor("right", color)}
        />
        <ColorPicker
          defaultValue="Border"
          value={border}
          onChange={(color) => setColor("border", color)}
        />
        <ColorPicker
          defaultValue="Background"
          value={background}
          onChange={(color) => setColor("background", color)}
        />
        <div>
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
          <br />
          <br />
          <Button variant="contained" color="primary" fullWidth={true}>
            Download PNG
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
