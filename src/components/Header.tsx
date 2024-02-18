import { useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, useScroll } from 'framer-motion'

export default function Header() {
  const router = useRouter()

  const { scrollY } = useScroll()
  const [show, setShow] = useState(true)

  useEffect(() => {
    let previous = scrollY.get()

    const handleChangeScroll = (latest: number) => {
      if (latest > previous) {
        setShow(false)
        previous = latest
      } else if (latest < previous) {
        setShow(true)
        previous = latest
      }
    }

    const unsubScroll = scrollY.on('change', handleChangeScroll)

    return () => {
      unsubScroll()
    }
  }, [scrollY])

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    // <header className="fixed w-full top-0 z-40 bg-asya">
    //   <nav
    //     className="my-8 mx-6 lg:mx-16 flex items-center justify-between"
    //     aria-label="Global"
    //   >
    //     <div className="flex lg:flex-1">
    //       <Link
    //         href={"/"}
    //         className="text-xl leading-normal tracking-wider text-asya-dark"
    //       >
    //         ASYA KREASI DAHAYU
    //       </Link>
    //     </div>
    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-asya-dark"
    //         onClick={() => setMobileMenuOpen(true)}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //       </button>
    //     </div>
    //     <div className="hidden lg:flex">
    //       <ul className="flex space-x-16">
    //         {pages.map((item, key) => (
    //           <li key={key}>
    //             <Link
    //               href={item.href}
    //               className="text-xl leading-normal tracking-wider text-asya-dark"
    //             >
    //               {item.title}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </nav>
    //   <Transition.Root as={Fragment} show={mobileMenuOpen}>
    //     <Dialog as="div" className="relative z-50" onClose={setMobileMenuOpen}>
    //       <Transition.Child
    //         className="fixed inset-0 bg-black"
    //         enter="transition-opacity ease-in-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-50"
    //         leave="transition-opacity ease-in-out duration-300"
    //         leaveFrom="opacity-50"
    //         leaveTo="opacity-0"
    //       ></Transition.Child>
    //       <div className="fixed inset-0 overflow-hidden">
    //         <div className="absolute inset-0 overflow-hidden">
    //           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
    //             <Transition.Child
    //               as={Fragment}
    //               enter="transform transition ease-in-out duration-300"
    //               enterFrom="translate-x-full"
    //               enterTo="translate-x-0"
    //               leave="transform transition ease-in-out duration-300"
    //               leaveFrom="translate-x-0"
    //               leaveTo="translate-x-full"
    //             >
    //               <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
    //                 <div className="flex h-full flex-col overflow-y-scroll bg-asya-dark py-6 shadow-xl">
    //                   <div className="mx-6">
    //                     <div className="flex items-start justify-end">
    //                       <button
    //                         type="button"
    //                         className="rounded-md bg-asya-dark text-asya"
    //                         onClick={() => setMobileMenuOpen(false)}
    //                       >
    //                         <span className="sr-only">Close panel</span>
    //                         <XMarkIcon
    //                           className="h-12 w-12"
    //                           aria-hidden="true"
    //                         />
    //                       </button>
    //                     </div>
    //                   </div>
    //                   <div className="relative flex-1 m-6">
    //                     <div className="flex flex-col">
    //                       <Link
    //                         href={"/"}
    //                         className="uppercase text-asya text-4xl font-medium leading-normal tracking-wider mb-6"
    //                       >
    //                         Home
    //                       </Link>
    //                       {pages.map((item, key) => (
    //                         <Link
    //                           key={key}
    //                           href={item.href}
    //                           className="uppercase text-asya text-4xl font-medium leading-normal tracking-wider mb-6"
    //                         >
    //                           {item.title}
    //                         </Link>
    //                       ))}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Dialog.Panel>
    //             </Transition.Child>
    //           </div>
    //         </div>
    //       </div>
    //     </Dialog>
    //   </Transition.Root>
    // </header>

    <motion.div
      initial='hidden'
      animate={show ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ ease: 'easeOut' }}
      className='sticky top-0 z-10 w-full bg-asya-dark'
      style={{ height: '8.5vh' }}
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
