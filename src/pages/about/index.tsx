import React from 'react'
import { NextPage } from 'next'
import ScrollArrow from '@/components/ScrollArrow'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'

const Index: NextPage = () => {
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
        title='About'
        description='About Page'
      >
        <motion.section
          id='hero'
          initial='hidden'
          variants={section}
          whileInView='visible'
          className='relative h-screen bg-hero-about bg-cover bg-center flex flex-col gap-8 justify-center items-center'
        >
          <motion.p
            variants={item}
            className='text-center text-white text-5xl font-medium tracking-widest leading-normal'
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
            <div className='flex flex-wrap justify-between pb-36 border-b-2 border-asya-dark'>
              <h1 className='basis-5/12 uppercase text-asya-dark text-4xl font-medium tracking-widest'>
                Visi Asya Kreasi Dahayu
              </h1>
              <p className='basis-5/12 text-asya-dark tracking-widest leading-relaxed'>
                Visi utama kami adalah memberikan pelayanan paling unggul dan perhatian yang tinggi kepada para kreator
                dengan ekosistem kerja yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami untuk menjadi
                lembaga industri kreatif yang terdepan dan terbesar di Indonesia dalam hal pelayanan dan kinerja untuk
                klien dan mitra kerja agar dapat menjadi pilar perekonomian negara.
              </p>
              <div className='basis-5/12 aspect-square bg-asya-dark'></div>
            </div>
          </div>
        </section>

        <section id='misi'>
          <div className='container mx-auto pt-36'>
            <div className='flex flex-wrap justify-between pb-36 border-b-2 border-asya-dark'>
              <h1 className='basis-5/12 uppercase text-asya-dark text-4xl font-medium tracking-widest'>
                Misi Asya Kreasi Dahayu
              </h1>
              <div className='basis-5/12 text-asya-dark tracking-widest leading-relaxed'>
                <p className='mb-4'>
                  Dalam mewujudkan visi kami, kesejahteraan tim serta keseimbangan ekosistem kerja adalah yang utama.
                  Kami menciptakan lingkungan kerja yang aman dan nyaman serta memberikan kesempatan berkembang dengan
                  membina dan meningkatkan semangat yang tinggi kepada tim kami agar setiap level dari tim dapat bekerja
                  sama untuk mewujudkan pelayanan terbaik dan berkualitas sehingga tercipta hubungan kerja sama yang
                  kuat dengan pelanggan dan mitra kerja.
                </p>
                <p>
                  Selain itu, kami menerapkan manajemen proyek yang terintegrasi dengan wilayah operasi di Indonesia
                  agar dapat memberikan kepuasan untuk pelanggan, anggota, dan perusahaan serta meningkatkan nilai yang
                  tinggi bagi investor atau pemegang saham.
                </p>
              </div>
              <div className='basis-5/12 aspect-square bg-asya-dark'></div>
            </div>
          </div>
        </section>

        <section id='team'>
          <div className='flex container mx-auto py-20'>
            <h2 className='flex-1 self-center uppercase text-asya-dark text-4xl font-medium tracking-widest'>
              Our Team
            </h2>
            <p className='w-3/5 text-asya-dark font-light tracking-widest leading-relaxed'>
              Sesuai visi Asya, tujuan kami adalah menggunakan keterampilan kreatif kami untuk memberikan pelayanan
              paling unggul dalam membantu dan membimbing para kreator menciptakan karya yang terlihat menarik dan
              berkelanjutan. Kami ingin membagikan energi kami untuk menginspirasi orang-orang yang menikmati
              pekerjaannya dan membantu mereka mencapai hasil terbaik.
            </p>
          </div>
          <div className='container mx-auto'>
            <div className='pb-36 grid grid-cols-4 gap-4'>
              {[...Array(16)].map((item, key) => (
                <a
                  href='#'
                  key={key}
                  className="aspect-square bg-cover asya-member-photo bg-[url('/images/our-team.jpg')]
                hover:bg-[linear-gradient(0deg,rgb(89_138_61),rgb(89_138_61)),url('/images/our-team.jpg')]"
                >
                  <div className='p-4 h-full flex flex-col justify-between opacity-0 hover:opacity-100'>
                    <h6 className='uppercase text-2xl font-bold text-white leading-normal tracking-widest'>John Doe</h6>
                    <p className='text-lg text-white leading-normal tracking-widest'>Jabatan Staff Lorem Ipsum</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </CustomHead>
    </>
  )
}

export default Index
