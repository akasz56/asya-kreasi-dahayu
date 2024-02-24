import { useRef, useState, Fragment, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import { Dialog, Transition } from '@headlessui/react'

export default function HeroCarousel() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoHeroRef = useRef<HTMLVideoElement>(null)
  const videoModalRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoHeroRef && videoHeroRef.current) {
      if (!modalOpen) videoHeroRef.current?.play()
      else videoHeroRef.current?.pause()
    }
  }, [modalOpen, videoHeroRef])

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

  return (
    <Carousel
      pauseOnHover
      slideInterval={5000}
      draggable={false}
      indicators={false}
    >
      <motion.div
        initial='hidden'
        variants={variants}
        whileInView='visible'
        className="relative flex h-screen flex-col items-center justify-center gap-6 bg-[url('/images/hero1.jpg')] bg-cover bg-center"
      >
        <motion.p
          variants={firstChildVariant}
          className='text-center text-5xl font-medium leading-normal tracking-widest text-white'
        >
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan kembali asa.
        </motion.p>
        <motion.a
          href='/our-services'
          variants={firstChildVariant}
          className='rounded-md bg-asya-dark px-6 py-2 font-medium uppercase tracking-widest text-white'
        >
          Get started
        </motion.a>
      </motion.div>

      <div className='relative h-screen'>
        <button
          className='h-full w-full'
          onClick={() => {
            setModalOpen(true)
          }}
          aria-label='Watch the video'
        >
          <video
            autoPlay
            loop
            muted
            ref={videoHeroRef}
            className='h-full w-full cursor-pointer object-cover object-center'
          >
            <source
              src='./videos/hero_compro.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </button>

        <Transition
          show={modalOpen}
          as={Fragment}
          afterEnter={() => videoModalRef.current?.play()}
        >
          <Dialog
            initialFocus={videoModalRef}
            onClose={() => setModalOpen(false)}
          >
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

            <Transition.Child
              className='fixed inset-0 z-[99999] flex p-6'
              enter='transition ease-out duration-300'
              enterFrom='opacity-0 scale-75'
              enterTo='opacity-100 scale-100'
              leave='transition ease-out duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-75'
            >
              <div className='mx-auto flex h-full max-w-6xl items-center'>
                <Dialog.Panel className='aspect-video max-h-full w-full overflow-hidden rounded-lg bg-black shadow-2xl'>
                  <video
                    width='1920'
                    height='1080'
                    controls
                    ref={videoModalRef}
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
        width={7952}
        height={5304}
        className='relative h-screen object-cover object-center'
      />

      <Image
        src={'/images/hero3.jpg'}
        alt='Hero Picture 3'
        width={7952}
        height={5304}
        className='relative h-screen object-cover object-center'
      />

      <Image
        src={'/images/hero4.jpg'}
        alt='Hero Picture 4'
        width={7952}
        height={5304}
        className='relative h-screen object-cover object-center'
      />
    </Carousel>
  )
}
