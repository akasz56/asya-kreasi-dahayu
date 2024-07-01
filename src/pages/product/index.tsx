import React, { useEffect, useRef, useState } from 'react'
import { productImages } from '@/components/products'
import Image from 'next/image'

const DEFAULT_DURATION = 3000
const DRAG_BUFFER = 50

const Index = () => {
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [clickStartPos, setClickStartPos] = useState<number>(0)
  const [clickPos, setClickPos] = useState<number>(0)
  const [animPos, setAnimPos] = useState<number>(0)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timer

    if (!isDragging && imgIndex < productImages.length - 1) {
      timer = setInterval(() => {
        setClickPos(-60)
        setImgIndex((pv) => pv + 1)
        setAnimPos(0)
      }, DEFAULT_DURATION)
    }

    return () => clearInterval(timer)
  }, [isDragging, componentRef, imgIndex])

  useEffect(() => {
    // handleMove
    const handleMouseMove = (event: any) => {
      if (isDragging) {
        /* prevent dragdown on first element */
        setClickPos(!(imgIndex === 0) || event.clientY - clickStartPos <= 0 ? event.clientY - clickStartPos : 0)
      }
    }

    const handleTouchMove = (event: any) => {
      event.preventDefault()
      if (isDragging) {
        /* prevent dragdown on first element */
        setClickPos(
          !(imgIndex === 0) || event.touches[0].clientY - clickStartPos <= 0
            ? event.touches[0].clientY - clickStartPos
            : 0
        )
      }
    }

    if (componentRef.current) {
      componentRef.current.addEventListener('mousemove', handleMouseMove)
      componentRef.current.addEventListener('touchmove', handleTouchMove, { passive: false })
    }

    return () => {
      if (componentRef.current) {
        componentRef.current.removeEventListener('mousemove', handleMouseMove)
        componentRef.current.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [componentRef, isDragging, clickStartPos, imgIndex])

  useEffect(() => {
    // handleUp
    const handleMouseUp = (event: any) => {
      let value = event.clientY - clickStartPos
      setIsDragging(false)
      if (value <= -DRAG_BUFFER && imgIndex < productImages.length - 1) {
        setImgIndex((pv) => pv + 1)
        let height = componentRef.current?.offsetHeight ?? 0
        setAnimPos(height - event.clientY)
      } else if (value >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - 1)
        setAnimPos(value)
      }
    }

    const handleTouchUp = (event: any) => {
      let value = event.changedTouches[0].clientY - clickStartPos
      setIsDragging(false)
      if (value <= -DRAG_BUFFER && imgIndex < productImages.length - 1) {
        setImgIndex((pv) => pv + 1)
        let height = componentRef.current?.offsetHeight ?? 0
        setAnimPos(height - event.changedTouches[0].clientY)
      } else if (value >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - 1)
        setAnimPos(value)
      }
    }

    if (componentRef.current) {
      componentRef.current.addEventListener('mouseup', handleMouseUp)
      componentRef.current.addEventListener('touchend', handleTouchUp)
    }

    return () => {
      if (componentRef.current) {
        componentRef.current.removeEventListener('mouseup', handleMouseUp)
        componentRef.current.removeEventListener('touchend', handleTouchUp)
      }
    }
  }, [componentRef, clickStartPos, imgIndex])

  useEffect(() => {
    // handleAnim
    let moveIntvl: NodeJS.Timer
    if (!isDragging && componentRef.current) {
      moveIntvl = setInterval(() => {
        let height = componentRef.current?.offsetHeight ?? 0
        if (animPos < height && height - animPos > 0.1) {
          setAnimPos((prevPos) => prevPos + (height - prevPos) / 5)
        } else {
          clearInterval(moveIntvl)
        }
      }, 10)
    }
    return () => clearInterval(moveIntvl)
  }, [animPos, isDragging, componentRef])

  const handleMouseDown = (event: any) => {
    setIsDragging(true)
    setClickStartPos(event.clientY)
    setClickPos(0)
  }

  const handleTouchDown = (event: any) => {
    setIsDragging(true)
    setClickStartPos(event.touches[0].clientY)
    setClickPos(0)
  }

  const getTransformValue = (num: number) => {
    if (num === 0) return `translateY(0)`

    let moveTop = imgIndex === num && clickPos >= 0 && imgIndex > 0
    let moveBottom = imgIndex + 1 === num && clickPos < 0

    if (isDragging) {
      if (moveTop) {
        return `translateY(${clickPos}px)` /* moveTop */
      } else if (moveBottom) {
        return `translateY(calc(100% - ${-clickPos}px))` /* moveBottom */
      }
    }

    if (!isDragging) {
      if (imgIndex === num && clickPos < 0) {
        return `translateY(calc(100% - ${animPos}px))`
      } else if (imgIndex + 1 === num && clickPos > 0) {
        return `translateY(${animPos}px)`
      }
    }

    if (imgIndex < num) {
      return `translateY(100%)`
    } else {
      return `translateY(0)`
    }
  }

  return (
    <div
      ref={componentRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchDown}
      className='relative w-full grow cursor-grab select-none overflow-hidden text-center active:cursor-grabbing'
    >
      <div className='aspect-[69/100] lg:aspect-[138/100]'></div>
      {productImages.map((item, key) => (
        <div
          key={key}
          className='absolute top-0 flex h-full w-full'
          style={{ transform: getTransformValue(key) }}
        >
          <Image
            width={720}
            height={720}
            draggable={false}
            src={item[0]}
            alt={key + '' + 0}
            className={'h-full w-full object-cover lg:w-1/2'}
          />
          <Image
            width={720}
            height={720}
            draggable={false}
            src={item[1]}
            alt={key + '' + 1}
            className={'hidden h-full w-1/2 object-cover lg:block'}
          />
        </div>
      ))}
    </div>
  )
}

export default Index
