import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import CustomHead from '@/layouts/CustomHead'
import { useRouter } from 'next/router'
import { workData, WorkDataInterface, Work } from './constant'

interface WorkDetailProps {
    xid: string
}

const WorkDetail: NextPage<WorkDetailProps> = ({ xid }) => {
   const router = useRouter()

    let temp = ""

   if (router.query.xid) {
        if (typeof(router.query.xid) == 'string') {
            temp = router.query.xid
        } else if (Array.isArray(router.query.xid) && router.query.xid.every((item) => typeof item === 'string')) {
            temp = router.query.xid[0]
        } else {
            temp = "Detail work"
        }
   }

   const filteredData: Work[] = workData.work.filter((item) => item.xid === temp)
   console.log(filteredData)

  return (
    <CustomHead
      title={temp}
      description={temp}
    >
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {[...Array(4)].map((item, key) => (
              <Image
                key={key}
                src={'/images/hero.jpg'}
                alt={'image'}
                width={1080}
                height={1080}
                className='block object-cover'
              />
            ))}
          </div>
          <div className='w-1/2'>
            <div className='h-screen sticky top-0 ml-36 py-32 flex flex-col'>
              <h3 className='flex-1 uppercase text-asya-dark text-4xl font-bold tracking-widest leading-normal'>
                {filteredData[0].xid}
                <span className='block text-xl font-normal tracking-widest'>{filteredData[0].subtitle}</span>
              </h3>
              <p className='text-asya-dark text-base tracking-widest leading-normal'>
                {filteredData[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  )
}

export default WorkDetail
