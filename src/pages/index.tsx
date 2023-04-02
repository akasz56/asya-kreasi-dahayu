import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div id='Hero' className="relative isolate overflow-hidden pt-14 h-screen">
        <Image src="/hero.png" alt="Hero Background" width={1920} height={988} className="absolute inset-0 -z-10 h-full w-full object-cover" />

        <div className="absolute bottom-44 right-14 w-1/2">
          <h1 className="text-5xl font-normal leading-normal tracking-wider uppercase">
            Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit,
            sed diam nonummy nibh Euismo.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    </>
  )
}
