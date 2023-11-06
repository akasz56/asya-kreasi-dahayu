import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'

const ProductOne: NextPage = () => {
  return (
    <CustomHead
      title='Product One'
      description='Product One Page'
    >
      <div className='asya-container'>
        <section
          id='product'
          className='h-screen flex py-32'
        >
          <div className='w-1/2'>
            <Image
              src={'/images/hero.jpg'}
              alt={'image'}
              width={1080}
              height={1080}
              className='w-4/5 object-cover aspect-square'
            />
            <div className='mt-3 flex gap-x-4'>
              {[...Array(3)].map((item, key) => (
                <Image
                  key={key}
                  src={'/images/hero.jpg'}
                  alt={'image'}
                  width={1080}
                  height={1080}
                  className='w-24 object-cover aspect-square'
                />
              ))}
            </div>
          </div>
          <div className='w-1/2 ml-36 py-8'>
            <h3 className='mb-16 uppercase text-asya-dark text-4xl font-bold tracking-widest leading-normal'>
              Produk lorem ipsum
              <span className='block font-normal'>RP 100.000</span>
            </h3>
            <p className='mb-8 text-asya-dark text-base tracking-widest leading-normal'>
              Colour : Lorem | Ipsum | Dolor
            </p>
            <div className='mb-8 flex gap-x-8'>
              <div className='w-12 aspect-square rounded-full bg-asya-dark'></div>
              <div className='w-12 aspect-square rounded-full bg-asya-light'></div>
              <div className='w-12 aspect-square rounded-full bg-black'></div>
            </div>
            <p className='mb-8 text-asya-dark text-base tracking-widest leading-normal'>Material : Lorem Ipsum Dolor</p>
            <p className='mb-8 text-asya-dark text-base tracking-widest leading-normal'>
              Note : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <a
              href='#'
              className='px-8 py-3 rounded-md bg-asya-light shadow-sm uppercase text-asya-dark text-sm font-medium tracking-widest transition-opacity hover:opacity-50'
            >
              Buy Product
            </a>
          </div>
        </section>
        <section
          id='related'
          className='my-28'
        >
          <h2 className='uppercase text-center text-asya-dark text-4xl font-bold tracking-widest'>Related Product</h2>
          <ul className='mt-16 flex flex-wrap justify-around'>
            {[...Array(12)].map((item, key) => (
              <motion.li
                key={key}
                className='w-1/6 m-8'
                whileHover={{ scale: 1.05 }}
              >
                <Link href={'/product/product-one'}>
                  <div className='aspect-square bg-asya-light'></div>
                  <div className='block mt-6'>
                    <p className='text-asya-dark text-center text-xl font-bold tracking-widest leading-relaxed'>
                      Hijab Lorem Ipsum
                    </p>
                    <p className='text-asya-dark text-center text-xl tracking-widest leading-relaxed'>Rp200.000</p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </CustomHead>
  )
}

export default ProductOne
