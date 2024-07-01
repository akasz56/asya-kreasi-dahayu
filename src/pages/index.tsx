import React from 'react'
import { NextPage } from 'next'
import CustomHead from '@/layouts/CustomHead'
import HeroCarousel from '@/components/HeroCarousel'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className='asya-container flex-row items-center py-20 lg:flex'>
          <h2 className='asya-title flex-1 text-white lg:flex-1'>About Us</h2>
          <p className='asya-description mx-auto max-w-sm text-white sm:max-w-lg lg:w-3/5 lg:max-w-none'>
            Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang industri kreatif dan pengembangan sumber
            daya manusia. Sejak September 2022, kami memberikan pelayanan untuk memudahkan anda berkreasi di dunia MICE,
            desain, hingga multimedia. Dengan didukung oleh teknologi mutakhir dan orang-orang yang handal dan
            berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang nyata untuk para kreator.
          </p>
        </div>
      </section>

      <section
        id='service'
        className='overflow-x-hidden'
      >
        <div className='asya-container'>
          <div className='flex-row items-center py-20 lg:flex lg:py-32'>
            <h2 className='asya-title text-asya-dark lg:flex-1'>Our Service</h2>
            <p className='asya-description mx-auto max-w-sm text-asya-dark sm:max-w-lg lg:w-3/5 lg:max-w-none'>
              Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di bidang industri kreatif dari seluruh
              Indonesia. Fokus kami adalah menyediakan solusi dengan menjadi media penghubung untuk menunjangi para
              kreator kecil hingga menengah didukung oleh tim kami yang handal dan berpengalaman di bidangnya.
            </p>
          </div>
          <div className='mb-28 grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16'>
            <Link href='/#'>
              <Image
                src={'https://asyakreasidahayu.com/public/images/services/service (1).webp'}
                alt='MICE (Meeting Incentive Convention Exhibition)'
                className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
              />
              <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal md:text-2xl lg:mb-20 lg:text-3xl'>
                MICE (Meeting Incentive Convention Exhibition)
              </h2>
              <p className='asya-description text-center text-asya-dark lg:text-left'>
                Kami memberikan pelayanan dan edukasi untuk bidang yang masih minim atensi: “
                <span className='italic'>the meetings industry</span>”.
              </p>
            </Link>
            <Link href='/#'>
              <Image
                src={'https://asyakreasidahayu.com/public/images/services/service (2).webp'}
                alt='Multimedia'
                className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
              />
              <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal md:text-2xl lg:mb-20 lg:text-3xl'>
                Multimedia
              </h2>
              <p className='asya-description text-center text-asya-dark lg:text-left'>
                Kami menciptakan hasil eksplorasi dengan realisasi <br className='block lg:hidden' /> ide yang unik dan
                berkelanjutan.
              </p>
            </Link>
            <Link href='/#'>
              <Image
                src={'https://asyakreasidahayu.com/public/images/services/service (5).webp'}
                alt='Garment and Fashion'
                className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
              />
              <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal md:text-2xl lg:mb-20 lg:text-3xl'>
                Garment and Fashion
              </h2>
              <p className='asya-description text-center text-asya-dark lg:text-left'>
                Kami menciptakan mode yang inovatif <br className='block lg:hidden' />
                dan trendy dengan kualitas terbaik untuk busana dan aksesoris muslim.
              </p>
            </Link>
            <Link href='/#'>
              <Image
                src={'https://asyakreasidahayu.com/public/images/services/service (3).webp'}
                alt='Ticketing'
                className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
              />
              <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal md:text-2xl lg:mb-20 lg:text-3xl'>
                Ticketing
              </h2>
              <p className='asya-description text-center text-asya-dark lg:text-left'>
                Kami memberikan solusi untuk kemudahan <br className='block lg:hidden' /> dalam perencanaan perjalanan
                kerja, perjalanan dinas & wisata dalam dan luar negeri dengan berbagai jenis transportasi dan akomodasi.
              </p>
            </Link>
            <Link href='/#'>
              <Image
                src={'https://asyakreasidahayu.com/public/images/services/service (4).webp'}
                alt='Konsultan Kreatif'
                className='-mx-4 mb-8 aspect-video w-screen max-w-none object-cover lg:mb-20 lg:aspect-square lg:max-w-full lg:rounded-3xl'
              />
              <h2 className='mb-10 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal md:text-2xl lg:mb-20 lg:text-3xl'>
                Konsultan Kreatif
              </h2>
              <p className='asya-description text-center text-asya-dark lg:text-left'>
                Kami memberikan strategi dalam desain untuk <br className='block lg:hidden' /> membekali kreator dalam
                bertumbuh dan <br className='block lg:hidden' /> menciptakan mahakarya ke depannya.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Home
