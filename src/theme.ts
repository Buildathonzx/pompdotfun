import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#141118",
      paper: "#1c1723",
    },
    primary: {
      main: "#8013ec",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#ab9db9",
    },
  },
  typography: {
    fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
  },
});

export default theme;
