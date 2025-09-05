import { PropsWithChildren } from "react";

export default function GlassCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl p-6 glass-effect border border-white/10 shadow-2xl shadow-[var(--primary-color)]/10 ${className}`}>
      {children}
    </div>
  );
}
