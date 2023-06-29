import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
 title: "Bible Plan",
 description: "A reminder tool for my wife and I",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={dmSans.className}>{children}</body>
  </html>
 );
}
