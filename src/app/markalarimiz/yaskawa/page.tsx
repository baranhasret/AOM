import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle, Cpu, Gauge, Zap, ArrowRight, Settings, Activity, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YASKAWA - Robotik ve Sürücü Sistemleri | Aom Teknik',
  description: 'Yaskawa resmi distribütörü. Motoman robotları, Sigma servo motorlar, A1000 inverter ve endüstriyel otomasyon çözümleri.',
  keywords: 'yaskawa, motoman robot, sigma servo, a1000 inverter, yaskawa türkiye, endüstriyel robot, servo motor, ac sürücü'
};

export default function Yaskawa() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bordo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bordo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Brand Logo */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <Image
                src="/images/yaskawa.png"
                alt="YASKAWA"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">YASKAWA</h1>
              <p className="text-2xl text-bordo-500 mb-6">Robotik ve Sürücü Sistemleri Lideri</p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                100 yılı aşkın tecrübesiyle endüstriyel otomasyon, robotik ve sürücü teknolojilerinde dünya lideri. Motoman robotları ve Sigma servo motorlarıyla sanayide verimlilik ve kalite standardını belirler.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">100+</div>
                  <div className="text-sm text-gray-300">Yıllık Tecrübe</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">50+</div>
                  <div className="text-sm text-gray-300">Ülkede Faaliyet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">#1</div>
                  <div className="text-sm text-gray-300">Robotik Liderliği</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">Top</div>
                  <div className="text-sm text-gray-300">Servo Teknolojisi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Ürün Çözümlerimiz</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Yaskawa'nın geniş ürün yelpazesi ile endüstriyel otomasyon ihtiyaçlarınıza profesyonel çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Motoman Robotlar */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Motoman Robotlar</h3>
              <p className="text-gray-600 mb-6">
                <strong>Özellikler:</strong> 6 eksenli robot sistemleri, 3-300kg taşıma kapasitesi, kaynak/montaj/paketleme uygulamaları
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Yüksek hassasiyet ve tekrarlanabilirlik (±0.08mm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">MotoPlus ve ROS desteği ile kolay programlama</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Arc welding, spot welding, handling uygulamaları</span>
                </li>
              </ul>
            </div>

            {/* Sigma Servo Motorlar */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sigma Servo Motorlar</h3>
              <p className="text-gray-600 mb-6">
                <strong>Sigma-7 & Sigma-5:</strong> 0.05-55kW güç aralığı, 20-bit enkoder, multi-axis kontrolü
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Düşük enerji tüketimi (%33'e varan tasarruf)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Yüksek hız ve hassasiyet, vibrasyon bastırma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">EtherCAT, MECHATROLINK-III haberleşme</span>
                </li>
              </ul>
            </div>

            {/* A1000 İnverter */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">A1000 İnverter</h3>
              <p className="text-gray-600 mb-6">
                <strong>AC Sürücü:</strong> 0.4-630kW güç aralığı, vektör kontrol, fan/pompa optimizasyonu
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">%97+ verimlilik, enerji tasarrufu fonksiyonları</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">V/F ve vektör kontrol, sensorless vektör</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modbus RTU, Profibus, EtherNet/IP desteği</span>
                </li>
              </ul>
            </div>

            {/* MP3300iec Controller */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">MP3300iec Controller</h3>
              <p className="text-gray-600 mb-6">
                <strong>Machine Controller:</strong> IEC 61131-3 programlama, 64 servo eksen desteği
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-axis senkron hareket kontrolü</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">PLC + motion tek platformda entegrasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">MotionWorks IEC programlama ortamı</span>
                </li>
              </ul>
            </div>

            {/* Motion Control */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Motion Control</h3>
              <p className="text-gray-600 mb-6">
                <strong>SGD7S Servo:</strong> Gerçek zamanlı hareket kontrolü, 0.5ms cycle time
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced tuning ve vibrasyon bastırma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Safety over EtherCAT (FSoE) güvenlik</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct drive ve geared motor opsiyonları</span>
                </li>
              </ul>
            </div>

            {/* Drive Systems */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Drive Systems</h3>
              <p className="text-gray-600 mb-6">
                <strong>GA800 / V1000:</strong> Genel amaçlı inverterler, HVAC ve endüstriyel uygulamalar
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kolay komisyoning, hızlı parametrelendirme</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">PID kontrol, sleep mode, otomatik enerji tasarrufu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP20 / IP66 (NEMA 4X) koruma sınıfları</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Yaskawa ile Çalışmanın Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">100+ Yıllık İnovasyon</h3>
              <p className="text-gray-600">
                Endüstriyel otomasyon ve robotik alanında bir asırdan fazla deneyim ve sürekli teknoloji liderliği.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Motoman Robot Teknolojisi</h3>
              <p className="text-gray-600">
                Dünya lideri Motoman robotları ile kaynak, montaj, paketleme ve handling uygulamalarında üstün performans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Yüksek Performans ve Verimlilik</h3>
              <p className="text-gray-600">
                Sigma servo motorlar ve A1000 inverter ile enerji tasarrufu, hassasiyet ve operasyonel verimlilik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Yaskawa Ürünleri ile İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8">
            Endüstriyel robotik ve sürücü sistemleri hakkında detaylı bilgi almak için uzman ekibimizle görüşün.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            İletişime Geçin
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
