'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ChevronDown, Phone, Mail, ArrowRight,
  Info, Target, Users, Award, Shield,
  Settings, Bot, HeartPulse, Cloud, Package,
  Laptop, Truck, Globe, CheckCircle, Clock,
  Building, MessageCircle, Wrench, FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { motion, AnimatePresence } from 'framer-motion'

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  Info, Target, Users, Award, Shield,
  Settings, Bot, HeartPulse, Cloud, Package,
  Laptop, Truck, Globe, CheckCircle, Clock,
  Building, MessageCircle, Phone, Wrench, FileText
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Ana sayfa dışında her zaman koyu tema göster
  const shouldShowDark = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { title: 'Ana Sayfa', href: '/' },
    {
      title: 'Kurumsal',
      href: '/kurumsal',
      subItems: [
        { title: 'Hakkımızda', href: '/kurumsal/hakkimizda', icon: 'Info', desc: 'Şirketimiz hakkında genel bilgi.' },
        { title: 'Misyon & Vizyon', href: '/kurumsal/misyon-vizyon', icon: 'Target', desc: 'Gelecek hedeflerimiz ve değerlerimiz.' },
        { title: 'Yönetim Kadromuz', href: '/kurumsal/yonetim', icon: 'Users', desc: 'Deneyimli lider kadromuz.' },
        { title: 'Kalite Politikamız', href: '/kurumsal/kalite', icon: 'Award', desc: 'Kalite standartlarımız ve belgelerimiz.' },
        { title: 'Sertifikalarımız', href: '/kurumsal/sertifikalar', icon: 'Shield', desc: 'Uluslararası sertifikalarımız.' }
      ]
    },
    {
      title: 'Çözümlerimiz',
      href: '/cozumlerimiz',
      subItems: [
        { title: 'Endüstriyel Otomasyon', href: '/endustriyel-otomasyon', icon: 'Settings', desc: 'Verimliliği artıran otomasyon çözümleri.' },
        { title: 'Robotik Sistemler', href: '/robotik-sistemler', icon: 'Bot', desc: 'Yüksek teknoloji robotik sistemler.' },
        { title: 'Medikal Cihazlar', href: '/medikal-cihazlar', icon: 'HeartPulse', desc: 'Güvenilir medikal teknolojiler.' },
        { title: 'Oksijen Jeneratörleri', href: '/oksijen-jeneratorleri', icon: 'Cloud', desc: 'Endüstriyel ve medikal oksijen sistemleri.' },
        { title: 'Gıda Paketleme', href: '/gida-paketleme', icon: 'Package', desc: 'Hijyenik paketleme çözümleri.' }
      ]
    },
    {
      title: 'Markalarımız',
      href: '/markalarimiz',
      subItems: [
        { title: 'Teknoloji Ortaklarımız', href: '/markalarimiz/teknoloji-ortaklarimiz', icon: 'Laptop', desc: 'Global teknoloji partnerlerimiz.' },
        { title: 'Tedarik Markalarımız', href: '/markalarimiz/distributorler', icon: 'Truck', desc: 'Güçlü tedarik ağımız.' },
        { title: 'Uluslararası İş Birlikleri', href: '/markalarimiz/isbirlikleri', icon: 'Globe', desc: 'Global iş ortaklıklarımız.' }
      ]
    },
    { title: 'Ürünler', href: '/urunler' },
    {
      title: 'Projelerimiz',
      href: '/projelerimiz',
      subItems: [
        { title: 'Tamamlanan Projeler', href: '/projelerimiz/tamamlanan', icon: 'CheckCircle', desc: 'Başarıyla tamamlanan işlerimiz.' },
        { title: 'Devam Eden Projeler', href: '/projelerimiz/devam-eden', icon: 'Clock', desc: 'Süreci devam eden projelerimiz.' },
        { title: 'Sektörel Çözümler', href: '/projelerimiz/sektorel', icon: 'Building', desc: 'Sektöre özel proje çözümleri.' }
      ]
    },
    {
      title: 'Referanslarımız',
      href: '/referanslarimiz',
      subItems: [
        { title: 'Müşteri Portföyümüz', href: '/referanslarimiz/musteri-portfoyu', icon: 'Users', desc: 'Bizi tercih eden müşterilerimiz.' },
        { title: 'Müşteri Görüşleri', href: '/referanslarimiz/gorusler', icon: 'MessageCircle', desc: 'Müşterilerimizin hakkımızdaki düşünceleri.' }
      ]
    },
    { title: 'Blog', href: '/blog' },
    {
      title: 'İletişim',
      href: '/iletisim',
      subItems: [
        { title: 'İletişim Bilgileri', href: '/iletisim/bilgiler', icon: 'Phone', desc: 'Bize ulaşın.' },
        { title: 'Teknik Destek', href: '/iletisim/teknik-destek', icon: 'Wrench', desc: '7/24 Teknik destek hattı.' },
        { title: 'Teklif Talebi', href: '/iletisim/teklif', icon: 'FileText', desc: 'Hızlı teklif alın.' },
        { title: 'SSS', href: '/iletisim/kariyer', icon: 'MessageCircle', desc: 'Sıkça sorulan sorular.' }
      ]
    }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowDark
        ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100 py-3'
        : 'bg-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50 flex items-center gap-3">
            <motion.img
              src="/Küre.png"
              alt="AOM Engineering"
              className="h-24 w-auto object-contain max-w-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <div className="flex flex-col">
              <span className={`text-4xl font-black tracking-wide transition-colors duration-300 ${shouldShowDark ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'var(--font-playfair)', ...(!shouldShowDark ? { textShadow: '1px 1px 3px rgba(0,0,0,0.5)' } : {}) }}>
                ANGORA
              </span>
              <span
                className={`text-[11px] font-medium uppercase transition-colors duration-300 block ${shouldShowDark ? 'text-bordo-600' : 'text-white/80'}`}
                style={{ textAlignLast: 'justify' }}
              >
                Otomasyon | Mühendislik
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.subItems ? (
                  <HoverCard openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Link
                        href={item.href}
                        className={`relative flex items-center justify-center gap-1 px-4 py-2.5 text-[13px] font-bold tracking-wider uppercase rounded-lg border transition-all duration-300 whitespace-nowrap hover:scale-[1.03] ${shouldShowDark
                          ? 'text-gray-700 border-gray-200 hover:text-bordo-600 hover:bg-bordo-50 hover:border-bordo-300 group-data-[state=open]:text-bordo-600 group-data-[state=open]:bg-bordo-50 group-data-[state=open]:border-bordo-300'
                          : 'text-white/90 border-white/20 hover:text-white hover:bg-white/15 hover:border-white/40 group-data-[state=open]:text-white group-data-[state=open]:bg-white/15 group-data-[state=open]:border-white/40'
                          }`}
                        style={!shouldShowDark ? { textShadow: '1px 1px 3px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3)' } : {}}
                      >
                        {item.title}
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180 opacity-70" />
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 group-data-[state=open]:w-3/4 ${shouldShowDark ? 'bg-bordo-600 w-0 group-hover:w-3/4' : 'bg-white w-0 group-hover:w-3/4'}`} />
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-80 p-2 bg-white rounded-2xl shadow-xl border border-slate-100 animate-in fade-in-0 zoom-in-95 duration-200"
                      align="start"
                      sideOffset={8}
                    >
                      <div className="grid gap-1 p-1">
                        {item.subItems.map((sub, idx) => {
                          const Icon = iconMap[sub.icon] || ArrowRight;
                          return (
                            <Link
                              key={idx}
                              href={sub.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="flex-shrink-0 p-2 bg-bordo-50 text-bordo-600 rounded-lg group-hover/item:bg-bordo-100 transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-[15px] font-semibold text-gray-900 group-hover/item:text-bordo-700 transition-colors">
                                  {sub.title}
                                </div>
                                {sub.desc && (
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                    {sub.desc}
                                  </p>
                                )}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Link
                    href={item.href}
                    className={`group/link relative flex items-center justify-center px-4 py-2.5 text-[13px] font-bold tracking-wider uppercase rounded-lg border transition-all duration-300 whitespace-nowrap hover:scale-[1.03] ${shouldShowDark
                      ? 'text-gray-700 border-gray-200 hover:text-bordo-600 hover:bg-bordo-50 hover:border-bordo-300'
                      : 'text-white/90 border-white/20 hover:text-white hover:bg-white/15 hover:border-white/40'
                      }`}
                    style={!shouldShowDark ? { textShadow: '1px 1px 3px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3)' } : {}}
                  >
                    {item.title}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover/link:w-3/4 ${shouldShowDark ? 'bg-bordo-600' : 'bg-white'}`} />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-bordo-600 hover:bg-bordo-700 text-white shadow-lg shadow-bordo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6"
            >
              <Link href="/iletisim/teklif">
                Teklif Al
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-full transition-colors ${shouldShowDark ? 'text-gray-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-24 space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="space-y-3">
                    {item.subItems ? (
                      <div className="space-y-3">
                        <div className="font-bold text-gray-900 px-2">{item.title}</div>
                        <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2">
                          {item.subItems.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-sm text-gray-600 hover:text-bordo-600 py-1 transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block font-bold text-gray-900 hover:text-bordo-600 px-2 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-slate-100">
                  <Button className="w-full bg-bordo-600 hover:bg-bordo-700 text-white rounded-xl" asChild>
                    <Link href="/iletisim/teklif">Teklif Al</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
