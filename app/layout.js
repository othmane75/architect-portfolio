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
  title: "Iness Clar - Architecture Portfolio",
  description: "Architecture portfolio of Iness Clar, third-year architecture student at La Salle URL Barcelona. Exploring thoughtful, human-first architectural design through innovative projects and experimental approaches.",
  keywords: "architecture, portfolio, Barcelona, La Salle URL, architectural design, Iness Clar",
  authors: [{ name: "Iness Clar" }],
  themeColor: "#FAF9F6",
  openGraph: {
    title: "Iness Clar - Architecture Portfolio",
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
