import { Award, CheckCircle, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HimelDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Canlı Gradient ve Dekoratif Daireler */}
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-bordo-400 via-pink-200 to-white opacity-90 blur-[2px]" />
        <div className="absolute left-[-120px] top-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-bordo-500 via-pink-400 to-bordo-400 opacity-40 rounded-full blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-pink-400 via-bordo-300 to-bordo-300 opacity-30 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-bordo-600">Himel</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Himel</h1>
          <p className="text-xl text-bordo-600 font-semibold mb-4">Elektrik Dağıtım ve Kontrol Ekipmanları</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            Himel, elektrik dağıtım panoları, anahtarlama ve kontrol ekipmanlarında yenilikçi ve güvenilir çözümler sunmaktadır. Endüstriyel tesislerde güvenli elektrik dağıtımı sağlar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-bordo-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Shield size={20} className="text-bordo-500" />
              <span className="text-gray-800 font-medium">Güvenli dağıtım</span>
            </div>
            <div className="bg-bordo-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Zap size={20} className="text-yellow-500" />
              <span className="text-gray-800 font-medium">Enerji yönetimi</span>
            </div>
            <div className="bg-bordo-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Award size={20} className="text-pink-500" />
              <span className="text-gray-800 font-medium">Uluslararası standartlar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-bordo-50 to-pink-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Elektrik Panoları</h3>
              <p className="text-gray-700 mb-4">Dağıtım ve kontrol panoları, klemens kutuları</p>
            </div>
            <div className="bg-gradient-to-br from-bordo-50 to-pink-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Anahtarlama Ekipmanları</h3>
              <p className="text-gray-700 mb-4">Şalterler, kontaktörler, koruma cihazları</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-bordo-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Himel Ürünleri Hakkında Bilgi Alın</h2>
          <p className="text-bordo-100 text-lg mb-8">Elektrik dağıtım ve kontrol çözümleriniz için bizimle iletişime geçin.</p>
          <Link href="/iletisim" className="inline-block bg-white text-bordo-600 px-8 py-4 rounded-lg font-semibold hover:bg-bordo-50 transition-colors shadow-lg">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
