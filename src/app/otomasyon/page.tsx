import { Settings, Cpu, BarChart3, Zap, Factory, Target } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Endüstriyel Otomasyon Çözümleri | PLC, SCADA, HMI Sistemleri - AOM Engineering",
  description: "Endüstriyel otomasyon sistemleri, PLC programlama, SCADA sistemleri, HMI çözümleri. Siemens, Omron, Schneider Electric partneri ile verimliliği artırın.",
  keywords: "endüstriyel otomasyon, PLC programlama, SCADA sistemi, HMI, siemens plc, omron plc, otomasyon sistemleri, üretim otomasyonu, fabrika otomasyonu",
  openGraph: {
    title: "Endüstriyel Otomasyon Çözümleri - AOM Engineering",
    description: "PLC, SCADA ve HMI sistemleri ile üretim süreçlerinizi dijitalleştiriyoruz.",
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
                  <div className="p-3 bg-blue-100 rounded-2xl">
                    <Settings size={48} className="text-blue-600" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Endüstriyel Otomasyon</h1>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed">
                  Endüstriyel otomasyon çözümlerimizle üretim süreçlerinizi dijitalleştiriyor, 
                  verimliliği ve kaliteyi artırıyoruz. Modern altyapı ve uzman kadro ile 
                  yanınızdayız.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">Otomasyon sistem entegrasyonu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Cpu size={16} className="text-blue-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Endüstriyel yazılım ve donanım</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <BarChart3 size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Süreç optimizasyonu</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg">
                    Teklif Alın
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
                    Diğer Çözümler
                  </button>
                </div>
              </div>
              
              {/* Right Icon */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Settings size={120} className="text-blue-600" />
                    </div>
                    <div className="text-blue-900">
                      <p className="text-2xl font-bold">Endüstriyel Otomasyon</p>
                      <p className="text-lg opacity-80">Modern Üretim Çözümleri</p>
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
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Zap size={48} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Akıllı Otomasyon</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Yapay zeka destekli otomasyon sistemleri ile verimlilik artışı.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Factory size={48} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Endüstriyel Yazılım</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  SCADA, PLC ve HMI yazılımları ile tam kontrol.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Target size={48} className="text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Süreç Optimizasyonu</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Enerji ve üretim süreçlerinde maksimum verimlilik.
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
