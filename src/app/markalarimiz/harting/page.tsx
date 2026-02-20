import { Award, CheckCircle, Cable, Plug } from 'lucide-react';
import Link from 'next/link';

export default function HartingDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Canlı Gradient ve Dekoratif Daireler */}
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-bordo-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-yellow-500 via-bordo-400 to-yellow-400 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-bordo-400 via-yellow-300 to-yellow-300 opacity-30 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-yellow-600">HARTING</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">HARTING</h1>
          <p className="text-xl text-yellow-600 font-semibold mb-4">Endüstriyel Bağlantı Teknolojileri</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            HARTING, endüstriyel bağlantı teknolojilerinde dünya lideridir. Konnektörler, kablolar ve network çözümleriyle Endüstri 4.0 için güvenilir altyapı sağlar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-yellow-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Cable size={20} className="text-yellow-600" />
              <span className="text-gray-800 font-medium">Yüksek performans</span>
            </div>
            <div className="bg-yellow-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Plug size={20} className="text-bordo-500" />
              <span className="text-gray-800 font-medium">Modüler çözümler</span>
            </div>
            <div className="bg-yellow-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-yellow-500" />
              <span className="text-gray-800 font-medium">Endüstri 4.0 uyumlu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-bordo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Endüstriyel Konnektörler</h3>
              <p className="text-gray-700">Han® serisi konnektörler</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-bordo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ağ Altyapısı</h3>
              <p className="text-gray-700">Ethernet ve fiber optik çözümleri</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-bordo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PCB Konnektörleri</h3>
              <p className="text-gray-700">Elektronik bağlantı elemanları</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-yellow-600 to-bordo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">HARTING Ürünleri İçin İletişime Geçin</h2>
          <p className="text-yellow-100 text-lg mb-8">Endüstriyel bağlantı çözümleri için uzman ekibimizle görüşün.</p>
          <Link href="/iletisim" className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
