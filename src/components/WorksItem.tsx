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
    <div className='mb-12'>
      <Link
        href={'/works/project-one'}
        className='flex gap-16'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='text-xl leading-relaxed tracking-widest text-asya-dark'>{props.client.name}</span>
        <hr className='flex-1 self-center border-asya-dark' />
        <span className='text-xl leading-relaxed tracking-widest text-asya-dark'>
          {props.client.field}, {props.client.year}
        </span>
      </Link>
      <div
        className='hover-img'
        style={{ opacity: display ? 1 : 0 }}
      >
        <Image
          src={props.client.image}
          alt={props.client.name}
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}
