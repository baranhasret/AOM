import { Award, CheckCircle, Zap, Cpu, Monitor, Settings, ArrowRight, Building2, Globe } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Siemens Türkiye Distribütörü - PLC, SCADA, HMI | AOM Engineering',
  description: 'Siemens S7-1200, S7-1500 PLC, SIMATIC HMI, WinCC SCADA sistemleri yetkili satıcısı. Endüstriyel otomasyon çözümleri ve teknik destek.',
  keywords: 'siemens plc, siemens türkiye, s7-1200, s7-1500, simatic hmi, wincc, siemens otomasyon, siemens distribütör, siemens yetkili satıcı',
};

export default function SiemensDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Brand Logo */}
              <div className="inline-block bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-48 h-24">
                  <Image
                    src="/images/siemens.png"
                    alt="SIEMENS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-bordo-600/20 border border-bordo-600/30 rounded-full px-6 py-2">
                  <Building2 className="w-4 h-4 text-bordo-500" />
                  <span className="text-sm font-semibold text-bordo-400">Yetkili Distribütör</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  SIEMENS
                </h1>
                
                <p className="text-xl text-bordo-500 font-bold">
                  Endüstriyel Otomasyon ve Dijitalleşme Lideri
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Siemens</strong>, endüstriyel otomasyon, dijitalleşme ve 
                  akıllı üretim teknolojilerinde <strong className="text-white">global liderdir</strong>. 
                  Endüstri 4.0 çözümleriyle sanayide verimlilik, sürdürülebilirlik ve dijital dönüşüm sağlar.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Link href="/urunler?marka=siemens" className="bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
                  Ürünleri İncele
                </Link>
                <Link href="/iletisim/teklif" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Teklif Al
                </Link>
              </div>
            </div>
            
            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">170+</div>
                <div className="text-gray-300">Yıllık Deneyim</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">190+</div>
                <div className="text-gray-300">Ülkede Faaliyet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">#1</div>
                <div className="text-gray-300">Endüstri 4.0</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">PLC</div>
                <div className="text-gray-300">Dünya Lideri</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ürün Kategorileri */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Siemens Ürün Portföyü</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PLC, SCADA, HMI, inverter ve endüstriyel otomasyon çözümlerinin eksiksiz yelpazesi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* S7-1200/1500 PLC */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">S7-1200 / S7-1500 PLC</h3>
              <p className="text-gray-600 mb-4">Modüler PLC sistemleri: Kompakt S7-1200, yüksek performanslı S7-1500</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> TIA Portal programlama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Profinet/Profibus iletişim</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Failsafe güvenlik modülleri</li>
              </ul>
            </div>
          </div>

          {/* SIMATIC HMI */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SIMATIC HMI</h3>
              <p className="text-gray-600 mb-4">Dokunmatik paneller: Basic, Comfort, Multi Panel serisi (4"-22")</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 4" - 22" ekran seçenekleri</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> WinCC Comfort/Advanced</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Web server & mobil erişim</li>
              </ul>
            </div>
          </div>

          {/* WinCC SCADA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WinCC SCADA</h3>
              <p className="text-gray-600 mb-4">Merkezi izleme yazılımı: WinCC Professional, Runtime, Open Architecture</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Client/Server mimarisi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 150+ PLC sürücü desteği</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> OPC UA/DA entegrasyonu</li>
              </ul>
            </div>
          </div>

          {/* SINAMICS İnverter */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SINAMICS İnverter</h3>
              <p className="text-gray-600 mb-4">Frekans konvertörleri: V20, G120, S120 serileri (0.12-630kW)</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 0.12 - 630 kW güç aralığı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vector & V/F kontrol</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Safety Integrated güvenlik</li>
              </ul>
            </div>
          </div>

          {/* Endüstri 4.0 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Endüstri 4.0 Çözümleri</h3>
              <p className="text-gray-600 mb-4">Dijital Enterprise: MindSphere IoT, Digital Twin, Cloud iletişim</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> MindSphere IoT platformu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Digital Twin teknolojisi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Edge computing çözümleri</li>
              </ul>
            </div>
          </div>

          {/* Sensörler */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sensör & Güvenlik</h3>
              <p className="text-gray-600 mb-4">Endüstriyel sensörler, güvenlik sistemleri, IO-Link cihazlar</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> SIRIUS kontaktör & röle</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Siemens sensör aileleri</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Safety kontrol sistemleri</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Avantajlar */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Siemens ile Çalışmanın Avantajları</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Global lider teknoloji markası ile güvenilir, yenilikçi ve uzun ömürlü çözümler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dijitalleşme Liderliği</h3>
              <p className="text-gray-400">Endüstri 4.0 ve akıllı üretim öncüsü</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Geniş Ürün Portföyü</h3>
              <p className="text-gray-400">Tüm otomasyon ihtiyaçları tek çatı altında</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yüksek Güvenilirlik</h3>
              <p className="text-gray-400">170+ yıllık mühendislik deneyimi</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Siemens Ürünleri İçin Teklif Alın <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}