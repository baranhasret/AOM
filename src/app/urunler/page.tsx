"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function UrunlerPage() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const handleOpenModal = (prod: any) => {
    setSelectedProduct(prod);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ name: "", email: "", company: "", phone: "", message: "" });
    setSelectedProduct(null);
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada form verisi ile işlem yapılabilir (örn. API'ye gönderme)
    alert("Talebiniz alındı. En kısa sürede dönüş yapılacaktır.");
    handleCloseModal();
  };
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Array<{ id: number; name: string; code: string; image: string; brand: string; desc: string; category: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Yükleniyor...</div>;

  // Markaları ve kategorileri çıkar
  // Admin tarafındaki marka ve kategoriler
  const brandOptions = [
    {
      name: 'Autonics',
      logo: '/images/autonics.png',
      categories: [
        'Sensörler', 'Sıcaklık Kontrol Cihazları', 'Zaman Röleleri', 'Sayıcılar', 'Proximity Switch', 'Encoderlar', 'PLC', 'SSR', 'Güç Kaynakları', 'Panel Metreler', 'Seviye Sensörleri', 'Basınç Sensörleri', 'Akış Sensörleri', 'Aksesuarlar'
      ]
    },
    {
      name: 'Inovance',
      logo: '/images/inovance.png',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Motion Controller', 'I/O Modüller', 'Aksesuarlar']
    },
    {
      name: 'Yaskawa',
      logo: '/images/yaskawa.png',
      categories: ['Servo Sürücü', 'Robot', 'Frekans İnvertörü', 'Motion Controller', 'Aksesuarlar']
    },
    {
      name: 'Delta',
      logo: '/images/delta.png',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Güç Kaynağı', 'Aksesuarlar']
    },
    {
      name: 'Omron',
      logo: '/images/omron.png',
      categories: ['Sensörler', 'PLC', 'HMI', 'Zaman Röleleri', 'Sayıcılar', 'SSR', 'Aksesuarlar']
    },
    {
      name: 'SMC',
      logo: '/images/smc.png',
      categories: ['Pnömatik', 'Valf', 'Silindir', 'Regülatör', 'Aksesuarlar']
    },
    {
      name: 'Siemens',
      logo: '/images/siemens.png',
      categories: ['PLC', 'HMI', 'Servo Sürücü', 'Frekans İnvertörü', 'Aksesuarlar']
    }
  ];
  const brands = brandOptions.map(b => b.name);
  const categories = selectedBrand
    ? (brandOptions.find(b => b.name === selectedBrand)?.categories || [])
    : [];
  let filteredProducts: any[] = [];
  if (search.trim()) {
    const s = search.trim().toLowerCase();
    filteredProducts = products.filter(p =>
      p.code.toLowerCase().includes(s) ||
      p.name.toLowerCase().includes(s)
    );
  } else if (selectedBrand && selectedCategory) {
    filteredProducts = products.filter(p => p.brand === selectedBrand && p.category === selectedCategory);
  }

  return (
    <>
      <Head>
        <title>Ürünler - Endüstriyel Otomasyon Ürünleri | AOM Engineering</title>
        <meta name="description" content="PLC, HMI, servo sürücü, sensör ve daha fazlası. Siemens, Omron, Yaskawa, Autonics, Inovance markaları ile 1000+ endüstriyel otomasyon ürünü." />
        <meta name="keywords" content="endüstriyel otomasyon ürünleri, plc, hmi, servo motor, sensör, frekans invertörü, otomasyon ekipmanları, siemens, omron, yaskawa, autonics, delta, schneider" />
        <link rel="canonical" href="https://angoraotomasyon.com/urunler" />
        <meta property="og:title" content="Ürünler - Endüstriyel Otomasyon | AOM Engineering" />
        <meta property="og:description" content="1000+ endüstriyel otomasyon ürünü. PLC, HMI, Servo Motor, Sensör çeşitleri." />
        <meta property="og:url" content="https://angoraotomasyon.com/urunler" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <header className="w-full bg-white shadow mb-0 py-6 flex items-center justify-between px-8">
          <img src="/Küre.png" alt="AOM Technology" className="h-12" />
          <nav className="flex gap-4">{/* Menü buraya gelebilir */}</nav>
          <button className="bg-bordo-600 text-white px-4 py-2 rounded font-semibold shadow">Teklif Al</button>
        </header>
        <section className="px-8 pb-16 flex flex-col items-center min-h-[70vh] justify-start bg-gradient-to-b from-gray-50 to-white">
          <h1 className="text-5xl font-extrabold text-center mb-12 mt-10 tracking-tight text-gray-900 drop-shadow-lg">Ürünler</h1>
          {/* Genel ürün arama alanı - profesyonel tasarım */}
          <div className="mb-8 w-full max-w-3xl mx-auto flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center px-6 py-4 gap-4 transition-all hover:shadow-2xl w-full">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Ürün kodu veya adı ile ara..."
                className="flex-1 bg-transparent border-none outline-none text-xl text-gray-900 placeholder-gray-400 font-medium text-center"
              />
            </div>
          </div>
          {/* Marka seçimi */}
          <div className="mt-12 mb-16 flex flex-wrap gap-3 justify-center">
            {brandOptions.map(brand => (
              <button
                key={brand.name}
                className={`flex flex-col items-center justify-center w-28 h-32 rounded-xl shadow text-xs transition-all border bg-white border-blue-200 p-1 group
                hover:bg-blue-50 hover:border-blue-400 hover:shadow-xl hover:scale-105 transition-all duration-200
                ${selectedBrand === brand.name ? 'ring-2 ring-blue-500 border-blue-700 scale-105 shadow-xl' : ''}`}
                onClick={() => {
                  if (selectedBrand === brand.name) {
                    setSelectedBrand(null);
                    setSelectedCategory(null);
                  } else {
                    setSelectedBrand(brand.name);
                    setSelectedCategory(null);
                  }
                }}
              >
                <img src={brand.logo} alt={brand.name} className="w-20 h-20 object-contain mb-1 transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow" />
                <span className="text-[10px] font-semibold text-gray-700 text-center truncate w-full">{brand.name}</span>
              </button>
            ))}
          </div>
          {/* Kategori seçimi */}
          {selectedBrand && (
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded font-medium shadow text-base transition-all border
                  ${selectedCategory === cat ? 'bg-blue-500 text-white border-blue-700 scale-105 ring-2 ring-blue-400 shadow-lg' : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-400'}
                `}
                  onClick={() => {
                    if (selectedCategory === cat) {
                      setSelectedCategory(null);
                    } else {
                      setSelectedCategory(cat);
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          {/* Ürünler grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 w-full max-w-7xl px-2 md:px-0">
            {filteredProducts.length === 0 ? null : filteredProducts.map((prod: any) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-100 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-200 relative overflow-hidden cursor-pointer"
              >
                <a
                  href={`/urunler/${prod.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="w-36 h-36 mb-4 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden border border-gray-200 group-hover:border-blue-400 transition-all">
                    {prod.image ? (
                      <img src={prod.image} alt={prod.name} className="object-contain h-full w-full transition-all group-hover:scale-105" />
                    ) : (
                      <span className="text-gray-300">Görsel Yok</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900 text-center group-hover:text-blue-700 transition-all">{prod.name}</h3>
                  <div className="flex flex-col gap-1 text-sm text-gray-600 mb-1 text-center">
                    <span>Kod: <span className="font-medium text-gray-800">{prod.code}</span></span>
                    <span>Marka: <span className="font-medium text-gray-800">{prod.brand}</span></span>
                  </div>
                  {prod.desc && <div className="text-gray-500 mt-1 text-center text-sm line-clamp-2">{prod.desc}</div>}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-all"></div>
                </a>
                <button
                  className="mt-4 w-full bg-bordo-600 text-white py-2 rounded font-semibold text-center block hover:bg-bordo-700 transition"
                  onClick={() => handleOpenModal(prod)}
                >
                  Teklif Al
                </button>
              </div>
            ))}
          </div>
          {/* Teklif Al Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-bordo-600 text-2xl font-bold"
                  onClick={handleCloseModal}
                  aria-label="Kapat"
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Teklif Talep Formu</h2>
                {selectedProduct && (
                  <div className="mb-4 p-3 bg-gray-50 rounded border text-sm text-gray-700">
                    <strong>Ürün:</strong> {selectedProduct.name} <span className="text-gray-400">({selectedProduct.code})</span>
                  </div>
                )}
                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="Ad Soyad"
                    required
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="E-posta"
                    required
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleFormChange}
                    placeholder="Firma Adı"
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    placeholder="Telefon"
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Mesajınız (isteğe bağlı)"
                    rows={3}
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded font-semibold text-lg hover:bg-blue-700 transition"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          )}
          {/* Teklif Al Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-bordo-600 text-2xl font-bold"
                  onClick={handleCloseModal}
                  aria-label="Kapat"
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Teklif Talep Formu</h2>
                {selectedProduct && (
                  <div className="mb-4 p-3 bg-gray-50 rounded border text-sm text-gray-700">
                    <strong>Ürün:</strong> {selectedProduct.name} <span className="text-gray-400">({selectedProduct.code})</span>
                  </div>
                )}
                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="Ad Soyad"
                    required
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="E-posta"
                    required
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleFormChange}
                    placeholder="Firma Adı"
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    placeholder="Telefon"
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Mesajınız (isteğe bağlı)"
                    rows={3}
                    className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded font-semibold text-lg hover:bg-blue-700 transition"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          )}
          {/* Açıklama veya boş ekran */}
          {!selectedBrand && !search.trim() && (
            <div className="text-center text-gray-400 text-lg mt-16">Bir marka seçin veya arama yapın.</div>
          )}
          {selectedBrand && !selectedCategory && !search.trim() && (
            <div className="text-center text-gray-400 text-lg mt-8">Bir kategori seçin veya arama yapın.</div>
          )}
          {/* Açıklama veya boş ekran */}
          {!selectedBrand && (
            <div className="text-center text-gray-400 text-lg mt-16">Bir marka seçin.</div>
          )}
          {selectedBrand && !selectedCategory && (
            <div className="text-center text-gray-400 text-lg mt-8">Bir kategori seçin.</div>
          )}
        </section>
      </main>
    </>
  );
}
