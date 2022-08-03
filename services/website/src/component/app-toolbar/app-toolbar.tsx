import React from "react";
import Typography from "@mui/material/Typography";
import { StyledToolbar } from "./app-toolbar.styled";

interface AppToolbarProps {
  brandLabel: string;
  onOpen: MenuToggleAction;
}

const AppToolbar: React.FC<AppToolbarProps> = ({ brandLabel, onOpen }) => (
  <StyledToolbar>
    <Typography variant="h6">{brandLabel}</Typography>
  </StyledToolbar>
);

export default AppToolbar;
