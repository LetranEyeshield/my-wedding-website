import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
  // title: "Rolan and Kate's Wedding",
  // description: "Rolan and Kate's Wedding",
  title: "Rolan & Kate's Wedding",
  description:
    "Join us on our special day! RSVP and check out our wedding details here.",
  keywords: "wedding, Rolan wedding, Kate Wedding RSVP, love, marriage",
  openGraph: {
    title: "Rolan & Kate's Wedding",
    description: "You're invited to our wedding day!",
    // url: "https://yourdomain.com",
    url: "https://vercel.com/michael-cris-rosalins-projects/my-wedding-website",
    siteName: "Wedding of Rolan & Kate",
    images: [
      {
        url: "/banner.jpg", // Make sure this is a real image path
        width: 1200,
        height: 630,
        alt: "Wedding Banner",
      },
    ],
    type: "website",
  },
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
        {/* Google Analytics gtag.js script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EY9GNFWZZ3"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EY9GNFWZZ3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
