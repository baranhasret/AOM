import { CheckCircle, Calendar, MapPin, Target, Users, ArrowRight, Building, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tamamlanan Projeler | AOM Engineering",
  description: "Başarıyla tamamladığımız 150+ endüstriyel otomasyon projesi. Otomotiv, sağlık, gıda ve daha fazla sektörde referans çalışmalarımız.",
  keywords: "tamamlanan projeler, referans projeler, başarılı projeler, otomasyon projeleri, endüstriyel çözümler"
};

export default function TamamlananProjelerPage() {
  const completedProjects = [
    {
      title: 'Ford Otosan Üretim Hattı Otomasyonu',
      client: 'Ford Otosan',
      location: 'Kocaeli',
      completedDate: '2024',
      duration: '8 ay',
      budget: '2.5M €',
      description: 'Otomotiv üretim hattında tam otomasyon sistemi kurulumu ve YASKAWA robotik entegrasyonu.',
      technologies: ['YASKAWA Robotlar', 'SIEMENS PLC', 'Güvenlik Sistemleri'],
      results: ['%35 verimlilik artışı', '%20 maliyet tasarrufu', '%50 hata azalması'],
      category: 'Otomotiv'
    },
    {
      title: 'Ülker Gıda Paketleme Sistemi',
      client: 'Ülker Bisküvi',
      location: 'İstanbul',
      completedDate: '2023',
      duration: '6 ay',
      budget: '1.8M €',
      description: 'Otomatik paketleme hattı ve kalite kontrol sistemi kurulumu.',
      technologies: ['OMRON Sensörler', 'DELTA Sürücüler', 'Paketleme Robotları'],
      results: ['%40 hız artışı', '%25 kalite iyileştirmesi', '%30 işgücü tasarrufu'],
      category: 'Gıda & İçecek'
    },
    {
      title: 'Acıbadem Hastanesi Oksijen Sistemi',
      client: 'Acıbadem Sağlık Grubu',
      location: 'İstanbul',
      completedDate: '2023',
      duration: '4 ay',
      budget: '1.2M €',
      description: 'Merkezi oksijen üretim ve dağıtım sistemi kurulumu.',
      technologies: ['Oksijen Jeneratörleri', 'Basınç Kontrol', 'Alarm Sistemleri'],
      results: ['%99.9 güvenilirlik', '%30 enerji tasarrufu', '7/24 kesintisiz hizmet'],
      category: 'Sağlık'
    },
    {
      title: 'Arçelik Beyaz Eşya Montaj Hattı',
      client: 'Arçelik',
      location: 'Ankara',
      completedDate: '2022',
      duration: '10 ay',
      budget: '3.2M €',
      description: 'Beyaz eşya montaj hattında robotik sistemler ve kalite kontrol.',
      technologies: ['MOTOMAN Robotlar', 'Görü Sistemleri', 'Konveyör Sistemleri'],
      results: ['%45 üretim artışı', '%15 kalite iyileştirmesi', '%25 maliyet azalması'],
      category: 'Beyaz Eşya'
    }
  ];

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
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tamamlanan Projeler
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Başarıyla tamamladığımız projeler ve elde edilen sonuçlar. 
              Her projede müşteri memnuniyeti ve kaliteli çözümler sunma odağımızla çalışıyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">150+</div>
                <div className="text-sm text-gray-300 mt-1">Tamamlanan Proje</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">50+</div>
                <div className="text-sm text-gray-300 mt-1">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Building className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">15+</div>
                <div className="text-sm text-gray-300 mt-1">Farklı Sektör</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">%100</div>
                <div className="text-sm text-gray-300 mt-1">Başarı Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-full mx-auto px-8">
            <div className="space-y-12">
              {completedProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-bordo-100 text-bordo-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                              <CheckCircle size={14} />
                              <span>Tamamlandı</span>
                            </div>
                            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {project.category}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">{project.title}</h3>
                          <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span>{project.client}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{project.completedDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Kullanılan Teknolojiler:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Elde Edilen Sonuçlar:</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2 p-3 bg-bordo-50 rounded-lg border border-bordo-100">
                              <TrendingUp size={16} className="text-bordo-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                        <h4 className="font-semibold text-gray-900">Proje Detayları</h4>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Süre:</span>
                            <span className="font-medium">{project.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bütçe:</span>
                            <span className="font-medium">{project.budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Durum:</span>
                            <span className="text-green-600 font-medium">Tamamlandı</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full flex items-center justify-center gap-2 bg-bordo-600 text-white py-3 rounded-xl font-medium hover:bg-bordo-700 transition-colors group-hover:gap-3">
                        <span>Detaylı Bilgi</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold">Projenizi Hayata Geçirelim</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Uzman ekibimiz, sizin için de başarılı bir proje gerçekleştirmeye hazır.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim/teklif" 
                className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-bordo-700 transition-colors text-lg shadow-lg"
              >
                <Target size={20} />
                <span>Proje Teklifi Al</span>
              </Link>
              <Link 
                href="/projelerimiz" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                <ArrowRight size={20} />
                <span>Tüm Projeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}