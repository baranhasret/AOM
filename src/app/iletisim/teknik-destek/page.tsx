import { Users, Phone, Mail, Clock, AlertCircle, CheckCircle, ArrowRight, Headphones, Settings } from 'lucide-react';
import Link from 'next/link';

export default function TeknikDestekPage() {
  const supportChannels = [
    {
      icon: Phone,
      title: 'Telefon Desteği',
      description: 'Acil durumlar için doğrudan telefon desteği',
      contact: '+90 (543) 126 46 72',
      availability: '7/24',
      responseTime: 'Anında',
      color: 'red'
    },
    {
      icon: Mail,
      title: 'E-posta Desteği',
      description: 'Detaylı teknik sorular için e-posta',
      contact: 'info@angoraotomasyon.com',
      availability: 'Mesai Saatleri',
      responseTime: '2 Saat',
      color: 'blue'
    },
    {
      icon: Headphones,
      title: 'Uzaktan Destek',
      description: 'TeamViewer ile uzaktan bağlantı',
      contact: 'Telefon ile randevu',
      availability: 'Mesai Saatleri',
      responseTime: '15 Dakika',
      color: 'green'
    }
  ];

  const supportTypes = [
    {
      title: 'Acil Durum Desteği',
      description: 'Sistem arızaları ve kritik problemler',
      priority: 'Yüksek',
      icon: AlertCircle,
      features: ['7/24 erişilebilir', 'Anında müdahale', 'Uzaktan destek', 'Sahaya çıkma'],
      color: 'red'
    },
    {
      title: 'Genel Teknik Destek',
      description: 'Rutin bakım ve teknik sorular',
      priority: 'Normal',
      icon: Settings,
      features: ['Mesai saatleri', '2 saat yanıt', 'E-posta desteği', 'Telefon desteği'],
      color: 'blue'
    },
    {
      title: 'Planlı Bakım',
      description: 'Periyodik bakım ve güncellemeler',
      priority: 'Düşük',
      icon: CheckCircle,
      features: ['Randevulu hizmet', 'Önceden planlama', 'Detaylı rapor', 'Önleyici bakım'],
      color: 'green'
    }
  ];

  const supportProcess = [
    {
      step: 1,
      title: 'Sorun Bildirimi',
      description: 'Sorununuzu telefon, e-posta veya online form ile bildirin'
    },
    {
      step: 2,
      title: 'İlk Değerlendirme',
      description: 'Uzman ekibimiz sorununuzu kategorize eder ve önceliklendirir'
    },
    {
      step: 3,
      title: 'Çözüm Süreci',
      description: 'Uzaktan veya sahada gerçekleşen müdahale ile sorun çözülür'
    },
    {
      step: 4,
      title: 'Takip ve Raporlama',
      description: 'Çözüm sonrası takip ve detaylı rapor sunumu'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'from-bordo-50 to-bordo-100 border-bordo-200',
      blue: 'from-blue-50 to-blue-100 border-blue-200',
      green: 'from-green-50 to-green-100 border-green-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: 'text-bordo-600',
      blue: 'text-blue-600',
      green: 'text-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6 mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Teknik Destek
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                7/24 kesintisiz teknik destek hizmeti ile sistemlerinizin
                sorunsuz çalışmasını sağlıyoruz. Uzman ekibimiz her zaman yanınızda.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">7/24</div>
                  <div className="text-sm text-gray-300 mt-1">Kesintisiz Hizmet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">15 Dk</div>
                  <div className="text-sm text-gray-300 mt-1">Ortalama Yanıt</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bordo-500">%98</div>
                  <div className="text-sm text-gray-300 mt-1">Çözüm Oranı</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Destek Kanalları</h2>
              <p className="text-gray-600 text-lg">Size en uygun yöntemle teknik destek alın</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(channel.color)} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                        <Icon size={32} className={getIconColor(channel.color)} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                        <p className="text-gray-600 mb-4">{channel.description}</p>
                        <p className="text-lg font-medium text-gray-900 mb-2">{channel.contact}</p>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Erişilebilirlik:</span>
                            <span className="font-medium">{channel.availability}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Yanıt Süresi:</span>
                            <span className="font-medium">{channel.responseTime}</span>
                          </div>
                        </div>
                      </div>

                      {channel.color === 'red' ? (
                        <a href="tel:+905431264672" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          Hemen Ara
                        </a>
                      ) : channel.color === 'blue' ? (
                        <a href="mailto:info@angoraotomasyon.com?subject=Teknik%20Destek%20Talebi" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          E-posta Gönder
                        </a>
                      ) : (
                        <a href="tel:+905431264672" className="block w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center">
                          Randevu Al
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Destek Türleri</h2>
              <p className="text-gray-600 text-lg">İhtiyacınıza göre uygun destek seviyesi</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(type.color)} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Icon size={24} className={getIconColor(type.color)} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                          <p className="text-sm text-gray-600">Öncelik: {type.priority}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {type.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Özellikler:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle size={14} className="text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Destek Süreci</h2>
              <p className="text-gray-600 text-lg">Sorun bildiriminden çözüme kadar izlenen adımlar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportProcess.map((process, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                  {index < supportProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-300 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 bg-bordo-600 rounded-2xl">
                    <AlertCircle size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold">Acil Durum Desteği</h2>
                </div>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Kritik sistemlerde yaşanan arızalar için 7/24 acil destek hattımız aktif.
                  Anında müdahale ile sistem çalışmasını yeniden sağlıyoruz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+905431264672"
                    className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                  >
                    <Phone size={20} />
                    <span>Acil Hat: +90 (543) 126 46 72</span>
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-bordo-600 transition-colors text-lg"
                  >
                    <ArrowRight size={20} />
                    <span>Diğer İletişim Yöntemleri</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}