import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'

interface SliderProps {
  speed?: number
  duration?: number
  children?: ReactNode | ReactNode[]
}

const DEFAULT_DURATION = 5000
const DRAG_BUFFER = 50

function SliderV2({ speed, duration, children }: SliderProps) {
  duration = duration ? duration * 1000 : DEFAULT_DURATION

  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     if (!children || !Array.isArray(children)) return

  //     const x = dragX.get()

  //     if (x === 0) {
  //       setImgIndex((pv) => (pv === children.length - 1 ? 0 : pv + 1))
  //     }
  //   }, duration)

  //   return () => clearInterval(intervalRef)
  // }, [duration, children, dragX])

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
    </div>
  )
}

function Slider({ speed, duration, children }: SliderProps) {
  speed ??= 0.5
  duration = duration ? duration * 1000 : DEFAULT_DURATION

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (children && Array.isArray(children)) {
        setIndex((prevValue) => (prevValue < children.length - 1 ? prevValue + 1 : 0))
      }
    }, duration)

    return () => clearInterval(interval)
  }, [children, duration])

  return !children ? (
    <></>
  ) : !Array.isArray(children) ? (
    <div className='h-screen overflow-hidden'>{children}</div>
  ) : (
    <AnimatePresence>
      <div className='relative h-screen overflow-hidden'>
        <motion.div
          key={index + 2}
          initial={{ x: 0 }}
          animate={{ x: '-100%', transition: { duration: speed, ease: 'easeInOut' } }}
          className='absolute left-0 h-full w-full'
        >
          {children[index == 0 ? children.length - 1 : index - 1]}
        </motion.div>
        <motion.div
          key={index}
          initial={{ x: '100%' }}
          animate={{ x: 0, transition: { duration: speed, ease: 'easeInOut' } }}
          className='absolute left-0 h-full w-full'
        >
          {children[index]}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default SliderV2
