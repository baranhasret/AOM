import { Award, CheckCircle, Gauge, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TelemecaniqueSensorsDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Canlı Gradient ve Dekoratif Daireler */}
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-cyan-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-400 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-cyan-400 via-blue-300 to-blue-300 opacity-30 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-3xl font-bold text-blue-700">Telemecanique Sensors</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Telemecanique Sensors</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">Endüstriyel Sensör Çözümleri</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            Schneider Electric ailesinin bir parçası olan Telemecanique Sensors, endüstriyel otomasyon için yüksek kaliteli sensör ve dedektör çözümleri sunar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Gauge size={20} className="text-blue-500" />
              <span className="text-gray-800 font-medium">Hassas algılama</span>
            </div>
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Shield size={20} className="text-green-500" />
              <span className="text-gray-800 font-medium">Dayanıklı tasarım</span>
            </div>
            <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-cyan-500" />
              <span className="text-gray-800 font-medium">Geniş ürün yelpazesi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fotoelektrik Sensörler</h3>
              <p className="text-gray-700">Hassas algılama ve uzun menzil</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">İndüktif Sensörler</h3>
              <p className="text-gray-700">Metal algılama ve pozisyon kontrolü</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kapasitif Sensörler</h3>
              <p className="text-gray-700">Metalik olmayan malzeme algılama</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Telemecanique Sensors Ürünleri İçin</h2>
          <p className="text-blue-100 text-lg mb-8">Endüstriyel sensör ihtiyaçlarınız için bizimle iletişime geçin.</p>
          <Link href="/iletisim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
