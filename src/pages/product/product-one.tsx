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
          className='flex h-screen py-32'
        >
          <div className='w-1/2'>
            <Image
              src={'https://asyakreasidahayu.com/public/images/hero1.webp'}
              alt={'image'}
              className='aspect-square w-4/5 object-cover'
            />
            <div className='mt-3 flex gap-x-4'>
              {[...Array(3)].map((item, key) => (
                <Image
                  key={key}
                  src={'https://asyakreasidahayu.com/public/images/hero1.webp'}
                  alt={'image'}
                  className='aspect-square w-24 object-cover'
                />
              ))}
            </div>
          </div>
          <div className='ml-36 w-1/2 py-8'>
            <h3 className='mb-16 text-4xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
              Produk lorem ipsum
              <span className='block font-normal'>RP 100.000</span>
            </h3>
            <p className='mb-8 text-base leading-normal tracking-widest text-asya-dark'>
              Colour : Lorem | Ipsum | Dolor
            </p>
            <div className='mb-8 flex gap-x-8'>
              <div className='aspect-square w-12 rounded-full bg-asya-dark'></div>
              <div className='aspect-square w-12 rounded-full bg-asya-light'></div>
              <div className='aspect-square w-12 rounded-full bg-black'></div>
            </div>
            <p className='mb-8 text-base leading-normal tracking-widest text-asya-dark'>Material : Lorem Ipsum Dolor</p>
            <p className='mb-8 text-base leading-normal tracking-widest text-asya-dark'>
              Note : Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <a
              href='#'
              className='rounded-md bg-asya-light px-8 py-3 text-sm font-medium uppercase tracking-widest text-asya-dark shadow-sm transition-opacity hover:opacity-50'
            >
              Buy Product
            </a>
          </div>
        </section>
        <section
          id='related'
          className='my-28'
        >
          <h2 className='text-center text-4xl font-bold uppercase tracking-widest text-asya-dark'>Related Product</h2>
          <ul className='mt-16 flex flex-wrap justify-around'>
            {[...Array(12)].map((item, key) => (
              <motion.li
                key={key}
                className='m-8 w-1/6'
                whileHover={{ scale: 1.05 }}
              >
                <Link href={'/product/product-one'}>
                  <div className='aspect-square bg-asya-light'></div>
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
      </div>
    </CustomHead>
  )
}

export default ProductOne
