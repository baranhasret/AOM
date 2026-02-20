import { Cloud, Factory, Hospital, Wind, Zap, Leaf } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oksijen Jeneratörleri | Endüstriyel ve Medikal Oksijen Üretimi - AOM Engineering",
  description: "Endüstriyel ve medikal oksijen jeneratörleri. PSA teknolojisi ile yüksek saflıkta oksijen üretimi. Hastane, fabrika ve endüstriyel tesisler için çözümler.",
  keywords: "oksijen jeneratörü, medikal oksijen, endüstriyel oksijen, PSA teknolojisi, oksijen üretimi, hastane oksijen sistemi",
  openGraph: {
    title: "Oksijen Jeneratörleri - AOM Engineering",
    description: "Endüstriyel ve medikal oksijen jeneratörleri ile yüksek saflıkta oksijen üretimi.",
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
                  <div className="p-3 bg-green-100 rounded-2xl">
                    <Cloud size={48} className="text-green-600" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Oksijen Jeneratörleri</h1>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed">
                  Endüstriyel ve medikal oksijen jeneratörlerinde yüksek verimlilik ve 
                  güvenlik. İleri teknoloji ile kesintisiz oksijen üretimi sağlıyor, 
                  çevreye duyarlı çözümler sunuyoruz.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">Yüksek verimlilik PSA teknolojisi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Factory size={16} className="text-blue-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Endüstriyel ve medikal uygulamalar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Hospital size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-700 text-lg">24/7 kesintisiz çalışma garantisi</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg">
                    Teklif Alın
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
                    Diğer Çözümler
                  </button>
                </div>
              </div>
              
              {/* Right Icon */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Cloud size={120} className="text-green-600" />
                    </div>
                    <div className="text-green-900">
                      <p className="text-2xl font-bold">Oksijen Jeneratörleri</p>
                      <p className="text-lg opacity-80">Temiz Enerji Çözümleri</p>
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
                    <Factory size={48} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Endüstriyel Sistemler</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Yüksek kapasiteli endüstriyel oksijen üretim sistemleri.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Hospital size={48} className="text-bordo-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medikal Oksijen</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Hastane ve klinikler için güvenli medikal oksijen üretimi.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Wind size={48} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PSA Teknolojisi</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Basınç salınım adsorpsiyon teknolojisi ile yüksek saflık.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
