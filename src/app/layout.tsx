import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive",
});

//USE FOR SEO
export const metadata: Metadata = {
  title: "Rolan and Kate's Wedding",
  description: "Rolan and Kate's Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add this manually */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          precedence="default"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${dancingScript.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
