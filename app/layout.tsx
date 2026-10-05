import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicWelcome from "./components/MusicWelcome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlMahdi Olive Oil",
  description:
    "AlMahdi Olive Oil - Groupe agroalimentaire tunisien de 5ème génération.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#F8F3E3]"
      >
        {/* ÉCRAN D'ENTRÉE + MUSIQUE */}
        <MusicWelcome />

        {/* NAVIGATION */}
        <Navbar />

        {/* CONTENU */}
        <div className="flex-1">{children}</div>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}