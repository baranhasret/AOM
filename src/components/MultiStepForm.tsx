"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Briefcase, Zap, Settings, Shield } from 'lucide-react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    projectDesc: '',
    budget: '',
  });

  const sectors = [
    { id: 'gida', icon: <Briefcase size={24}/>, name: 'Gıda & İçecek' },
    { id: 'otomotiv', icon: <Settings size={24}/>, name: 'Otomotiv' },
    { id: 'enerji', icon: <Zap size={24}/>, name: 'Enerji' },
    { id: 'diger', icon: <Shield size={24}/>, name: 'Diğer Endüstriler' },
  ];

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setStep(4); };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
      {/* Progress Bar */}
      <div className="mb-8 relative">
        <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
          <motion.div 
            className="h-full bg-bordo-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm font-medium text-gray-400">
          <span className={step >= 1 ? "text-bordo-600" : ""}>Sektör</span>
          <span className={step >= 2 ? "text-bordo-600" : ""}>Detaylar</span>
          <span className={step >= 3 ? "text-bordo-600" : ""}>İletişim</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Hangi Sektörde Hizmet Veriyorsunuz?</h3>
            <p className="text-gray-500 mb-6">Projenizi daha iyi anlayabilmemiz için sektörünüzü seçin.</p>
            <div className="grid grid-cols-2 gap-4">
              {sectors.map(s => (
                <button
                  key={s.id}
                  onClick={() => { setFormData({...formData, sector: s.id}); handleNext(); }}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 hover:border-bordo-500 hover:bg-bordo-50 ${formData.sector === s.id ? 'border-bordo-600 bg-bordo-50 text-bordo-700' : 'border-gray-100 text-gray-600'}`}
                >
                  <div className={formData.sector === s.id ? 'text-bordo-600' : 'text-gray-400'}>{s.icon}</div>
                  <span className="font-semibold">{s.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Projenizden Bahsedin</h3>
            <p className="text-gray-500 mb-6">Teklifin daha net olabilmesi için lütfen detay ekleyin.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Şirket Adı</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bordo-500 focus:border-transparent outline-none"
                  placeholder="Firmanızın Adı"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Proje Açıklaması</label>
                <textarea
                  rows={4}
                  value={formData.projectDesc}
                  onChange={(e) => setFormData({...formData, projectDesc: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bordo-500 focus:border-transparent outline-none"
                  placeholder="Kısaca süreç veya ihtiyaçlarınız..."
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={handlePrev} className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                <ArrowLeft size={18} /> Geri
              </button>
              <button 
                onClick={handleNext} 
                disabled={!formData.projectDesc}
                className="flex-1 px-6 py-3 bg-bordo-600 text-white font-medium rounded-xl hover:bg-bordo-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                Devam Et <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">İletişim Bilgileriniz</h3>
            <p className="text-gray-500 mb-6">Size teklifimizi iletebilmemiz için bilgileriniz gereklidir.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bordo-500 focus:border-transparent outline-none"
                  placeholder="Adınız ve Soyadınız"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bordo-500 focus:border-transparent outline-none"
                    placeholder="ornek@sirket.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bordo-500 focus:border-transparent outline-none"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={handlePrev} className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                  <ArrowLeft size={18} /> Geri
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-6 py-3 bg-bordo-600 text-white font-medium rounded-xl hover:bg-bordo-700 transition flex items-center justify-center gap-2"
                >
                  Teklif Talebini Gönder <CheckCircle size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Talebiniz Alındı!</h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Proje teklif talebiniz uzman mühendis kadromuza ulaştı. En kısa sürede <strong>{formData.email}</strong> adresinden veya telefonla sizinle iletişime geçeceğiz.
            </p>
            <button 
              onClick={() => { setStep(1); setFormData({...formData, projectDesc: ''}); }}
              className="mt-8 px-6 py-3 text-bordo-600 font-medium hover:bg-bordo-50 rounded-xl transition"
            >
              Yeni Form Doldur
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
