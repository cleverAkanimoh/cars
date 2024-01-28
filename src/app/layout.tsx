import type { Metadata } from "next";
import {
  Open_Sans,
  Roboto_Mono,
  Sofia,
  Rubik,
  Lusitana,
} from "next/font/google";
import { Footer, NavBar } from "@/components";

import { Providers } from "@/context";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
  fallback: ["sans", "Arial"],
});

const rubik = Rubik({
  // weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  fallback: ["sans", "Times new roman"],
});

const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lusitana",
  fallback: ["Impact", "Georgia"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  fallback: ["sans", "Times new romans"],
});

const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sofia",
  fallback: ["sans", "Calibri"],
});

export const metadata: Metadata = {
  title: "Welcome to carsinn",
  authors: [{ name: "clever Akanimoh" }],
  description: "Browse through our amazing variety of cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${rubik.variable} ${robotoMono.variable} ${sofia.variable} ${lusitana.variable} font-rubik`}
    >
      <Providers>
        <body className="scroll-smooth w-full overflow-x-hidden dark:text-gray-400 dark:bg-black bg-purple-50">
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
