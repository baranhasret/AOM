import { Bot, Cpu, Zap, Cog, Wrench, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Robotik Sistemler ve Otomasyon | Endüstriyel Robot Çözümleri - AOM Engineering",
  description: "Endüstriyel robotik sistemler, robot programlama, collaborative robot (cobot), otonom robotlar. Yaskawa, ABB, KUKA robot entegrasyonu ve servis hizmetleri.",
  keywords: "robotik sistemler, endüstriyel robot, robot programlama, cobot, otonom robot, yaskawa robot, abb robot, robot entegrasyonu, robotik otomasyon",
  openGraph: {
    title: "Robotik Sistemler - AOM Engineering",
    description: "Yüksek teknoloji robotik sistemler ile üretiminizi güçlendirin.",
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
                  <div className="p-3 bg-purple-100 rounded-2xl">
                    <Bot size={48} className="text-purple-600" />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900">Robotik Sistemler</h1>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed">
                  Yüksek teknoloji robotik sistemler ile üretiminizi güçlendiriyoruz. 
                  Esnek, hızlı ve güvenli çözümlerle endüstriyel dönüşümde 
                  yanınızdayız.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">Endüstriyel robot entegrasyonu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Cpu size={16} className="text-purple-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Akıllı otomasyon çözümleri</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-700 text-lg">Hızlı ve esnek üretim hatları</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-lg">
                    Teklif Alın
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg">
                    Diğer Çözümler
                  </button>
                </div>
              </div>
              
              {/* Right Icon */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-12 h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Bot size={120} className="text-purple-600" />
                    </div>
                    <div className="text-purple-900">
                      <p className="text-2xl font-bold">Robotik Sistemler</p>
                      <p className="text-lg opacity-80">Akıllı Otomasyon</p>
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
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Cog size={48} className="text-purple-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Endüstriyel Robotlar</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  6 eksenli robotların üretim hatlarına entegrasyonu.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Wrench size={48} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Akıllı Kontrol</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Gelişmiş robotik kontrol yazılımları ve programlama.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-full h-48 mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Users size={48} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kolaboratif Robotlar</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Güvenli insan-robot işbirliği çözümleri.
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