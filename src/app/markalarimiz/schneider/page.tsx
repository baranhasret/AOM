import { Award, CheckCircle, Zap, Cpu, Monitor, Settings, ArrowRight, Building2, Battery, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Schneider Electric Türkiye Distribütörü - PLC, Inverter | AOM Engineering',
  description: 'Schneider Electric Modicon PLC, Altivar frekans invertörleri, kontaktör, şalt ekipmanları yetkili satıcısı. Enerji yönetimi ve otomasyon çözümleri.',
  keywords: 'schneider electric, modicon plc, altivar inverter, schneider otomasyon, schneider türkiye, schneider distribütör',
};

export default function SchneiderDetailPage() {
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
              <div className="inline-block bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-48 h-24">
                  <Image
                    src="/images/schneider.png"
                    alt="SCHNEIDER ELECTRIC"
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
                  SCHNEIDER ELECTRIC
                </h1>
                
                <p className="text-xl text-bordo-500 font-bold">
                  Enerji Yönetimi ve Otomasyon Lideri
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Schneider Electric</strong>, enerji yönetimi ve endüstriyel otomasyon çözümlerinde 
                  <strong className="text-white"> global liderdir</strong>. Modicon PLC, Altivar inverter ve EcoStruxure platformu ile 
                  dijital dönüşüm ve sürdürülebilirlik sağlar.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Link href="/urunler?marka=schneider" className="bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
                  Ürünleri İncele
                </Link>
                <Link href="/iletisim/teklif" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Teklif Al
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">185+</div>
                <div className="text-gray-300">Yıllık Tecrübe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Ülkede Faaliyet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">#1</div>
                <div className="text-gray-300">Enerji Yönetimi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">Top</div>
                <div className="text-gray-300">Sürdürülebilirlik</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ürün Kategorileri */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Schneider Electric Ürün Portföyü</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modicon PLC, Altivar inverter, kontaktör ve enerji yönetimi çözümlerinin eksiksiz yelpazesi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Modicon PLC</h3>
              <p className="text-gray-600 mb-4">M241, M251, M340, M580 serileri - Kompakt ve yüksek performanslı PLC sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> EcoStruxure Control Expert</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Ethernet/Modbus iletişim</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Cybersecurity güvenlik</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Magelis HMI</h3>
              <p className="text-gray-600 mb-4">Dokunmatik paneller: GTO, GTU, STO, STU serileri (4"-15")</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 4" - 15" ekran seçenekleri</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vijeo Designer yazılımı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Web server & mobil erişim</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Altivar İnverter</h3>
              <p className="text-gray-600 mb-4">ATV12, ATV320, ATV340, ATV630, ATV930 serileri (0.18-1000kW)</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 0.18 - 1000 kW güç aralığı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vector & V/F kontrol</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> %50 enerji tasarrufu</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">TeSys Kontaktör</h3>
              <p className="text-gray-600 mb-4">TeSys D, F, GV motor koruma ve kontrol ürünleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 0.09 - 820 kW motor gücü</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Elektronik koruma röleleri</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IO-Link iletişim</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enerji Yönetimi</h3>
              <p className="text-gray-600 mb-4">PowerTag, PM serileri, enerji analizörleri, IoT gateway</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> PowerTag akıllı sensör</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> PM5000 analizör</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> EcoStruxure Power platformu</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">EcoStruxure Platform</h3>
              <p className="text-gray-600 mb-4">IoT tabanlı enerji ve otomasyon yönetim platformu</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Cloud & edge computing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Predictive maintenance</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Real-time analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Schneider Electric ile Çalışmanın Avantajları</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enerji yönetimi ve otomasyon çözümlerinde güvenilir partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enerji Verimliliği</h3>
              <p className="text-gray-400">%30'a varan enerji tasarrufu</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Geniş Portföy</h3>
              <p className="text-gray-400">Otomasyon & enerji tek çatı altında</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dijital Dönüşüm</h3>
              <p className="text-gray-400">EcoStruxure IoT platformu</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Schneider Ürünleri İçin Teklif Alın <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}