import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import CustomHead from '@/layouts/CustomHead'

const Index: NextPage = () => {
  return (
    <CustomHead
      title='Contact'
      description='Contact Page'
    >
      <div
        id='contact'
        className='asya-container space-y-8 py-32 lg:space-y-24'
      >
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='mx-auto max-w-2xl text-2xl font-medium leading-normal tracking-widest text-asya-dark md:text-4xl md:leading-normal md:tracking-widest lg:mx-0 lg:max-w-[1032px] lg:text-5xl lg:leading-normal lg:tracking-widest'
        >
          Be the first to know about Asya, <br /> Contact Us Through
        </motion.h1>
        <motion.table
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='mx-auto max-w-2xl text-asya-dark lg:mx-0 lg:ml-auto lg:max-w-[688px] lg:text-2xl'
        >
          <tbody>
            <tr>
              <td className='hidden py-2 pr-8 align-top sm:table-cell'>E-mail</td>
              <td className='hidden py-2 align-top md:table-cell'> : </td>
              <td className='py-2 align-top md:pl-8'>
                <a href='mailto:contact@asyakreasidahayu.com'>contact@asyakreasidahayu.com</a>
              </td>
            </tr>
            <tr>
              <td className='hidden py-2 pr-8 align-top sm:table-cell'>Hotline</td>
              <td className='hidden py-2 align-top md:table-cell'> : </td>
              <td className='py-2 align-top md:pl-8'>
                <a href='https://wa.me/+6281290900114'>0812-9090-0114</a>
              </td>
            </tr>

            <tr>
              <td className='hidden py-2 pr-8 align-top sm:table-cell'>Address</td>
              <td className='hidden py-2 align-top md:table-cell'> : </td>
              <td className='py-2 align-top md:pl-8'>
                Jl. Ring Road Bubulak No. A-4, Kelurahan Bubulak, Kec. Bogor Barat, Kota Bogor, Provinsi Jawa Barat,
                16115
              </td>
            </tr>
          </tbody>
        </motion.table>
      </div>
    </CustomHead>
  )
}

export default Index
