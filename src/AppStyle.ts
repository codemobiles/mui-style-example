import {
  Button,
  ButtonProps,
  Divider,
  DividerProps,
  styled,
} from "@mui/material";

export const CMButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 100,
  backgroundColor: "#FF0",
  color: "#F00",
}));

//
export const CMDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  background: "#0F0",
}));
