import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle, Eye, Gauge, Zap, ArrowRight, Timer, Thermometer, Radio } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AUTONICS - Sensör ve Kontrol Cihazları | Aom Teknik',
  description: 'Autonics resmi distribütörü. Proximity sensörler, fotoelektrik sensörler, enkoder, timer, counter ve sıcaklık kontrol cihazları.',
  keywords: 'autonics, proximity sensor, fotoelektrik sensör, enkoder, timer, counter, autonics türkiye'
};

export default function Autonics() {
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
                src="/images/autonics.png"
                alt="AUTONICS"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">AUTONICS</h1>
              <p className="text-2xl text-bordo-500 mb-6">Sensör ve Kontrol Teknolojileri Lideri</p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Autonics, endüstriyel sensör ve kontrol cihazları alanında yenilikçi çözümler sunar. Proximity sensörler, fotoelektrik sensörler, enkoder ve kontrol cihazlarıyla üretim süreçlerinizi optimize eder.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">45+</div>
                  <div className="text-sm text-gray-300">Yıllık Deneyim</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">110+</div>
                  <div className="text-sm text-gray-300">Ülkede Faaliyet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">#1</div>
                  <div className="text-sm text-gray-300">Sensör Teknolojisi</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">Top</div>
                  <div className="text-sm text-gray-300">Kontrol Cihazları</div>
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
            Autonics'in geniş sensör ve kontrol cihazı portföyü ile endüstriyel otomasyon ihtiyaçlarınıza çözüm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proximity Sensörler */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proximity Sensörler</h3>
              <p className="text-gray-600 mb-6">
                <strong>PR Series:</strong> İndüktif, kapasitif, manyetik sensörler, M8-M30 boyutlar, 2mm-40mm algılama mesafesi
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DC 2/3-wire NPN/PNP, AC 2-wire çıkış tipleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP67 koruma, yüksek dayanıklılık, metal gövde</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">LED gösterge, kısa devre koruması, reverse polarity</span>
                </li>
              </ul>
            </div>

            {/* Fotoelektrik Sensörler */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fotoelektrik Sensörler</h3>
              <p className="text-gray-600 mb-6">
                <strong>BJ / BT / BC Series:</strong> Through-beam, retro-reflective, diffuse, 10mm-100m algılama
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kızılötesi LED & laser, yüksek hassasiyet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Background suppression, renk algılama, mark detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP67/IP69K koruma, teach-in fonksiyonu</span>
                </li>
              </ul>
            </div>

            {/* Enkoder */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rotary Enkoder</h3>
              <p className="text-gray-600 mb-6">
                <strong>E Series:</strong> İnkremental & absolute enkoder, 100-10000 PPR, hollow shaft/solid shaft
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Incremental: A/B phase, line driver/open collector çıkış</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Absolute: SSI, Gray code, binary, multi-turn</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP50/IP64 koruma, kompakt boyut, yüksek hız</span>
                </li>
              </ul>
            </div>

            {/* Timer & Counter */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Timer & Counter</h3>
              <p className="text-gray-600 mb-6">
                <strong>AT / CT Series:</strong> Digital timer, analog timer, counter, tachometer, DIN 48×48/72×72
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-range timer, on-delay / off-delay / interval</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Preset counter, totalizer, rate meter, batch counter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">LED/LCD display, relay/transistor çıkış</span>
                </li>
              </ul>
            </div>

            {/* Temperature Controller */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sıcaklık Kontrol</h3>
              <p className="text-gray-600 mb-6">
                <strong>TK / TZ Series:</strong> PID kontrol, K/J/PT100 termocouple, SSR/relay çıkış
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Auto-tuning PID, dual display, heating/cooling kontrol</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Alarm çıkışları, heater break alarm, RS485 haberleşme</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DIN 48×48 / 96×96, IP65 ön panel koruma</span>
                </li>
              </ul>
            </div>

            {/* Kontrol Bileşenleri */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Kontrol Bileşenleri</h3>
              <p className="text-gray-600 mb-6">
                <strong>Çözümler:</strong> SSR, power controller, panel meter, digital panel meter, switching power
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Solid State Relay (SSR), single/three phase, zero-cross</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Power controller, thyristor, phase angle kontrol</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Panel meter, voltmeter, ammeter, multimeter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Autonics ile Çalışmanın Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Yenilikçi Sensör Teknolojileri</h3>
              <p className="text-gray-600">
                Endüstriyel sensör ve kontrol cihazlarında yenilikçi çözümler, yüksek hassasiyet ve güvenilirlik.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Geniş Ürün Yelpazesi</h3>
              <p className="text-gray-600">
                Proximity, fotoelektrik sensörler, enkoder, timer, counter ve sıcaklık kontrol cihazları.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Yüksek Kalite ve Güvenilirlik</h3>
              <p className="text-gray-600">
                Endüstriyel standartlarda kalite, uzun ömür ve rekabetçi fiyat avantajı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Autonics Ürünleri ile İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8">
            Sensör ve kontrol cihazları hakkında detaylı bilgi almak için uzman ekibimizle görüşün.
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
