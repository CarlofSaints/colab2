import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { companies } from "@/lib/companies";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const description =
  "COLAB is a partnership of six specialist retail businesses under one roof in Bruma, Johannesburg: activations, account management, data analytics, digital marketing, sell-out and field tracking.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.colab2.co.za"),
  title: "COLAB | Six retail specialists under one roof in Johannesburg",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "COLAB | Six retail specialists under one roof in Johannesburg",
    description: "Six specialist businesses. One way of working.",
    url: "https://www.colab2.co.za",
    siteName: "COLAB",
    locale: "en_ZA",
    type: "website",
    images: ["/logos/colab-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "COLAB",
  url: "https://www.colab2.co.za",
  logo: "https://www.colab2.co.za/logos/colab-logo.png",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Zulberg Close",
    addressLocality: "Bruma",
    addressRegion: "Johannesburg",
    postalCode: "2198",
    addressCountry: "ZA",
  },
  member: companies.map((c) => ({ "@type": "Organization", name: c.name, description: c.tagline, ...(c.url && { url: c.url }) })),
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
