import { Client } from '@/pages/works'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface WorksItemProps {
  client: Client
}

export default function WorksItem(props: WorksItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (!display && isHovered) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 1000)
    }

    if (!isHovered) setDisplay(false)
  }, [isHovered, display])

  return (
    <li className='mb-12'>
      <Link
        href={'/works/project-one'}
        className='flex'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='w-1/2 text-xl leading-relaxed tracking-widest text-asya-dark'>{props.client.name}</span>
        <hr className='flex-1 self-center border-asya-dark' />
        <span className='ml-20 w-14 text-xl leading-relaxed tracking-widest text-asya-dark'>{props.client.year}</span>
      </Link>
      <div
        className='hover-img'
        style={{ opacity: display ? 1 : 0 }}
      >
        <img
          src={props.client.image}
          alt={props.client.name}
        />
      </div>
    </li>
  )
}
