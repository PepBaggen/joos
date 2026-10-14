import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josephinebaggen.nl"),
  title: {
    default: "Josephine Baggen | Astronomy, Yale University",
    template: "%s | Josephine Baggen",
  },
  description:
    "Josephine Baggen, PhD candidate in Astronomy at Yale University, studying little red dots and the formation of the first massive galaxies and black holes with JWST.",
  keywords: [
    "Josephine Baggen",
    "astronomy",
    "little red dots",
    "JWST",
    "gravitational lensing",
    "black holes",
    "Yale University",
  ],
  authors: [{ name: "Josephine Baggen" }],
  openGraph: {
    title: "Josephine Baggen | Astronomy, Yale University",
    description:
      "PhD candidate at Yale studying little red dots and the first massive black holes with JWST.",
    type: "website",
    images: ["/images/profile.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 pb-20 pt-10 md:pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
