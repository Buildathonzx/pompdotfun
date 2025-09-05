import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "pompdafun",
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
        <style>{`:root{--primary-color:#8013ec}`}</style>
      </head>
      <body style={{
        fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
        margin: 0,
        background: '#141118',
        color: '#fff',
        minHeight: '100vh',
      }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );}
