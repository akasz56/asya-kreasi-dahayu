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
      <div className='flex flex-col lg:flex-row'>
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
                    // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    // referrerPolicy='strict-origin-when-cross-origin'
                    // allowFullScreen
                  ></iframe>
                ) : (
                  ''
                )
              )}
        </div>
        <div className='fixed bottom-0 h-1/2 bg-white lg:right-0 lg:h-screen lg:w-1/2'>
          <div className='flex h-full flex-col px-6 py-8 lg:py-32 lg:pl-16 xl:pl-36'>
            <h3 className='flex-1 text-4xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
              {data.title}
              <span className='block text-xl font-normal tracking-widest'>{data.subtitle}</span>
            </h3>
            <p className='text-base leading-normal tracking-widest text-asya-dark lg:max-w-[40em]'>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </CustomHead>
  ) : (
    <></>
  )
}

export default WorkDetail
