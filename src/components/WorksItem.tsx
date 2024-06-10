import { Client } from '@/pages/works'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface WorksItemProps {
  client: Client
}

export default function WorksItem(props: WorksItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [display, setDisplay] = useState(false)
  const [isMobileView, setIsMobileView] = useState<boolean>(false)

  const ref = useRef(null)
  const isInFrame = useInView(ref)

  useEffect(() => {
    if (!display && isHovered) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 1000)
    }

    if (!isHovered) setDisplay(false)
  }, [isHovered, display])

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth)
      setIsMobileView(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <li
      className='mb-12'
      ref={ref}
    >
      <Link
        href={'/works/project-one'}
        className='flex'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='w-3/4 text-xl leading-relaxed tracking-widest text-asya-dark lg:w-1/2'>
          {props.client.name}
        </span>
        <span className='hidden flex-1 self-center text-xl leading-relaxed tracking-widest text-asya-dark lg:block'>
          {props.client.description}
        </span>
        <span className='ml-20 w-14 text-xl leading-relaxed tracking-widest text-asya-dark'>{props.client.year}</span>
      </Link>
      {isInFrame && !isMobileView && (
        <div
          className='hover-img'
          style={{ opacity: display ? 1 : 0 }}
        >
          <Image
            className='h-72 w-72'
            width={720}
            height={720}
            src={props.client.image}
            alt={props.client.name}
          />
        </div>
      )}
    </li>
  )
}
