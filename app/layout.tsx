import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
const openRunde = localFont({
  src: [
    {
      path: "./fonts/OpenRunde-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/OpenRunde-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/OpenRunde-Medium.woff",
      weight: "500",
    },
    // {
    //   path: "./fonts/OpenRunde-SemiBold.woff",
    //   weight: "600",
    // },
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
