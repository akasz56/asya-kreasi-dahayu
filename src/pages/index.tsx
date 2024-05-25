import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import HeroCarousel from '@/components/HeroCarousel'
import { servicesDisplay } from '@/components/services'
import { DisplayContentItem } from '@/components/Display'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <CustomHead
      title='Home'
      description='Home Page Asya Kreasi Dahayu'
    >
      <section id='hero'>
        <HeroCarousel scrollTo={'about'} />
      </section>

      <section
        id='about'
        className='bg-asya-dark'
      >
        <div className='asya-container flex-row items-center py-20 text-center lg:flex lg:text-left'>
          <h2 className='mb-8 flex-1 text-xl font-medium uppercase tracking-widest text-white lg:mb-0 lg:flex-1 lg:text-4xl'>
            About Us
          </h2>
          <p className='mx-auto max-w-sm text-xs font-light leading-relaxed tracking-widest text-white lg:w-3/5 lg:max-w-none lg:text-base'>
            Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang industri kreatif dan pengembangan sumber
            daya manusia. Sejak September 2022, kami memberikan pelayanan untuk memudahkan anda berkreasi di dunia MICE,
            desain, hingga multimedia. Dengan didukung oleh teknologi mutakhir dan orang-orang yang handal dan
            berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang nyata untuk para kreator.
          </p>
        </div>
      </section>

      <section id='service'>
        <div className='asya-container'>
          <div className='flex-row items-center py-20 text-center lg:flex lg:py-32 lg:text-left'>
            <h2 className='mb-8 text-xl font-medium uppercase tracking-widest text-asya-dark lg:mb-0 lg:flex-1 lg:text-4xl'>
              Our Service
            </h2>
            <p className='mx-auto max-w-sm text-xs font-light leading-relaxed tracking-widest text-asya-dark lg:w-3/5 lg:max-w-none lg:text-base'>
              Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di bidang industri kreatif dari seluruh
              Indonesia. Fokus kami adalah menyediakan solusi dengan menjadi media penghubung untuk menunjangi para
              kreator kecil hingga menengah didukung oleh tim kami yang handal dan berpengalaman di bidangnya.
            </p>
          </div>
          <div className='mb-28 grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16'>
            {servicesDisplay.map((service: DisplayContentItem, key: number) => (
              <Link
                key={key}
                href={'#'}
              >
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1080}
                    height={1080}
                    className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
                  />
                ) : (
                  <div className='-mx-4 mb-8 aspect-video w-screen max-w-none bg-asya-dark object-cover lg:mb-20 lg:aspect-square lg:rounded-3xl' />
                )}
                <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal lg:mb-20'>
                  {service.title}
                </h2>
                <p className='text-center tracking-widest text-asya-dark lg:text-left'>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Home
