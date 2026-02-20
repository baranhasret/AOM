import { Package, ShieldCheck, CheckCircle, Award, Box, Zap, Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gıda Paketleme Sistemleri | Otomatik Paketleme Makineleri - AOM Engineering",
  description: "Gıda paketleme otomasyon sistemleri, vakum paketleme, ağırlık kontrol, etiketleme çözümleri. Hijyenik ve güvenli paketleme teknolojileri.",
  keywords: "gıda paketleme, otomatik paketleme, vakum paketleme, ağırlık kontrol, etiketleme sistemi, gıda otomasyon",
  openGraph: {
    title: "Gıda Paketleme Sistemleri - AOM Engineering",
    description: "Hijyenik ve güvenli gıda paketleme çözümleri.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="pt-24">
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-full mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 max-w-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100 rounded-2xl">
                    <Package size={48} className="text-yellow-600" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Gıda Paketleme</h1>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed">
                  Endüstriyel gıda paketleme süreçlerinde hijyen, hız ve kaliteyi bir araya 
                  getiriyoruz. Modern makineler, otomasyon sistemleri ve uluslararası 
                  sertifikalar ile ürünlerinizin güvenliğini artırıyoruz.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">Gıda güvenliği ve hijyen standartları</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={16} className="text-blue-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Otomatik ve yarı otomatik makineler</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award size={16} className="text-yellow-500" />
                    </div>
                    <span className="text-gray-700 text-lg">ISO 22000 & HACCP sertifikalı üretim</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-700 transition-colors text-lg">
                    Teklif Alın
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
                    Diğer Çözümler
                  </button>
                </div>
              </div>
              
              {/* Right Icon */}
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-12 h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Package size={120} className="text-yellow-600" />
                    </div>
                    <div className="text-yellow-900">
                      <p className="text-2xl font-bold">Gıda Paketleme</p>
                      <p className="text-lg opacity-80">Güvenli Ambalaj Çözümleri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-full mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Shield size={48} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hijyenik Tasarım</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Tüm makinelerimiz kolay temizlenebilir ve gıda ile temasa uygun malzemelerden üretilir.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Zap size={48} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Yüksek Verimlilik</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Otomasyon sistemleri ile hızlı, hatasız ve sürekli üretim imkanı sunar.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Award size={48} className="text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sertifikalı Süreçler</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  ISO 22000 ve HACCP gibi uluslararası standartlara uygun üretim süreçleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}