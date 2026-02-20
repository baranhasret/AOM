import { Building, Factory, Heart, Truck, Zap, Users, MapPin, Calendar, ArrowRight, Star, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Müşteri Portföyü | AOM Engineering",
  description: "50+ mutlu müşteri, 6+ farklı sektör. Otomotiv, sağlık, gıda, lojistik ve daha fazla sektörde müşteri portföyümüz.",
  keywords: "müşteri portföyü, referans müşteriler, müşteri listesi, ortaklıklar"
};

export default function MusteriPortfoyuPage() {
  const clients = [
    {
      name: 'TUNATEK',
  sector: 'Hasırçelik',
      location: 'Ankara',
      partnership: '2022',
      projects: 2,
  description: 'Ankara merkezli hasırçelik üretimi ve savunma sanayi firması.',
      icon: Factory,
      color: 'blue'
    },
    {
      name: 'ATASAM',
  sector: 'Medikal',
      location: 'Ankara',
      partnership: '2023',
      projects: 1,
  description: 'Ankara merkezli medikal sektöründe oksijen jeneratörü üretimi.',
      icon: Factory,
      color: 'purple'
    },
    {
      name: 'TETA SAVUNMA',
  sector: 'Savunma',
      location: 'Ankara',
      partnership: '2024',
      projects: 1,
      description: 'Ankara merkezli savunma sanayi projeleri.',
      icon: Factory,
      color: 'green'
    }
  ];

  const sectors = [
    { name: 'Otomotiv', count: 15, color: 'blue' },
    { name: 'Sağlık', count: 12, color: 'red' },
    { name: 'Gıda & İçecek', count: 10, color: 'green' },
    { name: 'Beyaz Eşya', count: 8, color: 'purple' },
    { name: 'Enerji', count: 6, color: 'yellow' },
    { name: 'Lojistik', count: 5, color: 'orange' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200',
      red: 'from-bordo-50 to-bordo-100 border-bordo-200',
      green: 'from-green-50 to-green-100 border-green-200',
      purple: 'from-purple-50 to-purple-100 border-purple-200',
      orange: 'from-orange-50 to-orange-100 border-orange-200',
      yellow: 'from-yellow-50 to-yellow-100 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      red: 'text-bordo-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      yellow: 'text-yellow-600'
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
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Müşteri Portföyü
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Farklı sektörlerden güvenilir iş ortaklarımız. Uzun yıllardır 
              süren başarılı iş birliklerimiz ve kaliteli hizmet anlayışımızın sonucu olarak kazandığımız güven.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">50+</div>
                <div className="text-sm text-gray-300 mt-1">Aktif Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Building className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">6+</div>
                <div className="text-sm text-gray-300 mt-1">Ana Sektör</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-bordo-500">8+</div>
                <div className="text-sm text-gray-300 mt-1">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-16 bg-gradient-to-br from-bordo-600 to-bordo-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">Sektörel Dağılım</h2>
              <p className="text-bordo-100">Müşterilerimizin sektörel dağılımı</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-white text-center">
                  <div className="text-2xl font-bold">{sector.count}</div>
                  <div className="text-bordo-100">{sector.name}</div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşterilerimiz</h2>
              <p className="text-gray-600 text-lg">Güvenilir iş ortaklarımız ve başarılı projelerimiz</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {clients.map((client, index) => {
                const Icon = client.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(client.color)} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="space-y-4">
                      {/* Icon and Name */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                          <Icon size={24} className={getIconColor(client.color)} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                        <p className="text-sm text-gray-600">{client.sector}</p>
                      </div>
                      
                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={14} />
                          <span>{client.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={14} />
                          <span>İş birliği: {client.partnership}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building size={14} />
                          <span>{client.projects} proje</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {client.description}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 pt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">5.0</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white space-y-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Müşteri Portföyümüze Katılın</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Güvenilir iş ortaklarımız arasına siz de katılın ve 
                  başarılı projeler gerçekleştirelim.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/iletisim" 
                    className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                  >
                    <Users size={20} />
                    <span>İş Birliği Başlat</span>
                  </Link>
                  <Link 
                    href="/projelerimiz" 
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-bordo-600 transition-colors text-lg"
                  >
                    <ArrowRight size={20} />
                    <span>Projelerimizi Görün</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}