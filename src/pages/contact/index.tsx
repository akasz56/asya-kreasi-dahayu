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
        className='container mx-auto space-y-24 py-32'
      >
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='w-1/2 text-5xl font-medium leading-normal tracking-widest text-asya-dark'
        >
          Lorem Ipsum Dolor Sit, <br /> Contact Us Through
        </motion.h1>
        <motion.table
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className='ml-auto w-1/2 text-2xl text-asya-dark'
        >
          <tbody>
            <tr>
              <td className='py-2 align-top'>E-mail</td>
              <td className='py-2 px-8 align-top'> : </td>
              <td className='py-2 align-top'>
                <a href='mailto:asyascarf.2023@gmail.com'>asyascarf.2023@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td className='py-2 align-top'>Hotline</td>
              <td className='py-2 px-8 align-top'> : </td>
              <td className='py-2 align-top'>
                <a href='https://wa.me/+6281290900114'>0812-9090-0114</a>
              </td>
            </tr>

            <tr>
              <td className='py-2 align-top'>Address</td>
              <td className='py-2 px-8 align-top'> : </td>
              <td className='py-2 align-top'>
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
