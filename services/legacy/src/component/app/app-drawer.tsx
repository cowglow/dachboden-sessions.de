import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { ReactComponent as ColorPickerIcon } from "../../assets/ColorPicker.svg";

import ColorPicker from "material-ui-color-picker";
import { useColorState } from "../../context/color-state-context";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { download } from "../../service/download";
import { InputAdornment } from "@material-ui/core";

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
          id="dColor"
          variant="outlined"
          aria-label="Letter D color"
          style={{ backgroundColor: left }}
          defaultValue="Dach"
          value={left}
          onChange={(color) => setColor("left", color)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorPickerIcon />
              </InputAdornment>
            ),
          }}
        />

        <ColorPicker
          variant="outlined"
          aria-label="Letter B color"
          style={{ backgroundColor: right }}
          defaultValue="Boden"
          value={right}
          onChange={(color) => setColor("right", color)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorPickerIcon />
              </InputAdornment>
            ),
          }}
        />
        <ColorPicker
          variant="outlined"
          aria-label="border color"
          style={{ backgroundColor: border }}
          defaultValue="Border"
          value={border}
          onChange={(color) => setColor("border", color)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorPickerIcon />
              </InputAdornment>
            ),
          }}
        />
        <ColorPicker
          variant="outlined"
          aria-label="background color"
          style={{ backgroundColor: background }}
          defaultValue="Background"
          value={background}
          onChange={(color) => setColor("background", color)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorPickerIcon />
              </InputAdornment>
            ),
          }}
        />

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
