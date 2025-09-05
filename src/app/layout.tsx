import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "XLayer Meme Token Launchpad",
  description:
    "Pump.fun-style Meme Token Launchpad on X Layer (OKX zkEVM)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Spline+Sans:wght@400;500;700"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
        <style>{`:root{--primary-color:#8013ec}`}</style>
      </head>
      <body className="bg-[#141118] text-white min-h-screen" style={{
        fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
      }}>
        {children}
      </body>
    </html>
  );}
