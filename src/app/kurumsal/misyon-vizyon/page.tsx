import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Compass, Rocket, Globe, Lightbulb, Users, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Misyon & Vizyon - AOM Engineering | Geleceği Şekillendiriyoruz",
  description: "AOM Engineering'in misyonu ve vizyonu. Teknoloji ile insanlığın yaşam kalitesini artırmak, Türkiye'nin lider otomasyon firması olmak.",
  keywords: "misyon, vizyon, kurumsal değerler, teknoloji vizyonu, endüstriyel otomasyon misyon",
  openGraph: {
    title: "Misyon & Vizyon - AOM Engineering",
    description: "Teknoloji ile insanlığın yaşam kalitesini artırmak için çalışıyoruz.",
    type: "website",
  },
};

export default function MisyonVizyonPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-36">

      {/* Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Geleceği Şekillendiriyoruz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknoloji ile insanlığın yaşam kalitesini artırmak için çalışıyoruz
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <Card className="relative border-none shadow-xl bg-white h-full overflow-hidden">
              <CardContent className="p-12 relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Target className="w-10 h-10 text-bordo-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed flex-grow">
                  <p className="border-l-4 border-bordo-600 pl-6">
                    Endüstriyel otomasyon alanında <strong className="text-gray-900">en ileri teknolojileri</strong> kullanarak,
                    müşterilerimize verimlilik, kalite ve sürdürülebilirlik odaklı
                    çözümler sunmak.
                  </p>
                  <p>
                    İnovatif yaklaşımlarımızla sektöre öncülük ederek, <strong className="text-bordo-600">Türkiye'nin
                      teknolojik gelişimine</strong> katkı sağlamak ve global rekabette
                    ülkemizi öne çıkarmak.
                  </p>
                  <p className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    Müşteri memnuniyetini en üst düzeyde tutarak, uzun vadeli
                    iş ortaklıkları kurma ve sürdürme konusunda örnek olmak.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <Card className="relative border-none shadow-xl bg-white h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
              <CardContent className="p-12 relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Eye className="w-10 h-10 text-slate-700" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-6 flex-grow">
                  <p className="border-l-4 border-slate-800 pl-6">
                    <strong className="text-gray-900">2030 yılına kadar</strong> Türkiye'nin en saygın endüstriyel otomasyon
                    şirketi olarak, uluslararası pazarlarda güçlü bir konuma
                    sahip olmak.
                  </p>
                  <p>
                    Sürdürülebilir teknolojiler ile çevre dostu çözümler üreterek,
                    <strong className="text-bordo-600">gelecek nesillere</strong> daha yaşanılabilir bir dünya bırakmak.
                  </p>
                  <p className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    Yapay zeka ve Endüstri 4.0 teknolojilerinde öncü rol oynayarak,
                    geleceğin akıllı fabrikalarını şekillendirmek.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <Card className="mb-16 border-none shadow-xl bg-white">
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                Temel Değerlerimiz
              </CardTitle>
              <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mt-4"></div>
              <p className="text-lg text-gray-600 mt-4">
                İş hayatımızda ve müşteri ilişkilerinde rehber aldığımız ilkeler
              </p>
            </CardHeader>
            <CardContent className="pb-12 px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-bordo-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">İnovasyon</h3>
                  <p className="text-sm text-gray-600">
                    Sürekli araştırma ve geliştirme ile sektöre yenilik katıyoruz
                  </p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-bordo-100">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Kalite</h3>
                  <p className="text-sm text-gray-600">
                    En yüksek kalite standartlarına bağlı kalarak çözüm sunuyoruz
                  </p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-bordo-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">İş Birliği</h3>
                  <p className="text-sm text-gray-600">
                    Müşterilerimizle güçlü ortaklıklar kurarak başarıya ulaşıyoruz
                  </p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-bordo-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Sürdürülebilirlik</h3>
                  <p className="text-sm text-gray-600">
                    Çevre bilinci ile gelecek nesilleri düşünerek hareket ediyoruz
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Objectives */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stratejik Hedeflerimiz</h2>
              <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-bordo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 text-bordo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Teknolojik Liderlik</h3>
                      <p className="text-gray-600">
                        Sektörün en yeni teknolojilerini takip ederek, müşterilerimize
                        en ileri çözümleri sunmak.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-bordo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-bordo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Pazar Genişletme</h3>
                      <p className="text-gray-600">
                        Yurt içi ve yurt dışı pazarlarda güçlü bir konuma sahip olarak
                        büyüme hedeflerimizi gerçekleştirmek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-bordo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-bordo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">İnsan Kaynakları</h3>
                      <p className="text-gray-600">
                        Nitelikli personel kadromuzu güçlendirerek, sektörün en
                        yetenekli uzmanlarını bünyemizde toplamak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Kalite Standardları</h3>
                      <p className="text-gray-600">
                        Uluslararası kalite standartlarına uygun üretim ve hizmet
                        anlayışını sürdürmek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">AR-GE Yatırımları</h3>
                      <p className="text-gray-600">
                        Araştırma ve geliştirme faaliyetlerine sürekli yatırım yaparak
                        yenilikçi çözümler üretmek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Sürdürülebilir Gelişim</h3>
                      <p className="text-gray-600">
                        Çevresel sorumluluk bilinciyle, sürdürülebilir teknolojiler
                        geliştirmek ve uygulamak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-none shadow-xl bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bordo-400 via-orange-500 to-bordo-400"></div>
              <CardContent className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Geleceği Birlikte Şekillendirelim
                </h2>
                <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                  Misyon ve vizyonumuz doğrultusunda, sizlerle birlikte daha iyi bir gelecek inşa etmek istiyoruz.
                </p>
                <Button size="lg" className="bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  İletişime Geçin
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}