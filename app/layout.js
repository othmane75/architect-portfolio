import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clar Architecture - Iness Clar Portfolio",
  description: "Clar Architecture portfolio by Iness Clar. Third-year architecture student at La Salle URL Barcelona showcasing thoughtful, human-first architectural design through innovative projects.",
  keywords: "clararchitecture, Clar Architecture, Iness Clar, architecture, portfolio, Barcelona, La Salle URL, architectural design",
  authors: [{ name: "Iness Clar" }],
  themeColor: "#FAF9F6",
  verification: {
    google: "kC5Fj4I2wyhXLNdDZApLg9cmCp5MYGEXgxLH8hpK__o",
  },
  openGraph: {
    title: "Clar Architecture - Iness Clar Portfolio",
    description: "Thoughtful, human-first architecture portfolio showcasing innovative design projects.",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
