import React from 'react'
import { NextPage } from 'next'
import ScrollArrow from '@/components/ScrollArrow'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'

const Index: NextPage = () => {
  const section = {
    visible: { transition: { staggerChildren: 0.5 } },
  }

  const itemEffect = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  }

  return (
    <CustomHead
      title='About'
      description='About Page'
    >
      <motion.section
        id='hero'
        initial='hidden'
        variants={section}
        whileInView='visible'
        className='relative flex h-screen flex-col items-center justify-center gap-8 bg-hero-about bg-cover bg-center'
      >
        <motion.p
          variants={itemEffect}
          className='text-center text-5xl font-medium leading-normal tracking-widest text-white'
        >
          Get To Know Asya Kreasi Dahayu, <br /> Where The Idea Starts
        </motion.p>
        <ScrollArrow
          scrollTo='#visi'
          className='absolute bottom-0 mb-[5vw]'
        />
      </motion.section>

      <section id='visi'>
        <div className='container mx-auto pt-36'>
          <div className='flex flex-wrap justify-between border-b-2 border-asya-dark pb-36'>
            <h1 className='basis-5/12 text-4xl font-medium uppercase tracking-widest text-asya-dark'>
              Visi Asya Kreasi Dahayu
            </h1>
            <p className='basis-5/12 leading-relaxed tracking-widest text-asya-dark'>
              Visi utama kami adalah memberikan pelayanan paling unggul dan perhatian yang tinggi kepada para kreator
              dengan ekosistem kerja yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami untuk menjadi
              lembaga industri kreatif yang terdepan dan terbesar di Indonesia dalam hal pelayanan dan kinerja untuk
              klien dan mitra kerja agar dapat menjadi pilar perekonomian negara.
            </p>
            <div className='aspect-square basis-5/12 bg-asya-dark'></div>
          </div>
        </div>
      </section>

      <section id='misi'>
        <div className='container mx-auto pt-36'>
          <div className='flex flex-wrap justify-between border-b-2 border-asya-dark pb-36'>
            <h1 className='basis-5/12 text-4xl font-medium uppercase tracking-widest text-asya-dark'>
              Misi Asya Kreasi Dahayu
            </h1>
            <div className='basis-5/12 leading-relaxed tracking-widest text-asya-dark'>
              <p className='mb-4'>
                Dalam mewujudkan visi kami, kesejahteraan tim serta keseimbangan ekosistem kerja adalah yang utama. Kami
                menciptakan lingkungan kerja yang aman dan nyaman serta memberikan kesempatan berkembang dengan membina
                dan meningkatkan semangat yang tinggi kepada tim kami agar setiap level dari tim dapat bekerja sama
                untuk mewujudkan pelayanan terbaik dan berkualitas sehingga tercipta hubungan kerja sama yang kuat
                dengan pelanggan dan mitra kerja.
              </p>
              <p>
                Selain itu, kami menerapkan manajemen proyek yang terintegrasi dengan wilayah operasi di Indonesia agar
                dapat memberikan kepuasan untuk pelanggan, anggota, dan perusahaan serta meningkatkan nilai yang tinggi
                bagi investor atau pemegang saham.
              </p>
            </div>
            <div className='aspect-square basis-5/12 bg-asya-dark'></div>
          </div>
        </div>
      </section>

      <section id='team'>
        <div className='container mx-auto flex py-20'>
          <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-asya-dark'>Our Team</h2>
          <p className='w-3/5 font-light leading-relaxed tracking-widest text-asya-dark'>
            Sesuai visi Asya, tujuan kami adalah menggunakan keterampilan kreatif kami untuk memberikan pelayanan paling
            unggul dalam membantu dan membimbing para kreator menciptakan karya yang terlihat menarik dan berkelanjutan.
            Kami ingin membagikan energi kami untuk menginspirasi orang-orang yang menikmati pekerjaannya dan membantu
            mereka mencapai hasil terbaik.
          </p>
        </div>
        <div className='container mx-auto'>
          <div className='grid grid-cols-4 gap-4 pb-36'>
            {[...Array(16)].map((item, key) => (
              <a
                href='#'
                key={key}
                className="asya-member-photo aspect-square bg-[url('/images/our-team.jpg')] bg-cover hover:bg-[linear-gradient(0deg,rgb(89_138_61),rgb(89_138_61)),url('/images/our-team.jpg')]"
              >
                <motion.div
                  className='flex h-full flex-col justify-between p-4 opacity-0 transition-opacity hover:opacity-100'
                  whileHover={{ x: 10, transition: { duration: 0.5 } }}
                >
                  <h6 className='text-2xl font-bold uppercase leading-normal tracking-widest text-white'>John Doe</h6>
                  <p className='text-lg leading-normal tracking-widest text-white'>Jabatan Staff Lorem Ipsum</p>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Index
