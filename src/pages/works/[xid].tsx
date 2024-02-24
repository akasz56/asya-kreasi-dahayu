import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { worksData, Work } from '../../components/constant'

const WorkDetail: NextPage = () => {
  const router = useRouter()
  const [workDetail, setWorkDetail] = useState<Work>()

  useEffect(() => {
    if (!router.query.xid) router.push('/works')
    if (typeof router.query.xid !== 'string') router.push('/works')

    setWorkDetail(worksData.filter((item) => item.xid === router.query.xid)[0])
    if (!worksData.filter((item) => item.xid === router.query.xid)[0]) router.push('/works')
  }, [router])

  return (
    <CustomHead
      title={workDetail?.title ?? 'Detail Work'}
      description={workDetail?.description}
    >
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {workDetail?.asset.map((item, key) =>
              item.type === 'image' ? (
                <Image
                  key={key}
                  src={item.src}
                  alt={item.alt ?? ''}
                  width={1080}
                  height={1080}
                  className='block object-cover'
                />
              ) : (
                ''
              )
            )}
          </div>
          <div className='w-1/2'>
            <div className='sticky top-0 ml-36 flex h-screen flex-col py-32'>
              <h3 className='flex-1 text-4xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
                {workDetail?.title}
                <span className='block text-xl font-normal tracking-widest'>{workDetail?.subtitle}</span>
              </h3>
              <p className='text-base leading-normal tracking-widest text-asya-dark'>{workDetail?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  )
}

export default WorkDetail
