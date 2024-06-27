// TODO: auto slide
import React, { useEffect, useRef, useState } from 'react'
import { productImages } from '@/components/products'
import Image from 'next/image'

const DEFAULT_DURATION = 5000
const DRAG_BUFFER = 50

const Index = () => {
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [clickStartPos, setClickStartPos] = useState<number>(0)
  const [clickPos, setClickPos] = useState<number>(0)
  const [animPos, setAnimPos] = useState<number>(0)
  const [imgIndex, setImgIndex] = useState(0)

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
        console.log({ height, animPos })

        if (animPos < height && height - animPos > 0.1) {
          setAnimPos((prevPos) => prevPos + (height - prevPos) / 2)
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
      className='relative w-full flex-1 cursor-grab select-none overflow-hidden text-center active:cursor-grabbing lg:h-screen'
    >
      {productImages.map((item, key) => (
        <div
          key={key}
          className='absolute flex h-full w-full'
          style={{ transform: getTransformValue(key) }}
        >
          <Image
            height={720}
            width={720}
            draggable={false}
            src={item[0]}
            alt={key + '' + 0}
            className={'h-full w-1/2 object-cover ' + (key % 2 ? 'bg-asya-light' : 'bg-asya-dark')}
          />
          <Image
            height={720}
            width={720}
            draggable={false}
            src={item[1]}
            alt={key + '' + 1}
            className={'hidden h-full w-1/2 object-cover lg:block ' + (key % 2 ? 'bg-asya-dark' : 'bg-asya-light')}
          />
        </div>
      ))}
    </div>
  )
}

/*
const Index: NextPage = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const dragY = useMotionValue(0)

  const onDragEnd = () => {
    const y = dragY.get()

    // if (y <= -DRAG_BUFFER && imgIndex < productImages.length - 1) {
    //   setImgIndex((pv) => pv + 1)
    // } else if (y >= DRAG_BUFFER && imgIndex > 0) {
    //   setImgIndex((pv) => pv - 1)
    // }
  }

  return (
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <motion.div
        drag='y'
        dragConstraints={{
          // top: 0,
          bottom: 0,
        }}
        style={{
          y: dragY,
        }}
        // animate={{
        //   translateY: `-${imgIndex * 100}%`,
        // }}
        // transition={{
        //   type: 'linear',
        //   damping: 5,
        //   stiffness: 100,
        //   restDelta: 0.001,
        // }}
        onDragEnd={onDragEnd}
        className='cursor-grab overflow-hidden active:cursor-grabbing'
      >
        {productImages.map((item, key) => (
          <Image
            key={key}
            src={item[0]}
            alt='test'
            width={1920}
            height={1920}
          />
        ))}
      </motion.div>
    </CustomHead>
  )
}


# Just in case you dont want to use framer-motion
const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
const IndexManual: NextPage = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const [pos, setPos] = useState(100)
  const [startTime, setStartTime] = useState(0)
  const duration = 2000
  const delay = 2000

  function preloadImages() {
    productImages.forEach((pair) => {
      pair.forEach((link) => {
        let img = new Image()
        img.src = link
      })
    })
  }
  preloadImages()

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      if (startTime === 0) {
        setStartTime(now)
      }
      const elapsedTime = now - startTime

      if (elapsedTime >= duration) {
        if (elapsedTime >= duration + delay) {
          setImgIdx((prevValue) => (prevValue < productImages.length - 1 ? prevValue + 1 : 0))
          setStartTime(now)
        }
      } else {
        const easingValue = easeInOutQuad(elapsedTime / duration)
        setPos(100 - easingValue * 100)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [startTime])

  return (
    <CustomHead
      title='Product'
      description='Product Page'
    >
      <div className='relative h-screen overflow-hidden'>
        <div className='absolute flex h-screen w-full overflow-hidden'>
          <img
            src={productImages[imgIdx == 0 ? productImages.length - 1 : imgIdx - 1][0]}
            className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
          />
          <img
            src={productImages[imgIdx == 0 ? productImages.length - 1 : imgIdx - 1][1]}
            className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
          />
        </div>
        <div
          style={{ transform: `translateY(${pos}%)` }}
          className='absolute flex h-screen w-full overflow-hidden'
        >
          <img
            src={productImages[imgIdx][0]}
            className='w-full object-cover lg:min-h-screen lg:w-1/2 lg:object-right'
          />
          <img
            src={productImages[imgIdx][1]}
            className='hidden object-cover lg:block lg:min-h-screen lg:w-1/2 lg:object-left'
          />
        </div>
      </div>
    </CustomHead>
  )
}
*/

export default Index
