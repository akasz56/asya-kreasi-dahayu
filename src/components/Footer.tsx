import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-asya-dark'>
      <div className='container mx-auto py-16 flex justify-between items-center'>
        <h2 className='uppercase text-white text-3xl font-medium tracking-widest'>Asya Kreasi Dahayu</h2>
        <div className='space-y-12'>
          <p className='text-white text-md font-medium tracking-widest'>
            We&apos;d love to talk to you about our approach <br /> and how we might be able to help your brand.
          </p>
          <div className='relative'>
            <label
              htmlFor='email'
              className='text-white text-md font-medium tracking-widest'
            >
              Email Address
            </label>
            <input
              type='text'
              id='email'
              className='block w-full border-b-2 border-white bg-transparent py-1.5 mt-2 text-white text-xl font-medium tracking-widest focus:outline-none'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='absolute top-0 right-0 cursor-pointer stroke-white w-10'
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
