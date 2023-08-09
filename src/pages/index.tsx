import { DisplayContentItem } from "@/component/Display";
import ScrollArrow from "@/component/ScrollArrow";
import Link from "next/link";

export default function Home() {
  const services: DisplayContentItem[] = [
    { title: "Mice & EO", href: "#" },
    { title: "Multimedia", href: "#" },
    { title: "Konsultan Kreatif", href: "#" },
    { title: "Garment & Fashion", href: "#" },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative h-screen bg-hero-landing bg-cover bg-center flex flex-col items-center justify-center gap-6"
      >
        <p className="text-center text-asya-light text-5xl font-medium tracking-widest leading-normal">
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan
          kembali asa.
        </p>
        <a
          href="#"
          className="px-6 py-4 rounded-md bg-asya-light uppercase text-asya-dark font-medium tracking-widest"
        >
          Get started
        </a>
        <ScrollArrow scrollTo="#about" className="absolute bottom-0 mb-36" />
      </section>

      <section id="about" className="bg-asya-dark">
        <div className="container flex items-center mx-auto py-20">
          <h2 className="flex-1 uppercase text-asya-light text-3xl font-medium tracking-widest">
            About Us
          </h2>
          <p className="w-[70%] text-asya-light font-light tracking-widest leading-relaxed">
            Asya Kreasi Dahayu merupakan perusahaan yang bergerak di bidang
            industri kreatif dan pengembangan sumber daya manusia. Sejak
            September 2022, kami memberikan pelayanan untuk memudahkan anda
            berkreasi di dunia MICE, desain, hingga multimedia. Dengan didukung
            oleh teknologi mutakhir dan orang-orang yang handal dan
            berpengalaman, kami hadir memberikan asa dan ruang tumbuh yang nyata
            untuk para kreator.
          </p>
        </div>
      </section>

      <section id="service">
        <div className="container mx-auto">
          <div className="flex items-center py-20">
            <h2 className="flex-1 uppercase text-asya-dark text-3xl font-medium tracking-widest">
              Our Services
            </h2>
            <p className="w-[70%] text-asya-dark font-light tracking-widest leading-relaxed">
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
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
            {services.map((item, key) => (
              <Link key={key} href={"#"} className="w-1/2 px-8 mb-16">
                <div className="rounded-3xl aspect-square bg-asya-light"></div>
                <h2 className="mt-8 uppercase text-asya-dark text-3xl font-medium tracking-widest">
                  {item.title}
                </h2>
                <p className="mt-4 text-asya-dark text-sm tracking-widest">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exercita.
                </p>
              </Link>
              // <div  className="flex flex-col justify-between gap-8">
              //   <div className="rounded-3xl aspect-square bg-asya-light"></div>
              //   <div className="flex gap-8">
              //     <h2 className="flex-1 uppercase text-asya-dark text-3xl font-medium tracking-widest">
              //       {item.title}
              //     </h2>
              //     {/* <Link
              //       href={item.href}
              //       className="self-center rounded-md bg-asya-light px-8 py-2 uppercase text-sm tracking-widest text-asya-dark shadow-sm hover:opacity-50"
              //     >
              //       Read More
              //     </Link> */}
              //   </div>
              //   <p className=" text-asya-dark text-sm tracking-widest">
              //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              //     diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              //     aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              //     nostrud exercita.
              //   </p>
              // </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
