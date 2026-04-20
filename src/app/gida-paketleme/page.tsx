import { Package, ShieldCheck, CheckCircle, Award, Thermometer, Scale, Clock, ArrowRight, Users, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gıda Paketleme Çözümleri | AOM Engineering',
  description: 'ISO 22000 & HACCP sertifikalı gıda paketleme makineleri. Vakum paketleme, otomatik dolum, etiketleme sistemleri. Hijyenik tasarım ve yüksek verimlilik.',
  keywords: 'gıda paketleme, vakum paketleme, otomatik dolum, ISO 22000, HACCP, gıda güvenliği, hijyenik makine',
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
                <Package className="w-4 h-4 text-bordo-500" />
                <span className="text-sm font-semibold text-bordo-400">Gıda Paketleme</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
                Hijyenik Paketleme Sistemleri
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">ISO 22000 &amp; HACCP</strong> sertifikalı gıda paketleme makineleri.
                Vakum paketleme, otomatik dolum, etiketleme sistemleri ve <strong className="text-white">paslanmaz çelik</strong> hijyenik tasarım.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">ISO 22000 Sertifikalı</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Vakum &amp; Flowpack</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Sıcaklık Kontrollü</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">7/24 Üretim</span>
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
                <div className="text-5xl font-bold text-bordo-500 mb-2">150+</div>
                <div className="text-gray-300">Kurulu Sistem</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">%99.9</div>
                <div className="text-gray-300">Hijyen Standardı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">200/dk</div>
                <div className="text-gray-300">Paketleme Hızı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">-40°C</div>
                <div className="text-gray-300">Soğuk Zincir</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paketleme Sistemleri */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Paketleme Makineleri & Sistemler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gıda güvenliği ve hijyen standartlarına uygun, yüksek performanslı paketleme çözümleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Vakum Paketleme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vakum Paketleme</h3>
              <p className="text-gray-600 mb-4">Çift kamara, gaz flushing, MAP (Modified Atmosphere) ile raf ömrü uzatma</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 400-600mm kanal genişliği</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Vakum sensör kontrol</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Et, peynir, balık uygulamaları</li>
              </ul>
            </div>
          </div>

          {/* Flowpack */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Flowpack (HFFS)</h3>
              <p className="text-gray-600 mb-4">Yatay form-fill-seal, yüksek hız, bisküvi, çikolata, baklagil paketleme</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 120-200 paket/dk hız</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Servo motor kontrol</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Film genişliği 250-600mm</li>
              </ul>
            </div>
          </div>

          {/* Dikey Dolum */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dikey Dolum (VFFS)</h3>
              <p className="text-gray-600 mb-4">Form-fill-seal, toz-granül ürünler, un, şeker, pirinç, kuruyemiş paketleme</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Multi-head tartım entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 50-2000g dolum aralığı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> PLC + HMI kontrol</li>
              </ul>
            </div>
          </div>

          {/* Termoform */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Termoform Paketleme</h3>
              <p className="text-gray-600 mb-4">MAP/Skin teknolojisi, et-tavuk-balık için üst düzey hijyen ve görsellik</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Derin çekme kalıplama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Gaz flushing (O2, CO2, N2)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Skin paket seçeneği</li>
              </ul>
            </div>
          </div>

          {/* Etiketleme */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Etiketleme Sistemleri</h3>
              <p className="text-gray-600 mb-4">Otomatik etiket uygulama, barkod, QR kod, ağırlık-fiyat etiketi</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Wrap-around, top-bottom etiket</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Thermal transfer yazıcı</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Tartım entegrasyonu</li>
              </ul>
            </div>
          </div>

          {/* Konveyör */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Konveyör & Otomasyon</h3>
              <p className="text-gray-600 mb-4">Paslanmaz çelik konveyör, yıkanabilir bantlar, tam hat entegrasyonu</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Modüler tasarım, kolay temizlik</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Frekans kontrollü hız</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Metal dedektör entegrasyonu</li>
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
              <h3 className="text-xl font-bold mb-2">ISO 22000 & HACCP</h3>
              <p className="text-gray-400">Gıda güvenliği sertifikalı sistemler</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Uzman Kadro</h3>
              <p className="text-gray-400">Gıda mühendisi desteği</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verimlilik Artışı</h3>
              <p className="text-gray-400">%40 daha hızlı paketleme</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Gıda Paketleme Projeniz İçin Bize Ulaşın</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Hijyen, hız ve güvenlik standartlarınıza uygun en doğru paketleme sistemini seçmenizde yardımcı oluyoruz
            </p>
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Ücretsiz Keşif ve Teklif <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
