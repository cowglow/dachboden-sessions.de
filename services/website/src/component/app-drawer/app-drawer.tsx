import React from "react";
import {useColorState} from "src/context/color-state-context";
import {downloadPng, downloadSvg} from "src/service/download";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {StyledInputElement, Wrapper} from "./app-drawer.styled";
import {Box, ButtonGroup} from "@mui/material";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

type ColorPickerChangeEvent = { target: { value: string } };

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const { left, right, border, background, setColor } = useColorState();
  let palette = {
    left,
    right,
    border,
    background,
  };

  return (
    <Drawer anchor="bottom" {...props}>
      <Wrapper>
        <Box  justifyContent="center">
          <Box >
            Letter D Color:
          </Box>
          <Box>
            <StyledInputElement
              type="color"
              value={left}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("left", target.value)
              }
            />
          </Box>

          <Box >
            Letter B Color:
          </Box>
          <Box >
            <StyledInputElement
              type="color"
              value={right}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("right", target.value)
              }
            />
          </Box>

          <Box >
            Border Color:
          </Box>
          <Box >
            <StyledInputElement
              type="color"
              value={border}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("border", target.value)
              }
            />
          </Box>

          <Box >
            Background Color:
          </Box>
          <Box >
            <StyledInputElement
              type="color"
              value={background}
              onChange={({ target }: ColorPickerChangeEvent) =>
                setColor("background", target.value)
              }
            />
          </Box>
        </Box>
      </Wrapper>
      <Wrapper>
        <ButtonGroup>
          <Button
            onClick={() => downloadSvg(palette)}
            variant="contained"
            color="primary"
          >
            Download SVG
          </Button>
          <Button
            onClick={() => downloadPng(palette)}
            variant="contained"
            color="primary"
          >
            Download PNG
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Drawer>
  );
};

export default AppDrawer;
