import React from 'react'
import { NextPage } from 'next'
import Display, { DisplayContentItem } from '@/components/Display'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'

const Index: NextPage = () => {
  const works: DisplayContentItem[] = [
    {
      title:
        'Bimtek Anggota DRPD Provinsi & DPRD Kabupaten Kota se Banten, Jawa Barat dan DKI Jakarta (EO, Multimedia)',
      description:
        'Kami memberikan pelayanan all-in dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dan akomodasi sebagai komitmen dalam pelayanan sektor pengembangan.',
      href: '/works/1',
    },
    {
      title: 'Outing RSUD Kota Depok (Multimedia)',
      description:
        'Kami memberikan pelayanan berupa pendampingan sebagai pemandu wisata dan dokumentasi kegiatan dalam acara outing karyawan di Bulukumba, Sulawesi Selatan.',
      href: '/works/2',
    },
    {
      title: 'PT Rajawali Perkasa Furniture (EO)',
      description:
        'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
      href: '/works/3',
    },
    {
      title: 'PT Sam and Andy (EO)',
      description:
        'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
      href: '/works/4',
    },
    {
      title: 'PT Maesindo Indonesia (EO)',
      description:
        'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
      href: '/works/5',
    },
  ]

  return (
    <>
      <CustomHead
        title='Works'
        description='Works Page'
      >
        <section>
          <motion.h1
            id='title'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className='py-36 text-asya-dark text-5xl text-center font-medium leading-normal tracking-widest'
          >
            Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
          </motion.h1>
          <div className='container mx-auto mb-28 grid grid-cols-2 gap-16'>
            {works.map((work, key) => (
              <Link
                key={key}
                href={work.href}
              >
                <div className='aspect-square bg-asya-dark'></div>
                <h2 className='mt-20 uppercase text-asya-dark text-3xl font-medium tracking-widest'>{work.title}</h2>
                <p className='mt-20 text-asya-dark tracking-widest'>{work.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section
          id='clients'
          className='container mx-auto my-32 pt-16'
        >
          <h1 className='uppercase text-asya-dark text-5xl font-medium leading-normal tracking-widest'>Clients</h1>
          <ul className='mt-48 ml-48'>
            {[...Array(12)].map((item, key) => (
              <li
                key={key}
                className='mb-12'
              >
                <Link
                  href={'/works/project-one'}
                  className='flex gap-16'
                >
                  <span className='text-asya-dark text-xl tracking-widest leading-relaxed'>
                    Nama Klien Lorem Ipsum Dolor
                  </span>
                  <hr className='flex-1 self-center border-asya-dark' />
                  <span className='text-asya-dark text-xl tracking-widest leading-relaxed'>Jenis Bidang, 2019</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </CustomHead>
    </>
  )
}

export default Index