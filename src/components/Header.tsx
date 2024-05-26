import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, useScroll } from 'framer-motion'
import Brand from './Brand'

export default function Header() {
  const router = useRouter()
  const { scrollY } = useScroll()
  const [show, setShow] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)

  function debounce(func: any, timeout = 20) {
    // last
    let timer: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(self, args)
      }, timeout)
    }

    // // first
    // let timer: NodeJS.Timeout | undefined
    // return (...args: any[]) => {
    //   if (!timer) {
    //     func.apply(self, args)
    //   }
    //   clearTimeout(timer)
    //   timer = setTimeout(() => {
    //     timer = undefined
    //   }, timeout)
    // }
  }

  useEffect(() => {
    let previous = scrollY.get()

    const handleChangeScroll = debounce((latest: number) => {
      if (latest > previous) {
        setShow(false)
        previous = latest
      } else if (latest < previous) {
        setShow(true)
        previous = latest
      }
    })

    const unsubScroll = scrollY.on('change', handleChangeScroll)

    return () => {
      unsubScroll()
    }
  }, [scrollY])

  const pages = [
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/our-services' },
    { title: 'Works', href: '/works' },
    { title: 'Product', href: '/product' },
    { title: 'Contact', href: '/contact' },
  ]

  const variants = {
    visible: { y: 0 },
    hidden: { y: '-100%' },
  }

  const sidebarBackdropVariants = {
    visible: {
      opacity: 1,
      display: 'block',
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  }
  const sidebarVariants = {
    visible: { x: 0 },
    hidden: { x: '-100%' },
  }

  return (
    <>
      <motion.div
        initial='hidden'
        animate={show ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ ease: 'easeOut' }}
        className='sticky top-0 z-10 h-20 w-full bg-asya-dark'
      >
        <nav className='asya-container flex h-full items-center'>
          <div className='flex-1'>
            <Brand />
          </div>
          <ul className='hidden w-1/2 justify-between lg:flex'>
            {pages.map((item, key) => (
              <li
                key={key}
                className='text-center text-lg font-medium tracking-widest text-white'
              >
                <Link
                  href={item.href}
                  className='relative'
                >
                  <span
                    className={
                      "after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:bg-white after:content-[''] " +
                      (router.pathname.startsWith(item.href)
                        ? 'after:w-full'
                        : 'after:w-0 after:duration-300 after:hover:w-full')
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='block lg:hidden'>
            <svg
              onClick={() => setShowSidebar(true)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='h-8 w-8 fill-white'
            >
              <path d='M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z' />
            </svg>
          </div>
        </nav>
      </motion.div>
      <motion.div
        initial='hidden'
        animate={showSidebar ? 'visible' : 'hidden'}
        transition={{ ease: 'easeOut' }}
        className={'fixed top-0 z-10 h-screen w-screen bg-black/75 lg:hidden'}
        variants={sidebarBackdropVariants}
      >
        <div className='absolute right-0 z-10 my-6 mx-4'>
          <svg
            onClick={() => setShowSidebar(false)}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 352 512'
            className='h-8 w-8 fill-white'
          >
            <path d='M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z' />
          </svg>
        </div>
        <motion.div
          animate={showSidebar ? 'visible' : 'hidden'}
          variants={sidebarVariants}
          transition={{ ease: 'easeOut' }}
          className='h-full max-w-[430px] bg-asya-dark p-6 pr-16'
        >
          <Brand onClick={() => setShowSidebar(false)} />
          <ul className='pt-4'>
            {pages.map((item, key) => (
              <li
                key={key}
                className='mt-4 text-lg tracking-widest text-white'
              >
                <Link
                  href={item.href}
                  onClick={() => setShowSidebar(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  )
}
