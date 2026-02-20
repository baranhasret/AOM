import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle, Wind, Gauge, Settings, ArrowRight, Activity, Layers, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMC - Pnömatik Sistemler | Aom Teknik',
  description: 'SMC resmi distribütörü. Pnömatik silindirler, solenoid valfler, FRL üniteleri, hava hazırlama ve vakum ekipmanları.',
  keywords: 'smc, pnömatik silindir, solenoid valf, frl ünitesi, smc türkiye, vakum ekipmanı, air preparation'
};

export default function SMC() {
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
                src="/images/smc.png"
                alt="SMC"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">SMC</h1>
              <p className="text-2xl text-bordo-500 mb-6">Pnömatik Teknolojiler Dünya Lideri</p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                SMC, pnömatik otomasyon alanında dünya lideri. Pnömatik silindirler, solenoid valfler, FRL üniteleri ve vakum ekipmanlarıyla endüstriyel süreçlerinizi optimize eder.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">60+</div>
                  <div className="text-sm text-gray-300">Yıllık Tecrübe</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">83+</div>
                  <div className="text-sm text-gray-300">Ülkede Faaliyet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">#1</div>
                  <div className="text-sm text-gray-300">Pnömatik Lider</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">12K+</div>
                  <div className="text-sm text-gray-300">Ürün Serisi</div>
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
            SMC'nin geniş pnömatik ürün portföyü ile endüstriyel otomasyon ihtiyaçlarınıza profesyonel çözümler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pnömatik Silindirler */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pnömatik Silindirler</h3>
              <p className="text-gray-600 mb-6">
                <strong>C Series:</strong> Standart, kompakt, rod-less, guided, bore Ø6-160mm, stroke 10-3000mm
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Çift etkili / tek etkili, cushion, non-cushion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Manyetik piston, switch mount, auto-switch ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">ISO standart, kompakt tasarım, uzun ömür</span>
                </li>
              </ul>
            </div>

            {/* Solenoid Valfler */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Solenoid Valfler</h3>
              <p className="text-gray-600 mb-6">
                <strong>SY / VQ Series:</strong> 3/2, 5/2, 5/3-way, single/double solenoid, manifold sistemler
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct operated, pilot operated, bistable (latching)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24VDC, 110/220VAC, düşük güç tüketimi, sessiz</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP65 koruma, fieldbus (DeviceNet, EtherCAT, IO-Link)</span>
                </li>
              </ul>
            </div>

            {/* FRL Üniteleri */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">FRL Üniteleri</h3>
              <p className="text-gray-600 mb-6">
                <strong>AC Series:</strong> Filter, regulator, lubricator, modular combination, 1/8"-1" port
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">5µm filtrasyon, auto-drain, manual drain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basınç regülatörü, gauge, lock nut, relief valve</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mist separator, after-cooler, drain separator</span>
                </li>
              </ul>
            </div>

            {/* Vakum Ekipmanları */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Vakum Ekipmanları</h3>
              <p className="text-gray-600 mb-6">
                <strong>ZP / ZM Series:</strong> Vakum ejektör, vakum pad, vakum jeneratör, kompakt valf
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-stage ejektör, yüksek vakum, sessiz çalışma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vakum pad (flat, bellows, oval), Ø5-200mm</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vakum switch, filtre, silencer, vacuum gauge</span>
                </li>
              </ul>
            </div>

            {/* Grippers & Actuators */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Grippers & Actuators</h3>
              <p className="text-gray-600 mb-6">
                <strong>MH Series:</strong> Parallel gripper, angular gripper, rotary actuator, slide table
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2-finger parallel, 3-finger, long stroke gripper</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rotary actuator, 90/180/360°, vane/rack-pinion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Slide table, guided cylinder, linear actuator</span>
                </li>
              </ul>
            </div>

            {/* Hava Hazırlama */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hava Hazırlama</h3>
              <p className="text-gray-600 mb-6">
                <strong>Çözümler:</strong> Air dryer, after-cooler, oil removal filter, pressure switch, quick coupling
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Refrigerated dryer, -10°C dew point, enerji tasarrufu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Coalescing filter, 0.01µm oil removal, %99.99 verim</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital pressure switch, IO-Link, analog çıkış</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">SMC ile Çalışmanın Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dünya Lideri Pnömatik</h3>
              <p className="text-gray-600">
                60+ yıllık tecrübe ve pnömatik otomasyon alanında dünya liderliği, yenilikçi çözümler.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wind className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kapsamlı Ürün Portföyü</h3>
              <p className="text-gray-600">
                12,000+ ürün serisi ile silindir, valf, FRL, vakum ve tüm pnömatik ihtiyaçlarınıza çözüm.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enerji Verimliliği</h3>
              <p className="text-gray-600">
                Düşük hava tüketimi, enerji tasarrufu ve yüksek performans ile operasyonel maliyet düşürme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">SMC Ürünleri ile İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8">
            Pnömatik otomasyon çözümleri hakkında detaylı bilgi almak için uzman ekibimizle görüşün.
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
