import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div
        id="hero"
        className="relative h-screen bg-hero-about bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      >
        <p className="text-asya-light text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-normal md:leading-normal lg:leading-normal tracking-widest">
          Get To Know Asya Kreasi Dahayu, <br /> Lorem Ipsum Dolor Sit Amet
          Consect
        </p>
        <a href="#visi" className="absolute bottom-36">
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

      <div id="visi">
        <div className="container mx-auto px-16 pt-36">
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
        <div className="container mx-auto px-16 pt-36">
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
        <div className="container mx-auto px-16">
          <div className="py-36 grid grid-cols-8 gap-4">
            <h1 className="col-span-3 self-center uppercase text-asya-dark text-5xl font-medium tracking-widest">
              Our Team
            </h1>
            <p className="col-span-5 text-asya-dark font-light tracking-widest leading-relaxed">
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
                className="aspect-square transition ease-out bg-blend-multiply bg-cover bg-[url('/images/our-team.jpg')] hover:bg-asya-light"
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
