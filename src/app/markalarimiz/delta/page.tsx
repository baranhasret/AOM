import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle, Cpu, Monitor, Zap, ArrowRight, Gauge, Activity, Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DELTA - Otomasyon ve Güç Yönetimi | Aom Teknik',
  description: 'Delta Electronics resmi distribütörü. DVP PLC, VFD inverter, DOP HMI ve enerji verimliliği çözümleri.',
  keywords: 'delta, dvp plc, delta inverter, dop hmi, delta türkiye, vfd inverter, delta otomasyon'
};

export default function Delta() {
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
                src="/images/delta.png"
                alt="DELTA"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">DELTA</h1>
              <p className="text-2xl text-bordo-500 mb-6">Otomasyon ve Enerji Yönetimi Lideri</p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Delta Electronics, endüstriyel otomasyon ve güç yönetimi alanında yenilikçi çözümler sunar. DVP PLC, VFD inverter ve HMI sistemleriyle enerji verimliliği ve üretkenlik sağlar.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">50+</div>
                  <div className="text-sm text-gray-300">Yıllık Tecrübe</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">170+</div>
                  <div className="text-sm text-gray-300">Ülkede Faaliyet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">#1</div>
                  <div className="text-sm text-gray-300">Enerji Verimliliği</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">Top</div>
                  <div className="text-sm text-gray-300">Güç Elektroniği</div>
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
            Delta'nın geniş ürün portföyü ile endüstriyel otomasyon ve enerji yönetimi ihtiyaçlarınıza profesyonel çözümler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DVP PLC Serisi */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">DVP PLC Serisi</h3>
              <p className="text-gray-600 mb-6">
                <strong>Özellikler:</strong> DVP-ES2, DVP-SS2, DVP-SA2, DVP-SX2, modüler yapı, yüksek hız
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">16-256 I/O genişletme, modüler tasarım</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CANopen, EtherNet/IP, Modbus haberleşme</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">WPLSoft programlama yazılımı, kolay debug</span>
                </li>
              </ul>
            </div>

            {/* VFD İnverter */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">VFD İnverter</h3>
              <p className="text-gray-600 mb-6">
                <strong>VFD-E & VFD-C2000:</strong> 0.75-630kW güç, V/F & vektör kontrol, fan/pompa optimizasyonu
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">%97+ verimlilik, enerji tasarrufu fonksiyonları</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Auto-tuning, PID kontrol, hızlı torque yanıtı</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IP20 / IP55 koruma, kompakt tasarım</span>
                </li>
              </ul>
            </div>

            {/* DOP HMI */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">DOP HMI Paneller</h3>
              <p className="text-gray-600 mb-6">
                <strong>DOP-100 Series:</strong> 4.3"-15.6" TFT ekranlar, çoklu protokol desteği
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">65K renk TFT, touch screen, yüksek çözünürlük</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DOPSoft yazılımı, recipe management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modbus RTU/TCP, EtherNet/IP, CANopen</span>
                </li>
              </ul>
            </div>

            {/* Servo Sistemleri */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Servo Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                <strong>ASDA-A3 Series:</strong> 0.1-7.5kW servo motor, 20-bit enkoder, CANopen/EtherCAT
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Yüksek hassasiyet, hızlı yanıt, düşük vibrasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Auto-tuning, elektronik kam, multi-axis sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pulse train, analog, fieldbus kontrol</span>
                </li>
              </ul>
            </div>

            {/* Endüstriyel Otomasyon */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Endüstriyel Otomasyon</h3>
              <p className="text-gray-600 mb-6">
                <strong>Çözümler:</strong> CNC kontrol, motion control, temperature controller, switching power
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">NC300 CNC kontrol, SCARA robot entegrasyonu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sıcaklık kontrol, proses otomasyon çözümleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DIN-rail güç kaynakları, switching mode</span>
                </li>
              </ul>
            </div>

            {/* Güç Elektroniği */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Güç Elektroniği</h3>
              <p className="text-gray-600 mb-6">
                <strong>Power Solutions:</strong> UPS sistemleri, solar inverter, DC power, battery charger
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Online UPS, modüler yapı, yüksek verimlilik</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Solar inverter, MPPT teknolojisi, grid-tied</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">DC power supply, battery charging solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Delta ile Çalışmanın Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enerji Verimliliği Lideri</h3>
              <p className="text-gray-600">
                Güç elektroniği ve enerji yönetimi alanında dünya lideri, sürdürülebilir çözümler.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Geniş Ürün Portföyü</h3>
              <p className="text-gray-600">
                PLC, HMI, inverter, servo ve güç elektroniği ile komple otomasyon çözümleri.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Yüksek Performans ve Güvenilirlik</h3>
              <p className="text-gray-600">
                Endüstriyel standartlarda kalite, uzun ömür ve düşük bakım maliyeti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Delta Ürünleri ile İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8">
            Endüstriyel otomasyon ve güç elektroniği çözümleri hakkında detaylı bilgi için ekibimizle görüşün.
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
