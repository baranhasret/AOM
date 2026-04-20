import { Truck, MapPin, Phone, Mail, Globe, Award, CheckCircle, ArrowRight, Building2, Package, Shield } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tedarik Markalarımız | Aom Teknik',
  description: 'Siemens, YASKAWA, OMRON, Schneider Electric ve daha fazla global marka ile tedarik ve distribütör ortaklıkları. Türkiye ve dünya genelinde güvenilir tedarik çözümleri.',
  keywords: 'tedarikçi markalar, distribütör, siemens türkiye, yaskawa, omron, schneider, harting, cembre, weg, baykon, klemsan'
};

export default function DistributorlerPage() {
  const distributors = [
    {
      name: 'Siemens Türkiye',
      region: 'Türkiye',
      description: 'Siemens ürünlerinin Türkiye genelinde dağıtımını sağlayan tedarik markası.',
      products: ['SIMATIC PLC', 'HMI Paneller', 'Sürücü Sistemleri'],
      logo: '/logo/siemens.png'
    },
    {
      name: 'YASKAWA Eurasia',
      region: 'Avrasya',
      description: 'YASKAWA robotik ve otomasyon çözümlerinin bölgesel tedarik markası.',
      products: ['MOTOMAN Robotlar', 'AC Sürücüler', 'Servo Sistemler'],
      logo: '/logo/yaskawa.png'
    },
    {
      name: 'OMRON Electronics',
      region: 'Türkiye & Balkanlar',
      description: 'OMRON sensör ve kontrol teknolojilerinin bölgesel temsilcisi.',
      products: ['Sensörler', 'Güvenlik Sistemleri', 'PLC Çözümleri'],
      logo: '/logo/omron.png'
    },
    {
      name: 'Schneider Electric',
      region: 'Türkiye',
      description: 'Enerji yönetimi ve otomasyon çözümlerinde global lider.',
      products: ['Otomasyon Sistemleri', 'Elektrik Dağıtım', 'Enerji Yönetimi'],
      logo: '/logo/schneider.png'
    },
    {
      name: 'AVEVA',
      region: 'Global',
      description: 'Endüstriyel yazılım ve dijital dönüşüm çözümleri.',
      products: ['SCADA Sistemleri', 'MES Yazılımları', 'Dijital İkiz']
    },
    {
      name: 'Telemecanique Sensors',
      region: 'Avrupa',
      description: 'Schneider Electric ailesinden endüstriyel sensör çözümleri.',
      products: ['Fotoelektrik Sensörler', 'İndüktif Sensörler', 'Kapasitif Sensörler'],
      logo: '/logo/telemecanique.png'
    },
    {
      name: 'Himel',
      region: 'Türkiye & Orta Doğu',
      description: 'Elektrik dağıtım panoları ve kontrol ekipmanları.',
      products: ['Elektrik Panoları', 'Anahtarlama Ekipmanları', 'Klemens Kutuları'],
      logo: '/logo/himel.png'
    },
    {
      name: 'HARTING',
      region: 'Avrupa & Asya',
      description: 'Endüstriyel bağlantı teknolojileri lideri.',
      products: ['Endüstriyel Konkektörler', 'Ağ Altyapısı', 'PCB Konkektörleri'],
      logo: '/logo/harting.png'
    },
    {
      name: 'CEMBRE',
      region: 'İtalya & Türkiye',
      description: 'Elektrik bağlantı elemanları ve kablo aksesuarları.',
      products: ['Kablo Uçları', 'Sıkma Araçları', 'Bağlantı Elemanları'],
      logo: '/logo/cembre.png'
    },
    {
      name: 'WEG',
      region: 'Güney Amerika & Türkiye',
      description: 'Elektrik motorları ve otomasyon çözümleri.',
      products: ['Elektrik Motorları', 'Frekans İnvertörleri', 'Jeneratorörler'],
      logo: '/logo/weg.png'
    },
    {
      name: 'Katlax',
      region: 'Türkiye',
      description: 'Endüstriyel sensör ve algılama sistemleri.',
      products: ['Sensörler', 'Algılama Sistemleri', 'Kontrol Cihazları'],
      logo: '/logo/katlax.png'
    },
    {
      name: 'Relpol',
      region: 'Polonya & Türkiye',
      description: 'Röle ve elektromanyetik bileşenler üreticisi.',
      products: ['Röleler', 'Kontaktörler', 'Zaman Röleleri'],
      logo: '/logo/relpol.png'
    },
    {
      name: 'Weidmüller',
      region: 'Almanya & Global',
      description: 'Endüstriyel bağlantı ve otomasyon teknolojileri.',
      products: ['Klemensler', 'Endüstriyel Arayüzler', 'Anahtarlama Cihazları'],
      logo: '/logo/weidmuller.png'
    },
    {
      name: 'HENSEL',
      region: 'Almanya & Türkiye',
      description: 'Elektrik panoları ve muhafaza sistemleri.',
      products: ['Elektrik Panoları', 'Klemens Kutuları', 'Muhafaza Sistemleri'],
      logo: '/logo/hensel.png'
    },
    {
      name: 'Teltonika',
      region: 'Litvanya & Global',
      description: 'IoT ve M2M iletişim çözümleri.',
      products: ['IoT Cihazları', '4G/5G Routerlar', 'GPS Takip Sistemleri'],
      logo: '/logo/teltonika.png'
    },
    {
      name: 'BAYKON',
      region: 'Türkiye',
      description: 'Endüstriyel tartım sistemleri ve çözümleri.',
      products: ['Kantar Sistemleri', 'Dozaj Sistemleri', 'Tartım Ekipmanları'],
      logo: '/logo/baykon.png'
    },
    {
      name: 'Klemsan',
      region: 'Türkiye & Balkanlar',
      description: 'Elektrik dağıtım ve kontrol ekipmanları üreticisi.',
      products: ['Şalterler', 'Sigortalar', 'Elektrik Panoları'],
      logo: '/logo/klemsan.png'
    },
    {
      name: 'Cofas',
      region: 'İspanya & Türkiye',
      description: 'Elektrik bağlantı ve dağıtım çözümleri.',
      products: ['Kablo Kanalları', 'Pano Aksesuarları', 'Bağlantı Elemanları']
    },
    {
      name: 'Secomea',
      region: 'Fransa & Türkiye',
      description: 'Endüstriyel güvenlik ve kontrol sistemleri.',
      products: ['Güvenlik Röleleri', 'Acil Durdurma', 'Güvenlik Sistemleri'],
      logo: '/logo/secomea.png'
    },
    {
      name: 'Kardeş Elektrik',
      region: 'Türkiye',
      description: 'Elektrik malzemeleri ve endüstriyel ekipmanlar.',
      products: ['Elektrik Malzemeleri', 'Aydınlatma', 'Kablo Aksesuarları'],
      logo: '/logo/kardeşelektrik.png'
    },
    {
      name: 'Kenda',
      region: 'Türkiye',
      description: 'Endüstriyel otomasyon ve elektrik çözümleri.',
      products: ['Otomasyon Bileşenleri', 'Kontrol Panelleri', 'Elektrik Sistemleri'],
      logo: '/logo/kenda.png'
    },
    {
      name: 'ESA',
      region: 'Türkiye',
      description: 'Elektrik ve otomasyon sistemleri tedarikçisi.',
      products: ['Otomasyon Ekipmanları', 'Elektrik Panoları', 'Kontrol Sistemleri']
    },
    {
      name: 'Entes',
      region: 'Türkiye',
      description: 'Enerji ölçüm ve kontrol cihazları üreticisi.',
      products: ['Enerji Analizörleri', 'Multimetreler', 'Zaman Saatleri'],
      logo: '/logo/entes.png'
    },
    {
      name: 'Autonics',
      region: 'Güney Kore & Türkiye',
      description: 'Endüstriyel otomasyon sensörleri ve kontrol cihazları üreticisi.',
      products: ['Sensörler', 'Sıcaklık Kontrolörleri', 'Sayıcılar & Zamanlayıcılar'],
      logo: '/images/autonics.png'
    }
  ];

  return (
    <div className="pt-20">
      <main className="min-h-screen">



        {/* Distributors Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Tedarik Ağımız</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Dünya genelinde güvenilir markalarla kurulan stratejik ortaklıklarımız
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {distributors.map((distributor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500 group"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      {distributor.logo ? (
                        <div className="w-16 h-16 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center p-2 group-hover:border-bordo-500 transition-colors">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={distributor.logo}
                            alt={distributor.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-bordo-100 rounded-xl flex items-center justify-center group-hover:bg-bordo-200 transition-colors">
                          <Building2 className="w-8 h-8 text-bordo-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-bordo-600 transition-colors">{distributor.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{distributor.region}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {distributor.description}
                    </p>

                    {/* Products */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Package className="w-4 h-4 text-bordo-600" />
                        Ürün Portföyü:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {distributor.products.map((product, productIndex) => (
                          <span key={productIndex} className="inline-flex items-center gap-1 px-3 py-1.5 bg-bordo-50 text-bordo-700 rounded-lg text-xs font-semibold border border-bordo-200">
                            <CheckCircle className="w-3 h-3" />
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tedarik Ortaklığı Avantajları</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Global markalarla güçlü tedarik ağımızın sunduğu üstünlükler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-bordo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Güvenilir Tedarik</h3>
                <p className="text-gray-600">Orijinal ve kaliteli ürün garantisi</p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Globe className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Global Ağ</h3>
                <p className="text-gray-600">15 ülkeden geniş tedarikçi ağı</p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Truck className="w-10 h-10 text-bordo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hızlı Lojistik</h3>
                <p className="text-gray-600">24/7 kesintisiz teslimat desteği</p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Kalite Garantisi</h3>
                <p className="text-gray-600">Uluslararası standartlarda ürünler</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Tedarikçi Olmak İster misiniz?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Kaliteli ürünlerimizin dağıtımında bizimle ortaklık kurmak için
                iletişime geçin ve detaylı bilgi alın.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Başvuru Yap</span>
              </Link>
              <Link
                href="/iletisim/teklif"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Bilgi Al</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}