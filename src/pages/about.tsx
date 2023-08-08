import ScrollArrow from "@/component/ScrollArrow";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
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
        className="relative h-screen bg-hero-about bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      >
        <motion.p
          variants={item}
          className="text-asya-light text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-normal md:leading-normal lg:leading-normal tracking-widest"
        >
          Get To Know Asya Kreasi Dahayu, <br /> Lorem Ipsum Dolor Sit Amet
          Consect
        </motion.p>
        <ScrollArrow scrollTo="#visi" />
      </motion.div>

      <div id="visi">
        <div className="asya-container pt-36">
          <div className="flex flex-wrap justify-between pb-36 border-b-2 border-asya-dark">
            <h1 className="basis-5/12 uppercase text-asya-dark text-4xl font-medium tracking-widest">
              Visi Asya Kreasi Dahayu
            </h1>
            <p className="basis-5/12 text-asya-dark tracking-widest leading-relaxed">
              Visi utama kami adalah memberikan pelayanan paling unggul dan
              perhatian yang tinggi kepada para kreator dengan ekosistem kerja
              yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami
              untuk menjadi lembaga industri kreatif yang terdepan dan terbesar
              di Indonesia dalam hal pelayanan dan kinerja untuk klien dan mitra
              kerja agar dapat menjadi pilar perekonomian negara.
            </p>
            <div className="basis-5/12 aspect-square bg-asya-light"></div>
          </div>
        </div>
      </div>

      <div id="misi">
        <div className="asya-container pt-36">
          <div className="flex flex-wrap justify-between pb-36 border-b-2 border-asya-dark">
            <h1 className="basis-5/12 uppercase text-asya-dark text-4xl font-medium tracking-widest">
              Misi Asya Kreasi Dahayu
            </h1>
            <div className="basis-5/12 text-asya-dark tracking-widest leading-relaxed">
              <p className="mb-4">
                Dalam mewujudkan visi kami, kesejahteraan tim serta keseimbangan
                ekosistem kerja adalah yang utama. Kami menciptakan lingkungan
                kerja yang aman dan nyaman serta memberikan kesempatan
                berkembang dengan membina dan meningkatkan semangat yang tinggi
                kepada tim kami agar setiap level dari tim dapat bekerja sama
                untuk mewujudkan pelayanan terbaik dan berkualitas sehingga
                tercipta hubungan kerja sama yang kuat dengan pelanggan dan
                mitra kerja.
              </p>
              <p>
                Selain itu, kami menerapkan manajemen proyek yang terintegrasi
                dengan wilayah operasi di Indonesia agar dapat memberikan
                kepuasan untuk pelanggan, anggota, dan perusahaan serta
                meningkatkan nilai yang tinggi bagi investor atau pemegang
                saham.
              </p>
            </div>
            <div className="basis-5/12 aspect-square bg-asya-light"></div>
          </div>
        </div>
      </div>

      <div id="team">
        <div className="asya-container">
          <div className="py-36 asya-section-title">
            <h1 className="text-asya-dark">Our Team</h1>
            <p className="text-asya-dark">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercita. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exercita.
            </p>
          </div>
          <div className="pb-36 grid grid-cols-4 gap-4">
            {[...Array(16)].map((item, key) => (
              <a
                href="#"
                key={key}
                className="aspect-square bg-cover asya-member-photo bg-[url('/images/our-team.jpg')]
                hover:bg-[linear-gradient(0deg,rgb(211_239_112),rgb(211_239_112)),url('/images/our-team.jpg')]"
              >
                <div className="p-4 h-full flex flex-col justify-between opacity-0 hover:opacity-100">
                  <h6 className="uppercase text-2xl font-bold text-white leading-normal tracking-widest">
                    John Doe
                  </h6>
                  <p className="text-lg text-white leading-normal tracking-widest">
                    Jabatan Staff Lorem Ipsum
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
