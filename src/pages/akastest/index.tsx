import Slider from '@/components/Slider'
import { productImages } from '@/components/products'
import React from 'react'

export default function index() {
  return (
    <Slider>
      {productImages.map((item, key) => (
        <img
          key={key}
          alt='image gallery'
          src={item[0]}
        />
      ))}
    </Slider>
  )
}
