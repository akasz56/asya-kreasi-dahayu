import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="Hero" className="relative isolate h-[85vh]">
        <Image
          src="/img/hero.png"
          alt="Hero Background"
          width={1920}
          height={988}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto h-full w-4/5 max-w-screen-2xl">
          <div className="absolute bottom-0 right-0 mx-6 sm:ml-0 sm:mr-8 mb-16 sm:mb-24 lg:mb-28 w-9/12 xl:w-7/12">
            <h1 className="uppercase tracking-wider text-white text-lg md:text-2xl lg:text-4xl  leading-normal md:leading-normal lg:leading-normal font-thin md:font-light lg:font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh Euismo.
            </h1>
            <p className="mt-6 uppercase tracking-wider text-gray-300 text-xs md:text-base lg:text-xl leading-normal md:leading-normal lg:leading-normal font-thin md:font-light lg:font-normal">
              PT. Asya Kreasi Dahayu
            </p>
          </div>
        </div>
      </div>

      <div id="About" className="border-b border-neutral-400 md:flex">
        <div className="relative md:w-2/5">
          <div className="flex h-screen md:sticky md:top-0">
            <Image
              src="/img/about.jpg"
              alt="About Image"
              width={1920}
              height={1080}
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 px-6 pt-9">
          <h1 className="uppercase text-4xl mb-96">About Us</h1>
          <div className="flex flex-col items-end">
            <div className="mb-96 w-3/4 max-w-lg">
              {/* <div className="mb-14 w-3/4 max-w-lg"> */}
              <p className="text-sm leading-normal tracking-wider">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et
              </p>
              <p className="mt-4 uppercase text-sm font-medium leading-normal tracking-wider">
                PT. Asya Kreasi Dahayu
              </p>
            </div>
            <div className="mb-96 w-3/4 max-w-lg">
              {/* <div className="mb-14 w-3/4 max-w-lg"> */}
              <h2 className="mb-4 uppercase text-2xl tracking-wide">Visi</h2>
              <p className="text-sm leading-normal tracking-wider">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et
              </p>
            </div>
            <div className="mb-96 w-3/4 max-w-lg">
              {/* <div className="mb-14 w-3/4 max-w-lg"> */}
              <h2 className="mb-4 uppercase text-2xl tracking-wide">Misi</h2>
              <p className="text-sm leading-normal tracking-wider">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Service"
        className="border-b border-neutral-400 mx-6 mt-12 lg:mt-16"
      >
        <h1 className="uppercase text-4xl mb-14">Our Service</h1>
        <div className="mb-20 md:mb-24 lg:mb-32 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((x, i) => (
            <div key={i} className="relative bg-black aspect-square">
              <p className="absolute inset-x-4 bottom-4 uppercase tracking-wider text-xs sm:text-base lg:text-lg text-white">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          ))}
        </div>
        <div className="mb-16 flex justify-end">
          <div className="w-3/4 max-w-lg">
            <p className="text-sm leading-normal tracking-wider">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et
            </p>
          </div>
        </div>
      </div>

      <div
        id="Project"
        className="border-b border-neutral-400 mx-6 mt-12 lg:mt-16"
      >
        <h1 className="uppercase text-4xl mb-14">Get to Know Us</h1>
        <div className="mb-20 md:mb-24 lg:mb-32 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((x, i) => (
            <div key={i} className="relative bg-black aspect-square"></div>
          ))}
        </div>
        <div className="mb-16 flex justify-end">
          <div className="w-3/4 max-w-lg">
            <p className="text-sm leading-normal tracking-wider">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et
            </p>
          </div>
        </div>
      </div>

      <div id="Contact" className="border-b border-neutral-400 "></div>
    </>
  );
}
