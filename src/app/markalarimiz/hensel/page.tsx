import { Award, CheckCircle, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HenselDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 top-20 z-0">
        <div className="w-full h-full bg-gradient-to-br from-bordo-500 via-rose-200 to-white opacity-90 blur-[2px]" />
      </div>
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-48 h-32 flex items-center justify-center bg-white/80 rounded-2xl shadow-lg mb-4 p-4">
            <span className="text-4xl font-bold text-bordo-600">HENSEL</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">HENSEL</h1>
          <p className="text-xl text-bordo-600 font-semibold mb-4">Elektrik Panoları ve Muhafazalar</p>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            HENSEL, endüstriyel elektrik panoları, klemens kutuları ve muhafaza sistemlerinde Alman kalitesini sunar.
          </p>
        </div>
      </section>
      <section className="relative z-10 bg-gradient-to-r from-bordo-600 to-rose-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-white mb-6">HENSEL Ürünleri Hakkında Bilgi Alın</h2>
          <Link href="/iletisim" className="inline-block bg-white text-bordo-600 px-8 py-4 rounded-lg font-semibold hover:bg-bordo-50 transition-colors shadow-lg">Bize Ulaşın</Link>
        </div>
      </section>
    </div>
  );
}
