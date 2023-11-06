import { motion } from 'framer-motion'
import React from 'react'

interface ScrollArrowProps {
  className?: string
  scrollTo: string
}

export default function ScrollArrow({ className, scrollTo }: ScrollArrowProps) {
  return (
    <motion.a
      href={scrollTo}
      whileHover={{ y: -5 }}
      className={className}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-12 h-12 text-white'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
        />
      </svg>
    </motion.a>
  )
}
