// WhatsApp Sabit Butonu - Mobil Optimize
function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/905431264672"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg flex items-center px-5 py-3 gap-2 transition-all touch-manipulation"
      style={{
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        minWidth: '44px',
        minHeight: '44px'
      }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.78 11.78 0 0012.07.25C6.13.25 1.07 5.31 1.07 11.25c0 1.99.52 3.94 1.51 5.67L.25 23.75l7.09-2.32a11.2 11.2 0 004.73 1.09h.01c5.94 0 11-5.06 11-11 0-2.93-1.14-5.69-3.25-7.99zM12.07 21.25c-1.53 0-3.03-.37-4.37-1.09l-.31-.16-4.21 1.38 1.38-4.09-.2-.32A9.23 9.23 0 013.07 11.25c0-4.97 4.04-9.01 9-9.01 2.41 0 4.68.94 6.39 2.65a8.97 8.97 0 012.62 6.36c0 4.97-4.04 9-9.01 9zm5.01-6.55c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.42.11-.56.11-.11.25-.29.37-.44.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.45-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.27 5.01 4.46.7.30 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.52-.34z" />
      </svg>
      <span className="font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  metadataBase: new URL('https://angoraotomasyon.com'),
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
    url: 'https://angoraotomasyon.com',
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
    google: 'google-site-verification=your-verification-code-here',
  },
  alternates: {
    canonical: 'https://angoraotomasyon.com',
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
    "url": "https://angoraotomasyon.com",
    "logo": "https://angoraotomasyon.com/Küre.png",
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
    "image": "https://angoraotomasyon.com/Küre.png",
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
        <link rel="canonical" href="https://angoraotomasyon.com" />
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
        <AnalyticsTracker />
        <Header />

        <WhatsAppFloatingButton />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
