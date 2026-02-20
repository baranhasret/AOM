import { Award, CheckCircle, Cable, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CembreDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Canlı Gradient ve Dekoratif Daireler */}
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-cyan-500 via-blue-400 to-cyan-400 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-blue-400 via-cyan-300 to-cyan-300 opacity-30 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-cyan-600">CEMBRE</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">CEMBRE</h1>
          <p className="text-xl text-cyan-600 font-semibold mb-4">Elektrik Bağlantı Elemanları ve Kablo Aksesuarları</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            CEMBRE, elektrik bağlantı elemanları, kablo uçları ve sıkma araçları konusunda İtalyan kalitesini dünyaya taşımaktadır. Endüstriyel ve enerji sektöründe güvenilir bağlantılar sağlar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-cyan-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Cable size={20} className="text-cyan-600" />
              <span className="text-gray-800 font-medium">Kablo aksesuarları</span>
            </div>
            <div className="bg-cyan-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Zap size={20} className="text-blue-500" />
              <span className="text-gray-800 font-medium">Enerji iletimi</span>
            </div>
            <div className="bg-cyan-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-cyan-500" />
              <span className="text-gray-800 font-medium">İtalyan kalitesi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kablo Uçları ve Pabuçları</h3>
              <p className="text-gray-700 mb-4">Bakır ve alüminyum kablo uçları</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sıkma Araçları</h3>
              <p className="text-gray-700 mb-4">Hidrolik ve mekanik pres araçları</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">CEMBRE Ürünleri Hakkında Detaylı Bilgi</h2>
          <p className="text-cyan-100 text-lg mb-8">Elektrik bağlantı çözümleri için bizimle iletişime geçin.</p>
          <Link href="/iletisim" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
