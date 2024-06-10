import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import CustomHead from '@/layouts/CustomHead'
import { productImages } from '@/components/products'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const Index: NextPage = () => {
  let duration = 5500
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue < productImages.length - 1 ? prevValue + 1 : 0))
    }, duration)

    return () => clearInterval(interval)
  }, [])

  return (
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <AnimatePresence>
        <div className='relative overflow-hidden lg:h-screen'>
          <div className='flex w-full overflow-hidden lg:absolute lg:h-screen'>
            <Image
              width={1920}
              height={1800}
              alt='image gallery'
              src={productImages[value == 0 ? productImages.length - 1 : value - 1][0]}
              className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
            />
            <Image
              width={1920}
              height={1800}
              alt='image gallery'
              src={productImages[value == 0 ? productImages.length - 1 : value - 1][1]}
              className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
            />
          </div>
          <motion.div
            key={value}
            initial={{ y: '150%' }}
            animate={{ y: 0, transition: { duration: 5, ease: 'easeInOut' } }}
            className='absolute top-0 flex w-full overflow-hidden lg:h-screen'
          >
            <Image
              width={1920}
              height={1800}
              alt='image gallery'
              src={productImages[value][0]}
              className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
            />
            <Image
              width={1920}
              height={1800}
              alt='image gallery'
              src={productImages[value][1]}
              className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </CustomHead>
  )
}

export default Index

// Just in case you dont want to use framer-motion
/*
const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
const IndexManual: NextPage = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const [pos, setPos] = useState(100)
  const [startTime, setStartTime] = useState(0)
  const duration = 2000
  const delay = 2000

  function preloadImages() {
    productImages.forEach((pair) => {
      pair.forEach((link) => {
        let img = new Image()
        img.src = link
      })
    })
  }
  preloadImages()

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      if (startTime === 0) {
        setStartTime(now)
      }
      const elapsedTime = now - startTime

      if (elapsedTime >= duration) {
        if (elapsedTime >= duration + delay) {
          setImgIdx((prevValue) => (prevValue < productImages.length - 1 ? prevValue + 1 : 0))
          setStartTime(now)
        }
      } else {
        const easingValue = easeInOutQuad(elapsedTime / duration)
        setPos(100 - easingValue * 100)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [startTime])

  return (
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <div className='relative h-screen overflow-hidden'>
        <div className='absolute flex h-screen w-full overflow-hidden'>
          <img
            src={productImages[imgIdx == 0 ? productImages.length - 1 : imgIdx - 1][0]}
            className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
          />
          <img
            src={productImages[imgIdx == 0 ? productImages.length - 1 : imgIdx - 1][1]}
            className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
          />
        </div>
        <div
          style={{ transform: `translateY(${pos}%)` }}
          className='absolute flex h-screen w-full overflow-hidden'
        >
          <img
            src={productImages[imgIdx][0]}
            className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
          />
          <img
            src={productImages[imgIdx][1]}
            className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
          />
        </div>
      </div>
    </CustomHead>
  )
}
*/
