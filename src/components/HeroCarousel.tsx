import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import ScrollArrow from '@/components/ScrollArrow'
import styles from '../styles/HeroCarousel.module.css'

export default function HeroCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const variants = {
    visible: { transition: { staggerChildren: 0.5 } },
  }

  const firstChildVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  }

  const playVideo = function () {
    if (videoRef.current) {
      videoRef.current.play()
      videoRef.current.classList.remove('test')
    } else console.error('videoRef not found!')
  }

  const pauseVideo = function () {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.classList.add('test')
    } else console.error('videoRef not found!')
  }

  const autoplayVideo = function (index: Number) {
    if (index == 1) playVideo()
    else pauseVideo()
  }

  const onclickVideo = function () {
    if (videoRef.current) {
      if (videoRef.current.paused) playVideo()
      else pauseVideo()
    }
  }

  return (
    <Carousel
      pauseOnHover
      slideInterval={5000}
      onSlideChange={autoplayVideo}
      draggable={false}
      indicators={false}
    >
      <motion.div
        initial='hidden'
        variants={variants}
        whileInView='visible'
        className={
          styles.bgHero1 +
          " relative h-screen bg-[url('/images/hero1.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-6"
        }
      >
        <motion.p
          variants={firstChildVariant}
          className='text-center text-white text-5xl font-medium tracking-widest leading-normal'
        >
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan kembali asa.
        </motion.p>
        <motion.a
          href='/our-services'
          variants={firstChildVariant}
          className='px-6 py-2 rounded-md bg-asya-dark uppercase text-white font-medium tracking-widest'
        >
          Get started
        </motion.a>
        <ScrollArrow
          scrollTo='#about'
          className='absolute bottom-0 mb-[5vw]'
        />
      </motion.div>

      <video
        loop
        className='h-screen object-cover object-center cursor-pointer'
        ref={videoRef}
        onClick={onclickVideo}
      >
        <source
          src='/videos/hero_compro.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>

      <Image
        src={'/images/hero2.jpg'}
        alt='Hero Picture 2'
        width={1920}
        height={1440}
        className='h-screen object-cover object-center'
      />

      <Image
        src={'/images/hero3.jpg'}
        alt='Hero Picture 3'
        width={1920}
        height={1440}
        className='h-screen object-cover object-center'
      />

      <Image
        src={'/images/hero4.jpg'}
        alt='Hero Picture 4'
        width={1920}
        height={1440}
        className='h-screen object-cover object-center'
      />
    </Carousel>
  )
}
