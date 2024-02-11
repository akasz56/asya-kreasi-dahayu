import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'

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
          className='h-screen bg-asya-dark flex flex-col justify-evenly'
        >
          <motion.div
            className='container mx-auto'
            initial='hidden'
            animate='visible'
            variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          >
            <div className='grid grid-cols-2 items-center'>
              <motion.h1
                variants={heroVariants}
                className='uppercase text-white text-5xl font-medium tracking-widest'
              >
                Our Services
              </motion.h1>
              <motion.p
                variants={heroVariants}
                className='text-white font-light tracking-widest leading-relaxed'
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
                  <div className='mx-auto mb-8 h-14 w-14 bg-white rounded-full'></div>
                  <h4 className='uppercase text-center text-white text-xl font-bold leading-normal tracking-widest'>
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
              <div className='flex mb-24'>
                <h2 className='flex-1 self-center uppercase text-asya-dark text-4xl font-medium tracking-widest'>
                  {service.name}
                </h2>
                <p className='w-3/5 text-asya-dark font-light tracking-widest leading-relaxed'>{service.description}</p>
              </div>
              <div className='w-full aspect-video bg-asya-dark'></div>
              <ul className='mt-20 grid grid-cols-3 gap-24'>
                {service.characteristics.map((characteristic, key) => (
                  <li
                    key={key}
                    className='flex flex-col justify-between'
                  >
                    <h4 className='mb-10 uppercase text-asya-dark text-2xl font-bold leading-normal tracking-widest'>
                      {characteristic.title}
                    </h4>
                    <p className='text-asya-dark leading-normal tracking-widest'>{characteristic.description}</p>
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
