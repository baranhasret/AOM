import { Award, CheckCircle, Zap, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function AvevaDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Canlı Gradient ve Dekoratif Daireler */}
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-indigo-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-indigo-400 to-blue-400 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-indigo-400 via-blue-300 to-blue-300 opacity-30 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-gray-800">AVEVA</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">AVEVA</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">Endüstriyel Yazılım ve Dijital Dönüşüm</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            AVEVA, endüstriyel işletmeler için yazılım çözümleri sunan küresel bir liderdir. Dijital dönüşüm, operasyonel mükemmellik ve sürdürülebilirlik için kapsamlı çözümler sağlar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Cloud size={20} className="text-blue-500" />
              <span className="text-gray-800 font-medium">Bulut tabanlı çözümler</span>
            </div>
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-gray-800 font-medium">Dijital dönüşüm</span>
            </div>
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-indigo-500" />
              <span className="text-gray-800 font-medium">Operasyonel mükemmellik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">SCADA Sistemleri</h3>
              <p className="text-gray-700 mb-4">Denetleme, veri toplama ve analiz sistemleri</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">MES Yazılımları</h3>
              <p className="text-gray-700 mb-4">Üretim yönetimi ve izleme sistemleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">AVEVA Ürünleri Hakkında Detaylı Bilgi</h2>
          <p className="text-blue-100 text-lg mb-8">AVEVA çözümleri ile dijital dönüşümünüzü hızlandırın.</p>
          <Link href="/iletisim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
