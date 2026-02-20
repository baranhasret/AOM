import Link from "next/link";
import { Metadata } from "next";
import { Award, Shield, CheckCircle, Calendar, FileText, Globe, Download, Eye, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sertifikalarımız | AOM Engineering",
  description: "ISO 9001, ISO 14001, ISO 45001, ISO 27001, CE İşaretleme ve daha fazla uluslararası sertifikalarımız. Kalite ve güvenlik standartlarında öncü.",
  keywords: "sertifikalar, iso 9001, iso 14001, iso 45001, ce işaretleme, kalite sertifikası, güvenlik standartları"
};

export default function SertifikalarPage() {
  const sertifikalar = [
    {
      id: 1,
      adi: "ISO 9001:2015",
      kategori: "Kalite Yönetimi",
      kurum: "TSE (Türk Standartları Enstitüsü)",
      tarih: "15.03.2023",
      gecerlilik: "15.03.2026",
      aciklama: "Kalite yönetim sisteminin uluslararası standartlara uygunluğunu belgeleyen sertifika",
      durum: "Aktif",
      renk: "blue"
    },
    {
      id: 2,
      adi: "ISO 14001:2015",
      kategori: "Çevre Yönetimi",
      kurum: "TSE (Türk Standartları Enstitüsü)",
      tarih: "20.04.2023",
      gecerlilik: "20.04.2026",
      aciklama: "Çevre yönetim sistemi ve sürdürülebilirlik uygulamalarını belgelendiren sertifika",
      durum: "Aktif",
      renk: "green"
    },
    {
      id: 3,
      adi: "ISO 45001:2018",
      kategori: "İş Sağlığı ve Güvenliği",
      kurum: "TSE (Türk Standartları Enstitüsü)",
      tarih: "10.05.2023",
      gecerlilik: "10.05.2026",
      aciklama: "İş sağlığı ve güvenliği yönetim sisteminin uluslararası standartlara uygunluğu",
      durum: "Aktif",
      renk: "purple"
    },
    {
      id: 4,
      adi: "CE İşaretleme",
      kategori: "Ürün Uygunluğu",
      kurum: "Notifiye Kuruluş",
      tarih: "01.01.2023",
      gecerlilik: "Sürekli",
      aciklama: "Ürünlerimizin Avrupa Birliği direktiflerine uygunluğunu gösteren işaret",
      durum: "Aktif",
      renk: "orange"
    },
    {
      id: 5,
      adi: "ISO 27001:2013",
      kategori: "Bilgi Güvenliği",
      kurum: "TÜRKAK Akredite Kuruluş",
      tarih: "25.06.2023",
      gecerlilik: "25.06.2026",
      aciklama: "Bilgi güvenliği yönetim sistemi standardına uygunluk belgesi",
      durum: "Aktif",
      renk: "indigo"
    },
    {
      id: 6,
      adi: "OHSAS 18001",
      kategori: "İş Güvenliği",
      kurum: "TSE (Türk Standartları Enstitüsü)",
      tarih: "15.09.2022",
      gecerlilik: "15.09.2025",
      aciklama: "İş sağlığı ve güvenliği değerlendirme serisi standardı sertifikası",
      durum: "Aktif",
      renk: "red"
    },
    {
      id: 7,
      adi: "EN 60204-1",
      kategori: "Makine Güvenliği",
      kurum: "TÜV SÜD",
      tarih: "30.11.2023",
      gecerlilik: "30.11.2025",
      aciklama: "Endüstriyel makinelerde elektrik donanımının güvenlik standardı",
      durum: "Aktif",
      renk: "teal"
    },
    {
      id: 8,
      adi: "IEC 61508",
      kategori: "Fonksiyonel Güvenlik",
      kurum: "TÜV Rheinland",
      tarih: "18.08.2023",
      gecerlilik: "18.08.2026",
      aciklama: "Elektrik/elektronik/programlanabilir sistemlerde fonksiyonel güvenlik",
      durum: "Aktif",
      renk: "pink"
    }
  ];

  const yetkinlikBelgeleri = [
    {
      id: 1,
      adi: "Siemens Solution Partner",
      kurum: "Siemens AG",
      kategori: "Teknoloji Ortaklığı",
      tarih: "2023"
    },
    {
      id: 2,
      adi: "Rockwell Automation Partner",
      kurum: "Rockwell Automation",
      kategori: "Teknoloji Ortaklığı",
      tarih: "2023"
    },
    {
      id: 3,
      adi: "ABB System Integrator",
      kurum: "ABB Group",
      kategori: "Sistem Entegratörü",
      tarih: "2023"
    },
    {
      id: 4,
      adi: "Schneider Electric Partner",
      kurum: "Schneider Electric",
      kategori: "Teknoloji Ortaklığı",
      tarih: "2023"
    }
  ];

  const renkKodlari: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    green: "bg-green-100 text-green-800 border-green-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
    red: "bg-bordo-100 text-bordo-800 border-bordo-200",
    teal: "bg-teal-100 text-teal-800 border-teal-200",
    pink: "bg-pink-100 text-pink-800 border-pink-200"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-36">

      {/* Introduction Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Akreditasyon ve Sertifikalarımız</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              AOM Engineering olarak, faaliyet gösterdiğimiz tüm alanlarda uluslararası standartlara
              uygun hizmet vermeyi taahhüt ediyoruz. Sahip olduğumuz sertifikalar, kalite yönetim
              sistemimizin güvenilirliğini ve hizmet kalitemizi belgeleyen önemli göstergelerdir.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ISO Standart Sertifikalarımız</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Uluslararası kabul görmüş kalite ve güvenlik standartları</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sertifikalar.map((sertifika) => (
              <div
                key={sertifika.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-bordo-200 p-8 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-bordo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-bordo-100 transition-colors">
                    <Shield className="w-8 h-8 text-bordo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-bordo-600 transition-colors">
                      {sertifika.adi}
                    </h3>
                    <span className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-lg font-medium border border-slate-200">
                      {sertifika.kategori}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{sertifika.aciklama}</p>

                <div className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-bordo-600" />
                    <span className="text-gray-700"><strong>Kurum:</strong> {sertifika.kurum}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-bordo-600" />
                    <span className="text-gray-700"><strong>Tarih:</strong> {sertifika.tarih}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-bordo-600" />
                    <span className="text-gray-700"><strong>Geçerlilik:</strong> {sertifika.gecerlilik}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button className="flex items-center justify-center gap-2 flex-1 bg-slate-50 hover:bg-slate-100 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium transition-colors border border-slate-200">
                    <Eye className="w-4 h-4" />
                    <span>İncele</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 bg-bordo-600 hover:bg-bordo-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-bordo-200 hover:shadow-xl hover:-translate-y-0.5">
                    <Download className="w-4 h-4" />
                    <span>İndir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competency Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yetkinlik Belgelerimiz</h2>
            <div className="w-20 h-1 bg-bordo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Teknoloji ortaklıklarımız ve partnerliklerimiz</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yetkinlikBelgeleri.map((belge) => (
              <div key={belge.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 hover:border-bordo-200 text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bordo-50 transition-colors">
                  <Award className="w-8 h-8 text-gray-400 group-hover:text-bordo-500 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{belge.adi}</h3>
                <p className="text-sm text-gray-500 mb-4">{belge.kurum}</p>
                <span className="inline-block text-xs font-semibold bg-bordo-50 text-bordo-700 px-2 py-1 rounded-md">
                  {belge.kategori}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}