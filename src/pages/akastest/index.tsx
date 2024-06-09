import Slider from '@/components/Slider'
import { productImages } from '@/components/products'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <Slider>
      {productImages.map((item) => (
        <Image
          width={1920}
          height={1800}
          alt='image gallery'
          src={item[0]}
        />
      ))}
    </Slider>
  )
}
