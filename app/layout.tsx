import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pocketposter.squair.xyz'),
  openGraph: {
    title: 'Pocket Poster Guide',
    description: 'A simple enough guide on how to install Pocket Poster on any iOS device. Pocket Poster only supports iOS 17-26.1.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 200,
        height: 200,
        alt: 'Pocket Poster Logo',
      }
    ], 
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/taj5rlj.css" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}