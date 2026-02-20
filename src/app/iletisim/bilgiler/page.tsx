import { MapPin } from 'lucide-react';

export default function BilgilerPage() {
      return (
            <div className="min-h-screen bg-white">
                  {/* Hero Section */}
                  <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-48 pb-28">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-bordo-600 rounded-2xl mb-8">
                                          <MapPin size={40} className="text-white" />
                                    </div>
                                    
                                    <h1 className="text-5xl md:text-6xl font-bold mb-6">İletişim Bilgileri</h1>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">Aşağıda ofis adresimiz, iletişim numaramız ve e-posta bilgilerimiz ile harita konumumuz yer almaktadır.</p>
                              </div>
                        </div>
                  </section>

                  <section className="py-20">
                        <div className="w-full max-w-7xl mx-auto px-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {/* Adres Kartı */}
                                    <div className="flex-1 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-8 flex flex-col items-center">
                                          <div className="mb-4">
                                                <span className="inline-block bg-bordo-100 p-3 rounded-xl">
                                                      {/* Location/MapPin icon */}
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bordo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                                                      </svg>
                                                </span>
                                          </div>
                                          <h2 className="text-xl font-semibold text-gray-800 mb-2">Adres</h2>
                                          <div className="text-gray-700 text-center">
                                                ANGORA ENDÜSTRİYEL MAKİNE TEKNO. OTOMAS. SAN. VE TİC. LTD. ŞTİ
                                                <div className="my-3 w-10 mx-auto border-b border-gray-200"></div>
                                                İvedik OSB. Mahallesi<br/>
                                                1458. Cadde 22/33<br/>
                                                Yenimahalle/Ankara
                                          </div>
                                    </div>
                                    
                                    {/* Telefon Kartı */}
                                    <div className="flex-1 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-8 flex flex-col items-center">
                                          <div className="mb-4">
                                                <span className="inline-block bg-bordo-100 p-3 rounded-xl">
                                                      {/* Phone icon */}
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bordo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75V6a16 16 0 0016 16h.25a2 2 0 002-2v-3a2 2 0 00-2-2h-2.5a2 2 0 00-2 2v.5a1 1 0 01-1 1c-4.418 0-8-3.582-8-8a1 1 0 011-1h.5a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v.75z" />
                                                      </svg>
                                                </span>
                                          </div>
                                          <h2 className="text-xl font-semibold text-gray-800 mb-2">Telefon</h2>
                                          <span className="text-gray-700 text-center mb-2 block">+90 (543) 126 46 72</span>
                                          <div className="mb-2 text-bordo-600 font-semibold text-sm mt-20">WhatsApp</div>
                                          <span className="text-gray-700 text-center mt-2 block">+90 (543) 126 46 72</span>
                                    </div>
                                    
                                    {/* E-posta Kartı */}
                                    <div className="flex-1 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-8 flex flex-col items-center">
                                          <div className="mb-4">
                                                <span className="inline-block bg-bordo-100 p-3 rounded-xl">
                                                      {/* Mail icon */}
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bordo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                      </svg>
                                                </span>
                                          </div>
                                          <h2 className="text-xl font-semibold text-gray-800 mb-2">E-posta</h2>
                                          <div className="text-gray-700 text-center flex flex-col gap-2">
                                                <div><span className="font-semibold">Mert Kahraman:</span> mert@angoraotomasyon.com</div>
                                                <div><span className="font-semibold">Baran Hasret:</span> baran@angoraotomasyon.com</div>
                                                <div><span className="font-semibold">Muhasebe:</span> muhasebe@angoraotomasyon.com</div>
                                                <div><span className="font-semibold">Genel:</span> info@angoraotomasyon.com</div>
                                          </div>
                                    </div>
                              </div>
                        
                        {/* Çalışma Saatleri ve Sosyal Medya */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                              <div className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-6 flex flex-col items-center">
                                    <div className="mb-4">
                                          <span className="inline-block bg-bordo-100 p-3 rounded-xl">
                                                {/* Clock icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bordo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                          </span>
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Çalışma Saatleri</h2>
                                    <div className="text-gray-700 text-center text-base">
                                          Pazartesi-Cumartesi: 09:00 - 18:00<br/>
                                          Pazar: Kapalı
                                    </div>
                              </div>
                              <div className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-6 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center w-full">
                                          <div className="mb-4">
                                                <span className="inline-block bg-bordo-100 p-3 rounded-full">
                                                      {/* Globe/Internet icon */}
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-bordo-600">
                                                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3.156.672 4.243 1.757A7.963 7.963 0 0 0 12 4zm6 8c0-.34-.023-.677-.066-1.01l-3.934.99V12h4zm-.465-2.01A7.963 7.963 0 0 0 20 12h-4v-1.01l3.535-.99zM12 20c-1.657 0-3.156-.672-4.243-1.757A7.963 7.963 0 0 0 12 20zm-6-8c0 .34.023.677.066 1.01l3.934-.99V12H6zm.465 2.01A7.963 7.963 0 0 0 4 12h4v1.01l-3.535.99zM12 4c-1.657 0-3.156.672-4.243 1.757A7.963 7.963 0 0 0 12 4zm0 16c1.657 0 3.156-.672 4.243-1.757A7.963 7.963 0 0 0 12 20zm0-14a8 8 0 1 1 0 16a8 8 0 0 1 0-16z" />
                                                      </svg>
                                                </span>
                                          </div>
                                          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Sosyal Medya</h2>
                                          <div className="flex flex-row justify-center gap-6">
                                                <a href="https://www.instagram.com/aomengineering_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-bordo-600 hover:text-bordo-700 transition-colors duration-200">
                                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
                                                      </svg>
                                                </a>
                                                <a href="https://www.linkedin.com/in/aom-angora-otomasyon-m%C3%BChendislik-2b5a5b266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-bordo-600 hover:text-bordo-700 transition-colors duration-200">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2 3.599 4.594v5.602z" />
                                                      </svg>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        
                              {/* Harita Kutusu */}
                              <div className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-bordo-500 transition-all p-4 text-center w-full max-w-4xl mx-auto">
                                    <iframe
                                          src="https://www.google.com/maps?q=İvedik+OSB+Mahallesi+1458.+Cadde+22%2F33+Yenimahalle+Ankara&output=embed"
                                          width="100%"
                                          height="350"
                                          style={{ border: 0 }}
                                          allowFullScreen={true}
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                              </div>
                        </div>
                  </section>
            </div>
      );
}