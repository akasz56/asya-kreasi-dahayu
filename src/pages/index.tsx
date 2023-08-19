import { DisplayContentItem } from "@/component/Display";
import ScrollArrow from "@/component/ScrollArrow";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const services: DisplayContentItem[] = [
    { title: "Mice & EO", href: "#" },
    { title: "Multimedia", href: "#" },
    { title: "Konsultan Kreatif", href: "#" },
    { title: "Garment & Fashion", href: "#" },
  ];

  const section = {
    visible: { transition: { staggerChildren: 0.5 } },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <>
      <motion.section
        id="hero"
        initial="hidden"
        variants={section}
        whileInView="visible"
        className="relative h-screen bg-hero-landing bg-cover bg-center flex flex-col items-center justify-center gap-6"
      >
        <motion.p
          variants={item}
          className="text-center text-white text-5xl font-medium tracking-widest leading-normal"
        >
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan
          kembali asa.
        </motion.p>
        <motion.a
          href="#"
          variants={item}
          className="px-6 py-2 rounded-md bg-asya-dark uppercase text-white font-medium tracking-widest"
        >
          Get started
        </motion.a>
        <ScrollArrow scrollTo="#about" className="absolute bottom-0 mb-[5vw]" />
      </motion.section>

      <section id="about" className="bg-asya-dark">
        <div className="flex container mx-auto py-20">
          <h2 className="flex-1 self-center uppercase text-white text-4xl font-medium tracking-widest">
            About Us
          </h2>
          <p className="w-3/5 text-white font-light tracking-widest leading-relaxed">
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
          <div className="flex py-32">
            <h2 className="flex-1 self-center uppercase text-asya-dark text-4xl font-medium tracking-widest">
              Our Service
            </h2>
            <p className="w-3/5 text-asya-dark font-light tracking-widest leading-relaxed">
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
          <div className="mb-28 grid grid-cols-2 gap-16">
            {services.map((item, key) => (
              <Link key={key} href={"#"}>
                <div className="rounded-3xl aspect-square bg-asya-dark"></div>
                <h2 className="mt-20 uppercase text-asya-dark text-3xl font-medium tracking-widest">
                  {item.title}
                </h2>
                <p className="mt-20 text-asya-dark tracking-widest">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exercita.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
