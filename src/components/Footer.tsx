import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-asya-dark'>
      <div className='container mx-auto flex items-center justify-between py-16'>
        <h2 className='text-3xl font-medium uppercase tracking-widest text-white'>Asya Kreasi Dahayu</h2>
        <div className='space-y-12'>
          <p className='text-md font-medium tracking-widest text-white'>
            We&apos;d love to talk to you about our approach <br /> and how we might be able to help your brand.
          </p>
          <div className='relative'>
            <label
              htmlFor='email'
              className='text-md font-medium tracking-widest text-white'
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
