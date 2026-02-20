import { Award, CheckCircle, Zap, Cpu, Monitor, Eye, ArrowRight, Building2, Gauge, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omron Türkiye Distribütörü - PLC, HMI, Sensör | AOM Engineering',
  description: 'Omron CP1, CJ2 serisi PLC, HMI paneller, foto sensörler, proximity sensörler yetkili satıcısı. Endüstriyel otomasyon ürünleri ve teknik destek.',
  keywords: 'omron plc, omron türkiye, cp1 plc, cj2 plc, omron hmi, omron sensör, omron otomasyon, omron distribütör',
};

export default function OmronDetailPage() {
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
                  <Image src="/images/omron.png" alt="OMRON" fill className="object-contain" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-bordo-600/20 border border-bordo-600/30 rounded-full px-6 py-2">
                  <Building2 className="w-4 h-4 text-bordo-500" />
                  <span className="text-sm font-semibold text-bordo-400">Yetkili Distribütör</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">OMRON</h1>
                <p className="text-xl text-bordo-500 font-bold">Sensör ve Otomasyon Teknolojileri Lideri</p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Omron</strong>, sensör, kontrol ve otomasyon teknolojilerinde <strong className="text-white">global liderdir</strong>. 
                  CP/CJ PLC, foto sensörler ve vision sistemleri ile endüstriyel otomasyonun dijitalleşmesinde öncü.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Link href="/urunler?marka=omron" className="bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
                  Ürünleri İncele
                </Link>
                <Link href="/iletisim/teklif" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Teklif Al
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">90+</div>
                <div className="text-gray-300">Yıllık Tecrübe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">120+</div>
                <div className="text-gray-300">Ülkede Faaliyet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-bordo-500 mb-2">#1</div>
                <div className="text-gray-300">Sensör Teknolojisi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">Top</div>
                <div className="text-gray-300">AI & Vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Omron Ürün Portföyü</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">PLC, sensör, HMI ve vision sistemlerinin eksiksiz yelpazesi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">CP/CJ Series PLC</h3>
              <p className="text-gray-600 mb-4">Kompakt CP1E/CP1L, orta sınıf CJ2M/CJ2H modüler PLC sistemleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Sysmac Studio programlama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> EtherCAT/EtherNet-IP iletişim</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Motion control entegrasyonu</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Foto Sensörler</h3>
              <p className="text-gray-600 mb-4">E3Z, E3F retro-reflektif, diffuse, through-beam sensörler</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 10mm - 100m algılama mesafesi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> NPN/PNP çıkış tipleri</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IP67 koruma sınıfı</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proximity Sensörler</h3>
              <p className="text-gray-600 mb-4">E2E, TL-Q indüktif, kapasitif, M8-M30 metal algılama</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 1-40mm algılama mesafesi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Indüktif & kapasitif tipler</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IO-Link iletişim</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">HMI Paneller</h3>
              <p className="text-gray-600 mb-4">NS series dokunmatik paneller: 5"-15" ekran seçenekleri</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 5" - 15" TFT ekran</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Sysmac Studio entegrasyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Web server & VNC</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-bordo-600 to-bordo-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision Sistemleri</h3>
              <p className="text-gray-600 mb-4">FH, FZ serisi akıllı kameralar, AI tabanlı görüntü işleme</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2D/3D görüntü işleme</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> AI derin öğrenme</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Barcode/OCR okuma</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Güvenlik Ürünleri</h3>
              <p className="text-gray-600 mb-4">G9 güvenlik kontrol, light curtain, lazer tarayıcı</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> SIL3/PLe güvenlik seviyesi</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Muting & blanking fonksiyonu</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Güvenlik kontrol modülleri</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Omron ile Çalışmanın Avantajları</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Sensör ve otomasyon teknolojilerinde global lider</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yenilikçi Sensörler</h3>
              <p className="text-gray-400">AI & Vision teknolojileri</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Geniş Portföy</h3>
              <p className="text-gray-400">PLC, HMI, sensör tek çatı altında</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yüksek Güvenilirlik</h3>
              <p className="text-gray-400">90+ yıllık mühendislik deneyimi</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/iletisim/teklif" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              Omron Ürünleri İçin Teklif Alın <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}