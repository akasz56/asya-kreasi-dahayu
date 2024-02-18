import Link from 'next/link'
import React from 'react'

interface DisplaysProps {
  contents: DisplayContentItem[]
  className?: string
  gap?: string
}

export interface DisplayContentItem {
  title: string
  description: string
  href: string
}

export default function Display({ contents, className, gap }: DisplaysProps) {
  className = className ?? ''
  gap = gap ? 'gap-' + gap : 'gap-12'

  return (
    <div className={className + ' grid grid-cols-2 ' + gap}>
      {contents.map((item, key) => (
        <div
          key={key}
          className='flex flex-col justify-between gap-8'
        >
          <div className='aspect-square rounded-3xl bg-asya-light'></div>
          <div className='flex gap-8'>
            <h3 className='flex-1 text-3xl font-medium uppercase tracking-widest text-asya-dark'>{item.title}</h3>
            <Link
              href={item.href}
              className='self-center rounded-md bg-asya-light px-8 py-2 text-sm uppercase tracking-widest text-asya-dark shadow-sm hover:opacity-50'
            >
              Read More
            </Link>
          </div>
          <p className=' text-lg tracking-widest text-asya-dark'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercita.
          </p>
        </div>
      ))}
    </div>
  )
}
