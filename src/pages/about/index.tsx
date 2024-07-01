import React from 'react'
import { NextPage } from 'next'
import ScrollArrow from '@/components/ScrollArrow'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import { team as teamData } from '@/components/team'
import TeamPhoto from '@/components/TeamPhoto'
import Image from 'next/image'
import heroImage from '../../../public/images/about.webp'
import visiImage from '../../../public/images/visi.webp'
import misiImage from '../../../public/images/misi.webp'

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
      <section
        id='hero'
        className='relative h-screen'
      >
        <Image
          src={heroImage}
          alt='Hero Image'
          className='absolute -z-10 h-full object-cover object-center'
        />
        <motion.div
          initial='hidden'
          variants={section}
          whileInView='visible'
          className='flex h-full flex-col items-center justify-center gap-8'
        >
          <motion.p
            variants={itemEffect}
            className='asya-txt text-center text-[20px] font-medium text-white lg:text-4xl xl:text-5xl'
          >
            Get To Know Asya Kreasi Dahayu, <br /> Where The Idea Starts
          </motion.p>
          <ScrollArrow
            scrollTo='#visi'
            className='absolute bottom-[40%] lg:bottom-0 lg:mb-[5vw]'
          />
        </motion.div>
      </section>

      <section id='visi'>
        <div className='asya-container pt-20 lg:pt-36'>
          <div className='flex flex-col lg:h-56 lg:flex-row lg:justify-between lg:gap-16'>
            <h1 className='asya-title text-asya-dark lg:w-[587px]'>Visi Asya Kreasi Dahayu</h1>
            <p className='asya-description mx-auto max-w-sm text-asya-dark sm:max-w-lg lg:mx-0 lg:w-[587px]'>
              Visi utama kami adalah memberikan pelayanan paling unggul dan perhatian yang tinggi kepada para kreator
              dengan ekosistem kerja yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami untuk menjadi
              lembaga industri kreatif yang terdepan dan terbesar di Indonesia dalam hal pelayanan dan kinerja untuk
              klien dan mitra kerja agar dapat menjadi pilar perekonomian negara.
            </p>
          </div>
          <Image
            src={visiImage}
            alt='Visi'
            className='-mx-4 mt-32 aspect-video w-screen max-w-none object-cover lg:m-0 lg:aspect-square lg:w-[40vw] lg:max-w-[587px]'
          />
          <hr className='mt-36 hidden border-t-2 border-asya-dark lg:block' />
        </div>
      </section>

      <section id='misi'>
        <div className='asya-container pt-20 lg:pt-36'>
          <div className='flex flex-col lg:h-56 lg:flex-row lg:justify-between lg:gap-16'>
            <h1 className='asya-title text-asya-dark lg:max-w-[587px] lg:flex-1'>Misi Asya Kreasi Dahayu</h1>
            <div className='asya-description mx-auto max-w-sm text-asya-dark sm:max-w-lg lg:mx-0 lg:max-w-[587px] lg:flex-1'>
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
          </div>
          <Image
            src={misiImage}
            alt='Misi'
            className='-mx-4 mt-32 aspect-video w-screen max-w-none object-cover lg:m-0 lg:aspect-square lg:w-[40vw] lg:max-w-[587px]'
          />
          <hr className='mt-36 hidden border-t-2 border-asya-dark lg:block' />
        </div>
      </section>

      <section id='team'>
        <div className='asya-container py-20 lg:flex'>
          <h2 className='asya-title self-center text-asya-dark lg:flex-1'>Our Team</h2>
          <p className='asya-description mx-auto max-w-sm text-asya-dark sm:max-w-lg lg:w-3/5 lg:max-w-none'>
            Sesuai visi Asya, tujuan kami adalah menggunakan keterampilan kreatif kami untuk memberikan pelayanan paling
            unggul dalam membantu dan membimbing para kreator menciptakan karya yang terlihat menarik dan berkelanjutan.
            Kami ingin membagikan energi kami untuk menginspirasi orang-orang yang menikmati pekerjaannya dan membantu
            mereka mencapai hasil terbaik.
          </p>
        </div>
        <div className='asya-container'>
          <div className='grid grid-cols-2 gap-2 pb-4 md:grid-cols-4 lg:gap-4 lg:pb-36'>
            {teamData.map((teamMember, key) => (
              <TeamPhoto
                key={key}
                teamMember={teamMember}
              />
            ))}
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Index
