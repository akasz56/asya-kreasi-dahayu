import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { worksData, Work } from '../../components/works'

const WorkDetail: NextPage = () => {
  const router = useRouter()
  const [data, setData] = useState<Work>()

  useEffect(() => {
    if (router.query.xid && typeof router.query.xid === 'string') {
      const workDetailData = worksData.filter((item) => item.xid === router.query.xid)[0]
      if (!workDetailData) router.push('/works')
      setData(workDetailData)
    }
  }, [router])

  return data ? (
    <CustomHead
      title={data.title}
      description={data.description}
    >
      <div className='lg:flex lg:flex-row'>
        <div className='space-y-12 lg:w-1/2'>
          {data &&
            data.asset
              .sort((a) => Number(a.type != 'image'))
              .map((item, key) =>
                item.type === 'image' ? (
                  <img
                    key={key}
                    src={item.src}
                    alt={item.alt ?? data.title + key}
                    width={1080}
                    height={1080}
                    className='block object-cover'
                  />
                ) : item.type === 'video' ? (
                  <video
                    key={key}
                    width={1920}
                    height={1080}
                    controls
                    autoPlay={key === 0}
                  >
                    <source
                      src={item.src}
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : item.type === 'youtube' ? (
                  <iframe
                    key={key}
                    src={item.src + '?autoplay=1'}
                    title={data.title}
                    className='aspect-video w-full'
                    allow='autoplay;'
                  ></iframe>
                ) : (
                  ''
                )
              )}
        </div>
        <div className='fixed top-0 right-0 hidden h-screen w-1/2 flex-col bg-white px-6 pt-44 pb-20 pl-16 lg:flex xl:pl-36'>
          <div className='flex-1'>
            <h3 className='asya-txt text-[28px] font-bold uppercase text-asya-dark'>{data.title}</h3>
            <p className='asya-txt text-[18px] font-medium uppercase text-asya-dark'>{data.subtitle}</p>
          </div>
          <p className='asya-txt max-w-[40em] text-asya-dark'>{data.description}</p>
        </div>
      </div>
      <div className='sticky bottom-0 bg-white px-6 pt-8 pb-6 lg:hidden'>
        <h3 className='asya-txt text-[28px] font-bold uppercase text-asya-dark'>{data.title}</h3>
        <p className='asya-txt mt-3 text-[18px] font-medium uppercase text-asya-dark'>{data.subtitle}</p>
      </div>
      <p className='asya-txt mb-24 px-6 text-asya-dark lg:hidden'>{data.description}</p>
    </CustomHead>
  ) : (
    <></>
  )
}

export default WorkDetail
