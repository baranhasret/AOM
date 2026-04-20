import { Metadata } from "next";
import Link from "next/link";
import { Users, Mail, Award, Target, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Yönetim Kadromuz - AOM Engineering | Deneyimli Ekip",
  description: "AOM Engineering yönetim kadrosu. Mert Kahraman, Baran Hasret ve uzman ekibimiz 15+ yıllık deneyimle yanınızda.",
  keywords: "yönetim kadrosu, firma yönetimi, mert kahraman, baran hasret, uzman ekip, deneyimli kadro",
  openGraph: {
    title: "Yönetim Kadromuz - AOM Engineering",
    description: "15+ yıllık deneyime sahip profesyonel yönetim kadromuzla tanışın.",
    type: "website",
  },
};

export default function YonetimPage() {
  const yonetimKadrosu = [
    {
      id: 1,
      isim: "Mert KAHRAMAN",
      unvan: "Yönetici",
      egitim: "Elektrik Elektronik Mühendisliği",
      deneyim: "15+ Yıl",
      uzmanliklar: ["Operasyonel Yönetim", "Süreç İyileştirme"],
      ozgecmis: "Operasyonel mükemmellik ve süreç iyileştirme alanında uzman, takım liderliği konusunda deneyimli.",
      eposta: "mert@angoraotomasyon.com"
    },
    {
      id: 2,
      isim: "Baran HASRET",
      unvan: "General Manager",
      egitim: "Biyomedikal Cihaz Teknolojisi",
      deneyim: "5+ Yıl",
      uzmanliklar: ["Stratejik Yönetim", "İş Geliştirme"],
      ozgecmis: "Şirketin stratejik vizyonunu belirleyen ve iş geliştirme süreçlerini yöneten deneyimli lider.",
      eposta: "baran@angoraotomasyon.com"
    },
    {
      id: 3,
      isim: "Şahan HASRET",
      unvan: "Web Developer",
      egitim: "Yazılım Mühendisliği",
      deneyim: "5+ Yıl",
      uzmanliklar: ["Frontend Development", "React", "UI/UX"],
      ozgecmis: "Modern web teknolojileri ve kullanıcı deneyimi odaklı çözümler geliştiren yetenekli yazılımcı.",
      eposta: "sahan@angoraotomasyon.com"
    },
    {
      id: 4,
      isim: "Murat DURSUN",
      unvan: "Web Developer",
      egitim: "Yazılım Mühendisliği",
      deneyim: "4+ Yıl",
      uzmanliklar: ["Full Stack Development", "Database Design"],
      ozgecmis: "Full stack geliştirme ve veritabanı tasarımında uzman, backend sistemler konusunda deneyimli.",
      eposta: "murat@angoraotomasyon.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-36">

      {/* Introduction */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Yönetim Kadromuz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              15 yılı aşkın sektör deneyimi ve vizyoner bakış açısıyla,
              AOM Engineering'i geleceğe taşıyan lider kadromuz.
            </p>
          </div>
        </div>
      </section>

      {/* Management Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {yonetimKadrosu.map((yonetici) => (
              <div key={yonetici.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-bordo-500 to-bordo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">

                  {/* Header/Avatar Area */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-bordo-100 to-orange-100 p-1 flex-shrink-0 shadow-inner">
                      {/* Placeholder for real image or Avatar */}
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-4xl font-bold text-bordo-600">
                        {yonetici.isim.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{yonetici.isim}</h2>
                      <div className="text-bordo-600 font-medium mb-4">{yonetici.unvan}</div>

                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                          <Briefcase className="w-3 h-3" /> {yonetici.deneyim}
                        </span>
                        <a href={`mailto:${yonetici.eposta}`} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-bordo-50 hover:text-bordo-700 text-xs font-medium transition-colors">
                          <Mail className="w-3 h-3" /> {yonetici.eposta}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                        <GraduationCap className="w-4 h-4 text-bordo-500" />
                        Eğitim & Uzmanlık
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {yonetici.egitim}
                      </p>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                        <Target className="w-4 h-4 text-bordo-500" />
                        Vizyon & Hedefler
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {yonetici.ozgecmis}
                      </p>
                    </div>
                  </div>

                  {/* Skills/Tags */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {yonetici.uzmanliklar.map((uzmanlik, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-bordo-50 text-bordo-700 text-xs font-semibold rounded-lg border border-bordo-100">
                          {uzmanlik}
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

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-bordo-500 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-bordo-600 opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Award className="w-8 h-8 text-bordo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Yönetim Felsefemiz</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                "Şeffaf, katılımcı ve yenilikçi yönetim anlayışımızla, çalışanlarımızın
                potansiyelini en üst düzeye çıkarıyor ve müşterilerimize
                sürdürülebilir değer yaratıyoruz."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/80">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <strong className="block text-white mb-1">Şeffaflık</strong>
                  <span className="text-sm">Açık iletişim ve dürüstlük</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <strong className="block text-white mb-1">Katılımcılık</strong>
                  <span className="text-sm">Ortak akıl ve takım ruhu</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <strong className="block text-white mb-1">İnovasyon</strong>
                  <span className="text-sm">Sürekli gelişim ve yenilik</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}