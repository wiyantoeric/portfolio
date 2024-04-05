import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric Wiyanto",
  description: "Eric Wiyanto's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <SpeedInsights />
    </html>
  );
}
