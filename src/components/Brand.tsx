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
      className='text-lg font-medium uppercase tracking-widest text-white'
    >
      Asya Kreasi Dahayu
    </Link>
  )
}
