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
        <div className='asya-container flex py-20'>
          <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-white'>About Us</h2>
          <p className='w-3/5 font-light leading-relaxed tracking-widest text-white'>
            Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang industri kreatif dan pengembangan sumber
            daya manusia. Sejak September 2022, kami memberikan pelayanan untuk memudahkan anda berkreasi di dunia MICE,
            desain, hingga multimedia. Dengan didukung oleh teknologi mutakhir dan orang-orang yang handal dan
            berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang nyata untuk para kreator.
          </p>
        </div>
      </section>

      <section id='service'>
        <div className='asya-container px-20'>
          <div className='flex py-32'>
            <h2 className='flex-1 self-center text-4xl font-medium uppercase tracking-widest text-asya-dark'>
              Our Service
            </h2>
            <p className='w-3/5 font-light leading-relaxed tracking-widest text-asya-dark'>
              Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di bidang industri kreatif dari seluruh
              Indonesia. Fokus kami adalah menyediakan solusi dengan menjadi media penghubung untuk menunjangi para
              kreator kecil hingga menengah didukung oleh tim kami yang handal dan berpengalaman di bidangnya. Setiap
              bidang pelayanan tentu saja memiliki keunikan dan kekuatannya masing-masing. Namun di sini, kami membuka
              kesempatan para kreator untuk berkembang dan ruang untuk saling berkolaborasi.
            </p>
          </div>
          <div className='mb-28 grid grid-cols-2 gap-16'>
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
                    className='mb-20 aspect-square rounded-3xl'
                  />
                ) : (
                  <div className='mb-20 aspect-square rounded-3xl bg-asya-dark' />
                )}
                <h2 className='mb-20 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal'>
                  {service.title}
                </h2>
                <p className='tracking-widest text-asya-dark'>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Home
