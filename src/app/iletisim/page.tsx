import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, Users, Target, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim - AOM Engineering | Teklif Al, Bize Ulaşın",
  description: "AOM Engineering iletişim bilgileri. Endüstriyel otomasyon projeleri için ücretsiz teklif alın. Telefon: +90 543 126 46 72, E-posta: info@angoraotomasyon.com",
  keywords: "İletişim, teklif al, otomasyon teklifi, teknik destek, ankara otomasyon firması, iletişim bilgileri",
  openGraph: {
    title: "İletişim - AOM Engineering",
    description: "Endüstriyel otomasyon projeleri için bizimle iletişime geçin.",
    type: "website",
  },
};

export default function IletisimPage() {
  // Contact Page Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "İletişim - AOM Engineering",
    "description": "AOM Engineering iletişim bilgileri ve iletişim formları",
    "url": "https://angoraotomasyon.com/iletisim",
    "mainEntity": {
      "@type": "Organization",
      "name": "AOM Engineering",
      "telephone": "+90-543-126-46-72",
      "email": "info@angoraotomasyon.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "İvedik OSB. Mahallesi 1458. Cadde 22/33",
        "addressLocality": "Yenimahalle",
        "addressRegion": "Ankara",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-543-126-46-72",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"]
      }
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      description: 'Doğrudan görüşme için bizi arayabilirsiniz',
      contact: '+90 (543) 126 46 72',
      action: 'Ara',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'E-posta',
      description: 'Detaylı bilgi için e-posta gönderebilirsiniz',
      contact: 'info@angoraotomasyon.com',
      action: 'E-posta Gönder',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Adres',
      description: 'Ofisimizi ziyaret edebilirsiniz',
      contact: 'İvedik OSB. Mah. 1458. Cadde 22/33 Yenimahalle/Ankara',
      action: 'Konum Gör',
      color: 'orange'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cumartesi', hours: '09:00 - 18:00' },
    { day: 'Pazar', hours: 'Kapalı' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-bordo-50 to-bordo-100 border-bordo-200',
      green: 'from-green-50 to-green-100 border-green-200',
      orange: 'from-orange-50 to-orange-100 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-bordo-600',
      green: 'text-green-600',
      orange: 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main>
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
                İletişim
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Projeleriniz, sorularınız ve iş birliği teklifleriniz için
                bizimle iletişime geçin. Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">24 Saat</div>
                  <div className="text-sm text-gray-300 mt-1">Hızlı Dönüş</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">7/24</div>
                  <div className="text-sm text-gray-300 mt-1">Teknik Destek</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">Ücretsiz</div>
                  <div className="text-sm text-gray-300 mt-1">Ön Görüşme</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim Yöntemlerimiz</h2>
              <p className="text-gray-600 text-lg">Size en uygun yöntemle bizimle iletişime geçin</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(method.color)} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                        <Icon size={32} className={getIconColor(method.color)} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 mb-4">{method.description}</p>
                        <p className="text-lg font-medium text-gray-900 mb-6">{method.contact}</p>
                      </div>

                      {method.color === 'blue' ? (
                        <a href="tel:+905431264672" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          {method.action}
                        </a>
                      ) : method.color === 'green' ? (
                        <a href="mailto:info@angoraotomasyon.com" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          {method.action}
                        </a>
                      ) : (
                        <a href="https://maps.google.com/?q=İvedik+OSB+1458+Cadde+22/33+Yenimahalle+Ankara" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          {method.action}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Working Hours */}
        <div className="py-16 bg-white">
          <div className="max-w-full mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Working Hours */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-bordo-100 rounded-2xl">
                    <Clock size={32} className="text-bordo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Çalışma Saatleri</h2>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-bordo-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-bordo-50 rounded-xl p-6 border border-bordo-200">
                  <div className="flex items-start gap-3">
                    <MessageSquare size={20} className="text-bordo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-bordo-900 mb-2">Acil Durumlar</h4>
                      <p className="text-bordo-700 text-sm">
                        Kritik sistemler için 7/24 acil destek hattımız:
                        <span className="font-medium"> +90 (543) 126 46 72</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-100 rounded-2xl">
                    <Mail size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Hızlı İletişim</h2>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ad Soyad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="E-posta Adresi"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Telefon Numarası"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                  />

                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent">
                    <option value="">Konu Seçin</option>
                    <option value="proje">Proje Teklifi</option>
                    <option value="teknik">Teknik Destek</option>
                    <option value="genel">Genel Bilgi</option>
                    <option value="kariyer">Kariyer</option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Mesajınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-bordo-600 text-white py-3 rounded-lg font-medium hover:bg-bordo-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    <span>Mesaj Gönder</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Categories */}
        <div className="py-20">
          <div className="max-w-full mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim Kategorileri</h2>
              <p className="text-gray-600 text-lg">İhtiyacınıza özel iletişim seçeneklerimiz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/iletisim/bilgiler"
                className="group bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-bordo-200"
              >
                <div className="w-12 h-12 bg-bordo-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-bordo-200 transition-colors">
                  <MessageSquare size={24} className="text-bordo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Genel Bilgiler</h3>
                <p className="text-gray-600 text-sm">Adres, telefon ve genel bilgiler</p>
                <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                  <span className="font-medium text-sm">Detaylar</span>
                  <ArrowRight size={14} />
                </div>
              </Link>

              <Link
                href="/iletisim/teknik-destek"
                className="group bg-gradient-to-br from-bordo-50 to-bordo-100 rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-bordo-200"
              >
                <div className="w-12 h-12 bg-bordo-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-bordo-200 transition-colors">
                  <Users size={24} className="text-bordo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Teknik Destek</h3>
                <p className="text-gray-600 text-sm">7/24 teknik yardım ve destek</p>
                <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:gap-3 transition-all">
                  <span className="font-medium text-sm">Destek Al</span>
                  <ArrowRight size={14} />
                </div>
              </Link>

              <Link
                href="/iletisim/teklif"
                className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-green-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                  <FileText size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Teklif Talebi</h3>
                <p className="text-gray-600 text-sm">Proje teklifleri ve fiyat bilgisi</p>
                <div className="flex items-center justify-center gap-2 text-green-600 group-hover:gap-3 transition-all">
                  <span className="font-medium text-sm">Teklif Al</span>
                  <ArrowRight size={14} />
                </div>
              </Link>

              <Link
                href="/iletisim/kariyer"
                className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border border-purple-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors">
                  <Briefcase size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Kariyer</h3>
                <p className="text-gray-600 text-sm">İş başvuruları ve kariyer fırsatları</p>
                <div className="flex items-center justify-center gap-2 text-purple-600 group-hover:gap-3 transition-all">
                  <span className="font-medium text-sm">Başvur</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Projenizi Konuşalım</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Uzman ekibimizle projenizin detaylarını görüşün ve
                  en uygun çözümü birlikte belirleyin.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/iletisim/teklif"
                    className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                  >
                    <Target size={20} />
                    <span>Proje Teklifi Al</span>
                  </Link>
                  <a
                    href="tel:+905431264672"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-bordo-600 transition-colors text-lg"
                  >
                    <Phone size={20} />
                    <span>Hemen Ara</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}