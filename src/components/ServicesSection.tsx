'use client'

import React from 'react'
import Link from 'next/link'
import { Building2, Cog, Heart, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ServicesSection = () => {
  const services = [
    {
      icon: <Cog className="w-12 h-12 text-bordo-600" />,
      title: "Endüstriyel Otomasyon",
      description: "Endüstri 4.0 standartlarında modern üretim tesisleri için kapsamlı otomasyon çözümleri. PLC programlama, SCADA sistemleri ve akıllı fabrika teknolojileri.",
      features: ["PLC & HMI Programlama", "SCADA Sistemleri", "MES Entegrasyonu", "IoT Çözümleri"],
      badge: "Endüstri 4.0",
      color: "from-blue-500 to-blue-600",
      href: "/endustriyel-otomasyon"
    },
    {
      icon: <Building2 className="w-12 h-12 text-bordo-600" />,
      title: "Robotik Sistemler",
      description: "Üretim verimliliğini artıran gelişmiş robotik çözümler. Endüstriyel robot programlama, kolaboratif robotlar ve otonom sistemler.",
      features: ["Robot Programlama", "Collaborative Robotics", "AGV Sistemleri", "AI Entegrasyonu"],
      badge: "Yeni Nesil",
      color: "from-purple-500 to-purple-600",
      href: "/robotik-sistemler"
    },
    {
      icon: <Heart className="w-12 h-12 text-bordo-600" />,
      title: "Medikal Cihazlar",
      description: "Sağlık sektörü için ileri teknoloji medikal cihaz ve sistem çözümleri. Hasta güvenliği odaklı yenilikçi teknolojik uygulamalar.",
      features: ["Hasta Monitör Sistemleri", "Medikal Cihaz Otomasyonu", "Biomedical Engineering", "FDA Uyumlu Çözümler"],
      badge: "FDA Onaylı",
      color: "from-green-500 to-green-600",
      href: "/medikal-cihazlar"
    },
    {
      icon: <Zap className="w-12 h-12 text-bordo-600" />,
      title: "Oksijen Jeneratörleri",
      description: "PSA ve VPSA teknolojisi ile yüksek saflıkta oksijen üretim sistemleri. Hastaneler ve endüstriyel tesisler için güvenilir oksijen çözümleri.",
      features: ["PSA & VPSA Teknolojisi", "%99.5 Saflık Garantisi", "Remote Monitoring", "Bakım & Servis"],
      badge: "Yüksek Verim",
      color: "from-orange-500 to-orange-600",
      href: "/oksijen-jeneratorleri"
    },
    {
      icon: <Building2 className="w-12 h-12 text-bordo-600" />,
      title: "Gıda Paketleme",
      description: "Gıda endüstrisi için modern paketleme teknolojileri. Otomatik paketleme, vakum paketleme ve kalite kontrol sistemleri.",
      features: ["Otomatik Paketleme", "Vakum Sistemleri", "Etiketleme", "Kalite Kontrol"],
      badge: "Güvenli",
      color: "from-green-500 to-green-600",
      href: "/gida-paketleme"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="relative z-30">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-10"></div>

      <div className="bg-white py-20 pt-32">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-bordo-600 border-bordo-600">
              Sistemlerinize Değer Katıyoruz
            </Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Düşük Maliyet, Yüksek Verimlilik
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Güvenilir otomasyon ve robotik çözümlerimizle işletmenizin verimliliğini artırıyor, maliyetlerinizi düşürüyor ve rekabette öne çıkmanızı sağlıyoruz. Sektörünüzde fark yaratmak için yenilikçi teknolojilerle yanınızdayız.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden relative">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 bg-bordo-50 rounded-xl group-hover:bg-bordo-100 transition-colors duration-300"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        {service.icon}
                      </motion.div>
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${service.color} text-white border-0`}
                      >
                        {service.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-bordo-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={service.href}>
                        <Button
                          className="w-full bg-gradient-to-r from-bordo-600 to-bordo-700 hover:from-bordo-700 hover:to-bordo-800 text-white font-semibold py-3 rounded-xl group-hover:shadow-lg transition-all duration-300"
                        >
                          Detaylı Bilgi
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-bordo-600 to-bordo-700 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Projeniz için özel çözüm mü arıyorsunuz?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Uzman ekibimizle ihtiyacınıza özel çözümler geliştirelim
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-bordo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  Ücretsiz Konsültasyon
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
