import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export const metadata = {
 title: "Bible Plan",
 description: "A reminder tool for my wife and I",
 manifest: `https://bible.brinkley.dev/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={merriweather.className}>{children}</body>
  </html>
 );
}
