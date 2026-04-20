import { HeartPulse, Shield, Stethoscope, Activity, Microscope, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Medikal Cihazlar ve Ekipmanlar | Tıbbi Cihaz Çözümleri - AOM Engineering",
  description: "Medikal cihaz üretimi, hastane ekipmanları, tıbbi cihaz otomasyon sistemleri. CE belgeli, kaliteli ve güvenilir medikal çözümler.",
  keywords: "medikal cihazlar, tıbbi cihaz, hastane ekipmanları, medikal otomasyon, sağlık teknolojileri, CE belgeli cihazlar",
  openGraph: {
    title: "Medikal Cihazlar - AOM Engineering",
    description: "Medikal cihaz otomasyon sistemlerinde kalite ve güvenlik.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <div className="pt-24">
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-full mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 max-w-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-bordo-100 rounded-2xl">
                    <HeartPulse size={48} className="text-bordo-600" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Medikal Cihazlar</h1>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed">
                  Medikal cihazlarda kalite ve güvenlik ön planda. Modern teknolojilerle 
                  sağlık sektörüne yenilikçi çözümler sunuyor, hasta güvenliğini 
                  öncelliyoruz.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">Medikal cihaz üretimi ve sertifikasyon</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bordo-100 rounded-full flex items-center justify-center">
                      <Shield size={16} className="text-bordo-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Kalite güvencesi ve hasta güvenliği</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Stethoscope size={16} className="text-blue-500" />
                    </div>
                    <span className="text-gray-700 text-lg">7/24 teknik destek ve bakım</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg">
                    Teklif Alın
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
                    Diğer Çözümler
                  </button>
                </div>
              </div>
              
              {/* Right Icon */}
              <div className="relative">
                <div className="bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-3xl p-12 h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <HeartPulse size={120} className="text-bordo-600" />
                    </div>
                    <div className="text-bordo-900">
                      <p className="text-2xl font-bold">Medikal Cihazlar</p>
                      <p className="text-lg opacity-80">Sağlık Teknolojileri</p>
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
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Activity size={48} className="text-bordo-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tanı Cihazları</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  EKG, EEG ve ultrason cihazları ile hassas tanı çözümleri.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart size={48} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tedavi Cihazları</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Defibrilatör ve ventülatör sistemleri ile yaşam desteği.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Microscope size={48} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Laboratuvar Çözümleri</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Analiz cihazları ve mikroskop sistemleri ile doğru sonuçlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}