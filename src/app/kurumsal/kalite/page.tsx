import Link from "next/link";
import { Metadata } from "next";
import { Shield, Award, CheckCircle, Target, Users, Cog, TrendingUp, Globe, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kalite Politikamız | AOM Engineering",
  description: "ISO 9001, ISO 14001, ISO 45001 sertifikalı kalite yönetim sistemimiz. Sürekli iyileştirme ve müşteri memnuniyeti odaklı yaklaşım.",
  keywords: "kalite politikası, iso 9001, iso 14001, iso 45001, kalite yönetimi, sürekli iyileştirme"
};

export default function KalitePage() {
  const kaliteStandartlari = [
    {
      id: 1,
      standart: "ISO 9001:2015",
      aciklama: "Kalite Yönetim Sistemi",
      durum: "Sertifikalı",
      tarih: "2023"
    },
    {
      id: 2,
      standart: "ISO 14001:2015",
      aciklama: "Çevre Yönetim Sistemi",
      durum: "Sertifikalı",
      tarih: "2023"
    },
    {
      id: 3,
      standart: "ISO 45001:2018",
      aciklama: "İş Sağlığı ve Güvenliği",
      durum: "Sertifikalı",
      tarih: "2023"
    },
    {
      id: 4,
      standart: "CE Marking",
      aciklama: "Avrupa Uygunluk İşareti",
      durum: "Uygun",
      tarih: "2023"
    }
  ];

  const kaliteIlkeleri = [
    {
      id: 1,
      baslik: "Müşteri Odaklılık",
      aciklama: "Müşteri ihtiyaçlarını anlayarak, beklentilerini aşan çözümler sunuyoruz.",
      ikon: Users
    },
    {
      id: 2,
      baslik: "Sürekli İyileştirme",
      aciklama: "Süreçlerimizi sürekli gözden geçirerek, iyileştirme fırsatlarını değerlendiriyoruz.",
      ikon: TrendingUp
    },
    {
      id: 3,
      baslik: "Çalışan Katılımı",
      aciklama: "Tüm çalışanlarımızın kalite bilincini artırarak, aktif katılımını sağlıyoruz.",
      ikon: Target
    },
    {
      id: 4,
      baslik: "Süreç Yaklaşımı",
      aciklama: "Faaliyetlerimizi süreç olarak yöneterek, etkinliği artırıyoruz.",
      ikon: Cog
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-36">

      {/* Policy Statement Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Kalite Politika Beyanımız</h1>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border-l-4 border-bordo-600">
              <p className="text-xl text-gray-800 font-semibold mb-6 italic">
                "AOM Engineering olarak, müşteri memnuniyetini en üst düzeyde tutarak,
                sürekli iyileştirme anlayışıyla kaliteli ürün ve hizmet sunmayı taahhüt ediyoruz."
              </p>

              <div className="space-y-4 text-left">
                <p>
                  <strong>Endüstriyel otomasyon sektöründe</strong> faaliyet gösteren firmamız,
                  kalite yönetim sistemimizi ISO 9001:2015 standardı çerçevesinde kurmuş ve
                  sürekli olarak geliştirmektedir.
                </p>

                <p>
                  <strong>Müşteri odaklı yaklaşımımızla</strong>, ihtiyaçları doğru analiz ederek,
                  en uygun teknolojik çözümleri sunmak ve müşteri beklentilerini aşmak temel hedefimizdir.
                </p>

                <p>
                  <strong>Çalışan katılımını</strong> teşvik ederek, kalite bilincinin tüm organizasyonda
                  yaygınlaşmasını sağlamakta ve sürekli eğitim programları ile personel gelişimini desteklemekteyiz.
                </p>

                <p className="text-gray-700 text-base">
                  <strong>Tedarikçi ilişkilerinde</strong> karşılıklı güven ve şeffaflığı esas alarak,
                  kalite standartlarımızı tedarik zinciri boyunca yaygınlaştırmaktayız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalite İlkelerimiz</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Başarının temel prensipleri</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {kaliteIlkeleri.map((ilke) => (
              <div key={ilke.id} className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-bordo-200 p-8 group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-bordo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ilke.ikon className="w-8 h-8 text-bordo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bordo-600 transition-colors">{ilke.baslik}</h3>
                    <p className="text-gray-600 leading-relaxed">{ilke.aciklama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalite Standartlarımız</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Uluslararası sertifikalarımız</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {kaliteStandartlari.map((standart) => (
              <div key={standart.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-bordo-500 p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-bordo-600 transition-colors">
                      {standart.standart}
                    </h3>
                    <span className="inline-block bg-bordo-50 text-bordo-700 text-sm px-3 py-1 rounded-lg font-medium">
                      {standart.durum}
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-bordo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-bordo-200">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{standart.aciklama}</p>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-bordo-600" />
                  <span><strong>Sertifika Yılı:</strong> {standart.tarih}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalite Yönetim Sistemimiz</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Sürekli iyileştirme döngümüz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-bordo-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-100 transition-colors">
                <Target className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Planlama</h3>
              <p className="text-gray-600">
                Kalite hedeflerini belirleme, risk analizi yapma ve süreç planlaması
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-slate-100 transition-colors">
                <Cog className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Uygulama</h3>
              <p className="text-gray-600">
                Süreçlerin standartlara uygun olarak yürütülmesi ve kontrol edilmesi
              </p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-bordo-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bordo-100 transition-colors">
                <TrendingUp className="w-10 h-10 text-bordo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">İyileştirme</h3>
              <p className="text-gray-600">
                Sürekli iyileştirme faaliyetleri ve performans değerlendirmesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalite Taahhütlerimiz</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Size verdiğimiz sözler</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Müşteri Memnuniyeti</h4>
                  <p className="text-gray-600 text-sm">Her projede %100 müşteri memnuniyeti hedefliyoruz</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Zamanında Teslimat</h4>
                  <p className="text-gray-600 text-sm">Belirlenen sürelerde eksiksiz proje teslimi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Teknik Destek</h4>
                  <p className="text-gray-600 text-sm">7/24 teknik destek ve bakım hizmeti</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Garanti Kapsamı</h4>
                  <p className="text-gray-600 text-sm">Geniş garanti kapsamı ve servis ağı</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sürekli Eğitim</h4>
                  <p className="text-gray-600 text-sm">Müşteri personeline ücretsiz eğitim programları</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-bordo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">İnovasyon</h4>
                  <p className="text-gray-600 text-sm">En güncel teknolojiler ile çözüm üretimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalite Güvencemiz, Sizin Güveniniz</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            ISO standartları çerçevesinde sürdürdüğümüz kalite anlayışımız ile
            projelerinizde en yüksek standartları garanti ediyoruz
          </p>
          <Link
            href="/kurumsal/sertifikalar"
            className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Award className="w-5 h-5" />
            <span>Kalite Belgelerimizi İnceleyin</span>
          </Link>
        </div>
      </section>
    </div>
  );
}