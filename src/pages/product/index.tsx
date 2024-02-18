import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'

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
    <>
      <CustomHead
        title='Product'
        description='Product Page'
      >
        <motion.div
          id='hero'
          initial='hidden'
          variants={section}
          whileInView='visible'
          className='bg-hero-landing relative flex flex-col items-center justify-center gap-8 bg-cover bg-center py-40'
        >
          <motion.p
            variants={item}
            className='text-center text-4xl font-medium leading-normal tracking-widest text-white 2xl:text-5xl 2xl:leading-normal'
          >
            Our Newest Collection “Lorem Ipsum”
          </motion.p>
        </motion.div>

        {/* <section id="catalog" className="flex justify-items-center py-[5vw]">
        <div className="w-1/4 flex flex-col items-center space-y-8">
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {collections.title}
            </li>
            {collections.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {availability.title}
            </li>
            {availability.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex-1 flex flex-wrap justify-around">
          {[...Array(12)].map((item, key) => (
            <motion.li key={key} className="m-8" whileHover={{ scale: 1.05 }}>
              <Link href={"/product/product-one"}>
                <div className="w-96 h-96 bg-asya-dark"></div>
                <div className="block mt-6">
                  <p className="text-asya-dark text-center text-xl font-bold tracking-widest leading-relaxed">
                    Hijab Lorem Ipsum
                  </p>
                  <p className="text-asya-dark text-center text-xl tracking-widest leading-relaxed">
                    Rp200.000
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section> */}

        <section
          id='catalog'
          className='container mx-auto flex py-[5vw]'
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
          <ul className='grid flex-1 grid-cols-3 gap-8'>
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
    </>
  )
}

export default Index
