"use client";

import { useMemo, PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import UIProvider from "./UIProvider";

export default function Providers({ children }: PropsWithChildren<Record<string, unknown>>) {
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
        background: { default: "#141118", paper: "#1c1723" },
        primary: { main: "#8013ec" },
        text: { primary: "#FFFFFF", secondary: "#ab9db9" },
      },
      typography: { fontFamily: '"Spline Sans", "Noto Sans", sans-serif' },
    }),
  []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UIProvider>
        {children}
      </UIProvider>
    </ThemeProvider>
  );
}
