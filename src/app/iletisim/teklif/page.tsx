'use client'

import { useState } from 'react';
import { FileText, Calculator, Clock, CheckCircle, Send, Phone, Mail, Building } from 'lucide-react';
import Link from 'next/link';

export default function TeklifPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    sector: '',
    budget: '',
    description: '',
    startDate: '',
    projectManagement: false,
    training: false,
    maintenance: false,
    documentation: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const extras = [
      formData.projectManagement && 'Proje Yönetimi',
      formData.training && 'Personel Eğitimi',
      formData.maintenance && 'Bakım Sözleşmesi',
      formData.documentation && 'Teknik Dokümantasyon',
    ].filter(Boolean).join(', ');

    const body = `Teklif Talebi

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Şirket: ${formData.company || 'Belirtilmedi'}

Proje Kategorisi: ${formData.category || 'Belirtilmedi'}
Sektör: ${formData.sector || 'Belirtilmedi'}
Bütçe Aralığı: ${formData.budget || 'Belirtilmedi'}
Tahmini Başlangıç: ${formData.startDate || 'Belirtilmedi'}

Ek Hizmetler: ${extras || 'Yok'}

Proje Açıklaması:
${formData.description}`;

    const mailtoLink = `mailto:info@angoraotomasyon.com?subject=${encodeURIComponent('Teklif Talebi - ' + formData.name)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById('teklif-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  const quoteTypes = [
    {
      icon: Building,
      title: 'Otomasyon Sistemleri',
      description: 'PLC, HMI, SCADA ve endüstriyel otomasyon çözümleri',
      features: ['Sistem tasarımı', 'Donanım seçimi', 'Yazılım geliştirme', 'Kurulum ve devreye alma'],
      timeframe: '3-5 İş Günü',
      color: 'blue'
    },
    {
      icon: Calculator,
      title: 'Robotik Entegrasyon',
      description: 'Endüstriyel robot sistemleri ve entegrasyon hizmetleri',
      features: ['Robot seçimi', 'Güvenlik sistemleri', 'Programlama', 'Eğitim ve bakım'],
      timeframe: '5-7 İş Günü',
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Saha Hizmetleri',
      description: 'Bakım, onarım ve teknik destek hizmetleri',
      features: ['Periyodik bakım', 'Arıza giderme', 'Modernizasyon', 'Yedek parça'],
      timeframe: '1-2 İş Günü',
      color: 'orange'
    }
  ];

  const quoteProcess = [
    {
      step: 1,
      title: 'Talep Formu',
      description: 'Proje detaylarınızı online form ile gönderin'
    },
    {
      step: 2,
      title: 'İhtiyaç Analizi',
      description: 'Uzman ekibimiz ihtiyaçlarınızı detaylı analiz eder'
    },
    {
      step: 3,
      title: 'Teknik Çözüm',
      description: 'En uygun teknik çözüm ve ürün seçimi yapılır'
    },
    {
      step: 4,
      title: 'Fiyat Teklifi',
      description: 'Detaylı fiyat teklifi hazırlanır ve sunulur'
    }
  ];

  const getColorClasses = (color: string) => {
    return 'from-bordo-50 to-white border-bordo-100';
  };

  const getIconColor = (color: string) => {
    return 'text-bordo-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-6">
                <FileText size={40} className="text-white" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">Teklif Talebi</h1>

              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Projeleriniz için detaylı ve rekabetçi fiyat teklifleri alın.
                Uzman ekibimiz ihtiyaçlarınızı analiz ederek size en uygun
                çözümü sunar.
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-bordo-500 mb-2">Ücretsiz</div>
                  <div className="text-gray-300">Ön Görüşme</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-bordo-500 mb-2">24 Saat</div>
                  <div className="text-gray-300">Hızlı Dönüş</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-bordo-500 mb-2">Detaylı</div>
                  <div className="text-gray-300">Analiz Raporu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Teklif Kategorileri</h2>
              <p className="text-gray-600 text-lg">Farklı hizmet alanlarımız için özelleştirilmiş teklifler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quoteTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${getColorClasses(type.color)} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <Icon size={32} className={getIconColor(type.color)} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Kapsam:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle size={14} className="text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock size={14} />
                          <span>Teklif Süresi: {type.timeframe}</span>
                        </div>
                      </div>

                      <button onClick={scrollToForm} className="w-full bg-bordo-600 text-white py-3 rounded-lg font-medium hover:bg-bordo-700 transition-colors">
                        Teklif Talep Et
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Teklif Talep Formu</h2>
                <p className="text-gray-600 text-lg">Projenizdeki detayları paylaşın, size özel teklif hazırlayalım</p>
              </div>

              <form id="teklif-form" onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">İletişim Bilgileri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ad Soyad *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-posta Adresi *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefon Numarası *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Şirket Adı"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Proje Detayları</h3>
                  <div className="space-y-4">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                      required
                    >
                      <option value="">Proje Kategorisi Seçin *</option>
                      <option value="Otomasyon Sistemleri">Otomasyon Sistemleri</option>
                      <option value="Robotik Entegrasyon">Robotik Entegrasyon</option>
                      <option value="Bakım ve Onarım">Bakım ve Onarım</option>
                      <option value="Modernizasyon">Modernizasyon</option>
                      <option value="Diğer">Diğer</option>
                    </select>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select name="sector" value={formData.sector} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent">
                        <option value="">Sektör Seçin</option>
                        <option value="Otomotiv">Otomotiv</option>
                        <option value="Gıda & İçecek">Gıda & İçecek</option>
                        <option value="Sağlık">Sağlık</option>
                        <option value="Tekstil">Tekstil</option>
                        <option value="Enerji">Enerji</option>
                        <option value="Diğer">Diğer</option>
                      </select>

                      <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent">
                        <option value="">Bütçe Aralığı</option>
                        <option value="0 - 50.000 €">0 - 50.000 €</option>
                        <option value="50.000 - 100.000 €">50.000 - 100.000 €</option>
                        <option value="100.000 - 250.000 €">100.000 - 250.000 €</option>
                        <option value="250.000+ €">250.000+ €</option>
                      </select>
                    </div>

                    <textarea
                      rows={5}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Proje açıklaması ve özel gereksinimleriniz *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                      required
                    ></textarea>

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      placeholder="Tahmini başlangıç tarihi"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Additional Options */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ek Hizmetler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" name="projectManagement" checked={formData.projectManagement} onChange={handleChange} className="w-4 h-4 text-bordo-600 border-gray-300 rounded focus:ring-bordo-500" />
                      <span className="text-gray-700">Proje yönetimi</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" name="training" checked={formData.training} onChange={handleChange} className="w-4 h-4 text-bordo-600 border-gray-300 rounded focus:ring-bordo-500" />
                      <span className="text-gray-700">Personel eğitimi</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" name="maintenance" checked={formData.maintenance} onChange={handleChange} className="w-4 h-4 text-bordo-600 border-gray-300 rounded focus:ring-bordo-500" />
                      <span className="text-gray-700">Bakım sözleşmesi</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" name="documentation" checked={formData.documentation} onChange={handleChange} className="w-4 h-4 text-bordo-600 border-gray-300 rounded focus:ring-bordo-500" />
                      <span className="text-gray-700">Teknik dokümantasyon</span>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  {submitted ? (
                    <div className="text-center py-6 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                      <p className="text-lg font-semibold text-green-700">Talebiniz alındı!</p>
                      <p className="text-sm text-green-600 mt-1">E-posta uygulamanız açıldı. Lütfen e-postayı gönderin.</p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-bordo-600 underline text-sm hover:text-bordo-700"
                      >
                        Yeni talep oluştur
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full bg-bordo-600 text-white py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors flex items-center justify-center gap-2 text-lg"
                      >
                        <Send size={20} />
                        <span>Teklif Talebini Gönder</span>
                      </button>

                      <p className="text-sm text-gray-600 text-center mt-4">
                        * zorunlu alanlar. Talebiniz 24 saat içinde değerlendirilecektir.
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Quote Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Teklif Süreci</h2>
              <p className="text-gray-600 text-lg">Talebinizden teklif sunumuna kadar izlenen adımlar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quoteProcess.map((process, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-bordo-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden">
              <div className="absolute top-10 right-10 w-48 h-48 bg-bordo-600 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-bordo-500 rounded-full opacity-10 blur-3xl"></div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">Hızlı Görüşme İçin</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Projenizi daha detaylı görüşmek istiyorsanız,
                    doğrudan bizimle iletişime geçebilirsiniz.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+903121234567"
                    className="inline-flex items-center gap-2 bg-bordo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-bordo-700 transition-colors text-lg"
                  >
                    <Phone size={20} />
                    <span>Hemen Ara</span>
                  </a>
                  <a
                    href="mailto:satis@angoraotomasyon.com"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg"
                  >
                    <Mail size={20} />
                    <span>E-posta Gönder</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}