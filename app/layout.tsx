import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Josiah Sid — Bass Guitar Lessons for Beginners | Worship, Gospel and Beyond",
  description:
    "Learn bass guitar from scratch with Josiah Sid. Structured virtual 1-to-1 lessons for beginners. Worship, gospel, and beyond. Book your free discovery call today.",
  openGraph: {
    title: "Josiah Sid — Bass Guitar Lessons for Beginners",
    description:
      "Learn bass guitar from scratch with Josiah Sid. Structured virtual 1-to-1 lessons for beginners. Worship, gospel, and beyond. Book your free discovery call today.",
    url: "https://www.thejosiahsid.com",
    siteName: "Josiah Sid",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black-950 font-inter text-white antialiased">
        {children}
      </body>
    </html>
  );
}
