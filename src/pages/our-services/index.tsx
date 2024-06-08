import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import Image from 'next/image'
import heroImage from '../../../public/images/service.webp'
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
          className='asya-container items-center lg:grid lg:grid-cols-2'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <motion.h1
            variants={heroVariants}
            className='asya-title text-white'
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={heroVariants}
            className='asya-description mx-auto max-w-sm text-white sm:max-w-lg lg:mx-0'
          >
            Setiap bidang pelayanan tentu saja memiliki keunikan dan kekuatannya masing-masing. Namun di sini, kami
            membuka kesempatan para kreator untuk berkembang dan ruang untuk saling berkolaborasi.
          </motion.p>
        </motion.div>
        <motion.div
          className='asya-container-alt flex flex-wrap justify-evenly xl:justify-between'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {services.map((service: Service, key: number) => (
            <motion.a
              key={key}
              href={'#service_' + key}
              variants={heroVariants}
              className={'mb-16 min-w-[33%] xl:mb-0 xl:min-w-0' + (key == 1 ? ' xl:ml-8' : '')}
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
            <div className='mb-24 flex flex-col lg:flex-row lg:gap-10'>
              <h2 className='asya-title text-asya-dark lg:flex-1 lg:self-center'>{service.name}</h2>
              <p className='asya-description mx-auto max-w-sm text-asya-dark sm:max-w-lg lg:mx-0 lg:w-3/5 lg:max-w-none'>
                {service.description}
              </p>
            </div>
            <Image
              src={service.asset}
              alt={service.name}
              width={1920}
              height={1080}
              className='-mx-4 aspect-video w-screen max-w-none object-cover lg:mx-0 lg:w-full'
            />

            <ul className='mx-8 mt-5 flex justify-between lg:mx-0 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-24'>
              {service.feature.map((feature: ServiceFeature, key: number) => (
                <li
                  key={key}
                  className='flex flex-col'
                >
                  <h4 className='text-xl uppercase leading-normal tracking-widest text-asya-dark lg:mb-10 lg:text-2xl lg:font-bold'>
                    {feature.title}
                  </h4>
                  <p className='hidden leading-normal tracking-widest text-asya-dark lg:block'>{feature.description}</p>
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
