import { Award, CheckCircle, Zap, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function WegDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-sky-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-blue-600 via-sky-400 to-blue-400 opacity-40 rounded-full blur-3xl" />
      </div>

      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-blue-700">WEG</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">WEG</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">Elektrik Motorları ve Otomasyon</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            WEG, endüstriyel elektrik motorları, frekans invertörleri ve otomasyon çözümlerinde dünya çapında tanınan Brezilyalı bir markadır.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Zap size={20} className="text-blue-600" />
              <span className="text-gray-800 font-medium">Enerji verimliliği</span>
            </div>
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Gauge size={20} className="text-sky-500" />
              <span className="text-gray-800 font-medium">Yüksek performans</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Elektrik Motorları</h3>
              <p className="text-gray-700">Asenkron ve senkron motorlar</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Frekans İnvertörleri</h3>
              <p className="text-gray-700">Motor hız kontrol cihazları</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jeneratörler</h3>
              <p className="text-gray-700">Elektrik üretim sistemleri</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-sky-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">WEG Ürünleri Hakkında Bilgi Alın</h2>
          <Link href="/iletisim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
