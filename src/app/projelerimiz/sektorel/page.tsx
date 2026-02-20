import { Building, Factory, Heart, Truck, Zap, Cpu, ArrowRight, Target, Users, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sektörel Çözümler | AOM Engineering",
  description: "Otomotiv, sağlık, gıda, lojistik, enerji ve tekstil sektörlerine özel endüstriyel otomasyon çözümlerimiz. 6+ sektörde 100+ başarılı proje.",
  keywords: "sektörel çözümler, endüstri çözümleri, otomotiv otomasyon, sağlık sistemleri, gıda otomasyon, lojistik çözümler"
};

export default function SektorelCozumlerPage() {
  const sectors = [
    {
      name: 'Otomotiv',
      icon: Factory,
      description: 'Üretim hattı otomasyonu, robotik entegrasyon ve kalite kontrol sistemleri.',
      projects: 25,
      solutions: ['Montaj hattı otomasyonu', 'Robotik kaynak sistemleri', 'Kalite kontrol', 'Konveyör sistemleri'],
      color: 'blue'
    },
    {
      name: 'Sağlık',
      icon: Heart,
      description: 'Hastane altyapı sistemleri, medikal gaz dağıtımı ve sterilizasyon çözümleri.',
      projects: 18,
      solutions: ['Merkezi oksijen sistemleri', 'Medikal gaz dağıtımı', 'Sterilizasyon sistemleri', 'Hasta takip sistemleri'],
      color: 'red'
    },
    {
      name: 'Gıda & İçecek',
      icon: Building,
      description: 'Hijyenik üretim hatları, paketleme otomasyonu ve soğuk zincir sistemleri.',
      projects: 22,
      solutions: ['Paketleme otomasyonu', 'Soğuk zincir sistemleri', 'Hijyenik tasarım', 'Kalite kontrol'],
      color: 'green'
    },
    {
      name: 'Lojistik & Depo',
      icon: Truck,
      description: 'Otomatik depolama sistemleri, sortleme ve sipariş hazırlama çözümleri.',
      projects: 15,
      solutions: ['Otomatik depolama', 'Sortleme sistemleri', 'WMS entegrasyonu', 'Konveyör sistemleri'],
      color: 'orange'
    },
    {
      name: 'Enerji & Utilities',
      icon: Zap,
      description: 'Güç sistemleri, enerji verimliliği ve yenilenebilir enerji entegrasyonu.',
      projects: 12,
      solutions: ['Güç kalitesi', 'Enerji yönetimi', 'Solar sistemler', 'UPS sistemleri'],
      color: 'yellow'
    },
    {
      name: 'Tekstil & Konfeksiyon',
      icon: Cpu,
      description: 'Tekstil üretim otomasyonu, boyama sistemleri ve kalite kontrol.',
      projects: 20,
      solutions: ['Üretim otomasyonu', 'Boyama sistemleri', 'Kurutma sistemleri', 'Kalite kontrol'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
      red: 'from-bordo-50 to-bordo-100 border-bordo-200 text-bordo-600',
      green: 'from-green-50 to-green-100 border-green-200 text-green-600',
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-600',
      yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6 mx-auto">
              <Building className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sektörel Çözümler
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Farklı sektörlerin kendine özgü ihtiyaçları için geliştirdiğimiz 
              özelleştirilmiş otomasyon çözümleri. Her sektörün gereksinimlerini 
              anlayarak en uygun teknolojileri sunuyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Building className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">6+</div>
                <div className="text-sm text-gray-300 mt-1">Ana Sektör</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Target className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">112+</div>
                <div className="text-sm text-gray-300 mt-1">Sektörel Proje</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">50+</div>
                <div className="text-sm text-gray-300 mt-1">Özel Çözüm</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">100+</div>
                <div className="text-sm text-gray-300 mt-1">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Sectors Grid */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-full mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 group"
                  >
                    <div className="space-y-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-bordo-100 rounded-2xl flex items-center justify-center group-hover:bg-bordo-600 transition-colors">
                          <Icon size={28} className="text-bordo-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">{sector.name}</h3>
                          <p className="text-sm text-gray-600">{sector.projects} Proje</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {sector.description}
                      </p>
                      
                      {/* Solutions */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Çözümlerimiz:</h4>
                        <ul className="space-y-2">
                          {sector.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle size={14} className="text-bordo-600" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* View Projects */}
                      <div className="pt-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-bordo-600 text-white py-3 rounded-xl font-medium hover:bg-bordo-700 transition-colors group-hover:gap-3">
                          <span>Projeleri Gör</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Sektörünüze Özel Çözüm Üretelim</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Her sektörün kendine özgü ihtiyaçları için özel çözümler geliştirebiliriz.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim/teklif" 
                className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-bordo-700 transition-colors text-lg shadow-lg"
              >
                <Target size={20} />
                <span>Özel Çözüm Talebi</span>
              </Link>
              <Link 
                href="/markalarimiz/teknoloji-ortaklarimiz" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                <Users size={20} />
                <span>Teknoloji Ortaklarımız</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}