import { Award, CheckCircle, Gauge, Shield } from 'lucide-react';
import Link from 'next/link';

export default function WeidmullerDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-bordo-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-orange-500 via-bordo-400 to-orange-400 opacity-40 rounded-full blur-3xl" />
      </div>

      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-orange-600">Weidmüller</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Weidmüller</h1>
          <p className="text-xl text-orange-600 font-semibold mb-4">Endüstriyel Bağlantı ve Otomasyon Teknolojileri</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            Weidmüller, endüstriyel bağlantı teknolojileri, otomasyon çözümleri ve dijitalleşme alanında yenilikçi ürünler sunar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-orange-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Shield size={20} className="text-orange-600" />
              <span className="text-gray-800 font-medium">Güvenilir bağlantı</span>
            </div>
            <div className="bg-orange-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-bordo-500" />
              <span className="text-gray-800 font-medium">Alman mühendisliği</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-bordo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Klemensler</h3>
              <p className="text-gray-700">Ray tipi klemensler ve bağlantı sistemleri</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-bordo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Endüstriyel Arayüzler</h3>
              <p className="text-gray-700">Sinyal dönüştürücüler ve izolasyon cihazları</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-r from-orange-600 to-bordo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Weidmüller Ürünleri İçin İletişime Geçin</h2>
          <Link href="/iletisim" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
