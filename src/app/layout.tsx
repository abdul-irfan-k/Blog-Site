import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar/navbar";
const inter = Inter({ subsets: ["latin"] });
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} 2xl:px-20  xl:px-16 xl:py-4 py-2 px-3 bg-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
