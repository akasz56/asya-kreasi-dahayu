import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'

interface SliderProps {
  speed?: number
  duration?: number
  children?: ReactNode | ReactNode[]
}

export default function Slider({ speed, duration, children }: SliderProps) {
  speed ??= 0.5
  duration = duration ? duration * 1000 : 5000

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (children && Array.isArray(children)) {
      console.log([index == 0 ? children.length - 1 : index - 1, index])
    }
  }, [children, index])

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
