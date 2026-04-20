import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics, AnalyticsTracker } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aomtechnology.tr'),
  title: "AOM Engineering - Endüstriyel Otomasyon Çözümleri",
  description: "Endüstriyel otomasyon, robotik sistemler, medikal cihazlar ve oksijen jeneratörleri alanında uzman çözümler sunuyoruz.",
  keywords: "endüstriyel otomasyon, robotik sistemler, PLC, HMI, SCADA, medikal cihazlar, oksijen jeneratörü, otomasyon çözümleri, siemens, omron, yaskawa, schneider electric",
  authors: [{ name: "AOM Engineering" }],
  creator: "AOM Engineering",
  publisher: "AOM Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aomtechnology.tr',
    siteName: 'AOM Engineering',
    title: 'AOM Engineering - Endüstriyel Otomasyon Çözümleri',
    description: 'Endüstriyel otomasyon, robotik sistemler, medikal cihazlar ve oksijen jeneratörleri alanında uzman çözümler sunuyoruz.',
    images: [
      {
        url: '/Küre.png',
        width: 1200,
        height: 630,
        alt: 'AOM Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOM Engineering - Endüstriyel Otomasyon Çözümleri',
    description: 'Endüstriyel otomasyon, robotik sistemler, medikal cihazlar ve oksijen jeneratörleri alanında uzman çözümler sunuyoruz.',
    images: ['/Küre.png'],
  },
  verification: {
    google: 'HPRpO21tjglT23_eh6PmJce8CA9eQyTy_EwgzNyk25E',
  },
  alternates: {
    canonical: 'https://aomtechnology.tr',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AOM Engineering",
    "alternateName": "Angora Otomasyon",
    "url": "https://aomtechnology.tr",
    "logo": "https://aomtechnology.tr/Küre.png",
    "description": "Endüstriyel otomasyon, robotik sistemler, medikal cihazlar ve oksijen jeneratörleri alanında uzman çözümler.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Ankara"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-543-126-46-72",
      "contactType": "sales",
      "email": "info@angoraotomasyon.com",
      "availableLanguage": ["tr", "en"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/aom-engineering"
    ]
  };

  // LocalBusiness Schema (JSON-LD)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AOM Engineering",
    "image": "https://aomtechnology.tr/Küre.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Ankara"
    },
    "telephone": "+90-543-126-46-72",
    "email": "info@angoraotomasyon.com",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://aomtechnology.tr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <Header />
        <WhatsAppButton />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
