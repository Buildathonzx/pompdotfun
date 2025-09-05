import Paper, { PaperProps } from "@mui/material/Paper";
import { PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type GlassCardProps = PaperProps & { className?: string };

export default function GlassCard({ children, className, sx, ...rest }: PropsWithChildren<GlassCardProps>) {
  const baseSx: SxProps<Theme> = {
    borderRadius: 3,
    p: 3,
    bgcolor: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(128,19,236,0.06)",
  };

  // Merge sx safely
  const mergedSx: SxProps<Theme> = Array.isArray(sx) ? [baseSx, ...sx] : Object.assign({}, baseSx, sx as object);

  return (
    <Paper elevation={3} sx={mergedSx} className={className} {...rest}>
      {children}
    </Paper>
  );
}
