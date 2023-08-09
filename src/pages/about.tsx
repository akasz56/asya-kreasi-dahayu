import ScrollArrow from "@/component/ScrollArrow";
import React from "react";

export default function About() {
  return (
    <>
      <section
        id="hero"
        className="relative h-screen bg-hero-about bg-cover bg-center flex flex-col items-center justify-center gap-6"
      >
        <p className="text-center text-asya-light text-5xl font-medium tracking-widest leading-normal">
          Get To Know Asya Kreasi Dahayu, <br /> Lorem Ipsum Dolor Sit Amet
          Consect
        </p>
        <ScrollArrow scrollTo="#visi" className="absolute bottom-0 mb-36" />
      </section>

      <section id="visi" className="container mx-auto">
        <div className="flex flex-wrap justify-between py-24 border-b-2 border-asya-dark">
          <div className="basis-5/12">
            <h2 className="uppercase text-asya-dark text-3xl font-medium tracking-widest">
              Visi Asya Kreasi Dahayu
            </h2>
            <div className="mt-16 w-4/5 aspect-square bg-asya-dark"></div>
          </div>
          <div className="basis-5/12">
            <p className="text-asya-dark font-light tracking-widest leading-relaxed">
              Visi utama kami adalah memberikan pelayanan paling unggul dan
              perhatian yang tinggi kepada para kreator dengan ekosistem kerja
              yang inovatif dan produktif. Hal ini dilandasi dari cita-cita kami
              untuk menjadi lembaga industri kreatif yang terdepan dan terbesar
              di Indonesia dalam hal pelayanan dan kinerja untuk klien dan mitra
              kerja agar dapat menjadi pilar perekonomian negara.
            </p>
          </div>
        </div>
      </section>

      <section id="misi" className="container mx-auto">
        <div className="flex flex-wrap justify-between py-24 border-b-2 border-asya-dark">
          <div className="basis-5/12">
            <h2 className="uppercase text-asya-dark text-3xl font-medium tracking-widest">
              Misi Asya Kreasi Dahayu
            </h2>
            <div className="mt-16 w-4/5 aspect-square bg-asya-dark"></div>
          </div>
          <div className="basis-5/12">
            <p className="mb-4 text-asya-dark font-light tracking-widest leading-relaxed">
              Dalam mewujudkan visi kami, kesejahteraan tim serta keseimbangan
              ekosistem kerja adalah yang utama. Kami menciptakan lingkungan
              kerja yang aman dan nyaman serta memberikan kesempatan berkembang
              dengan membina dan meningkatkan semangat yang tinggi kepada tim
              kami agar setiap level dari tim dapat bekerja sama untuk
              mewujudkan pelayanan terbaik dan berkualitas sehingga tercipta
              hubungan kerja sama yang kuat dengan pelanggan dan mitra kerja.
            </p>
            <p className="text-asya-dark font-light tracking-widest leading-relaxed">
              Selain itu, kami menerapkan manajemen proyek yang terintegrasi
              dengan wilayah operasi di Indonesia agar dapat memberikan kepuasan
              untuk pelanggan, anggota, dan perusahaan serta meningkatkan nilai
              yang tinggi bagi investor atau pemegang saham.
            </p>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container mx-auto">
          <div className="flex items-center my-20">
            <h2 className="flex-1 uppercase text-asya-dark text-3xl font-medium tracking-widest">
              Our Team
            </h2>
            <p className="w-[70%] text-asya-dark font-light tracking-widest leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercita. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exercita.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-36">
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
      </section>
    </>
  );
}
