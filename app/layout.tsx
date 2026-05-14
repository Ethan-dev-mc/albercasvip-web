import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://albercasvip.com";

export const metadata: Metadata = {
  title: {
    default:
      "AlbercasVIP — Albercas Premium con Tecnología RENOLIT en Guadalajara",
    template: "%s | AlbercasVIP",
  },
  description:
    "Construcción, renovación y equipamiento de albercas con tecnología RENOLIT ALKORPLAN alemana. 15 años de garantía por escrito. Guadalajara, Jalisco.",
  keywords: [
    "albercas guadalajara",
    "renovar alberca sin demoler",
    "membrana RENOLIT",
    "construcción albercas jalisco",
    "albercas edificios azoteas",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: "AlbercasVIP",
    locale: "es_MX",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "AlbercasVIP — Albercas Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlbercasVIP — Albercas Premium con Tecnología RENOLIT",
    description:
      "Construcción, renovación y equipamiento de albercas. 15 años de garantía. Guadalajara, Jalisco.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "AlbercasVIP",
      description:
        "Construcción, renovación y equipamiento de albercas premium con tecnología RENOLIT ALKORPLAN. 15 años de garantía.",
      url: SITE_URL,
      telephone: "+52-1-33-1080-8938",
      email: "eduardo@albercasvip.com",
      foundingDate: "1999",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Plutarco Elías Calles 465",
        addressLocality: "Guadalajara",
        addressRegion: "Jalisco",
        postalCode: "44750",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.6423,
        longitude: -103.3614,
      },
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      priceRange: "$$$",
      image:
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=85",
      sameAs: [
        "https://www.facebook.com/Albercas.VIP",
        "https://www.instagram.com/albercasvip",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AlbercasVIP",
      description: "Albercas premium con tecnología RENOLIT en México",
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <ScrollProgress />
          <LoadingScreen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
