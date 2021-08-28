import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ColorPicker from "material-ui-color-picker";
import { useColorState } from "../../context/color-state-context";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 250,
      height: 500,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.text.primary,
      position: "relative",
      margin: "50% auto",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    label: {
      flexGrow: 1,
      display: "flex",
      alignItems: "flex-end",
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
        <div className={styles.label}>DS Logo Editor v.0.1</div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
