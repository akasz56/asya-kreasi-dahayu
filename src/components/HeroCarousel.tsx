import { useRef, useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Carousel } from 'flowbite-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollArrow from './ScrollArrow'
import image1 from '../../public/images/hero1.jpg'
import image2 from '../../public/images/hero2.jpg'
import image3 from '../../public/images/hero3.jpg'
import image4 from '../../public/images/hero4.jpg'

interface HeroCarouselProps {
  scrollTo: string
}

export default function HeroCarousel({ scrollTo }: HeroCarouselProps) {
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
      draggable={true}
      leftControl={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='hidden h-12 w-12 rotate-90 text-white md:inline'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
          />
        </svg>
      }
      rightControl={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='hidden h-12 w-12 -rotate-90 text-white md:inline'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
          />
        </svg>
      }
      indicators={false}
      className='bg-asya-dark'
    >
      <div className='relative h-screen'>
        <Image
          src={image1}
          alt='Hero Picture 1'
          className='absolute -z-10 h-full object-cover'
        />
        <motion.div
          initial='hidden'
          variants={variants}
          whileInView='visible'
          className='flex h-full flex-col items-center justify-center gap-6'
        >
          <motion.p
            variants={firstChildVariant}
            className='text-center text-[4vw] leading-normal tracking-widest text-white sm:text-3xl lg:text-4xl lg:font-medium xl:text-5xl'
          >
            Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan kembali asa.
          </motion.p>
          <motion.a
            href='/our-services'
            variants={firstChildVariant}
            className='mt-7 rounded-md bg-asya-dark py-3 px-6 text-xs font-medium uppercase tracking-widest text-white lg:text-base'
          >
            Get started
          </motion.a>
          <ScrollArrow
            scrollTo={'#' + scrollTo}
            className='absolute bottom-0 mb-[5vw]'
          />
        </motion.div>
      </div>

      <div className='relative h-screen overflow-hidden'>
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
        src={image2}
        alt='Hero Picture 2'
        className='relative h-screen object-cover object-center'
      />

      <Image
        src={image3}
        alt='Hero Picture 3'
        className='relative h-screen object-cover object-center'
      />

      <Image
        src={image4}
        alt='Hero Picture 4'
        className='relative h-screen object-cover object-center'
      />
    </Carousel>
  )
}
