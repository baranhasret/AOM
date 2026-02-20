import { Globe, HandshakeIcon, Building2, Target, Users, CheckCircle, ArrowRight, MapPin, Award, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Uluslararası İş Birlikleri | Aom Teknik',
    description: 'Global teknoloji liderleri ile stratejik iş birlikleri. Ortak Ar-Ge projeleri, teknoloji transferi ve uluslararası ortaklıklar.',
    keywords: 'uluslararası işbirliği, stratejik ortaklık, global network, teknoloji transferi, ortak ar-ge'
};

export default function IsBirlikleriPage() {
    const partnerships = [
        {
            name: 'European Automation Alliance',
            region: 'Avrupa',
            type: 'Stratejik Ortaklık',
            description: 'Avrupa\'da endüstriyel otomasyon çözümlerinin geliştirilmesi için stratejik iş birliği.',
            focus: ['Ar-Ge Projeleri', 'Teknoloji Transferi', 'Ortak Pazarlama'],
            established: '2020'
        },
        {
            name: 'Asia-Pacific Tech Consortium',
            region: 'Asya-Pasifik',
            type: 'Teknoloji Ortaklığı',
            description: 'Asya-Pasifik bölgesinde yenilikçi teknolojilerin geliştirilmesi ve paylaşılması.',
            focus: ['İnovasyon Merkezleri', 'Ortak Ar-Ge', 'Pazar Geliştirme'],
            established: '2019'
        },
        {
            name: 'Middle East Industry Partners',
            region: 'Orta Doğu',
            type: 'Bölgesel İş Birliği',
            description: 'Orta Doğu ülkelerinde endüstriyel projelerin hayata geçirilmesi.',
            focus: ['Proje Yönetimi', 'Yerel Üretim', 'Teknik Destek'],
            established: '2021'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6 mx-auto">
                            <Globe className="w-10 h-10 text-white" />
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Uluslararası İş Birlikleri
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-12">
                            Global teknoloji liderleri ile stratejik iş birlikleri kurarak,
                            müşterilerimize en yenilikçi ve güvenilir çözümleri sunuyoruz.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                                <Globe className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-bordo-500">3+</div>
                                <div className="text-sm text-gray-300 mt-1">Bölgesel Ortaklık</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                                <Users className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-bordo-500">10+</div>
                                <div className="text-sm text-gray-300 mt-1">Global Partner</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                                <Award className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-bordo-500">5+</div>
                                <div className="text-sm text-gray-300 mt-1">Yıllık Deneyim</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                                <Target className="w-8 h-8 text-bordo-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-bordo-500">20+</div>
                                <div className="text-sm text-gray-300 mt-1">Ortak Proje</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnerships Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4">Stratejik Ortaklıklarımız</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Dünya genelinde kurulan stratejik iş birlikleri ile yenilikçi çözümler geliştiriyoruz.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnerships.map((partnership, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bordo-500"
                            >
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-16 h-16 bg-gradient-to-br from-bordo-500 to-bordo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Globe className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="bg-bordo-50 text-bordo-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                {partnership.type}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{partnership.name}</h3>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4 text-bordo-500" />
                                            <span className="text-sm font-medium">{partnership.region}</span>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-sm">Est. {partnership.established}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {partnership.description}
                                    </p>

                                    {/* Focus Areas */}
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-3">Odak Alanları:</h4>
                                        <div className="space-y-2">
                                            {partnership.focus.map((area, areaIndex) => (
                                                <div key={areaIndex} className="flex items-center gap-2">
                                                    <CheckCircle className="w-5 h-5 text-bordo-500" />
                                                    <span className="text-sm text-gray-700">{area}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details Button */}
                                    <div className="pt-4">
                                        <button className="w-full flex items-center justify-center gap-2 bg-bordo-50 text-bordo-600 py-3 rounded-xl font-semibold hover:bg-bordo-600 hover:text-white transition-all duration-300">
                                            <span>Detayları Gör</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">İş Birliği Avantajları</h2>
                        <p className="text-gray-600 text-lg">Global ortaklıklarımızın müşterilerimize sunduğu değerler</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                                <Target className="w-10 h-10 text-bordo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">İnovasyon</h3>
                            <p className="text-gray-600">Ortak Ar-Ge ile yenilikçi çözümler</p>
                        </div>

                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                                <Award className="w-10 h-10 text-gray-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Kalite</h3>
                            <p className="text-gray-600">Global standartlarda ürün kalitesi</p>
                        </div>

                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-bordo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                                <Shield className="w-10 h-10 text-bordo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Destek</h3>
                            <p className="text-gray-600">7/24 uluslararası teknik destek</p>
                        </div>

                        <div className="text-center space-y-4 group">
                            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                                <Zap className="w-10 h-10 text-gray-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Erişim</h3>
                            <p className="text-gray-600">Dünya çapında hızlı tedarik</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">İş Birliği Fırsatları</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Global ortaklık ağımıza katılmak ve birlikte yenilikçi projeler
                        geliştirmek için bizimle iletişime geçin.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-bordo-600 hover:bg-bordo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <HandshakeIcon className="w-5 h-5" />
                            <span>Ortaklık Teklifi</span>
                        </Link>
                        <Link
                            href="/projelerimiz"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            <Building2 className="w-5 h-5" />
                            <span>Projelerimizi Gör</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
