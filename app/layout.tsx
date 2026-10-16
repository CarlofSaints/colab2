import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const description =
  "COLAB is a partnership of six specialist retail businesses under one roof in Bruma, Johannesburg: activations, account management, data analytics, digital marketing, sell-out and field tracking.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.colab2.co.za"),
  title: "COLAB | Where Retail Meets Results",
  description,
  keywords: [
    "COLAB",
    "COLAB House",
    "retail marketing",
    "in-store activations",
    "retail account management",
    "retail data analytics",
    "digital marketing",
    "field tracking",
    "Johannesburg",
    "Bruma",
  ],
  openGraph: {
    title: "COLAB | Where Retail Meets Results",
    description: "Six specialist businesses. One way of working.",
    url: "https://colab2.co.za",
    siteName: "COLAB",
    locale: "en_ZA",
    type: "website",
    images: ["/logos/colab-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
