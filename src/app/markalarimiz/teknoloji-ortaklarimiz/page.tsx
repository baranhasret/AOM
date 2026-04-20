import { Building2, Users, Globe, Star, CheckCircle, ArrowRight, Award, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknoloji Ortaklarımız | Aom Teknik',
  description: 'Dünya lideri teknoloji markaları ile stratejik ortaklıklar. Siemens, Schneider, Omron, Yaskawa, Delta, SMC, Autonics ve Inovance resmi distribütörü.',
  keywords: 'teknoloji ortakları, siemens, schneider, omron, yaskawa, delta, smc, autonics, inovance, otomasyon markaları'
};

export default function TeknolojOrtaklarimizPage() {
  const brands = [
    {
      name: 'YASKAWA',
      description: 'Endüstriyel otomasyon ve robotik çözümlerinde dünya lideri',
      href: '/markalarimiz/yaskawa',
      icon: () => <img src="/images/yaskawa.png" alt="YASKAWA" className="w-20 h-20 object-contain" />,
      specialty: 'Robotik & Sürücü Sistemleri',
      experience: '100+ yıllık deneyim',
      highlight: 'MOTOMAN robotları ve AC sürücüler'
    },
    {
      name: 'INOVANCE',
      description: 'Yenilikçi otomasyon teknolojileri ve akıllı üretim çözümleri',
      href: '/markalarimiz/inovance',
      icon: () => <img src="/images/inovance.png" alt="INOVANCE" className="w-20 h-20 object-contain" />,
      specialty: 'Akıllı Otomasyon',
      experience: 'AI destekli teknolojiler',
      highlight: 'Endüstri 4.0 ve IoT entegrasyonu'
    },
    {
      name: 'OMRON',
      description: 'Gelişmiş sensör teknolojileri ve kontrol sistemleri',
      href: '/markalarimiz/omron',
      icon: () => <img src="/images/omron.png" alt="OMRON" className="w-20 h-20 object-contain" />,
      specialty: 'Sensör & Kontrol',
      experience: '90 yıllık kalite',
      highlight: 'Fotoelektrik sensörler ve güvenlik sistemleri'
    },
    {
      name: 'SIEMENS',
      description: 'Dijital fabrika ve endüstri 4.0 çözümlerinde öncü marka',
      href: '/markalarimiz/siemens',
      icon: () => <img src="/images/siemens.png" alt="SIEMENS" className="w-20 h-20 object-contain" />,
      specialty: 'Endüstriyel Otomasyon',
      experience: '175 yıllık tecrübe',
      highlight: 'SIMATIC PLC ve dijital fabrika çözümleri'
    },
    {
      name: 'SCHNEIDER',
      description: 'Enerji yönetimi ve endüstriyel otomasyon çözümleri',
      href: '/markalarimiz/schneider',
      icon: () => <img src="/images/schneider.pn.png" alt="SCHNEIDER" className="w-20 h-20 object-contain" />,
      specialty: 'Enerji Yönetimi',
      experience: 'Sürdürülebilir teknolojiler',
      highlight: 'EcoStruxure platform ve enerji verimliliği'
    },
    {
      name: 'DELTA',
      description: 'Güç elektroniği ve enerji verimli çözümler',
      href: '/markalarimiz/delta',
      icon: () => <img src="/images/delta.png" alt="DELTA" className="w-20 h-20 object-contain" />,
      specialty: 'Güç Elektroniği',
      experience: '50 yıllık uzmanlik',
      highlight: 'VFD inverterler ve yenilenebilir enerji'
    },
    {
      name: 'SMC',
      description: 'Pnömatik otomasyon ve hava teknolojileri uzmanı',
      href: '/markalarimiz/smc',
      icon: () => <img src="/images/smc.png" alt="SMC" className="w-20 h-20 object-contain" />,
      specialty: 'Pnömatik Sistemler',
      experience: '60 yıllık liderlik',
      highlight: 'Pnömatik silindirler ve hava kontrol sistemleri'
    },
    {
      name: 'AUTONICS',
      description: 'Sensör, kontrol ve otomasyon ürünlerinde global marka',
      href: '/markalarimiz/autonics',
      icon: () => <img src="/images/autonics.png" alt="AUTONICS" className="w-20 h-20 object-contain" />,
      specialty: 'Sensör & Kontrol',
      experience: '40+ yıllık tecrübe',
      highlight: 'Endüstriyel sensörler ve otomasyon çözümleri'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">



      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {brands.map((brand, index) => {
              const IconComponent = brand.icon;
              return (
                <Link
                  key={index}
                  href={brand.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 transform hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    {/* Brand Icon */}
                    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-xl group-hover:bg-bordo-50 transition-colors">
                      <IconComponent />
                    </div>

                    {/* Brand Info */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-bordo-50 text-bordo-700 rounded-full">
                        <Star className="w-3 h-3" />
                        <span className="text-xs font-semibold">{brand.specialty}</span>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {brand.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-4 h-4 text-bordo-500" />
                          <span className="font-medium">{brand.experience}</span>
                        </div>
                        <div className="text-xs text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                          {brand.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center justify-center pt-2">
                      <div className="flex items-center gap-2 text-bordo-600 group-hover:text-bordo-700 font-semibold">
                        <span>Detayları Gör</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teknoloji Ortaklığı Avantajları</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Dünya lideri markalarla ortaklığımız sayesinde müşterilerimize en iyi teknolojileri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Orijinal Ürünler</h3>
              <p className="text-gray-600">Tüm ürünlerimiz orijinal ve garantili</p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Uzman Destek</h3>
              <p className="text-gray-600">Deneyimli teknik ekibimizle 7/24 destek</p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Standartlar</h3>
              <p className="text-gray-600">Uluslararası kalite ve güvenlik standartları</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Teknoloji Ortaklarımız Hakkında Bilgi Alın</h2>
          <p className="text-xl text-gray-300 mb-8">
            Dünya lideri markalarımız hakkında detaylı bilgi almak için uzman ekibimizle görüşün.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>İletişime Geçin</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}