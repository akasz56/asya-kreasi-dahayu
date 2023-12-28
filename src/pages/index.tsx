import React from 'react'
import { NextPage } from 'next'
import { DisplayContentItem } from '@/components/Display'
import ScrollArrow from '@/components/ScrollArrow'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'

const Home: NextPage = () => {
  const services: DisplayContentItem[] = [
    {
      title: 'MICE (Meeting Incentive Convention Exhibition)',
      description:
        'Kami memberikan pelayanan dan edukasi untuk bidang yang masih minim atensi: “the meetings industry”.',
      href: '#',
    },
    {
      title: 'Multimedia',
      description: 'Kami menciptakan hasil eksplorasi dengan realisasi ide yang unik dan berkelanjutan.',
      href: '#',
    },
    {
      title: 'Desain Grafis',
      description: 'Kami merancang pola visual yang tidak hanya menarik perhatian, namun memberikan inspirasi.',
      href: '#',
    },
    {
      title: 'Garment & Fashion',
      description: 'Kami menciptakan mode yang inovatif namun tak lekang oleh waktu.',
      href: '#',
    },
    {
      title: 'Konsultan Kreatif',
      description:
        'Kami memberikan strategi dalam desain untuk membekali kreator dalam bertumbuh dan menciptakan mahakarya ke depannya.',
      href: '#',
    },
  ]

  const section = {
    visible: { transition: { staggerChildren: 0.5 } },
  }

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  }

  return (
    <>
      <CustomHead
        title='Home'
        description='Home Page Asya Kreasi Dahayu'
      >
        <motion.section
          id='hero'
          initial='hidden'
          variants={section}
          whileInView='visible'
          className='relative h-screen bg-hero-landing bg-cover bg-center flex flex-col items-center justify-center gap-6'
        >
          <motion.p
            variants={item}
            className='text-center text-white text-5xl font-medium tracking-widest leading-normal'
          >
            Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan kembali asa.
          </motion.p>
          <motion.a
            href='/our-services'
            variants={item}
            className='px-6 py-2 rounded-md bg-asya-dark uppercase text-white font-medium tracking-widest'
          >
            Get started
          </motion.a>
          <ScrollArrow
            scrollTo='#about'
            className='absolute bottom-0 mb-[5vw]'
          />
        </motion.section>

        <section
          id='about'
          className='bg-asya-dark'
        >
          <div className='flex container mx-auto py-20'>
            <h2 className='flex-1 self-center uppercase text-white text-4xl font-medium tracking-widest'>About Us</h2>
            <p className='w-3/5 text-white font-light tracking-widest leading-relaxed'>
              Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang industri kreatif dan pengembangan sumber
              daya manusia. Sejak September 2022, kami memberikan pelayanan untuk memudahkan anda berkreasi di dunia
              MICE, desain, hingga multimedia. Dengan didukung oleh teknologi mutakhir dan orang-orang yang handal dan
              berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang nyata untuk para kreator.
            </p>
          </div>
        </section>

        <section id='service'>
          <div className='container mx-auto'>
            <div className='flex py-32'>
              <h2 className='flex-1 self-center uppercase text-asya-dark text-4xl font-medium tracking-widest'>
                Our Service
              </h2>
              <p className='w-3/5 text-asya-dark font-light tracking-widest leading-relaxed'>
                Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di bidang industri kreatif dari seluruh
                Indonesia. Fokus kami adalah menyediakan solusi dengan menjadi media penghubung untuk menunjangi para
                kreator kecil hingga menengah didukung oleh tim kami yang handal dan berpengalaman di bidangnya. Setiap
                bidang pelayanan tentu saja memiliki keunikan dan kekuatannya masing-masing. Namun di sini, kami membuka
                kesempatan para kreator untuk berkembang dan ruang untuk saling berkolaborasi.
              </p>
            </div>
            <div className='mb-28 grid grid-cols-2 gap-16'>
              {services.map((item, key) => (
                <Link
                  key={key}
                  href={'#'}
                >
                  <div className='mb-20 rounded-3xl aspect-square bg-asya-dark'></div>
                  <h2 className='mb-20 uppercase text-asya-dark text-3xl font-medium tracking-widest overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-visible hover:whitespace-normal'>
                    {item.title}
                  </h2>
                  <p className='text-asya-dark tracking-widest'>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </CustomHead>
    </>
  )
}

export default Home
