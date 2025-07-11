import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "TrackConnect - The Private Club for European Trackday Enthusiasts",
  description: "Join Europe's most exclusive trackday community. Share boxes, discover premium events, and connect with fellow enthusiasts who appreciate the art of precision driving.",
  keywords: ["trackday", "motorsports", "European", "motorcycle", "racing", "premium", "exclusive"],
  authors: [{ name: "TrackConnect" }],
  creator: "TrackConnect",
  publisher: "TrackConnect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TrackConnect - The Private Club for European Trackday Enthusiasts",
    description: "Join Europe's most exclusive trackday community. Share boxes, discover premium events, and connect with fellow enthusiasts.",
    url: defaultUrl,
    siteName: "TrackConnect",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackConnect - The Private Club for European Trackday Enthusiasts",
    description: "Join Europe's most exclusive trackday community. Share boxes, discover premium events, and connect with fellow enthusiasts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
