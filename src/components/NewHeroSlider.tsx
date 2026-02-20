'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Slide {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  category: string
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides: Slide[] = [
    {
      id: 1,
      title: "Endüstriyel Otomasyon",
      description: "Modern fabrikalar için kapsamlı otomasyon çözümleri. Üretim hattınızı Endüstri 4.0 teknolojileri ile dönüştürün. Verimlilik, kalite ve güvenlik odaklı sistemler.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=80",
      buttonText: "Detaylı Bilgi",
      buttonLink: "/endustriyel-otomasyon",
      category: "Endüstriyel"
    },
    {
      id: 2,
      title: "Medikal Cihazlar",
      description: "Sağlık sektörü için yenilikçi medikal cihaz çözümleri. Hasta bakım kalitesini artıran, güvenilir ve teknolojik medikal ekipmanlar. Hastane ve klinik otomasyon sistemleri.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&q=80",
      buttonText: "Detaylı Bilgi",
      buttonLink: "/medikal-cihazlar",
      category: "Medikal"
    },
    {
      id: 3,
      title: "Oksijen Jeneratörleri",
      description: "Yüksek verimli oksijen üretim sistemleri. Hastaneler, klinikler ve endüstriyel tesisler için güvenilir oksijen kaynağı. Kesintisiz oksijen tedariki çözümleri.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09f543831?w=1920&h=1080&fit=crop&q=80",
      buttonText: "Detaylı Bilgi",
      buttonLink: "/oksijen-jeneratorleri",
      category: "Oksijen"
    },
    {
      id: 4,
      title: "Robotik Sistemler",
      description: "Gelişmiş robotik çözümler ile üretim süreçlerinizi otomatikleştirin. Endüstriyel robotlar, montaj hattı otomasyonu ve akıllı robotik sistemler.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&q=80",
      buttonText: "Detaylı Bilgi",
      buttonLink: "/robotik-sistemler",
      category: "Robotik"
    },
    {
      id: 5,
      title: "Gıda Paketleme",
      description: "Gıda endüstrisi için hijyenik ve hızlı paketleme sistemleri. Otomatik dolum, kapatma ve etiketleme çözümleri. Gıda güvenliği standartlarına uygun teknolojiler.",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=1920&h=1080&fit=crop&q=80",
      buttonText: "Detaylı Bilgi",
      buttonLink: "/gida-paketleme",
      category: "Gıda"
    }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length, isPlaying])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${slides[currentSlide].image}')`
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="container mx-auto px-4 text-center">
                  <div className="max-w-4xl mx-auto">
                    <motion.h1
                      className="text-6xl md:text-8xl font-black mb-8 leading-tight"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '900',
                        textShadow: '0 0 30px rgba(0,0,0,1), 4px 4px 15px rgba(0,0,0,1), 8px 8px 25px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '2px rgba(0,0,0,0.8)',
                        filter: 'brightness(1.3) contrast(1.2)'
                      }}
                    >
                      {slides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                      className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-semibold"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '600',
                        textShadow: '0 0 20px rgba(0,0,0,1), 3px 3px 10px rgba(0,0,0,1), 6px 6px 20px rgba(0,0,0,0.8)',
                        WebkitTextStroke: '1px rgba(0,0,0,0.6)',
                        filter: 'brightness(1.2)'
                      }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <Button
                        size="lg"
                        className="bg-bordo-600 hover:bg-bordo-700 text-white font-bold px-10 py-6 text-xl rounded-xl shadow-2xl border-0 hover:shadow-bordo-500/30 transition-all duration-300 transform hover:scale-105"
                      >
                        Detaylı Bilgi
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-5 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>

          {/* Slide Indicators - Progress Bars */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500"
                style={{ width: index === currentSlide ? '32px' : '16px' }}
              >
                <div className="absolute inset-0 bg-white/30 rounded-full" />
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: isPlaying ? 5 : 999, ease: 'linear' }}
                    key={`progress-${currentSlide}`}
                  />
                )}
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-white/30 rounded-full hover:bg-white/60 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <span className="text-white/50 text-xs font-mono tracking-wider">
            {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="group absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={22} className="text-white/70 group-hover:text-white transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="group absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={22} className="text-white/70 group-hover:text-white transition-colors" />
      </button>
    </div>
  )
}
