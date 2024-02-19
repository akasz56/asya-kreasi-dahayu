import { useState } from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from './team'

type TeamPhotoProps = {
  teamMember: TeamMember
}

export default function TeamPhoto({ teamMember }: TeamPhotoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href='#'
      style={
        isHovered
          ? {
              background: `linear-gradient(0deg, rgb(89, 138, 61), rgb(89, 138, 61)), url('${teamMember.image}') 0% 0% / cover`,
              aspectRatio: '1 / 1',
              backgroundBlendMode: 'multiply, luminosity',
            }
          : {
              background: `url('${teamMember.image}') 0% 0% / cover`,
              aspectRatio: '1 / 1',
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className='flex h-full flex-col justify-between p-4 opacity-0 transition-opacity hover:opacity-100'
        whileHover={{ x: 10, transition: { duration: 0.5 } }}
      >
        <h6 className='text-2xl font-bold uppercase leading-normal tracking-widest text-white'>{teamMember.name}</h6>
        <p className='text-lg capitalize leading-normal tracking-widest text-white'>{teamMember.position}</p>
      </motion.div>
    </a>
  )
}
