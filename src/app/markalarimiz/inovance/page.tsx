import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle, Cpu, Monitor, Zap, ArrowRight, Gauge, Activity, Cloud } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INOVANCE - Akıllı Otomasyon Çözümleri | Aom Teknik',
  description: 'Inovance resmi distribütörü. AM servo motorlar, MD inverter, IVC HMI, PLC sistemleri ve Industry 4.0 çözümleri.',
  keywords: 'inovance, am servo, md inverter, ivc hmi, inovance türkiye, industry 4.0, iot otomasyon'
};

export default function Inovance() {
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
                src="/images/inovance.png"
                alt="INOVANCE"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Brand Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">INOVANCE</h1>
              <p className="text-2xl text-bordo-500 mb-6">Akıllı Otomasyon ve Industry 4.0 Lideri</p>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Inovance, akıllı otomasyon ve Industry 4.0 çözümleriyle sanayide dijital dönüşümü hızlandırır. AM servo motorlar, MD inverter ve IoT platformlarıyla yüksek performans sağlar.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">25+</div>
                  <div className="text-sm text-gray-300">Yıllık Deneyim</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">100+</div>
                  <div className="text-sm text-gray-300">Ülkede Faaliyet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">#1</div>
                  <div className="text-sm text-gray-300">AI & Industry 4.0</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-bordo-500 mb-1">Top</div>
                  <div className="text-sm text-gray-300">IoT Çözümleri</div>
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
            Inovance'ın akıllı otomasyon çözümleri ile endüstriyel dijital dönüşümünüzü hızlandırın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AM Servo Motorlar */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AM Servo Motorlar</h3>
              <p className="text-gray-600 mb-6">
                <strong>AM600 / AM800:</strong> 0.1-55kW servo motor, 23-bit enkoder, EtherCAT/CANopen
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Yüksek hassasiyet, hızlı yanıt, düşük ısınma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Auto-tuning, vibrasyon bastırma, smooth motion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-axis synchronization, electronic gearing</span>
                </li>
              </ul>
            </div>

            {/* MD İnverter */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">MD İnverter</h3>
              <p className="text-gray-600 mb-6">
                <strong>MD500 / MD800:</strong> 0.75-630kW AC drive, V/F & vektör kontrol, PID optimizasyonu
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">%97+ verimlilik, enerji tasarrufu fonksiyonları</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sensorless vektör, flux vektör, torque control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modbus RTU/TCP, EtherCAT, Profinet, IO-Link</span>
                </li>
              </ul>
            </div>

            {/* IVC HMI Paneller */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IVC HMI Paneller</h3>
              <p className="text-gray-600 mb-6">
                <strong>IVC1 / IVC3 Series:</strong> 7"-21.5" TFT touch screen, multi-protokol, VNC remote
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">65K renk TFT, capacitive touch, yüksek çözünürlük</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">InoPro HMI yazılımı, recipe, alarm management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ethernet, RS485, USB, VNC remote access</span>
                </li>
              </ul>
            </div>

            {/* PLC Sistemleri */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">PLC Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                <strong>AM Series PLC:</strong> IEC 61131-3 programlama, 16-512 I/O, EtherCAT master
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ladder, ST, FBD, SFC programlama dilleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Motion control, 64 axis, CNC interpolasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">EtherCAT, Modbus TCP, OPC UA, MQTT</span>
                </li>
              </ul>
            </div>

            {/* Industry 4.0 Platform */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Industry 4.0 Platform</h3>
              <p className="text-gray-600 mb-6">
                <strong>IoT & Cloud:</strong> Edge computing, cloud monitoring, predictive maintenance, data analytics
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IoT gateway, MQTT broker, edge AI processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cloud dashboard, real-time monitoring, KPI tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bordo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predictive maintenance, machine learning, OEE analytics</span>
                </li>
              </ul>
            </div>

            {/* Robot & CNC */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Robot & CNC Kontrol</h3>
              <p className="text-gray-600 mb-6">
                <strong>Çözümler:</strong> SCARA robot, 6-axis robot, CNC kontrol, vision inspection
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SCARA robot, pick & place, 3-5kg payload</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CNC controller, 5-axis machining, CAM entegrasyonu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vision inspection, AI defect detection, quality control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Inovance ile Çalışmanın Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Destekli Akıllı Otomasyon</h3>
              <p className="text-gray-600">
                Yapay zeka ve makine öğrenmesi ile Industry 4.0 çözümleri, dijital dönüşüm liderliği.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">IoT ve Cloud Entegrasyonu</h3>
              <p className="text-gray-600">
                Edge computing, cloud monitoring ve predictive maintenance ile operasyonel verimlilik.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Komple Otomasyon Çözümleri</h3>
              <p className="text-gray-600">
                Servo, inverter, PLC, HMI, robot ve IoT platformu ile tek noktadan tam entegrasyon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Inovance Ürünleri ile İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8">
            Akıllı otomasyon ve Industry 4.0 çözümleri hakkında detaylı bilgi için ekibimizle görüşün.
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
