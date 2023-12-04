import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { worksData, Work } from './constant'

const WorkDetail: NextPage = () => {
  const router = useRouter()
  const [workDetail, setWorkDetail] = useState<Work>()
  
  useEffect(() => {
    if (!router.query.xid) router.push('/works')
    if (typeof router.query.xid !== 'string') router.push('/works')

    setWorkDetail(worksData.filter((item) => item.xid === router.query.xid)[0])
    if (!worksData.filter((item) => item.xid === router.query.xid)[0]) router.push('/works')
  }, [router.query.xid])

  return (
    <CustomHead
      title={workDetail?.title ?? 'Detail Work'}
      description={workDetail?.description}
    >
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {workDetail?.asset.map((item, key) => (
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
                {workDetail?.title}
                <span className='block text-xl font-normal tracking-widest'>{workDetail?.subtitle}</span>
              </h3>
              <p className='text-asya-dark text-base tracking-widest leading-normal'>{workDetail?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  )
}

export default WorkDetail
