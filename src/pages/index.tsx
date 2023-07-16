import Display from "@/component/Display";
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
      <div
        id="hero"
        className="relative h-screen bg-hero-landing bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      >
        <p className="text-asya-light text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-normal md:leading-normal lg:leading-normal tracking-widest">
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan
          kembali asa.
        </p>
        <a
          href="#"
          className="px-8 py-3 rounded-md bg-asya-light shadow-sm uppercase text-asya-dark text-sm font-medium tracking-widest transition-opacity hover:opacity-50"
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

      <div id="about" className="bg-asya-dark">
        <div className="container mx-auto px-16 py-20">
          <div className="grid grid-cols-8 gap-4">
            <h1 className="col-span-3 self-center uppercase text-asya-light text-5xl font-medium tracking-widest">
              About Us
            </h1>
            <p className="col-span-5 text-asya-light font-light tracking-widest leading-relaxed">
              Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang
              industri kreatif dan pengembangan sumber daya manusia. Sejak
              September 2022, kami memberikan pelayanan untuk memudahkan anda
              berkreasi di dunia MICE, desain, hingga multimedia. Dengan
              didukung oleh teknologi mutakhir dan orang-orang yang handal dan
              berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang
              nyata untuk para kreator.
            </p>
          </div>
        </div>
      </div>

      <div id="service">
        <div className="container mx-auto px-16">
          <div className="py-36 grid grid-cols-8 gap-4">
            <h1 className="col-span-3 self-center uppercase text-asya-dark text-5xl font-medium tracking-widest">
              Our Services
            </h1>
            <p className="col-span-5 text-asya-dark font-light tracking-widest leading-relaxed">
              Sejak berdiri, Asya Kreasi Dahayu telah membantu banyak kreator di
              bidang industri kreatif dari seluruh Indonesia. Fokus kami adalah
              menyediakan solusi dengan menjadi media penghubung untuk
              menunjangi para kreator kecil hingga menengah didukung oleh tim
              kami yang handal dan berpengalaman di bidangnya. Setiap bidang
              pelayanan tentu saja memiliki keunikan dan kekuatannya
              masing-masing. Namun di sini, kami membuka kesempatan para kreator
              untuk berkembang dan ruang untuk saling berkolaborasi.
            </p>
          </div>
          <Display contents={services} className="pb-28" />
        </div>
      </div>
    </>
  );
}
