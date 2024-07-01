import { useState } from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from './team'

type TeamPhotoProps = {
  teamMember: TeamMember
}

export default function TeamPhoto({ teamMember }: TeamPhotoProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const nama = 'asya-txt font-bold uppercase text-white'
  const position = 'asya-txt font-medium capitalize text-white'
  const innerBox = 'flex h-full flex-col justify-between p-[11px]'

  return (
    <>
      <div
        className='relative block aspect-square md:hidden'
        onClick={() => setIsHovered((pv) => !pv)}
      >
        <img
          src={teamMember.image}
          alt={teamMember.name}
          className='absolute aspect-square object-cover'
        />
        <div
          style={{ opacity: isHovered ? 0.5 : 0 }}
          className='absolute h-full w-full bg-asya-dark transition-opacity'
        />
        <motion.div
          style={{ opacity: isHovered ? 1 : 0 }}
          className={innerBox + ' transition-opacity'}
          animate={{ x: isHovered ? 0.01 : -10, transition: { duration: 0.5 } }}
        >
          <h6 className={nama + ' text-[13px]'}>{teamMember.name}</h6>
          <p className={position + ' text-[11px]'}>{teamMember.position}</p>
        </motion.div>
      </div>
      <div
        className='relative hidden aspect-square md:block'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={teamMember.image}
          alt={teamMember.name}
          className='absolute aspect-square object-cover'
        />
        <div
          style={{ opacity: isHovered ? 0.5 : 0 }}
          className='absolute h-full w-full bg-asya-dark transition-opacity'
        />
        <motion.div
          style={{ opacity: isHovered ? 1 : 0 }}
          className={innerBox + ' transition-opacity'}
          initial={{ x: -10 }}
          whileHover={{ x: 0.01, transition: { duration: 0.5 } }}
        >
          <h6 className={nama + ' text-[24px]'}>{teamMember.name}</h6>
          <p className={position + ' text-[18px]'}>{teamMember.position}</p>
        </motion.div>
      </div>
    </>
  )
}
