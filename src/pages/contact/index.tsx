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
        className='mx-auto space-y-24 px-10 lg:max-w-screen-2xl lg:px-20 lg:py-32'
      >
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='asya-txt mx-auto max-w-2xl text-[20px] font-medium text-asya-dark lg:mx-0 lg:max-w-[1032px] lg:text-[54px]'
        >
          Be the first to know about Asya, <br /> Contact Us Through
        </motion.h1>
        <motion.table
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='mx-auto max-w-[688px] text-[10px] font-medium text-asya-dark sm:mr-20 sm:ml-auto lg:mr-0 lg:text-2xl'
        >
          <tbody className='leading-9'>
            <tr>
              <td className='pr-2 align-top lg:py-2 lg:pr-8'>Phone</td>
              <td className='align-top lg:py-2'> : </td>
              <td className='pl-2 align-top lg:py-2 lg:pl-8'>
                <a href='https://wa.me/+6281290900114'>+62 812-9090-0114</a>
              </td>
            </tr>
            <tr>
              <td className='pr-2 align-top lg:py-2 lg:pr-8'>E-mail</td>
              <td className='align-top lg:py-2'> : </td>
              <td className='pl-2 align-top lg:py-2 lg:pl-8'>
                <a href='mailto:contact@asyakreasidahayu.com'>contact@asyakreasidahayu.com</a>
              </td>
            </tr>
            <tr>
              <td className='pr-2 align-top lg:py-2 lg:pr-8'>Address</td>
              <td className='align-top lg:py-2'> : </td>
              <td className='pl-2 align-top lg:py-2 lg:pl-8'>
                Jl. Ring Road Bubulak No. A-4, <br /> Kelurahan Bubulak, Kec. Bogor Barat, <br /> Kota Bogor, Provinsi
                Jawa Barat, 16115
              </td>
            </tr>
          </tbody>
        </motion.table>
      </div>
    </CustomHead>
  )
}

export default Index
