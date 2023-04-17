import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="Hero" className="relative isolate overflow-hidden h-[85vh]">
        <Image
          src="/img/hero.png"
          alt="Hero Background"
          width={1920}
          height={988}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto h-full w-4/5 max-w-screen-2xl">
          <div className="absolute bottom-0 right-0 mx-6 sm:ml-0 sm:mr-8 mb-16 sm:mb-24 lg:mb-28 w-9/12 xl:w-7/12">
            <h1 className="uppercase tracking-wider text-2xl md:text-4xl lg:text-5xl sm:leading-normal md:leading-normal lg:leading-normal text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh Euismo.
            </h1>
            <p className="mt-6 uppercase tracking-wider text-gray-300 text-xs sm:text-base lg:text-lg">
              PT. Asya Kreasi Dahayu
            </p>
          </div>
        </div>
      </div>

      <div id="About"></div>

      <div id="Service"></div>

      <div id="Project"></div>

      <div id="Contact"></div>
    </>
  );
}
