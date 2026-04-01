import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COLAB House | Where Retail Meets Results",
  description:
    "COLAB House is home to five specialist companies working together to deliver end-to-end retail solutions — from in-store activations to data analytics and digital marketing.",
  keywords: [
    "COLAB",
    "COLAB House",
    "retail marketing",
    "in-store activations",
    "retail account management",
    "data analytics",
    "digital marketing",
    "Johannesburg",
    "Bruma",
  ],
  openGraph: {
    title: "COLAB House | Where Retail Meets Results",
    description:
      "Five specialist companies. One roof. Complete retail solutions.",
    url: "https://colab2.co.za",
    siteName: "COLAB House",
    locale: "en_ZA",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
