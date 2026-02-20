import { Building2, Users, Globe, Star, CheckCircle, ArrowRight, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Markalarımız - Endüstriyel Otomasyon Markaları | AOM Engineering',
  description: 'Siemens, Schneider, Omron, Yaskawa, Delta, SMC, Autonics, Inovance. Dünya çapında güvenilir endüstriyel otomasyon markalarının yetkili distribütörü.',
  keywords: 'siemens türkiye, schneider electric, omron türkiye, yaskawa robot, delta plc, smc pnömatik, autonics sensör, inovance',
};

export default function MarkalarimizPage() {
  const brands = [
    {
      name: 'SİEMENS',
      description: 'PLC, HMI, SCADA ve endüstri 4.0 çözümlerinde dünya lideri',
      href: '/markalarimiz/siemens',
      logo: '/images/siemens.png',
      specialty: 'PLC & SCADA',
      products: ['S7-1200/1500', 'SIMATIC HMI', 'WinCC']
    },
    {
      name: 'SCHNEIDER ELECTRIC',
      description: 'Enerji yönetimi ve endüstriyel otomasyon çözümleri',
      href: '/markalarimiz/schneider',
      logo: '/images/schneider.png',
      specialty: 'Enerji & Otomasyon',
      products: ['Modicon PLC', 'Altivar İnverter', 'Harmony']
    },
    {
      name: 'OMRON',
      description: 'Gelişmiş sensör teknolojileri ve kontrol sistemleri',
      href: '/markalarimiz/omron',
      logo: '/images/omron.png',
      specialty: 'Sensör & Kontrol',
      products: ['CP/CJ Series', 'Proximity', 'Vision']
    },
    {
      name: 'YASKAWA',
      description: 'Endüstriyel robot ve servo sürücü sistemlerinde öncü',
      href: '/markalarimiz/yaskawa',
      logo: '/images/yaskawa.png',
      specialty: 'Robotik & Servo',
      products: ['Motoman Robot', 'Sigma-7', 'A1000']
    },
    {
      name: 'DELTA',
      description: 'Güç elektroniği, PLC ve enerji verimli çözümler',
      href: '/markalarimiz/delta',
      logo: '/images/delta.png',
      specialty: 'Güç Elektroniği',
      products: ['DVP PLC', 'VFD İnverter', 'DOP HMI']
    },
    {
      name: 'AUTONICS',
      description: 'Sensör, enkoder, sayıcı ve kontrol cihazları uzmanı',
      href: '/markalarimiz/autonics',
      logo: '/images/autonics.png',
      specialty: 'Sensör & Enkoder',
      products: ['Proximity', 'Encoder', 'Timer']
    },
    {
      name: 'SMC',
      description: 'Pnömatik otomasyon ve hava teknolojileri dünya lideri',
      href: '/markalarimiz/smc',
      logo: '/images/smc.png',
      specialty: 'Pnömatik',
      products: ['Silindir', 'Valf', 'FRL']
    },
    {
      name: 'İNOVANCE',
      description: 'Yenilikçi otomasyon teknolojileri ve akıllı üretim',
      href: '/markalarimiz/inovance',
      logo: '/images/inovance.png',
      specialty: 'Akıllı Otomasyon',
      products: ['AM Servo', 'MD İnverter', 'IVC HMI']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-bordo-600/20 border border-bordo-600/30 rounded-full px-6 py-2">
              <Building2 className="w-4 h-4 text-bordo-500" />
              <span className="text-sm font-semibold text-bordo-400">Global Markalar</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-bordo-100 bg-clip-text text-transparent">
              Markalarımız
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dünya çapında <strong className="text-white">güvenilir teknoloji markaları</strong> ile ortaklıklarımız. 
              En yeni teknolojileri müşterilerimize sunarak, endüstriyel ihtiyaçlara en uygun çözümler sağlıyoruz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">8+ Global Marka</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">Yetkili Distribütör</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-bordo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">Uzman Teknik Destek</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">Global Kalite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.href}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-bordo-600 to-gray-800 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Brand Logo */}
                  <div className="flex items-center justify-center h-24">
                    <div className="relative w-32 h-20">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Brand Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-bordo-50 border border-bordo-200 rounded-full">
                      <Star size={12} className="text-bordo-600" />
                      <span className="text-xs font-semibold text-bordo-700">{brand.specialty}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">
                      {brand.description}
                    </p>
                  </div>
                  
                  {/* Products */}
                  <div className="space-y-2">
                    {brand.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-bordo-600 group-hover:text-bordo-700 font-semibold">
                      <span>Detayları Gör</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-bordo-600 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold">Aradığınız Markayı Bulamadınız mı?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Listelenen markaların yanı sıra birçok global marka ile iş ortaklığımız bulunmaktadır. 
              İhtiyacınız olan ürün için bizimle iletişime geçin.
            </p>
            <a href="/iletisim" className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-bordo-700 transition-all transform hover:scale-105 shadow-xl">
              İletişime Geçin <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}