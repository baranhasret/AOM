import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import MultiStepForm from '@/components/MultiStepForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim - AOM Engineering | Teklif Al, Bize Ulaşın",
  description: "AOM Engineering iletişim bilgileri. Endüstriyel otomasyon projeleri için ücretsiz teklif alın. Telefon: +90 543 126 46 72",
  keywords: "İletişim, teklif al, otomasyon teklifi, teknik destek, ankara otomasyon firması, iletişim bilgileri",
};

export default function IletisimPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "İletişim - AOM Engineering",
    "description": "AOM Engineering iletişim bilgileri ve teklif formu",
    "url": "https://angoraotomasyon.com/iletisim",
    "mainEntity": {
      "@type": "Organization",
      "name": "AOM Engineering",
      "telephone": "+90-543-126-46-72",
      "email": "info@angoraotomasyon.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "İvedik OSB. Mahallesi 1458. Cadde 22/33",
        "addressLocality": "Yenimahalle",
        "addressRegion": "Ankara",
        "addressCountry": "TR"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 bg-black overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bordo-900/40 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('/matrix-bg-pattern-if-exists.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-bordo-500 font-bold tracking-widest uppercase text-sm mb-4 block">Bize Ulaşın</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Projenizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-bordo-400 to-red-600">Konuşalım</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Endüstriyel otomasyon süreçleriniz için, deneyimli mühendis kadromuzla yanınızdayız.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            
            {/* Left: Contact Info */}
            <div className="lg:w-1/3 bg-gray-900 p-12 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-bordo-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">İletişim Bilgileri</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                      <Phone className="text-bordo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Bizi Arayın</p>
                      <a href="tel:+905431264672" className="text-lg font-medium hover:text-bordo-400 transition-colors block">
                        +90 543 126 4672
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                      <Mail className="text-bordo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">E-posta</p>
                      <a href="mailto:info@angoraotomasyon.com" className="text-lg font-medium hover:text-bordo-400 transition-colors block">
                        info@angoraotomasyon.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                      <MapPin className="text-bordo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Merkez Ofis</p>
                      <address className="text-lg font-medium not-italic leading-relaxed">
                        İvedik OSB. Mah. 1458. Cadde 22/33<br/>Yenimahalle / Ankara
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                      <Clock className="text-bordo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Çalışma Saatleri</p>
                      <p className="text-lg font-medium">Pzt - Cts: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Kritik arızalarınız için 7/24 teknik servis hattımız aktiftir.
                </p>
              </div>
            </div>

            {/* Right: Premium Multi Step Form */}
            <div className="lg:w-2/3 p-2 md:p-12 bg-white">
              <MultiStepForm />
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://maps.google.com/maps?q=İvedik%20OSB.%20Mahallesi%201458.%20Cadde%2022%2F33%20Yenimahalle%20Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-125 mix-blend-multiply filter hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>

    </div>
  );
}