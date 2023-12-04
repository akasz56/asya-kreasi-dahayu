import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { worksData, Work } from './constant'

const WorkDetail: NextPage = () => {
  const router = useRouter()
  if (!router.query.xid) router.push('/works')
  if (typeof router.query.xid !== 'string') router.push('/works')
  const worksDetail: Work = worksData.filter((item) => item.xid === router.query.xid)[0]
  if (!worksDetail) router.push('/works')

  return (
    <CustomHead
      title={worksDetail?.title ?? 'Detail Work'}
      description={worksDetail?.description}
    >
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {worksDetail?.asset.map((item, key) => (
              <Image
                key={key}
                src={'/images/hero.jpg'}
                alt={item.alt ?? ''}
                width={1080}
                height={1080}
                className='block object-cover'
              />
            ))}
          </div>
          <div className='w-1/2'>
            <div className='h-screen sticky top-0 ml-36 py-32 flex flex-col'>
              <h3 className='flex-1 uppercase text-asya-dark text-4xl font-bold tracking-widest leading-normal'>
                {worksDetail?.title}
                <span className='block text-xl font-normal tracking-widest'>{worksDetail?.subtitle}</span>
              </h3>
              <p className='text-asya-dark text-base tracking-widest leading-normal'>{worksDetail?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  )
}

export default WorkDetail
