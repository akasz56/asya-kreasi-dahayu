import { useRef, useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollArrow from './ScrollArrow'
import image1 from '../../public/images/hero1.webp'
import image2 from '../../public/images/hero2.webp'
import image3 from '../../public/images/hero3.webp'
import Slider from './Slider'
import { Carousel } from 'flowbite-react'

interface HeroCarouselProps {
  scrollTo: string
}

function HeroCarousel({ scrollTo }: HeroCarouselProps) {
  const [mousePos, setMousePos] = useState<number[]>([])
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
    <Slider>
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
          className='flex h-full flex-col items-center justify-center gap-14'
        >
          <motion.p
            variants={firstChildVariant}
            className='asya-display-txt'
          >
            Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan kembali asa.
          </motion.p>
          <motion.a
            href='/our-services'
            variants={firstChildVariant}
            className='rounded-md bg-asya-dark py-3 px-6 text-xs font-medium uppercase tracking-widest text-white lg:text-base'
          >
            Get started
          </motion.a>
          <ScrollArrow
            scrollTo={scrollTo}
            className='lg:absolute lg:bottom-0 lg:mb-[5vw]'
          />
        </motion.div>
      </div>

      <div className='relative h-screen'>
        <button
          className='h-full w-full'
          onMouseDown={(e) => {
            setMousePos([e.clientX, e.clientY])
          }}
          onMouseUp={(e) => {
            if (mousePos[0] == e.clientX && mousePos[1] == e.clientY) {
              setModalOpen(true)
            }
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
              src='https://asyakreasidahayu.com/public/videos/hero_compro.mp4'
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
                      src='https://asyakreasidahayu.com/public/videos/hero_compro.mp4'
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

      <div className='relative h-screen'>
        <Image
          draggable={false}
          src={image2}
          alt='Hero Picture 2'
          className='absolute -z-10 h-full object-cover'
        />
      </div>

      <div className='relative h-screen overflow-hidden'>
        <Image
          draggable={false}
          src={image3}
          alt='Hero Picture 3'
          className='absolute -right-[22.5vw] h-full max-w-fit md:-right-52 xl:right-0 xl:w-full xl:max-w-none xl:object-cover xl:object-center'
        />
      </div>
    </Slider>
  )
}

export default HeroCarousel
