import styled from "@emotion/styled";
import { Fab } from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "absolute",
}));
