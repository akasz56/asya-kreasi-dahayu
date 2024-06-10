import React from 'react'
import { NextPage } from 'next'
import CustomHead from '@/layouts/CustomHead'

const ProjectOne: NextPage = () => {
  return (
    <CustomHead
      title='Project One'
      description='Project One Page'
    >
      <div className='asya-container'>
        <div className='flex'>
          <div className='w-1/2 space-y-12'>
            {[...Array(4)].map((item, key) => (
              <img
                key={key}
                src={'https://asyakreasidahayu.com/public/images/hero1.webp'}
                alt={'image'}
                className='block object-cover'
              />
            ))}
          </div>
          <div className='w-1/2'>
            <div className='sticky top-0 ml-36 flex h-screen flex-col py-32'>
              <h3 className='flex-1 text-4xl font-bold uppercase leading-normal tracking-widest text-asya-dark'>
                Project A, 2019
                <span className='block text-xl font-normal tracking-widest'>Service Lorem Ipsum</span>
              </h3>
              <p className='text-base leading-normal tracking-widest text-asya-dark'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomHead>
  )
}

export default ProjectOne
