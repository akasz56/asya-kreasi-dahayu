import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import { Work, worksData } from '../../components/constant'
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
                      className='mb-16 block aspect-square object-cover'
                    />
                  )}
                  <h2 className='mb-20 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal'>
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
          className='container mx-auto my-32 pt-16'
        >
          <h1 className='text-5xl font-medium uppercase leading-normal tracking-widest text-asya-dark'>Clients</h1>
          <ul className='mt-48 ml-48'>
            {clients.map((item, key) => (
              <li key={key}>
                <WorksItem client={item} />
              </li>
            ))}
          </ul>
        </section>
      </CustomHead>
    </>
  )
}

export default Index
