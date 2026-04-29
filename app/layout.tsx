import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Josephine F. W. Baggen | PhD Candidate in Astronomy at Yale",
  description:
    "Personal academic portfolio of Josephine F. W. Baggen, PhD Candidate in Astronomy at Yale University. Exploring the cosmos through research in extragalactic astronomy and galaxy formation.",
  keywords: [
    "astronomy",
    "astrophysics",
    "Yale University",
    "PhD",
    "galaxy formation",
    "extragalactic astronomy",
  ],
  authors: [{ name: "Josephine F. W. Baggen" }],
  openGraph: {
    title: "Josephine F. W. Baggen | PhD Candidate in Astronomy",
    description:
      "Personal academic portfolio showcasing research in extragalactic astronomy and galaxy formation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${crimsonPro.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
