import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-asya-dark'>
      <div className='asya-container flex flex-col justify-between gap-4 py-8 lg:flex-row lg:items-center lg:py-16'>
        <h2 className='asya-txt text-xs uppercase tracking-[.2em] text-white lg:text-3xl lg:font-medium'>
          Asya Kreasi Dahayu
        </h2>
        <div>
          <p className='asya-txt mb-12 text-[14px] font-medium tracking-widest text-white sm:text-lg'>
            We&apos;d love to talk to you about our approach <br /> and how we might be able to help your brand.
          </p>
          <div className='flex justify-between'>
            <label
              htmlFor='email'
              className='asya-txt text-[12px] font-medium tracking-widest text-white sm:text-lg'
            >
              Email Address
            </label>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-[15px] cursor-pointer stroke-white lg:w-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </div>
          <input
            type='text'
            id='email'
            className='asya-txt block w-full border-0 border-b-2 border-white bg-transparent p-0 text-[12px] font-medium tracking-widest text-white focus:outline-none sm:text-xl'
          />
        </div>
      </div>
    </footer>
  )
}
