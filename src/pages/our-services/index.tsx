import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { AnimatePresence, motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'
import Image from 'next/image'
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
        <img
          src={'https://asyakreasidahayu.com/public/images/service.webp'}
          alt={'Hero Image Service'}
          className='absolute -z-10 h-full w-full object-cover'
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
          className='mx-auto flex flex-wrap justify-between px-4 lg:container lg:w-[1280px] lg:px-20'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {services.map((service: Service, key: number) => (
            <motion.a
              key={key}
              href={'#service_' + key}
              variants={heroVariants}
              className={
                'mb-16 min-w-[33%] grow basis-1/3 lg:min-w-0 lg:basis-1/5' +
                (service.iconAdditionalClass ? ' ' + service.iconAdditionalClass : '')
              }
            >
              <img
                src={service.icon}
                alt={service.name}
                width={360}
                height={360}
                className='mx-auto mb-4 h-11 w-11 fill-white lg:mb-8 lg:h-14 lg:w-14'
              />
              <h4 className='asya-txt text-center text-[11px] font-bold uppercase text-white lg:text-xl'>
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
            <img
              src={service.asset}
              alt={service.name}
              width={1920}
              height={1080}
              className='-mx-4 aspect-video w-screen max-w-none object-cover lg:mx-0 lg:w-full'
            />

            <ServiceFeatureSlider
              className='mt-12 block lg:hidden'
              content={service.feature}
            />
            <ul className='mx-0 mt-20 hidden grid-cols-2 justify-between gap-24 lg:grid'>
              {service.feature.map((feature: ServiceFeature, key: number) => (
                <li
                  key={key}
                  className='flex flex-col'
                >
                  <h4 className='asya-txt mb-10 text-2xl font-bold uppercase text-asya-dark'>{feature.title}</h4>
                  <p className='asya-txt text-asya-dark'>{feature.description}</p>
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

interface ServiceFeatureSliderProps {
  className?: string
  content: ServiceFeature[]
}

function ServiceFeatureSlider({ className, content }: ServiceFeatureSliderProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((pv) => (pv < content.length - 1 ? pv + 1 : 0))
    }, 500 + 4000)

    return () => clearInterval(interval)
  }, [content])

  return (
    <AnimatePresence>
      <div className={'relative h-[148px] ' + (className ?? '')}>
        {content.map((feature, key) => (
          <motion.div
            key={key}
            animate={{
              opacity: key === index ? 1 : 0,
              transition: { duration: 0.5, ease: 'easeInOut', delay: key === index ? 0.5 : 0 },
            }}
            className='absolute w-full'
          >
            <h4 className='asya-txt text-xl font-bold uppercase text-asya-dark'>{feature.title}</h4>
            <p className='asya-txt mt-8 text-xs font-light text-asya-dark'>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}
