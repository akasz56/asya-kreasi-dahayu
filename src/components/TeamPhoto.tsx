import { useState } from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from './team'
import Image from 'next/image'

type TeamPhotoProps = {
  teamMember: TeamMember
}

export default function TeamPhoto({ teamMember }: TeamPhotoProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <a
      href='#'
      className='relative aspect-square'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={teamMember.image}
        alt={teamMember.name}
        className='absolute aspect-square object-cover'
        width={1440}
        height={1440}
      />
      <div
        style={{ opacity: isHovered ? 0.5 : 0 }}
        className='absolute h-full w-full bg-asya-dark transition-opacity'
      />
      <motion.div
        style={{ opacity: isHovered ? 1 : 0 }}
        className='flex h-full flex-col justify-between p-4 transition-opacity'
        initial={{ x: -10 }}
        whileHover={{ x: 0.01, transition: { duration: 0.5 } }}
      >
        <h6 className='text-2xl font-bold uppercase leading-normal tracking-widest text-white'>{teamMember.name}</h6>
        <p className='text-lg capitalize leading-normal tracking-widest text-white'>{teamMember.position}</p>
      </motion.div>
    </a>
  )
}
