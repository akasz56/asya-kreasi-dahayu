import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import { Work, worksData } from '../../components/works'
import WorksItem from '@/components/WorksItem'
import Image from 'next/image'

export type Client = {
  name: string
  field: string
  year: string
  image: string
}

const Index: NextPage = () => {
  const works: Work[] = worksData

  const clients: Client[] = [...Array(12)].map((_, idx) => ({
    name: 'Nama Klien Lorem Ipsum Dolor ' + idx,
    field: 'Jenis Bidang',
    year: '2019',
    image:
      'https://and-atelier.com/media/pages/projects/1961-1992-japan/528c4a2488-1698872737/and-atelier-1961-1992-japan-3-400x.jpg',
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
          className='asya-container py-36 text-center text-5xl font-medium leading-normal tracking-widest text-asya-dark'
        >
          Works Asya Kreasi Dahayu, Where <br /> The Collaboration Begins
        </motion.h1>
        <div className='asya-container mb-28 grid grid-cols-1 gap-[5vw] lg:grid-cols-2 lg:gap-16'>
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
                    className='mb-16 aspect-square object-cover'
                  />
                )}
                <h2 className='mb-20 overflow-hidden text-ellipsis whitespace-nowrap align-baseline text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal'>
                  {work.title}
                </h2>
                <p className='tracking-widest text-asya-dark'>{work.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section
        id='clients'
        className='asya-container my-32 pt-16'
      >
        <h1 className='text-5xl font-medium uppercase leading-normal tracking-widest text-asya-dark'>Clients</h1>
        <ul className='mt-28'>
          <li className='mb-10 flex'>
            <p className='w-1/2 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark'>Name</p>
            <p className='flex-1 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark'>Description</p>
            <p className='w-14 text-2xl font-bold leading-relaxed tracking-widest text-asya-dark'>Year</p>
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
