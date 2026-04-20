import { CheckCircle, Clock, Building, Target, Users, ArrowRight, Calendar, MapPin, Rocket, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projelerimiz | AOM Engineering",
  description: "Otomotiv, sağlık, gıda ve daha birçok sektörde hayata geçirdiğimiz başarılı endüstriyel otomasyon projeleri. 150+ tamamlanan proje, 25+ devam eden çalışma.",
  keywords: "projeler, endüstriyel projeler, otomasyon projeleri, referans projeler, başarılı projeler"
};

export default function ProjelerimizPage() {
  const projects = [
    {
      title: 'Otomotiv Fabrikası Otomasyon Projesi',
      client: 'Ford Otosan',
      type: 'Tamamlandı',
      date: '2024',
      description: 'Komple üretim hattı otomasyonu ve robotik entegrasyon projesi.',
      status: 'complete'
    },
    {
      title: 'Hastane Medikal Gaz Sistemi',
      client: 'Acıbadem Sağlık Grubu',
      type: 'Devam Ediyor',
      date: '2024',
      description: 'Merkezi oksijen üretim ve dağıtım sistemi kurulumu.',
      status: 'ongoing'
    },
    {
      title: 'Gıda Paketleme Hattı',
      client: 'Ülker Bisküvi',
      type: 'Tamamlandı',
      date: '2023',
      description: 'Otomatik paketleme ve kalite kontrol sistemi.',
      status: 'complete'
    }
  ];

  const stats = [
    { number: '150+', label: 'Tamamlanan Proje', icon: CheckCircle },
    { number: '25+', label: 'Devam Eden Proje', icon: Clock },
    { number: '50+', label: 'Mutlu Müşteri', icon: Users },
    { number: '15+', label: 'Farklı Sektör', icon: Building }
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
              <Rocket className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Projelerimiz
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Farklı sektörlerden müşterilerimiz için hayata geçirdiğimiz başarılı projeler
              ve devam eden çalışmalarımız. Kaliteli çözümlerle her projede mükemmelliği hedefliyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-bordo-500">{stat.number}</div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Son Projelerimiz</h2>
            <p className="text-gray-600 text-lg">Müşterilerimiz için gerçekleştirdiğimiz başarılı projeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 group"
              >
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${project.status === 'complete'
                        ? 'bg-bordo-100 text-bordo-700'
                        : 'bg-gray-900 text-white'
                      }`}>
                      {project.status === 'complete' ? (
                        <CheckCircle size={14} />
                      ) : (
                        <Clock size={14} />
                      )}
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-bordo-600 transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Building size={14} />
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* View Details */}
                  <div className="pt-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-bordo-600 text-white py-3 rounded-xl font-medium hover:bg-bordo-700 transition-colors group-hover:gap-3">
                      <span>Detayları Gör</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proje Kategorileri</h2>
            <p className="text-gray-600 text-lg">Farklı kategorilerdeki projelerimizi keşfedin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/projelerimiz/tamamlanan"
              className="group bg-white rounded-2xl p-8 text-center space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500"
            >
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-600 transition-colors">
                <CheckCircle size={40} className="text-bordo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">Tamamlanan Projeler</h3>
              <p className="text-gray-600">Başarıyla tamamladığımız projeler ve sonuçları</p>
              <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                <span className="font-medium">Projeleri Gör</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              href="/projelerimiz/devam-eden"
              className="group bg-white rounded-2xl p-8 text-center space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500"
            >
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-600 transition-colors">
                <Clock size={40} className="text-bordo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">Devam Eden Projeler</h3>
              <p className="text-gray-600">Şu anda üzerinde çalıştığımız aktif projeler</p>
              <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                <span className="font-medium">Projeleri Gör</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              href="/projelerimiz/sektorel"
              className="group bg-white rounded-2xl p-8 text-center space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500"
            >
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-600 transition-colors">
                <Building size={40} className="text-bordo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">Sektörel Çözümler</h3>
              <p className="text-gray-600">Sektörlere özel geliştirdiğimiz çözümler</p>
              <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                <span className="font-medium">Çözümleri Gör</span>
                <ArrowRight size={16} />
              </div>
            </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold">Projeniz İçin Bizimle İletişime Geçin</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Uzman ekibimiz, projenizin gereksinimlerini değerlendirerek
                size en uygun çözümü sunar.
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
                href="/referanslarimiz"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                <Award size={20} />
                <span>Referansları Gör</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}