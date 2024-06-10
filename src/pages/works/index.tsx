import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import { Work, worksData } from '../../components/works'
import WorksItem from '@/components/WorksItem'
import Image from 'next/image'

export type Client = {
  name: string
  description: string
  year: string
  image: string
}

const Index: NextPage = () => {
  const works: Work[] = worksData

  const clients: Client[] = [...Array(12)].map((_, idx) => ({
    name: 'Nama Klien Lorem Ipsum Dolor ' + idx,
    description: 'Dolor Sit Amet, Lorem Ipsum Dolor Amet Sit',
    year: '2019',
    image:
      'https://and-atelier.com/media/pages/projects/1961-1992-japan/528c4a2488-1698872737/and-atelier-1961-1992-japan-3-400x.webp',
  }))

  return (
    <CustomHead
      title='Works'
      description='Works Page'
    >
      <section>
        <motion.h1
          id='title'
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className='asya-container py-16 text-center text-2xl font-medium leading-normal tracking-widest text-asya-dark md:text-3xl md:leading-normal md:tracking-widest lg:py-36 lg:text-4xl lg:leading-normal lg:tracking-widest'
        >
          Works Asya Kreasi Dahayu, Where <br /> The Collaboration Begins
        </motion.h1>
        <div className='asya-container grid grid-cols-2 gap-[5vw] lg:mb-28 lg:gap-16'>
          {works.map((work, key) => {
            const thumbnail = work.asset.filter((asset) => asset.type === 'image')[0]
            return (
              <Link
                key={key}
                href={'/works/' + work.xid}
              >
                {thumbnail && thumbnail.src && (
                  <img
                    src={thumbnail.src}
                    alt={thumbnail.alt ?? ''}
                    width={1080}
                    height={1080}
                    className='mb-5 aspect-square object-cover lg:mb-16'
                  />
                )}
                <h2 className='mb-20 overflow-hidden text-ellipsis align-baseline text-lg font-medium uppercase leading-normal tracking-widest text-asya-dark md:text-xl md:leading-normal md:tracking-widest lg:whitespace-nowrap lg:text-3xl lg:tracking-widest lg:hover:overflow-visible lg:hover:whitespace-normal'>
                  {work.title}
                </h2>
                <p className='hidden tracking-widest text-asya-dark lg:block'>{work.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section
        id='clients'
        className='asya-container mb-32 lg:my-32 lg:pt-16'
      >
        <h1 className='text-3xl font-medium uppercase leading-normal tracking-widest text-asya-dark lg:text-5xl'>
          Clients
        </h1>
        <ul className='mt-12 lg:mt-28'>
          <li className='mb-10 flex'>
            <p className='w-3/4 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark lg:w-1/2'>Name</p>
            <p className='hidden flex-1 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark lg:block'>
              Description
            </p>
            <p className='ml-20 w-14 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark'>Year</p>
          </li>
          {clients.map((item, key) => (
            <WorksItem
              key={key}
              client={item}
            />
          ))}
        </ul>
      </section>
    </CustomHead>
  )
}

export default Index
