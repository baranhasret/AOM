import { Award, Scale, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function BaykonDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-500 via-gray-200 to-white opacity-90 blur-[2px]" />
      </div>
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-slate-700">BAYKON</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">BAYKON</h1>
          <p className="text-xl text-slate-600 font-semibold mb-4">Endüstriyel Tartım Sistemleri</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            BAYKON, endüstriyel tartım sistemleri, kantar ve dozaj çözümlerinde Türkiye&apos;nin önde gelen markasıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Scale size={20} className="text-slate-600" />
              <span className="text-gray-800 font-medium">Hassas tartım</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-6 py-4 flex items-center gap-3 shadow">
              <Gauge size={20} className="text-gray-500" />
              <span className="text-gray-800 font-medium">Dozaj sistemleri</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 bg-gradient-to-r from-slate-600 to-gray-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">BAYKON Ürünleri Hakkında Bilgi Alın</h2>
          <Link href="/iletisim" className="inline-block bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg">Bize Ulaşın</Link>
        </div>
      </section>
    </div>
  );
}
