import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import Image from 'next/image'

const Index: NextPage = () => {
  const collections = {
    title: 'All Collection',
    collections: ['Collection A', 'Lorem Ipsum', 'Collection B', 'Lorem Ipsum', 'Collection C', 'Lorem Ipsum'],
  }

  const availability = {
    title: 'Availability',
    collections: ['In Stock (10)', 'Out of Stock (3)'],
  }

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
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <div className='relative h-[50vh] overflow-hidden'>
        <img
          src={'https://asyakreasidahayu.com/public/images/hero1.webp'}
          alt={'image'}
          className='absolute -bottom-64 -z-10 object-cover'
        />
        <motion.div
          id='hero'
          initial='hidden'
          variants={section}
          whileInView='visible'
          className='flex h-full items-center justify-center'
        >
          <motion.p
            variants={item}
            className='text-center text-4xl font-medium leading-normal tracking-widest text-white 2xl:text-5xl 2xl:leading-normal'
          >
            Our Newest Collection “Lorem Ipsum”
          </motion.p>
        </motion.div>
      </div>

      <section
        id='catalog'
        className='asya-container flex py-20 xl:py-40'
      >
        <div className='flex w-1/4 flex-col items-center space-y-8'>
          <ul>
            <li className='mb-8 text-xl font-bold leading-relaxed tracking-widest text-asya-dark'>
              {collections.title}
            </li>
            {collections.collections.map((item, key) => (
              <li key={key}>
                <a
                  href='#'
                  className='asya-link text-xl leading-relaxed tracking-widest text-asya-dark'
                >
                  <span className='after:bg-asya-dark'>{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className='mb-8 text-xl font-bold leading-relaxed tracking-widest text-asya-dark'>
              {availability.title}
            </li>
            {availability.collections.map((item, key) => (
              <li key={key}>
                <a
                  href='#'
                  className='asya-link text-xl leading-relaxed tracking-widest text-asya-dark'
                >
                  <span className='after:bg-asya-dark'>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='grid flex-1 grid-cols-2 gap-4 lg:grid-cols-3 xl:gap-8'>
          {[...Array(12)].map((item, key) => (
            <motion.li
              key={key}
              className='m-8'
              whileHover={{ scale: 1.05 }}
            >
              <Link href={'/product/product-one'}>
                <div className='aspect-square bg-asya-dark'></div>
                <div className='mt-6 block'>
                  <p className='text-center text-xl font-bold leading-relaxed tracking-widest text-asya-dark'>
                    Hijab Lorem Ipsum
                  </p>
                  <p className='text-center text-xl leading-relaxed tracking-widest text-asya-dark'>Rp200.000</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </CustomHead>
  )
}

export default Index
