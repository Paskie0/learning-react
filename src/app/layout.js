import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#f7f5f4] max-w-7xl mx-auto ">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
