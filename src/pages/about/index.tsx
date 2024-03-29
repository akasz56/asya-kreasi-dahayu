import React from 'react'
import { NextPage } from 'next'
import ScrollArrow from '@/components/ScrollArrow'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import { team as teamData } from '@/components/team'
import TeamPhoto from '@/components/TeamPhoto'
import Image from 'next/image'
import heroImage from '../../../public/images/about.jpg'
import visiImage from '../../../public/images/visi.jpg'
import misiImage from '../../../public/images/misi.jpg'

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
            className='text-center text-5xl font-medium leading-normal tracking-widest text-white'
          >
            Get To Know Asya Kreasi Dahayu, <br /> Where The Idea Starts
          </motion.p>
          <ScrollArrow
            scrollTo='#visi'
            className='absolute bottom-0 mb-[5vw]'
          />
        </motion.div>
      </section>

      <section id='visi'>
        <div className='asya-container pt-36'>
          <div className='flex justify-between border-b-2 border-asya-dark pb-36 gap-16'>
            <div className='w-[587px] lg:space-y-40 space-y-20'>
              <h1 className='text-4xl font-medium uppercase tracking-widest text-asya-dark'>Visi Asya Kreasi Dahayu</h1>
              <Image
                src={visiImage}
                alt='Visi'
                className='aspect-square object-cover'
              />
            </div>
            <div className='w-[587px] space-y-4 leading-relaxed tracking-widest text-asya-dark'>
              <p>
                Visi utama kami adalah memberikan pelayanan paling unggul dan perhatian yang tinggi kepada para kreator
                dengan ekosistem kerja yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami untuk menjadi
                lembaga industri kreatif yang terdepan dan terbesar di Indonesia dalam hal pelayanan dan kinerja untuk
                klien dan mitra kerja agar dapat menjadi pilar perekonomian negara.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='misi'>
        <div className='asya-container pt-36'>
          <div className='flex justify-between border-b-2 border-asya-dark pb-36 gap-16'>
            <div className='w-[587px] lg:space-y-40 space-y-20'>
              <h1 className='text-4xl font-medium uppercase tracking-widest text-asya-dark'>Misi Asya Kreasi Dahayu</h1>
              <Image
                src={misiImage}
                alt='Misi'
                className='aspect-square object-cover'
              />
            </div>
            <div className='w-[587px] space-y-4 leading-relaxed tracking-widest text-asya-dark'>
              <p>
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
        </div>
      </section>

      <section id='team'>
        <div className='asya-container flex py-20'>
          <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-asya-dark'>Our Team</h2>
          <p className='w-3/5 font-light leading-relaxed tracking-widest text-asya-dark'>
            Sesuai visi Asya, tujuan kami adalah menggunakan keterampilan kreatif kami untuk memberikan pelayanan paling
            unggul dalam membantu dan membimbing para kreator menciptakan karya yang terlihat menarik dan berkelanjutan.
            Kami ingin membagikan energi kami untuk menginspirasi orang-orang yang menikmati pekerjaannya dan membantu
            mereka mencapai hasil terbaik.
          </p>
        </div>
        <div className='asya-container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-36'>
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
