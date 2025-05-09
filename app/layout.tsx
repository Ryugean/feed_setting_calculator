import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feed Calculator",
  description: "Generated by create next app || Nayel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-be-installed="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-liner-extension-version="7.16.7"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
