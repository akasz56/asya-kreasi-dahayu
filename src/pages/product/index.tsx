import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import CustomHead from '@/layouts/CustomHead'
import { productImages } from '@/components/products'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'

const DEFAULT_DURATION = 5000
const DRAG_BUFFER = 50

const Index: NextPage = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const dragY = useMotionValue(0)

  const onDragEnd = () => {
    const y = dragY.get()

    // if (y <= -DRAG_BUFFER && imgIndex < productImages.length - 1) {
    //   setImgIndex((pv) => pv + 1)
    // } else if (y >= DRAG_BUFFER && imgIndex > 0) {
    //   setImgIndex((pv) => pv - 1)
    // }
  }

  return (
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <motion.div
        drag='y'
        dragConstraints={{
          // top: 0,
          bottom: 0,
        }}
        style={{
          y: dragY,
        }}
        // animate={{
        //   translateY: `-${imgIndex * 100}%`,
        // }}
        // transition={{
        //   type: 'linear',
        //   damping: 5,
        //   stiffness: 100,
        //   restDelta: 0.001,
        // }}
        onDragEnd={onDragEnd}
        className='cursor-grab overflow-hidden active:cursor-grabbing'
      >
        {productImages.map((item, key) => (
          <Image
            key={key}
            src={item[0]}
            alt='test'
            width={1920}
            height={1920}
          />
        ))}
      </motion.div>
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
