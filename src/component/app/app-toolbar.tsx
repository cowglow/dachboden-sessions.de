import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface AppToolbarProps {
  brandLabel: string;
  onOpen: MenuToggleAction;
}

const AppToolbar: React.FC<AppToolbarProps> = ({ brandLabel, onOpen }) => (
  <Toolbar>
    <Typography variant="h6">{brandLabel}</Typography>
  </Toolbar>
);

export default AppToolbar;
