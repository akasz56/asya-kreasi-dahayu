import Image from "next/image";

export default function Home() {
  const services = [
    "Mice & EO",
    "Multimedia",
    "Konsultan Kreatif",
    "Garment & Fashion",
  ];

  return (
    <>
      <div id="hero" className="relative isolate h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          width={1920}
          height={988}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto h-full w-4/5 max-w-screen-2xl flex flex-col gap-8 justify-center items-center">
          <p className="text-asya-light text-5xl text-center font-medium leading-normal tracking-widest">
            Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan
            kembali asa.
          </p>
          <a
            href="#"
            className="rounded-md bg-asya-light px-8 py-2 uppercase text-sm font-medium tracking-widest text-asya-dark shadow-sm hover:opacity-50"
          >
            Get started
          </a>
          <a href="#about" className="absolute bottom-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-asya-light"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div id="about" className="px-48 py-20 flex bg-asya-dark">
        <h1 className="self-center w-2/5 uppercase text-asya-light text-5xl font-medium tracking-widest">
          About Us
        </h1>
        <p className="flex-1 text-asya-light text-xl font-light tracking-widest leading-relaxed">
          Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang
          industri kreatif dan pengembangan sumber daya manusia. Sejak September
          2022, kami memberikan pelayanan untuk memudahkan anda berkreasi di
          dunia MICE, desain, hingga multimedia. Dengan didukung oleh teknologi
          mutakhir dan orang-orang yang handal dan berpengalaman, kami hadir
          memberikan asa dan ruang tumbuh yang nyata untuk para kreator.
        </p>
      </div>

      <div id="service" className="px-48 py-20 bg-white">
        <div className="flex mb-40">
          <h1 className="self-center w-2/5 uppercase text-asya-dark text-5xl font-medium tracking-widest">
            Our Services
          </h1>
          <p className="flex-1 text-asya-dark text-xl font-light tracking-widest leading-relaxed">
            Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di
            bidang industri kreatif dari seluruh Indonesia. Fokus kami adalah
            menyediakan solusi dengan menjadi media penghubung untuk menunjangi
            para kreator kecil hingga menengah didukung oleh tim kami yang
            handal dan berpengalaman di bidangnya.Setiap bidang pelayanan tentu
            saja memiliki keunikan dan kekuatannya masing-masing. Namun di sini,
            kami membuka kesempatan para kreator untuk berkembang dan ruang
            untuk saling berkolaborasi.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          {services.map((item, key) => (
            <div key={key}>
              <div className="rounded-3xl h-[50rem] w-full bg-asya-light"></div>
              <div className="flex mt-16">
                <h3 className="flex-1 uppercase text-asya-dark text-3xl font-medium tracking-widest">
                  {item}
                </h3>
                <a
                  href="#"
                  className="rounded-md bg-asya-light px-8 py-2 uppercase text-sm tracking-widest text-asya-dark shadow-sm hover:opacity-50"
                >
                  Read More
                </a>
              </div>
              <p className="mt-16 text-asya-dark text-xl tracking-widest">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exercita.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
