'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
    { name: 'Autonics', logo: '/images/autonics.png' },
    { name: 'Baykon', logo: '/logo/baykon.png' },
    { name: 'Cembre', logo: '/logo/cembre.png' },
    { name: 'Entes', logo: '/logo/entes.png' },
    { name: 'Harting', logo: '/logo/harting.png' },
    { name: 'Hensel', logo: '/logo/hensel.png' },
    { name: 'Himel', logo: '/logo/himel.png' },
    { name: 'Kardeş Elektrik', logo: '/logo/kardeşelektrik.png' },
    { name: 'Katlax', logo: '/logo/katlax.png' },
    { name: 'Kenda', logo: '/logo/kenda.png' },
    { name: 'Klemsan', logo: '/logo/klemsan.png' },
    { name: 'Omron', logo: '/logo/omron.png' },
    { name: 'Relpol', logo: '/logo/relpol.png' },
    { name: 'Schneider', logo: '/logo/schneider.png' },
    { name: 'Secomea', logo: '/logo/secomea.png' },
    { name: 'Siemens', logo: '/logo/siemens.png' },
    { name: 'Telemecanique', logo: '/logo/telemecanique.png' },
    { name: 'Teltonika', logo: '/logo/teltonika.png' },
    { name: 'WEG', logo: '/logo/weg.png' },
    { name: 'Weidmuller', logo: '/logo/weidmuller.png' },
    { name: 'Yaskawa', logo: '/logo/yaskawa.png' },
]

export default function BrandSlider() {
    return (
        <section className="py-16 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 mb-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-bordo-500 mb-2">Çalıştığımız Markalar</h2>
                <div className="w-24 h-1 bg-bordo-500 mx-auto rounded-full"></div>
            </div>

            {/* Sol ve sağ kenarlarda fade efekti */}
            <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex shrink-0 items-center gap-12 md:gap-24 px-6 md:px-12 min-w-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {brands.map((brand, index) => (
                        <div key={`brand-1-${index}`} className="flex items-center justify-center w-[120px] md:w-[160px] h-24 group relative shrink-0">
                            <div className="relative w-full h-full p-2">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    sizes="(max-width: 768px) 150px, 200px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex shrink-0 items-center gap-12 md:gap-24 px-6 md:px-12 min-w-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {brands.map((brand, index) => (
                        <div key={`brand-2-${index}`} className="flex items-center justify-center w-[120px] md:w-[160px] h-24 group relative shrink-0">
                            <div className="relative w-full h-full p-2">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    sizes="(max-width: 768px) 150px, 200px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
