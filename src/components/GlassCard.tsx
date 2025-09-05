import Paper from "@mui/material/Paper";
import { PropsWithChildren } from "react";

export default function GlassCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <Paper elevation={3} sx={{ borderRadius: 3, p: 3, bgcolor: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 10px 30px rgba(128,19,236,0.06)", }} className={className}>
      {children}
    </Paper>
  );
}
