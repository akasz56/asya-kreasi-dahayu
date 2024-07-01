import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'

interface SliderProps {
  speed?: number
  duration?: number
  children?: ReactNode | ReactNode[]
  withNavigator?: boolean
}

const DEFAULT_DURATION = 5000
const DRAG_BUFFER = 50

function Slider({ speed, duration, children, withNavigator }: SliderProps) {
  duration = duration ? duration * 1000 : DEFAULT_DURATION
  let intervalRef: NodeJS.Timer

  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)

  useEffect(() => {
    intervalRef = setInterval(() => {
      if (!children || !Array.isArray(children)) return

      const x = dragX.get()

      if (x === 0) {
        setImgIndex((pv) => (pv === children.length - 1 ? 0 : pv + 1))
      }
    }, duration)

    return () => clearInterval(intervalRef)
  }, [duration, children, dragX])

  const onDragEnd = () => {
    if (!children || !Array.isArray(children)) return

    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < children.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return !children || !Array.isArray(children) ? (
    <></>
  ) : (
    <div className='relative min-h-screen overflow-hidden'>
      <motion.div
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={{
          type: 'linear',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        }}
        onDragEnd={onDragEnd}
        className='flex w-screen cursor-grab items-center active:cursor-grabbing'
      >
        {children.map((item, key) => (
          <div
            key={key}
            className='h-screen w-screen shrink-0'
          >
            {item}
          </div>
        ))}
      </motion.div>
      {withNavigator && (
        <>
          <div
            className='absolute top-0 left-0 hidden h-full cursor-pointer items-center px-4 md:flex'
            onClick={() => {
              setImgIndex((pv) => (pv === 0 ? children.length - 1 : pv - 1))
              clearInterval(intervalRef)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-7 w-7 rotate-90 text-white lg:h-12 lg:w-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
              />
            </svg>
          </div>
          <div
            className='absolute top-0 right-0 hidden h-full cursor-pointer items-center px-4 md:flex'
            onClick={() => {
              setImgIndex((pv) => (pv === children.length - 1 ? 0 : pv + 1))
              clearInterval(intervalRef)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-7 w-7 -rotate-90 text-white lg:h-12 lg:w-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
              />
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default Slider
