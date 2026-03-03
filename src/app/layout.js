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
  metadataBase: new URL("https://portfolio-website-feuc.vercel.app"),
  title: {
    default: "I.Dev | Ishak Abdiaziz Portfolio",
    template: "%s | I.Dev",
  },
  description:
    "Portfolio of Ishak Abdiaziz, a Full-Stack Web Developer building modern, scalable web applications.",
  openGraph: {
    title: "I.Dev | Ishak Abdiaziz Portfolio",
    description:
      "Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB.",
    url: "https://portfolio-website-feuc.vercel.app",
    siteName: "I.Dev Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I.Dev | Ishak Abdiaziz Portfolio",
    description:
      "Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB.",
  },
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
