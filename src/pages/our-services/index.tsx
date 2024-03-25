import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import Image from 'next/image'
import heroImage from '../../../public/images/service.jpg'
import { Service, ServiceFeature, services } from '@/components/services'

const Index: NextPage = () => {
  const heroVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  }

  return (
    <CustomHead
      title='Services'
      description='Services Page'
    >
      <div
        id='hero'
        className='relative flex h-screen flex-col justify-evenly'
      >
        <Image
          src={heroImage}
          alt={'Hero Image Service'}
          className='absolute -z-10 h-full object-cover'
        />
        <motion.div
          className='grid grid-cols-2 items-center asya-container'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
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
        </motion.div>
        <motion.div
          className='flex justify-between asya-container-alt'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {services.map((service: Service, key: number) => (
            <motion.a
              key={key}
              href={'#service_' + key}
              variants={heroVariants}
              className={key <= 1 ? 'ls:mr-14' : ''}
            >
              <Image
                src={service.icon}
                alt={service.name}
                width={360}
                height={360}
                className='mx-auto mb-8 h-14 w-14 fill-white'
              />
              <h4 className='text-center text-xl font-bold uppercase leading-normal tracking-widest text-white'>
                {service.nickname ?? service.name}
              </h4>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {services.map((service, key) => (
        <div
          key={key}
          id={'service_' + key}
          className='my-32'
        >
          <div className='asya-container'>
            <div className='mb-24 flex gap-10'>
              <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-asya-dark'>
                {service.name}
              </h2>
              <p className='w-3/5 font-light leading-relaxed tracking-widest text-asya-dark'>{service.description}</p>
            </div>
            <Image
              src={service.asset}
              alt={service.name}
              width={1920}
              height={1080}
              className='aspect-video w-full object-cover'
            />

            <ul className='mt-20 grid grid-cols-3 gap-24'>
              {service.feature.map((feature: ServiceFeature, key: number) => (
                <li
                  key={key}
                  className='flex flex-col justify-between'
                >
                  <h4 className='mb-10 text-2xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
                    {feature.title}
                  </h4>
                  <p className='leading-normal tracking-widest text-asya-dark'>{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </CustomHead>
  )
}

export default Index
