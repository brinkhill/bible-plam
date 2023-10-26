import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

import localFont from "next/font/local";
const openRunde = localFont({
  src: [
    {
      path: "./fonts/OpenRunde-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenRunde-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/OpenRunde-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/OpenRunde-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Bible Plan",
  manifest: `https://bible.brinkley.dev/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="f7f8fc" />
      <body className={openRunde.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
