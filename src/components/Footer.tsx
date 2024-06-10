import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-asya-dark'>
      <div className='asya-container flex flex-col justify-between gap-4 py-8 lg:flex-row lg:items-center lg:py-16'>
        <h2 className='text-xs font-light uppercase tracking-[.2em] text-white lg:text-3xl lg:font-medium lg:tracking-widest'>
          Asya Kreasi Dahayu
        </h2>
        <div className='space-y-12'>
          <p className='text-[3.5vw] tracking-widest text-white sm:text-lg lg:font-medium lg:tracking-widest'>
            We&apos;d love to talk to you about our approach <br /> and how we might be able to help your brand.
          </p>
          <div className='relative'>
            <label
              htmlFor='email'
              className='tracking-widest text-white sm:text-lg lg:font-medium lg:tracking-widest'
            >
              Email Address
            </label>
            <input
              type='text'
              id='email'
              className='mt-2 block w-full border-0 border-b-2 border-white bg-transparent py-1.5 text-xl font-medium tracking-widest text-white focus:outline-none'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='absolute top-0 right-0 w-10 cursor-pointer stroke-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
