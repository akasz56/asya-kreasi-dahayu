import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, useScroll } from 'framer-motion'

export default function Header() {
  const router = useRouter()
  const { scrollY } = useScroll()
  const [show, setShow] = useState(true)

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

  return (
    <motion.div
      initial='hidden'
      animate={show ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ ease: 'easeOut' }}
      className='sticky top-0 z-10 h-20 w-full bg-asya-dark'
    >
      <nav className='asya-container flex h-full items-center'>
        <div className='flex-1'>
          <Link
            href={'/'}
            className='text-lg font-medium uppercase tracking-widest text-white'
          >
            Asya Kreasi Dahayu
          </Link>
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
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='h-8 w-8 fill-white'
          >
            <path d='M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z' />
          </svg>
        </div>
      </nav>
    </motion.div>
  )
}
