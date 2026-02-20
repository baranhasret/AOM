'use client'

import React from 'react'
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Küre.png"
                alt="AOM Technology Logo"
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
              />
              <div className="text-lg font-bold">
                ANGORA
                <br />
                <span className="text-sm text-gray-400">OTOMASYON • MÜHENDİSLİK</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Endüstriyel otomasyon, robotik uygulamalar ve medikal cihazlar alanında
              uzman ekibimizle hizmet vermekteyiz.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/angoraautomation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bordo-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/aomengineering_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bordo-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/aom-angora-otomasyon-m%C3%BChendislik-2b5a5b266/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bordo-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="https://twitter.com/aomtechnologytr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bordo-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-bordo-500">Kurumsal</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/kurumsal/hakkimizda" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/kurumsal/misyon-vizyon" className="text-gray-300 hover:text-white transition-colors">Misyon & Vizyon</Link></li>
              <li><Link href="/kurumsal/kalite" className="text-gray-300 hover:text-white transition-colors">Kalite Politikamız</Link></li>
              <li><Link href="/kurumsal/sertifikalar" className="text-gray-300 hover:text-white transition-colors">Sertifikalarımız</Link></li>
              <li><Link href="/kurumsal/yonetim" className="text-gray-300 hover:text-white transition-colors">Yönetim Kurulu</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-bordo-500">Çözümlerimiz</h3>
            <ul className="space-y-2">
              <li><Link href="/endustriyel-otomasyon" className="text-gray-300 hover:text-white transition-colors">Endüstriyel Otomasyon</Link></li>
              <li><Link href="/robotik-sistemler" className="text-gray-300 hover:text-white transition-colors">Robotik Sistemler</Link></li>
              <li><Link href="/medikal-cihazlar" className="text-gray-300 hover:text-white transition-colors">Medikal Cihazlar</Link></li>
              <li><Link href="/oksijen-jeneratorleri" className="text-gray-300 hover:text-white transition-colors">Oksijen Jeneratörleri</Link></li>
              <li><Link href="/gida-paketleme" className="text-gray-300 hover:text-white transition-colors">Gıda Paketleme</Link></li>
              <li><Link href="/iletisim/teklif" className="text-gray-300 hover:text-white transition-colors">Teklif Al</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-bordo-500">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-bordo-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>İvedik OSB. Mahallesi</p>
                  <p>1458. Cadde 22/33</p>
                  <p>Yenimahalle/Ankara</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-bordo-500" />
                <span className="text-gray-300">+90 (543) 126 46 72</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-bordo-500" />
                <span className="text-gray-300">info@angoraotomasyon.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-bordo-500 mt-1" />
                <div className="text-gray-300">
                  <p>Pazartesi - Cumartesi</p>
                  <p>09:00 - 18:00</p>
                  <p className="text-sm">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Angora Otomasyon. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/kurumsal/kalite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kalite Politikası
              </Link>
              <Link href="/kurumsal/sertifikalar" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sertifikalar
              </Link>
              <Link href="/iletisim" className="text-gray-400 hover:text-white text-sm transition-colors">
                İletişim
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
