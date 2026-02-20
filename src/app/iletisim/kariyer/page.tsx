'use client';

import { HelpCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SSSSayfasi() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Genel',
      questions: [
        {
          question: 'AOM hangi sektörlere hizmet vermektedir?',
          answer: 'Otomotiv, gıda, medikal, enerji, tekstil gibi çok çeşitli endüstriyel sektörlere otomasyon çözümleri sunuyoruz.'
        },
        {
          question: 'Hangi bölgelerde hizmet veriyorsunuz?',
          answer: 'Merkez ofisimiz Ankara\'da olmakla birlikte, Türkiye genelinde projeler gerçekleştiriyoruz.'
        },
        {
          question: 'Proje süresi ne kadar sürer?',
          answer: 'Proje süresi, projenin kapsamına göre değişir. Küçük projeler 1-2 hafta, büyük projeler 3-6 ay sürebilir.'
        }
      ]
    },
    {
      category: 'Teknik Destek',
      questions: [
        {
          question: 'Teknik destek hizmeti veriyor musunuz?',
          answer: 'Evet, 7/24 teknik destek hizmetimiz mevcuttur. Acil durumlarda anında müdahale ediyoruz.'
        },
        {
          question: 'Uzaktan destek mümkün mü?',
          answer: 'Evet, VPN bağlantısı ile sistemlerinize uzaktan erişim sağlayarak destek verebiliyoruz.'
        },
        {
          question: 'Bakım sözleşmesi zorunlu mu?',
          answer: 'Zorunlu değildir ancak düzenli bakım ile sistemlerinizin ömrünü uzatabilir ve arızaları önleyebilirsiniz.'
        }
      ]
    },
    {
      category: 'Ürün & Hizmetler',
      questions: [
        {
          question: 'Hangi markaların ürünlerini kullanıyorsunuz?',
          answer: 'Siemens, Schneider, Omron, Delta, Autonics, Yaskawa gibi dünya çapında tanınmış markaların ürünlerini kullanıyoruz.'
        },
        {
          question: 'Özel yazılım geliştirme hizmeti veriyor musunuz?',
          answer: 'Evet, müşterilerimizin özel ihtiyaçlarına yönelik SCADA, HMI ve PLC yazılımları geliştiriyoruz.'
        },
        {
          question: 'Eğitim hizmeti sunuyor musunuz?',
          answer: 'Evet, kurduğumuz sistemler için operatör ve bakım personeli eğitimleri veriyoruz.'
        }
      ]
    },
    {
      category: 'Fiyatlandırma',
      questions: [
        {
          question: 'Teklif almak için ne yapmalıyım?',
          answer: 'Web sitemizden teklif formu doldurabilir veya doğrudan bizimle iletişime geçebilirsiniz.'
        },
        {
          question: 'Ödeme şekilleri nelerdir?',
          answer: 'Projemizin büyüklüğüne göre peşin, taksitli veya aşamalı ödeme seçenekleri sunuyoruz.'
        },
        {
          question: 'Garanti süresi ne kadar?',
          answer: 'Ürün ve hizmetlerimize göre 1-2 yıl arası garanti sürelerimiz mevcuttur.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6">
              <HelpCircle size={40} className="text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sıkça Sorulan Sorular</h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Hizmetlerimiz, ürünlerimiz ve süreçlerimiz hakkında merak ettiğiniz 
              soruların cevaplarını burada bulabilirsiniz.
            </p>
            
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-bordo-500 mb-2">50+</div>
                <div className="text-gray-300">Soru</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-bordo-500 mb-2">4</div>
                <div className="text-gray-300">Kategori</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-bordo-500 mb-2">7/24</div>
                <div className="text-gray-300">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="bg-white rounded-2xl border-2 border-gray-200 hover:border-bordo-500 transition-all overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={24}
                            className={`text-bordo-600 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden">
            <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Sorunuzu Bulamadınız Mı?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Başka sorularınız için bizimle iletişime geçebilirsiniz. 
                  Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                >
                  <HelpCircle size={20} />
                  <span>İletişime Geç</span>
                </Link>
                <Link 
                  href="/iletisim/teknik-destek"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
                >
                  <HelpCircle size={20} />
                  <span>Teknik Destek</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
