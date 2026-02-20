import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import BrandSlider from '@/components/BrandSlider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AOM Engineering - Endüstriyel Otomasyon, PLC, SCADA, HMI Çözümleri',
  description: 'Siemens, Omron, Schneider Electric, Delta, Yaskawa markalarının resmi distribütörü. PLC programlama, SCADA sistemleri, servo motor, inverter, robotik otomasyon çözümleri. 25+ yıl deneyim.',
  keywords: 'endüstriyel otomasyon, plc programlama, scada, hmi, servo motor, inverter, robotik otomasyon, siemens plc, omron plc, schneider electric, delta plc, yaskawa servo, otomasyon sistemleri, endüstri 4.0',
  openGraph: {
    title: 'AOM Engineering - Endüstriyel Otomasyon Çözümleri',
    description: 'Türkiye\'nin önde gelen endüstriyel otomasyon firması. PLC, SCADA, HMI, Servo Motor ve Robotik çözümler.',
    images: ['/Küre.png'],
  },
  alternates: {
    canonical: 'https://angoraotomasyon.com',
  },
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AOM Engineering",
    "alternateName": "Angora Otomasyon",
    "url": "https://angoraotomasyon.com",
    "logo": "https://angoraotomasyon.com/Küre.png",
    "description": "Endüstriyel otomasyon, robotik sistemler ve medikal cihazlar alanında uzman çözümler",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Ankara"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-543-126-4672",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/aom-engineering",
      "https://twitter.com/aomengineering"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Avantajlar Bölümü */}
        <section className="relative z-20 py-24 bg-gradient-to-r from-bordo-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Sistemlerinize Değer Katıyoruz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Maliyet Azaltma */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <span className="inline-block bg-bordo-100 p-4 rounded-full mb-4">
                  {/* Money/Discount icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bordo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Maliyet Azaltma</h3>
                <p className="text-gray-600">Akıllı otomasyon çözümlerimizle işletme giderlerinizi minimuma indiriyoruz.</p>
              </div>
              {/* Verimlilik Artışı */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <span className="inline-block bg-green-100 p-4 rounded-full mb-4">
                  {/* Chart/Up icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Verimlilik Artışı</h3>
                <p className="text-gray-600">Otomasyon ve robotik ile üretim süreçlerinizde maksimum verimlilik sağlıyoruz.</p>
              </div>
              {/* Hızlı Destek */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <span className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  {/* Support/Headset icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1C6.477 1 2 5.477 2 11v2a1 1 0 001 1h2a1 1 0 001-1v-2a7 7 0 0114 0v2a1 1 0 001 1h2a1 1 0 001-1v-2c0-5.523-4.477-10-10-10z" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Hızlı Destek</h3>
                <p className="text-gray-600">Uzman ekibimizle 7/24 teknik destek ve hızlı çözüm sunuyoruz.</p>
              </div>
              {/* Yenilikçi Teknoloji */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <span className="inline-block bg-purple-100 p-4 rounded-full mb-4">
                  {/* Lightbulb/Innovation icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 017 7c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 017-7zm0 14v2m0 2h.01" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Yenilikçi Teknoloji</h3>
                <p className="text-gray-600">En yeni teknolojilerle işletmenizi geleceğe taşıyoruz.</p>
              </div>
              {/* Sürdürülebilirlik */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <span className="inline-block bg-teal-100 p-4 rounded-full mb-4">
                  {/* Leaf/Sustainability icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13a7 7 0 007 7 7 7 0 007-7c0-3.866-3.134-7-7-7S5 9.134 5 13z" /></svg>
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Sürdürülebilirlik</h3>
                <p className="text-gray-600">Çevreye duyarlı ve sürdürülebilir çözümlerle uzun vadeli başarı sağlıyoruz.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              {/* ...existing code... */}
            </div>
          </div>
        </section>

        {/* Brand Slider */}
        <BrandSlider />

        {/* Modern Çözümler Bölümü */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Endüstriyel Otomasyonun <span className="text-bordo-500">Güvenilir İsmi</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>AOM Engineering</strong> olarak, 25 yılı aşkın tecrübemizle endüstriyel otomasyon dünyasında fark yaratıyoruz.
                <strong>Siemens</strong>, <strong>Omron</strong>, <strong>Schneider Electric</strong> gibi dünya devlerinin gücünü,
                uzman mühendislik çözümlerimizle birleştiriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Kart 1: PLC */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">PLC Sistemleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Siemens S7-1200/1500, Omron ve Delta serisi PLC'ler ile karmaşık süreçlerinizi kusursuz yöneten, yüksek performanslı otomasyon altyapıları kuruyoruz.
                </p>
              </div>

              {/* Kart 2: SCADA & HMI */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-bordo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bordo-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-bordo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SCADA ve HMI</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WinCC ve Wonderware tabanlı SCADA sistemleri ile üretim hattınızı tek ekrandan izleyin. Kullanıcı dostu HMI panellerle tam kontrol sağlayın.
                </p>
              </div>

              {/* Kart 3: Servo & Motor */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servo ve Inverter</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yaskawa ve Delta servo sistemleri ile hassas hareket kontrolü, enerji tasarrufu sağlayan inverter çözümleri ile maliyet avantajı.
                </p>
              </div>

              {/* Kart 4: Robotik */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Robotik Çözümler</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Endüstriyel robot kolları, Delta ve SCARA robot uygulamaları ile üretim hızınızı ve kalitenizi maksimize edin.
                </p>
              </div>

              {/* Kart 5: Pano İmalatı */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-bordo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bordo-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-bordo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37-2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pano Tasarım & İmalat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Uluslararası standartlara uygun, projenize özel elektrik ve otomasyon panoları tasarımı ve montajı.
                </p>
              </div>

              {/* Kart 6: Sensör & Ölçüm */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sensör ve Ölçüm</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fotoelektrik, proximity sensörler ve encoder çözümleri ile üretim hattınızdaki her adımı hassasiyetle izleyin.
                </p>
              </div>
            </div>

            {/* Sektörler Alt Barı */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Çözüm Sunduğumuz Sektörler</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600">
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Gıda & İçecek</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Otomotiv</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Tekstil</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Medikal & İlaç</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Ambalaj</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Enerji</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-bordo-100 hover:text-bordo-700 transition-colors cursor-default">Endüstri 4.0</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
