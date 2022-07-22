import * as React from "react";
import Stack from "@mui/material/Stack";
import Button, { ButtonProps } from "@mui/material/Button";
import {
  Box,
  createTheme,
  CssBaseline,
  Divider,
  FormControlLabel,
  GlobalStyles,
  Slider,
  styled,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";
import { CMButton, CMDivider } from "./AppStyle";

export default function App() {
  const [success, setSuccess] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };

  interface StyledDynamicButtonProps extends ButtonProps {
    online?: boolean;
  }

  const DynamicButton = styled(Button)<StyledDynamicButtonProps>(
    ({ online, theme }) => ({
      width: 100,
      backgroundColor: online ? "#FF0" : "#0F0",
      color: "#F00",
    })
  );

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          h3 {
            color: green;
          },
          button {
            background: green;
            color: white;
          }
        `,
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            borderRadius: 10,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: "#FF0",
          },
          h2: {
            color: "#0F0",
          },
        },
      },
    },
    spacing: 8,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {/* SX */}
        <Stack direction="row">
          <Button variant="text">Text</Button>
          <Button sx={{ width: 300, margin: 1 }} variant="contained">
            Contained
          </Button>
          <Button style={{ width: 300, margin: 10 }} variant="outlined">
            Outlined
          </Button>
        </Stack>

        <CMDivider />

        {/* & .Classs */}
        <Stack spacing={2} direction="row">
          <Slider
            sx={{ "& .MuiSlider-thumb": { borderRadius: 0 } }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Stack>

        <CMDivider />

        {/* App.css */}
        <Stack spacing={2} direction="row">
          <Button className="MyButton" variant="text">
            Text
          </Button>

          <Button className="MyButton" disabled variant="text">
            Text
          </Button>
        </Stack>

        <CMDivider />

        {/* Reusable Component (Styled Component) */}
        <Stack spacing={2} direction="row">
          <CMButton>1234</CMButton>
          <CMButton>1234</CMButton>
          <CMButton>1234</CMButton>
        </Stack>

        <CMDivider />

        {/* Global Theme component */}
        <Stack spacing={2} direction="row">
          <Typography variant="h1">1234</Typography>
          <Typography variant="h2">1234</Typography>
        </Stack>

        {/* Dynamic CSS */}
        <Stack spacing={2} direction="row">
          <FormControlLabel
            control={
              <Switch
                checked={success}
                onChange={handleChange}
                color="primary"
                value="dynamic-class-name"
              />
            }
            label="Success"
          />
          <DynamicButton online={success}>1234</DynamicButton>
        </Stack>

        {/* Global CSS override */}
        <Stack spacing={2} direction="row">
          <h1>Grey h1 element</h1>
          <GlobalStyles
            styles={{ h1: { color: "grey" }, span: { color: "green" } }}
          />
          <h1>Grey h1 element</h1>
          <span>1234</span>
        </Stack>

        {/* CSSBaseLine */}
        <Stack spacing={2} direction="row">
          <h3>Green h3 element</h3>
          <button>1234</button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
