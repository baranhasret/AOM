import { MessageSquare, Star, ThumbsUp, Quote, Calendar, Building, ArrowRight, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Müşteri Görüşleri | AOM Engineering",
  description: "Müşterilerimizin gerçek deneyimleri ve görüşleri. 4.9/5 genel memnuniyet, %98 tavsiye oranı. 50+ mutlu müşteriden gelen değerlendirmeler.",
  keywords: "müşteri görüşleri, müşteri yorumları, referans görüşler, müşteri memnuniyeti, değerlendirmeler"
};

export default function GoruslerPage() {
  const reviews = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Üretim Müdürü',
      company: 'Ford Otosan',
      rating: 5,
      date: '2024',
      review: 'Angora Otomasyon ile çalışmak gerçekten harika bir deneyimdi. Ekip son derece profesyonel, çözüm odaklı ve zamanında teslimat konusunda çok güvenilir. Üretim hattımızdaki otomasyon projesi beklentilerimizin üzerinde sonuçlar verdi.',
      project: 'Üretim Hattı Otomasyonu',
      category: 'Otomotiv'
    },
    {
      name: 'Dr. Ayşe Demir',
      position: 'Hastane Müdürü',
      company: 'Acıbadem Sağlık Grubu',
      rating: 5,
      date: '2024',
      review: 'Kritik öneme sahip merkezi oksijen sistemimiz için Angora Otomasyon\'u seçtiğimiz için çok memnunuz. %99.9 güvenilirlik oranı ile hasta güvenliğimiz tam anlamıyla sağlandı. Teknik destek konusunda da mükemmel hizmet alıyoruz.',
      project: 'Merkezi Oksijen Sistemi',
      category: 'Sağlık'
    },
    {
      name: 'Mehmet Kaya',
      position: 'Fabrika Müdürü',
      company: 'Ülker Bisküvi',
      rating: 5,
      date: '2023',
      review: 'Paketleme hattımızın otomasyonu projesi tam bir başarı hikayesi oldu. %40 hız artışı ve %25 kalite iyileştirmesi elde ettik. Angora Otomasyon ekibi her aşamada yanımızdaydı ve mükemmel çözümler üretti.',
      project: 'Paketleme Otomasyonu',
      category: 'Gıda & İçecek'
    },
    {
      name: 'İbrahim Özkan',
      position: 'Operasyon Direktörü',
      company: 'Arçelik',
      rating: 5,
      date: '2023',
      review: 'Beyaz eşya montaj hattımızda gerçekleştirilen robotik entegrasyon projesi olağanüstü sonuçlar verdi. %45 üretim artışı ve %15 kalite iyileştirmesi sağladık. Profesyonel yaklaşımları ve teknik uzmanlıkları takdire şayan.',
      project: 'Robotik Montaj Hattı',
      category: 'Beyaz Eşya'
    },
    {
      name: 'Fatma Çelik',
      position: 'Proje Koordinatörü',
      company: 'BMW Türkiye',
      rating: 5,
      date: '2024',
      review: 'Fabrika genişletme projemizde Angora Otomasyon ile çalışmak mükemmel bir karardı. Proje yönetimi, teknik uzmanlık ve müşteri odaklı yaklaşımları sayesinde tüm hedeflerimize ulaştık. Kesinlikle tavsiye ederim.',
      project: 'Fabrika Genişletme',
      category: 'Otomotiv'
    },
    {
      name: 'Okan Yıldız',
      position: 'Teknik Müdür',
      company: 'Migros',
      rating: 5,
      date: '2024',
      review: 'Depo otomasyon sistemimiz sayesinde lojistik operasyonlarımızda büyük verimlilik artışı sağladık. Angora Otomasyon\'un çözüm odaklı yaklaşımı ve güvenilirliği bizim için çok değerli.',
      project: 'Depo Otomasyon Sistemi',
      category: 'Lojistik'
    }
  ];

  const satisfactionStats = [
    { metric: '4.9/5', label: 'Genel Memnuniyet', icon: Star },
    { metric: '%98', label: 'Tavsiye Oranı', icon: ThumbsUp },
    { metric: '%95', label: 'Zamanında Teslimat', icon: Target },
    { metric: '50+', label: 'Mutlu Müşteri', icon: Users }
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Müşteri Görüşleri
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Müşterilerimizin deneyimleri ve görüşleri bizim en değerli 
              geri bildirimlerimizdir. Her projedeki memnuniyet ve başarı hikayelerini sizlerle paylaşıyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {satisfactionStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                    <Icon className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-bordo-500">{stat.metric}</div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Statistics */}
      <section className="py-16 bg-gradient-to-br from-bordo-600 to-bordo-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">Müşteri Memnuniyet İstatistikleri</h2>
              <p className="text-bordo-100">Hizmet kalitemizin sayısal göstergeleri</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {satisfactionStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-4xl font-bold">{stat.metric}</div>
                    <div className="text-bordo-100">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Değerlendirmeleri</h2>
              <p className="text-gray-600 text-lg">Çalıştığımız müşterilerimizin gerçek deneyimleri</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users size={20} className="text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.position}</p>
                          <p className="text-sm text-orange-600 font-medium">{review.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                      </div>
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <Quote size={32} className="text-orange-200" />
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      "{review.review}"
                    </p>
                    
                    {/* Project Info */}
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Building size={14} />
                          <span>{review.project}</span>
                        </div>
                        <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {review.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Testimonial Call to Action */}
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white space-y-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Sizin de Görüşünüz Bizim İçin Değerli</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Projesi tamamlanan müşterilerimizden gelen geri bildirimler, 
                  hizmet kalitemizi sürekli geliştirmemize yardımcı oluyor.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                  >
                    <MessageSquare size={20} />
                    <span>Görüş Bildir</span>
                  </Link>
                <Link 
                  href="/referanslarimiz/basari-hikayeleri" 
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg"
                >
                  <ArrowRight size={20} />
                  <span>Başarı Hikayeleri</span>
                </Link>
                  <Link 
                    href="/projelerimiz" 
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-bordo-600 transition-colors text-lg"
                  >
                    <ArrowRight size={20} />
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