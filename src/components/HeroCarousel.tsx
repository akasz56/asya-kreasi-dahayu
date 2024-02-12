import { useRef, useState, Fragment } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import ScrollArrow from '@/components/ScrollArrow'
import { Dialog, Transition } from '@headlessui/react'

export default function HeroCarousel() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
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
        className="relative h-screen bg-[url('/images/hero1.jpg')] bg-cover bg-center flex flex-col items-center justify-center gap-6"
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

      <div>
        {/* 1. The button */}
        <button
          className='relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group'
          onClick={() => {
            setModalOpen(true)
          }}
          aria-label='Watch the video'
        >
          <video
            loop
            controls
            autoPlay
            className='h-screen w-screen object-cover object-center cursor-pointer'
          >
            <source
              src='./videos/hero_compro.mp4'
              type='video/mp4'
              className='w-screen'
            />
            Your browser does not support the video tag.
          </video>
        </button>

        <Transition
          show={modalOpen}
          as={Fragment}
          afterEnter={() => videoRef.current?.play()}
        >
          <Dialog
            initialFocus={videoRef}
            onClose={() => setModalOpen(false)}
          >
            {/* 2. The backdrop layer */}
            <Transition.Child
              className='fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity'
              enter='transition ease-out duration-200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition ease-out duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              aria-hidden='true'
            />

            {/* 3. The modal video */}
            <Transition.Child
              className='fixed inset-0 z-[99999] flex p-6'
              enter='transition ease-out duration-300'
              enterFrom='opacity-0 scale-75'
              enterTo='opacity-100 scale-100'
              leave='transition ease-out duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-75'
            >
              <div className='max-w-5xl mx-auto h-full flex items-center'>
                <Dialog.Panel className='w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden'>
                  <video
                    width='1920'
                    height='1080'
                    loop
                    controls
                    ref={videoRef}
                  >
                    <source
                      src='./videos/hero_compro.mp4'
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>

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
