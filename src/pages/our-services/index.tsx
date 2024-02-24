import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import Image from 'next/image'

const Index: NextPage = () => {
  const services = [
    {
      name: 'MICE (Meeting Incentive Convention Exhibition)',
      nickname: 'MICE',
      description:
        'Tim kami akan membantu kreator untuk mencapai hasil yang terbaik dengan memberikan pelayanan all-in dengan keserbagunaan untuk tumbuh di industri ini mulai dari akomodasi, transportasi, hingga publikasi.',
      characteristics: [
        {
          title: 'Keunggulan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Jasa yang disediakan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Fitur tambahan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
      ],
    },
    {
      name: 'Multimedia',
      description:
        'Tim kami memberikan pelayanan yang lengkap mulai dari sistem, visual, dan perlengkapan lainnya dengan berkomitmen untuk kesempurnaan dan akurasi dalam berkolaborasi dengan sektor lain seperti MICE dan desain grafis.',
      characteristics: [
        {
          title: 'Keunggulan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Jasa yang disediakan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Fitur tambahan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
      ],
    },
    {
      name: 'Desain Grafis',
      description:
        'Tim kami membantu kreator dalam menciptakan dan membangun identitas, ide merek, dan pengalaman dengan ekspresi khas yang terhubung dan terlibat untuk melaksanakan tujuan yang telah ditetapkan.',
      characteristics: [
        {
          title: 'Keunggulan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Jasa yang disediakan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Fitur tambahan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
      ],
    },
    {
      name: 'Garment & Fashion',
      description: '',
      characteristics: [
        {
          title: 'Keunggulan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Jasa yang disediakan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Fitur tambahan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
      ],
    },
    {
      name: 'Konsultan Kreatif',
      description:
        'Tim kami membantu untuk memberikan arahan dan solusi dalam merancang identitas grafis yang unik dengan mengidentifikasi peluang komersial, konsumen, dan budaya untuk merek tersebut.',
      characteristics: [
        {
          title: 'Keunggulan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Jasa yang disediakan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
        {
          title: 'Fitur tambahan',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
        },
      ],
    },
  ]

  const heroVariants = {
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
        title='Services'
        description='Services Page'
      >
        <div
          id='hero'
          className='relative flex h-screen flex-col justify-evenly'
        >
          <Image
            src={'/images/service.jpg'}
            alt={'backgroundService'}
            width={7905}
            height={4026}
            className='absolute -z-10 h-full object-cover'
          />
          <motion.div
            className='container mx-auto'
            initial='hidden'
            animate='visible'
            variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          >
            <div className='grid grid-cols-2 items-center'>
              <motion.h1
                variants={heroVariants}
                className='text-5xl font-medium uppercase tracking-widest text-white'
              >
                Our Services
              </motion.h1>
              <motion.p
                variants={heroVariants}
                className='font-light leading-relaxed tracking-widest text-white'
              >
                Setiap bidang pelayanan tentu saja memiliki keunikan dan kekuatannya masing-masing. Namun di sini, kami
                membuka kesempatan para kreator untuk berkembang dan ruang untuk saling berkolaborasi.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className='container mx-auto'
            initial='hidden'
            animate='visible'
            variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          >
            <div className='flex justify-between'>
              {services.map((service, key) => (
                <motion.a
                  key={key}
                  href={'#section' + key}
                  variants={heroVariants}
                >
                  <div className='mx-auto mb-8 h-14 w-14 rounded-full bg-white'></div>
                  <h4 className='text-center text-xl font-bold uppercase leading-normal tracking-widest text-white'>
                    {service.nickname ?? service.name}
                  </h4>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {services.map((service, key) => (
          <div
            key={key}
            id={'section' + key}
            className='my-32'
          >
            <div className='container mx-auto'>
              <div className='mb-24 flex'>
                <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-asya-dark'>
                  {service.name}
                </h2>
                <p className='w-3/5 font-light leading-relaxed tracking-widest text-asya-dark'>{service.description}</p>
              </div>
              <div className='aspect-video w-full bg-asya-dark'></div>
              <ul className='mt-20 grid grid-cols-3 gap-24'>
                {service.characteristics.map((characteristic, key) => (
                  <li
                    key={key}
                    className='flex flex-col justify-between'
                  >
                    <h4 className='mb-10 text-2xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
                      {characteristic.title}
                    </h4>
                    <p className='leading-normal tracking-widest text-asya-dark'>{characteristic.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </CustomHead>
    </>
  )
}

export default Index
