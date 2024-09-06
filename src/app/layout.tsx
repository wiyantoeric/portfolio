import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Wiyanto",
  description:
    "Portfolio of Eric Wiyanto works on software engineering including mobile app and website app",
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  publisher: "Eric Wiyanto",
  verification: {
    google: "E9iEx7kR7zbduQcws8hzWWyw9en76CiyLs2WdK_8UbA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="E9iEx7kR7zbduQcws8hzWWyw9en76CiyLs2WdK_8UbA"
        />
      </Head>
      <body className={`${inter.className} dark:bg-zinc-900`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
