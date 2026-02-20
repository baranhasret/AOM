import { Bot, Brain, Target, Shield, Zap, CheckCircle, Users, Gauge, Package, Eye, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotik Sistemler & Endüstriyel Robotlar | AOM Engineering',
  description: 'Yaskawa, ABB, KUKA endüstriyel robotlar. 6-eksenli robot kollar, pick & place sistemleri, yapay zeka ve görüntü işleme entegrasyonu. ISO 10218 güvenlik standartları.',
  keywords: 'robotik sistemler, endüstriyel robot, 6 eksen robot, pick and place, yapay zeka robot, görüntü işleme, cobots',
};

export default function RobotikSistemler() {
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
                <Bot className="w-4 h-4 text-bordo-500" />
                <span className="text-sm font-semibold text-bordo-400">Robotik Sistemler</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
                Akıllı Robotik Çözümler
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">Yaskawa, ABB, KUKA</strong> endüstriyel robotlarla 6-eksenli manipülatörler,
                pick &amp; place sistemleri ve <strong className="text-white">yapay zeka destekli</strong> görüntü işleme.
                Collaborative robots (cobots) ile insan-robot iş birliği.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">6-Eksen Robotlar</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">AI &amp; Görüntü İşleme</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Collaborative Robots</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">ISO 10218 Güvenlik</span>
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
                <div className="text-5xl font-bold text-bordo-500 mb-2">200+</div>
                <div className="text-gray-300">Robot Kurulumu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">±0.02mm</div>
                <div className="text-gray-300">Tekrar Hassasiyeti</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">%40</div>
                <div className="text-gray-300">Verimlilik Artışı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Kesintisiz Üretim</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Robot Tipleri */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Robot Sistemleri & Uygulamalar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı endüstriyel ihtiyaçlar için özelleştirilmiş robot çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Articulated Robots */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">6-Eksen Manipülatörler</h3>
              <p className="text-gray-600 mb-4">Yaskawa Motoman, ABB IRB serisi, 3-800 kg yük kapasiteli, ±0.02mm tekrar hassasiyeti</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kaynak ve kesme uygulamaları</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Paletleme ve taşıma</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Montaj ve boya</li>
              </ul>
            </div>
          </div>

          {/* SCARA Robots */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SCARA & Pick-Place</h3>
              <p className="text-gray-600 mb-4">Yüksek hızlı delta robotlar, SCARA kollar, 120 cycle/dk hız, 0.5-15 kg yük</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Paketleme ve sıralama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Elektronik montaj (PCB)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Gıda sektörü uygulamaları</li>
              </ul>
            </div>
          </div>

          {/* Cobots */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative Robots</h3>
              <p className="text-gray-600 mb-4">UR (Universal Robots), KUKA LBR serisi, güvenli insan-robot iş birliği</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Bariyer gerektirmez</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kolay programlama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Esnek yerleşim</li>
              </ul>
            </div>
          </div>

          {/* Vision Systems */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Görüntü İşleme & AI</h3>
              <p className="text-gray-600 mb-4">Cognex, Keyence kameralar, deep learning algoritmaları, 3D görüş sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Kalite kontrolü</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Parça tanıma ve konumlama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> OCR ve barkod okuma</li>
              </ul>
            </div>
          </div>

          {/* Gripper Systems */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gripper & End Effector</h3>
              <p className="text-gray-600 mb-4">SMC, Schunk pnömatik ve elektrikli tutucu sistemler, vakum ve manyetik gripperler</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Paralel ve açılı parmaklar</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vakum tutucu sistemler</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Özel tasarım end effector</li>
              </ul>
            </div>
          </div>

          {/* Safety */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Güvenlik Sistemleri</h3>
              <p className="text-gray-600 mb-4">ISO 10218, ISO/TS 15066 standartları, güvenlik lazer tarayıcılar, light curtain sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Risk analizi (EN ISO 12100)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Safety PLC entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> CE uyumluluk</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-bordo-700 to-bordo-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Robotik Çözümleriniz İçin Bize Ulaşın</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz, üretim süreçlerinize en uygun robotik sistemi seçmenize ve entegre etmenize yardımcı olur
          </p>
          <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
            Ücretsiz Danışmanlık Alın <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
