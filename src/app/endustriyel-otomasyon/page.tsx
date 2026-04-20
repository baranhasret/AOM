import { Settings, Cpu, BarChart3, Zap, Factory, Target, Gauge, Shield, CheckCircle, Users, TrendingUp, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endüstriyel Otomasyon Çözümleri | AOM Engineering',
  description: 'Siemens, Omron, Schneider markalarıyla PLC, SCADA, HMI, Inverter sistemleri. Endüstri 4.0 ve IoT entegrasyonlu akıllı otomasyon çözümleri.',
  keywords: 'endüstriyel otomasyon, PLC, SCADA, HMI, inverter, servo motor, endüstri 4.0, IoT otomasyon',
};

export default function EndustriyelOtomasyon() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Modern bordo-Black Theme */}
      <div className="relative bg-gradient-to-br from-bordo-700 via-bordo-800 to-bordo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-700 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-bordo-600/20 border border-bordo-600/30 rounded-full px-6 py-2">
                <Settings className="w-4 h-4 text-bordo-500" />
                <span className="text-sm font-semibold text-bordo-400">Endüstriyel Otomasyon</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
                Akıllı Üretim Sistemleri
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Siemens, Omron, Schneider markalarıyla <strong className="text-white">PLC, SCADA, HMI</strong> ve tam entegre otomasyon çözümleri.
                Endüstri 4.0 ve IoT teknolojileriyle üretim süreçlerinizi dijitalleştiriyor, verimliliği maksimuma çıkarıyoruz.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">PLC & SCADA Sistemleri</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Inverter & Servo Motor</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Sensör & Ölçüm</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Endüstri 4.0 & IoT</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="/iletisim/teklif" className="bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
                  Teklif Alın
                </a>
                <a href="/cozumler" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Tüm Çözümler
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">500+</div>
                <div className="text-gray-300">Tamamlanan Proje</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Yıllık Deneyim</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">100+</div>
                <div className="text-gray-300">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Teknik Destek</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ürün ve Çözümler */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Otomasyon Ürünleri & Sistemleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünya lideri markalarla entegre, güvenilir ve yüksek performanslı otomasyon çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* PLC Sistemleri */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PLC Sistemleri</h3>
              <p className="text-gray-600 mb-4">Siemens S7-1200/1500, Omron CP/CJ, Schneider M340/M580 serisi programlanabilir kontrol sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kompakt ve modüler yapı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Ethernet/Profinet desteği</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Endüstri 4.0 hazır</li>
              </ul>
            </div>
          </div>

          {/* SCADA & HMI */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SCADA & HMI</h3>
              <p className="text-gray-600 mb-4">WinCC, Wonderware, Ignition ile gerçek zamanlı izleme ve kontrol panelleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Grafik arayüzler</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Alarm ve trend kayıtları</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Raporlama modülleri</li>
              </ul>
            </div>
          </div>

          {/* Inverter & Servo */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Inverter & Servo Motor</h3>
              <p className="text-gray-600 mb-4">Yaskawa, Delta, Siemens inverter ve servo sürücüler, hassas hız ve pozisyon kontrolü</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Enerji tasarrufu %30-50</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vektör kontrol teknolojisi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kolay entegrasyon</li>
              </ul>
            </div>
          </div>

          {/* Sensörler */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sensörler & Ölçüm</h3>
              <p className="text-gray-600 mb-4">Autonics, Omron, SMC fotoelektrik, proximity, basınç ve sıcaklık sensörleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Yüksek hassasiyet</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IP67/IP69K korumalı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IO-Link iletişim</li>
              </ul>
            </div>
          </div>

          {/* Endüstri 4.0 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Endüstri 4.0 & IoT</h3>
              <p className="text-gray-600 mb-4">Bulut bağlantılı akıllı fabrika çözümleri, veri analitiği ve uzaktan izleme</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> OPC-UA entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Bulut platformları</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Predictive maintenance</li>
              </ul>
            </div>
          </div>

          {/* Panel & Elektrik */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Panel İmalatı</h3>
              <p className="text-gray-600 mb-4">Schneider, ABB şalterler, röle ve güç dağıtım panoları, IP65/IP66 endüstriyel kaplamalar</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> CE belgeli üretim</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Modüler dizayn</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Özel üretim seçenekleri</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Avantajlar */}
        <div className="bg-gradient-to-br from-bordo-700 to-bordo-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Neden AOM Engineering?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Uzman Kadro</h3>
              <p className="text-gray-400">15+ yıl deneyimli mühendis ve teknisyenler</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kanıtlanmış Başarı</h3>
              <p className="text-gray-400">500+ proje, %98 müşteri memnuniyeti</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">7/24 Destek</h3>
              <p className="text-gray-400">Kesintisiz teknik destek ve bakım hizmetleri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
