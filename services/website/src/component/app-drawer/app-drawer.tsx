import React from "react";
import { useColorState } from "../../context/color-state-context";
import { download } from "../../service/download";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import { StyledInputElement, Wrapper } from "./app-drawer.styled";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

type ColorPickerChangeEvent = { target: { value: string } };

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const { left, right, border, background, setColor } = useColorState();

  return (
    <Drawer anchor="bottom" {...props}>
      <Wrapper>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} sm={4} md={3}>
            Letter D Color:
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <StyledInputElement
              type="color"
              value={left}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("left", target.value)
              }
            />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            Letter B Color:
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <StyledInputElement
              type="color"
              value={right}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("right", target.value)
              }
            />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            Border Color:
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <StyledInputElement
              type="color"
              value={border}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("border", target.value)
              }
            />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            Background Color:
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <StyledInputElement
              type="color"
              value={background}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("background", target.value)
              }
            />
          </Grid>
        </Grid>
      </Wrapper>
      <Wrapper>
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
      </Wrapper>
    </Drawer>
  );
};

export default AppDrawer;
