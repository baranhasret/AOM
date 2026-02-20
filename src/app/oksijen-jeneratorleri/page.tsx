import { Wind, Gauge, Zap, Shield, Factory, Hospital, CheckCircle, ArrowRight, TrendingDown, Award, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oksijen Jeneratörleri - PSA Teknolojisi | AOM Engineering',
  description: 'PSA teknolojisi ile endüstriyel ve medikal oksijen jeneratörleri. 5-500 Nm³/h kapasite, %93-95 saflık, enerji tasarruflu, CE sertifikalı.',
  keywords: 'oksijen jeneratörü, PSA, oksijen üretimi, medikal oksijen, endüstriyel oksijen, oksijen konsantratörü',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bordo-700 via-bordo-800 to-bordo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-700 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-bordo-600/20 border border-bordo-600/30 rounded-full px-6 py-2">
                <Wind className="w-4 h-4 text-bordo-500" />
                <span className="text-sm font-semibold text-bordo-400">Oksijen Jeneratörleri</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
                PSA Oksijen Jeneratörleri
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">PSA (Pressure Swing Adsorption)</strong> teknolojisi ile
                yerinde oksijen üretimi. Endüstriyel ve medikal uygulamalar için <strong className="text-white">5-500 Nm³/h</strong> kapasite,
                %93-95 saflık, <strong className="text-white">%50 enerji tasarrufu</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">5-500 Nm³/h Kapasite</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">%93-95 Saflık</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">%50 Enerji Tasarrufu</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">CE Sertifikalı</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="/iletisim/teklif" className="bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
                  Kapasite Hesapla
                </a>
                <a href="/cozumler" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Tüm Çözümler
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">80+</div>
                <div className="text-gray-300">Kurulum</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">%95</div>
                <div className="text-gray-300">Maksimum Saflık</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">3-5</div>
                <div className="text-gray-300">Bar Basınç</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Kesintisiz Üretim</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oksijen Jeneratör Sistemleri */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PSA Oksijen Üretim Sistemleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Endüstriyel ve medikal uygulamalar için enerji verimli, güvenilir ve ekonomik oksijen jeneratörleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Endüstriyel PSA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Endüstriyel PSA</h3>
              <p className="text-gray-600 mb-4">Yüksek kapasiteli sistemler: 50-500 Nm³/h, %93-95 saflık, kaynak, kesim, cam üretimi</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kapasite: 50-500 Nm³/h</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Saflık: %93-95 O₂</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Basınç: 3-10 bar</li>
              </ul>
            </div>
          </div>

          {/* Medikal PSA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Hospital className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medikal Oksijen PSA</h3>
              <p className="text-gray-600 mb-4">USP/BP standartlarında, hastane merkezi oksijen üretimi, 10-100 Nm³/h, %93±3 saflık</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> USP/BP standartları</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> %93±3 medikal saflık</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Alarm & monitörizasyon</li>
              </ul>
            </div>
          </div>

          {/* Kompakt PSA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kompakt PSA Sistemleri</h3>
              <p className="text-gray-600 mb-4">Küçük-orta işletmeler için: 5-50 Nm³/h, plug&play, az yer kaplayan tasarım</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 5-50 Nm³/h kapasite</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Plug & Play montaj</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kompakt boyut (2-5 m²)</li>
              </ul>
            </div>
          </div>

          {/* Konteyner PSA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Konteyner Tip PSA</h3>
              <p className="text-gray-600 mb-4">Mobil çözüm: 20-40ft konteyner, iklim kontrolü, uzaktan izleme, hızlı kurulum</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 20/40ft konteyner</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> HVAC iklim kontrolü</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IoT uzaktan izleme</li>
              </ul>
            </div>
          </div>

          {/* Yedekli PSA */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Yedekli (Redundant) PSA</h3>
              <p className="text-gray-600 mb-4">Kesintisiz oksijen: 2+1 veya N+1 yedekleme, otomatik geçiş, 7/24 üretim garantisi</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2+1 / N+1 yedekleme</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Otomatik failover</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> %100 uptime garantisi</li>
              </ul>
            </div>
          </div>

          {/* Enerji Geri Kazanım */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enerji Geri Kazanım</h3>
              <p className="text-gray-600 mb-4">VSD kompresör, heat recovery, akıllı kontrol, %40-50 enerji tasarrufu</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> VSD (Variable Speed Drive)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Isı geri kazanımı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> %40-50 enerji tasarrufu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-bordo-700 to-bordo-900 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">%50 Maliyet Düşürme</h3>
              <p className="text-gray-400">Tüp oksijene göre enerji tasarrufu</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">CE & ISO Sertifikalı</h3>
              <p className="text-gray-400">Medikal ve endüstriyel standartlar</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">7/24 İzleme</h3>
              <p className="text-gray-400">IoT & SCADA entegrasyonu</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Oksijen İhtiyacınız İçin En Uygun Çözümü Bulalım</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Ücretsiz kapasite hesaplaması ve ROI (yatırım geri dönüşü) analizi için uzman ekibimizle görüşün
            </p>
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Kapasite Hesaplama Talep Et <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
