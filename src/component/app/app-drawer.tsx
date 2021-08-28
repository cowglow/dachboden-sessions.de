import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ColorPicker from "material-ui-color-picker";
import { useColorState } from "../../context/color-state-context";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const { left, right, border, background, setColor } = useColorState();

  return (
    <Drawer anchor="left" {...props}>
      <div role="presentation" style={{ padding: 15 }}>
        <List>
          <ListItem>
            <ListItemIcon>Dach</ListItemIcon>
            <ListItemText
              primary={
                <ColorPicker
                  name="left"
                  defaultValue={left}
                  onChange={(color) => setColor("left", color)}
                />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>Boden</ListItemIcon>
            <ListItemText
              primary={
                <ColorPicker
                  name="right"
                  defaultValue={right}
                  onChange={(color) => setColor("right", color)}
                />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>Border</ListItemIcon>
            <ListItemText
              primary={
                <ColorPicker
                  name="border"
                  defaultValue={border}
                  onChange={(color) => setColor("border", color)}
                />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>BackGr</ListItemIcon>
            <ListItemText
              primary={
                <ColorPicker
                  name="background"
                  defaultValue={background}
                  onChange={(color) => setColor("background", color)}
                />
              }
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
