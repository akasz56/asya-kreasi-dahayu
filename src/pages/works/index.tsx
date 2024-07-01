import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import { Work, worksData } from '../../components/works'
import Image from 'next/image'

export type Client = {
  name: string
  description: string
  year: string
  image: string
}

const Index: NextPage = () => {
  const works: Work[] = worksData

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
          Works Asya Kreasi Dahayu, <br /> Where The Collaboration Begins
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
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt ?? ''}
                    width={1080}
                    height={1080}
                    className='mb-5 aspect-square object-cover lg:mb-16'
                  />
                )}
                <h2 className='mb-20 overflow-hidden text-ellipsis align-baseline text-[14px] font-medium uppercase leading-normal tracking-widest text-asya-dark md:text-xl md:leading-normal md:tracking-widest lg:whitespace-nowrap lg:text-3xl lg:tracking-widest lg:hover:overflow-visible lg:hover:whitespace-normal'>
                  {work.title}
                </h2>
                <p className='hidden tracking-widest text-asya-dark lg:block'>{work.description}</p>
              </Link>
            )
          })}
        </div>
      </section>
    </CustomHead>
  )
}

export default Index
