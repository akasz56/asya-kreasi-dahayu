import React from 'react'
import { NextPage } from 'next'
import { DisplayContentItem } from '@/components/Display'
import Link from 'next/link'
import CustomHead from '@/layouts/CustomHead'
import HeroCarousel from '@/components/HeroCarousel'

const Home: NextPage = () => {
  const services: DisplayContentItem[] = [
    {
      title: 'MICE (Meeting Incentive Convention Exhibition)',
      description:
        'Kami memberikan pelayanan dan edukasi untuk bidang yang masih minim atensi: “the meetings industry”.',
      href: '#',
    },
    {
      title: 'Multimedia',
      description: 'Kami menciptakan hasil eksplorasi dengan realisasi ide yang unik dan berkelanjutan.',
      href: '#',
    },
    {
      title: 'Desain Grafis',
      description: 'Kami merancang pola visual yang tidak hanya menarik perhatian, namun memberikan inspirasi.',
      href: '#',
    },
    {
      title: 'Garment & Fashion',
      description: 'Kami menciptakan mode yang inovatif namun tak lekang oleh waktu.',
      href: '#',
    },
    {
      title: 'Konsultan Kreatif',
      description:
        'Kami memberikan strategi dalam desain untuk membekali kreator dalam bertumbuh dan menciptakan mahakarya ke depannya.',
      href: '#',
    },
  ]

  return (
    <CustomHead
      title='Home'
      description='Home Page Asya Kreasi Dahayu'
    >
      <section id='hero'>
        <HeroCarousel />
      </section>

      <section
        id='about'
        className='bg-asya-dark'
      >
        <div className='container mx-auto flex py-20'>
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
        <div className='container mx-auto'>
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
            {services.map((item, key) => (
              <Link
                key={key}
                href={'#'}
              >
                <div className='mb-20 aspect-square rounded-3xl bg-asya-dark'></div>
                <h2 className='mb-20 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-medium uppercase tracking-widest text-asya-dark hover:overflow-visible hover:whitespace-normal'>
                  {item.title}
                </h2>
                <p className='tracking-widest text-asya-dark'>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </CustomHead>
  )
}

export default Home
