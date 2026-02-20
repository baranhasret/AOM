import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Users, Target, Heart, Lightbulb } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - AOM Engineering | Endüstriyel Otomasyon Şirketi",
  description: "AOM Engineering olarak endüstriyel otomasyon, robotik sistemler ve medikal cihazlar alanında yenilikçi çözümler sunuyoruz. 15+ yıllık deneyimimizle yanınızdayız.",
  keywords: "hakkımızda, AOM engineering, endüstriyel otomasyon şirketi, otomasyon firması, robotik sistemler firması, ankara otomasyon",
  openGraph: {
    title: "Hakkımızda - AOM Engineering",
    description: "Endüstriyel otomasyon alanında yenilikçi çözümler sunan, teknoloji odaklı firmamızı tanıyın.",
    type: "website",
  },
  alternates: {
    canonical: 'https://angoraotomasyon.com/kurumsal/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  // About Page Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Hakkımızda - AOM Engineering",
    "description": "AOM Engineering olarak endüstriyel otomasyon, robotik sistemler ve medikal cihazlar alanında yenilikçi çözümler sunuyoruz.",
    "url": "https://angoraotomasyon.com/kurumsal/hakkimizda",
    "mainEntity": {
      "@type": "Organization",
      "name": "AOM Engineering",
      "description": "Endüstriyel otomasyon ve robotik sistemler alanında uzman çözümler sunan teknoloji şirketi",
      "foundingDate": "2008",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "20-50"
      },
      "slogan": "Teknoloji ile Geleceği Şekillendiriyoruz"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="min-h-screen bg-slate-50 pt-36">

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">

          {/* Company Profile Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bordo-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-bordo-100 rounded-2xl flex items-center justify-center mb-8">
                  <Building2 className="w-8 h-8 text-bordo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Şirket Profili</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">AOM Engineering</strong>, 2008 yılından bu yana endüstriyel otomasyon sektöründe faaliyet gösteren, dinamik yapısı ve mühendislik odaklı yaklaşımıyla öne çıkan bir teknoloji firmasıdır.
                  </p>
                  <p>
                    Müşterilerimize sadece ürün değil, <strong className="text-bordo-600">değer yaratan çözümler</strong> sunuyoruz. Endüstriyel otomasyon sistemleri, robotik entegrasyonlar ve özel makine imalatı konularında uçtan uca hizmet veriyoruz.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">25+</div>
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">Yıl</div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">Sektör Tecrübesi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Hedefimiz */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-bordo-200 group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hedefimiz</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Endüstriyel otomasyon alanında Türkiye'nin lider, dünyanın sayılı firmalarından biri olmak. Sürdürülebilir büyüme ile global pazarda rekabet gücümüzü artırmak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vizyonumuz */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-bordo-200 group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-bordo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-bordo-100 transition-colors">
                    <Lightbulb className="w-6 h-6 text-bordo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Vizyonumuz</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Geleceğin teknolojilerini bugünden tasarlayarak, endüstriyel dönüşüme öncülük etmek. Akıllı fabrikalar ve verimli üretim süreçleri ile sanayiye yön vermek.
                    </p>
                  </div>
                </div>
              </div>

              {/* Değerlerimiz */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-bordo-200 group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Değerlerimiz</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Güven, kalite, yenilikçilik ve müşteri odaklılık. Her projemizde etik değerlere bağlı kalarak, çevreye ve insana saygılı çözümler üretmek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Clean & Modern */}
          <div className="bg-white rounded-3xl p-12 shadow-xl shadow-slate-200/60 mb-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bordo-400 via-orange-500 to-bordo-400"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">25+</div>
                <div className="text-bordo-600 font-medium tracking-wide uppercase text-sm">Yıllık Deneyim</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">1000+</div>
                <div className="text-bordo-600 font-medium tracking-wide uppercase text-sm">Tamamlanan Proje</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">100+</div>
                <div className="text-bordo-600 font-medium tracking-wide uppercase text-sm">Mutlu Müşteri</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">50+</div>
                <div className="text-bordo-600 font-medium tracking-wide uppercase text-sm">İş Ortağı</div>
              </div>
            </div>
          </div>

          {/* Expertise Areas - Clean Cards */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Uzmanlık Alanlarımız</h2>
              <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-bordo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bordo-500 transition-colors">
                  <Building2 className="w-7 h-7 text-bordo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Endüstriyel Otomasyon</h3>
                <p className="text-sm text-gray-600 leading-relaxed">PLC, SCADA ve HMI sistemleri ile tam entegre çözümler.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                  <Users className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Robotik Sistemler</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Endüstriyel robot kolları ve otomasyon entegrasyonu.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Heart className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Medikal Cihazlar</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Sağlık sektörü için güvenilir ve hassas teknolojik çözümler.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                  <Award className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Oksijen Sistemleri</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Yüksek verimli endüstriyel ve medikal oksijen jeneratörleri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}