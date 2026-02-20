import { Users, Star, Award, MessageSquare, ArrowRight, Building, CheckCircle, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Referanslarımız | AOM Engineering",
  description: "50+ mutlu müşteri, 150+ başarılı proje. Otomotiv, sağlık, gıda ve daha fazla sektörde referans çalışmalarımız ve müşteri görüşleri.",
  keywords: "referanslar, müşteri referansları, başarılı projeler, müşteri memnuniyeti, müşteri portföyü"
};

export default function ReferanslarimizPage() {
  const stats = [
    { number: '50+', label: 'Mutlu Müşteri', icon: Users },
    { number: '150+', label: 'Başarılı Proje', icon: Award },
    { number: '4.9/5', label: 'Müşteri Memnuniyeti', icon: Star },
    { number: '15+', label: 'Farklı Sektör', icon: Building }
  ];

  const featuredClients = [
    {
      name: 'Ford Otosan',
      sector: 'Otomotiv',
      project: 'Üretim Hattı Otomasyonu',
      result: '%35 verimlilik artışı'
    },
    {
      name: 'Acıbadem Sağlık',
      sector: 'Sağlık',
      project: 'Merkezi Oksijen Sistemi',
      result: '%99.9 güvenilirlik'
    },
    {
      name: 'Ülker Bisküvi',
      sector: 'Gıda',
      project: 'Paketleme Otomasyonu',
      result: '%40 hız artışı'
    },
    {
      name: 'Arçelik',
      sector: 'Beyaz Eşya',
      project: 'Montaj Hattı',
      result: '%45 üretim artışı'
    }
  ];

  const testimonials = [
    {
      text: "Angora Otomasyon ile çalışmak, projemizin başarısında kritik rol oynadı. Profesyonel ekip ve kaliteli çözümler.",
      author: "Ahmet Yılmaz",
      position: "Üretim Müdürü",
      company: "Ford Otosan"
    },
    {
      text: "Zamanında teslimat, mükemmel teknik destek ve beklentilerimizin üzerinde sonuçlar elde ettik.",
      author: "Dr. Ayşe Demir",
      position: "Hastane Müdürü",
      company: "Acıbadem Sağlık"
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
              <Award className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Referanslarımız
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Müşterilerimizin başarı hikayeleri bizim en büyük motivasyonumuz.
              Kaliteli hizmet anlayışımızla kazandığımız güven ve memnuniyet referanslarımızla konuşuyor.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
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

      {/* Featured Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Müşterilerimiz</h2>
            <p className="text-gray-600 text-lg">Farklı sektörlerden güvenilir iş ortaklarımız</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building size={24} className="text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.sector}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Proje:</span> {client.project}
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-sm text-green-600 font-medium">{client.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Görüşleri</h2>
            <p className="text-gray-600 text-lg">Çalıştığımız müşterilerimizin deneyimleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Categories */}
      <section className="py-20">
        <div className="max-w-full mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Referans Kategorileri</h2>
            <p className="text-gray-600 text-lg">Detaylı referans bilgilerimizi keşfedin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/referanslarimiz/musteri-portfoyu"
              className="group bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-bordo-200"
            >
              <div className="w-16 h-16 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-200 transition-colors">
                <Building size={32} className="text-bordo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Müşteri Portföyü</h3>
              <p className="text-gray-600">Tüm müşterilerimiz ve iş birliklerimiz</p>
              <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                <span className="font-medium">Portföyü Gör</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            {/* Başarı Hikayeleri kutusu kaldırıldı */}

            <Link
              href="/referanslarimiz/gorusler"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-orange-200"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-orange-200 transition-colors">
                <MessageSquare size={32} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Müşteri Görüşleri</h3>
              <p className="text-gray-600">Müşteri değerlendirmeleri ve görüşler</p>
              <div className="flex items-center justify-center gap-2 text-orange-600 group-hover:gap-3 transition-all">
                <span className="font-medium">Görüşleri Gör</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white space-y-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Siz de Referanslarımıza Katılın</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Başarılı projeler gerçekleştirerek sizin de referansımız olmaktan
                mutluluk duyarız.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                >
                  <Target size={20} />
                  <span>Proje Başlat</span>
                </Link>
                <Link
                  href="/projelerimiz"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-bordo-600 transition-colors text-lg"
                >
                  <CheckCircle size={20} />
                  <span>Projelerimizi Gör</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}