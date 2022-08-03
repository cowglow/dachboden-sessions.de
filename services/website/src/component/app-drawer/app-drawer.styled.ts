import styled from "@emotion/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  // @ts-ignore
  padding: theme.spacing(4),
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-around",
  margin: "0 auto",
}));

export const StyledInputElement = styled("input")(() => ({
  width: "100%",
  height: 42,
}));
