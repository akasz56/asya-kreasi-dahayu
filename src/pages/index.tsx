import Display from "@/component/Display";
import ScrollArrow from "@/component/ScrollArrow";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    "Mice & EO",
    "Multimedia",
    "Konsultan Kreatif",
    "Garment & Fashion",
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
      <motion.div
        id="hero"
        initial="hidden"
        variants={section}
        whileInView="visible"
        className="relative h-screen bg-hero-landing bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      >
        <motion.p
          variants={item}
          className="text-asya-light text-center text-4xl 2xl:text-5xl font-medium leading-normal 2xl:leading-normal tracking-widest"
        >
          Menghidupkan ambisi dalam berkreasi. <br /> Bersama Asya nyalakan
          kembali asa.
        </motion.p>
        <motion.a
          href="#"
          variants={item}
          className="px-8 py-3 rounded-md bg-asya-light shadow-sm uppercase text-asya-dark text-sm font-medium tracking-widest transition-opacity hover:opacity-50"
        >
          Get started
        </motion.a>
        <ScrollArrow scrollTo="#about" />
      </motion.div>

      <div id="about" className="bg-asya-dark">
        <div className="asya-row py-20">
          <div className="asya-section-title">
            <h1 className="text-asya-light">About Us</h1>
            <p className="text-asya-light">
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
        <div className="asya-row">
          <div className="py-36 asya-section-title">
            <h1 className="text-asya-dark">Our Services</h1>
            <p className="text-asya-dark">
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
          <Display contents={services} className="pb-28" gap="16" />
        </div>
      </div>
    </>
  );
}
