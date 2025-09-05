import { ButtonHTMLAttributes } from "react";

export default function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center rounded-lg h-12 px-6 font-bold transition-all ${className}`}
    />
  );
}
