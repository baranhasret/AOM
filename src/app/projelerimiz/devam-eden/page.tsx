import { Clock, Calendar, MapPin, Target, Users, ArrowRight, Building, BarChart, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Devam Eden Projeler | AOM Engineering",
  description: "Şu anda üzerinde çalıştığımız 25+ aktif endüstriyel otomasyon projesi. Gerçek zamanlı ilerleme takibi ve proje durumları.",
  keywords: "devam eden projeler, aktif projeler, proje takibi, güncel projeler, otomasyon çalışmaları"
};

export default function DevamEdenProjelerPage() {
  const ongoingProjects = [
    {
      title: 'BMW Fabrika Genişletme Projesi',
      client: 'BMW Türkiye',
      location: 'İstanbul',
      startDate: '2024',
      progress: 75,
      expectedCompletion: 'Q4 2024',
      description: 'Yeni üretim hattı kurulumu ve mevcut sistemlerin entegrasyonu.',
      category: 'Otomotiv'
    },
    {
      title: 'Memorial Hastanesi Modernizasyon',
      client: 'Memorial Sağlık Grubu',
      location: 'Ankara',
      startDate: '2024',
      progress: 60,
      expectedCompletion: 'Q1 2025',
      description: 'Merkezi oksijen sistemi ve medikal cihaz entegrasyonu.',
      category: 'Sağlık'
    },
    {
      title: 'Migros Depo Otomasyon Sistemi',
      client: 'Migros',
      location: 'İzmir',
      startDate: '2024',
      progress: 40,
      expectedCompletion: 'Q2 2025',
      description: 'Otomatik depolama ve sipariş hazırlama sistemi.',
      category: 'Lojistik'
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
              <Clock className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Devam Eden Projeler
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Şu anda üzerinde çalıştığımız aktif projeler ve gelişim durumları. 
              Her projede zamanında teslimat ve kaliteli sonuçlar için titizlikle çalışıyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">25+</div>
                <div className="text-sm text-gray-300 mt-1">Aktif Proje</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">%85</div>
                <div className="text-sm text-gray-300 mt-1">Ortalama İlerleme</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">50+</div>
                <div className="text-sm text-gray-300 mt-1">Takım Üyesi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Active Projects */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-full mx-auto px-8">
            <div className="space-y-8">
              {ongoingProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                          <Clock size={14} />
                          <span>Devam Ediyor</span>
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
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">İlerleme</span>
                          <span className="text-sm font-medium text-blue-600">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Başlangıç:</span>
                          <span className="font-medium">{project.startDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tahmini Bitiş:</span>
                          <span className="font-medium">{project.expectedCompletion}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="space-y-3">
                      <button className="w-full bg-bordo-600 text-white py-3 rounded-xl font-medium hover:bg-bordo-700 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                        <span>Detayları Gör</span>
                        <ArrowRight size={16} />
                      </button>
                      <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <BarChart size={16} />
                        <span>İlerleme Raporu</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Projeniz İçin Planlama Yapalım</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Yeni projeniz için detaylı planlama ve zaman çizelgesi oluşturalım.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim/teklif" 
                className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-bordo-700 transition-colors text-lg shadow-lg"
              >
                <Target size={20} />
                <span>Proje Danışmanlığı</span>
              </Link>
              <Link 
                href="/projelerimiz/tamamlanan" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                <CheckCircle size={20} />
                <span>Tamamlanan Projeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}