import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { worksData, Work } from '../../components/constant'

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
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {data &&
              data.asset
                .sort((a) => Number(a.type === 'video'))
                .map((item, key) =>
                  item.type === 'image' ? (
                    <Image
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
                      autoPlay
                    >
                      <source
                        src={item.src}
                        type='video/mp4'
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    ''
                  )
                )}
          </div>
          <div className='w-1/2'>
            <div className='sticky top-0 ml-36 flex h-screen flex-col py-32'>
              <h3 className='flex-1 text-4xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
                {data.title}
                <span className='block text-xl font-normal tracking-widest'>{data.subtitle}</span>
              </h3>
              <p className='text-base leading-normal tracking-widest text-asya-dark'>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  ) : (
    <></>
  )
}

export default WorkDetail
