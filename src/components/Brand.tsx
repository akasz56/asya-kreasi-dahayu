import Link from 'next/link'
import React from 'react'

interface BrandProps {
  onClick?: () => void | undefined
}

export default function Brand({ onClick }: BrandProps) {
  return (
    <Link
      href={'/'}
      onClick={onClick}
      className='text-base font-medium uppercase tracking-widest text-white lg:text-lg'
    >
      Asya Kreasi Dahayu
    </Link>
  )
}
