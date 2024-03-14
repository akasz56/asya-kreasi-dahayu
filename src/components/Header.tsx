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
      <nav className='flex py-6'>
        <div className='flex-1 pl-[5vw]'>
          <Link
            href={'/'}
            className='text-lg font-medium uppercase tracking-widest text-white'
          >
            Asya Kreasi Dahayu
          </Link>
        </div>
        <ul className='grid w-1/2 grid-cols-5'>
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
      </nav>
    </motion.div>
  )
}
