import { HeartPulse, ShieldCheck, Award, Activity, Stethoscope, Syringe, CheckCircle, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medikal Cihazlar & Tıbbi Sistemler | AOM Engineering',
  description: 'ISO 13485 & CE sertifikalı medikal cihazlar. Hasta monitörleri, EKG, defibrilatör, ameliyathane ekipmanları. FDA onaylı tıbbi cihaz çözümleri.',
  keywords: 'medikal cihaz, hasta monitörü, EKG, defibrilatör, ameliyathane, ISO 13485, CE, FDA, tıbbi cihaz',
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
                <HeartPulse className="w-4 h-4 text-bordo-500" />
                <span className="text-sm font-semibold text-bordo-400">Medikal Cihazlar</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
                Tıbbi Cihaz & Sistemler
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">ISO 13485 & CE</strong> sertifikalı medikal cihazlar.
                Hasta monitörleri, EKG, defibrilatör, ameliyathane ekipmanları ve <strong className="text-white">FDA onaylı</strong> tıbbi sistemler.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">ISO 13485 Sertifikalı</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Hasta Monitörleri</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Teşhis Ekipmanları</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">CE & FDA Onaylı</span>
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
                <div className="text-5xl font-bold text-bordo-500 mb-2">100+</div>
                <div className="text-gray-300">Hastane Kurulumu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">%99.8</div>
                <div className="text-gray-300">Güvenilirlik</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">24/7</div>
                <div className="text-gray-300">Teknik Destek</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">ISO</div>
                <div className="text-gray-300">13485 Sertifikalı</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medikal Cihazlar */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Medikal Cihazlar & Sistemler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ISO 13485, CE ve FDA standartlarına uygun, yüksek güvenilirlikli tıbbi cihaz çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Hasta Monitörleri */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hasta Monitörleri</h3>
              <p className="text-gray-600 mb-4">Multi-parametre monitörler: EKG, SpO2, NIBP, IBP, Temp, CO2, anestezi gazları</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 10-19" dokunmatik ekran</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Merkezi izleme entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Yoğun bakım - Ameliyathane</li>
              </ul>
            </div>
          </div>

          {/* EKG & Kardiyoloji */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">EKG & Kardiyoloji</h3>
              <p className="text-gray-600 mb-4">12-18 kanal EKG cihazları, Holter EKG, efor testi, kardiyak output monitörleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Otomatik analiz algoritmaları</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> DICOM/HL7 entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Telekardiyoloji desteği</li>
              </ul>
            </div>
          </div>

          {/* Defibrilatör */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Syringe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Defibrilatör & AED</h3>
              <p className="text-gray-600 mb-4">Manuel, yarı otomatik AED, bifazik şok, CPR feedback teknolojisi</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Bifazik dalga formu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Pediatrik mod desteği</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Veri kaydedici (event log)</li>
              </ul>
            </div>
          </div>

          {/* Ameliyathane */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ameliyathane Ekipmanları</h3>
              <p className="text-gray-600 mb-4">Anestezi cihazları, cerrahi lambalar, otoklav, elektrokoter, vakum sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> LED cerrahi lambalar (40-160k lux)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Elektrokoter (monopolar/bipolar)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Otoklav (B sınıfı, 18-24L)</li>
              </ul>
            </div>
          </div>

          {/* Görüntüleme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Görüntüleme Sistemleri</h3>
              <p className="text-gray-600 mb-4">Ultrason (2D/3D/4D Doppler), endoskopi, C-arm röntgen sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Renkli Doppler USG</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Endoskopi (gastroskopi, kolonoskopi)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Dijital C-arm floroskopi</li>
              </ul>
            </div>
          </div>

          {/* Laboratuvar */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Laboratuvar Cihazları</h3>
              <p className="text-gray-600 mb-4">Biyokimya analizörleri, hemogram, koagülometre, elektrolit, gaz analizörleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Otomatik biyokimya (200-400 test/h)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 5-part hemogram cihazı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> LIS (laboratuvar bilgi sistemi)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-bordo-700 to-bordo-900 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 13485 & CE</h3>
              <p className="text-gray-400">Medikal cihaz kalite yönetimi</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Biyomedikal Ekip</h3>
              <p className="text-gray-400">Uzman mühendis desteği</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">7/24 Servis</h3>
              <p className="text-gray-400">Kesintisiz bakım hizmeti</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Medikal Cihaz İhtiyaçlarınız İçin Bize Ulaşın</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Hastane ve sağlık kuruluşlarınız için en uygun medikal cihaz ve sistemleri seçmenizde yardımcı oluyoruz
            </p>
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Ücretsiz Danışmanlık <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
