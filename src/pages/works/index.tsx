import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import { Work, worksData } from '../../components/constant'

const Index: NextPage = () => {
  const works: Work[] = worksData

  return (
    <>
      <CustomHead
        title='Works'
        description='Works Page'
      >
        <section>
          <motion.h1
            id='title'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className='py-36 text-center text-5xl font-medium leading-normal tracking-widest text-asya-dark'
          >
            Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
          </motion.h1>
          <div className='container mx-auto mb-28 grid grid-cols-2 gap-16'>
            {works.map((work, key) => (
              <Link
                key={key}
                href={'/works/' + work.xid}
              >
                <div className='mb-20 aspect-square bg-asya-dark'></div>
                <h2 className='mb-20 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal'>
                  {work.title}
                </h2>
                <p className='tracking-widest text-asya-dark'>{work.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section
          id='clients'
          className='container mx-auto my-32 pt-16'
        >
          <h1 className='text-5xl font-medium uppercase leading-normal tracking-widest text-asya-dark'>Clients</h1>
          <ul className='mt-48 ml-48'>
            {[...Array(12)].map((item, key) => (
              <li
                key={key}
                className='mb-12'
              >
                <Link
                  href={'/works/project-one'}
                  className='flex gap-16'
                >
                  <span className='text-xl leading-relaxed tracking-widest text-asya-dark'>
                    Nama Klien Lorem Ipsum Dolor
                  </span>
                  <hr className='flex-1 self-center border-asya-dark' />
                  <span className='text-xl leading-relaxed tracking-widest text-asya-dark'>Jenis Bidang, 2019</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </CustomHead>
    </>
  )
}

export default Index
