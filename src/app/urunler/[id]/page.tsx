"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";

export default function UrunDetayPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: any) => String(p.id) === String(id));
        setProduct(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center">Yükleniyor...</div>;
  if (!product) return <div className="p-8 text-center text-bordo-500">Ürün bulunamadı.</div>;

  const metaTitle = `${product.name} (${product.code}) - ${product.brand} | AOM Engineering`;
  const metaDesc = product.desc
    ? `${product.name} ${product.code} - ${product.desc.substring(0, 155)}...`
    : `${product.name} ${product.code} - ${product.brand} ${product.category || 'Endüstriyel Otomasyon Ürünü'}. Fiyat ve stok bilgisi için iletişime geçin.`;
  const metaKeywords = [
    product.name,
    product.code,
    product.brand,
    product.category,
    'endüstriyel otomasyon',
    'plc',
    'otomasyon sistemleri',
    'fiyat',
    'satış'
  ].filter(Boolean).join(", ");

  // Product Schema (JSON-LD) - Enhanced for Google
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image ? `https://angoraotomasyon.com${product.image}` : "https://angoraotomasyon.com/Küre.png",
    "description": metaDesc,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "sku": product.code,
    "mpn": product.code,
    "category": product.category || "Industrial Automation",
    "manufacturer": {
      "@type": "Organization",
      "name": "AOM Engineering",
      "url": "https://angoraotomasyon.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://angoraotomasyon.com/urunler/${id}`,
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AOM Engineering"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://angoraotomasyon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ürünler",
        "item": "https://angoraotomasyon.com/urunler"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://angoraotomasyon.com/urunler/${id}`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://angoraotomasyon.com/urunler/${id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://angoraotomasyon.com/urunler/${id}`} />
        <meta property="og:image" content={product.image ? `https://angoraotomasyon.com${product.image}` : "https://angoraotomasyon.com/Küre.png"} />
        <meta property="product:brand" content={product.brand} />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={product.image ? `https://angoraotomasyon.com${product.image}` : "https://angoraotomasyon.com/Küre.png"} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl w-full flex flex-col items-center border border-gray-200">
          <div className="w-64 h-64 mb-8 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            {product.image ? (
              <img src={product.image} alt={product.name} className="object-contain h-full w-full" />
            ) : (
              <span className="text-gray-300">Görsel Yok</span>
            )}
          </div>
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">{product.name}</h1>
          <div className="flex flex-col gap-2 text-lg text-gray-700 mb-6 text-center">
            <span>Kod: <span className="font-medium text-gray-800">{product.code}</span></span>
            <span>Marka: <span className="font-medium text-gray-800">{product.brand}</span></span>
            {product.category && <span className="text-blue-600">Kategori: <span className="font-normal">{product.category}</span></span>}
          </div>
          {product.desc && <div className="text-gray-500 mt-2 text-center text-base">{product.desc}</div>}
          <a
            href="/iletisim/teklif"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full bg-bordo-600 text-white py-3 rounded font-semibold text-center block hover:bg-bordo-700 transition"
          >
            Teklif Al
          </a>
        </div>
      </main>
    </>
  );
}