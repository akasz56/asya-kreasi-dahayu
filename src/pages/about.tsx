import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div id="hero" className="relative isolate h-screen">
        <Image
          src="/images/about.jpg"
          alt="Hero Background"
          width={1920}
          height={988}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto h-full w-4/5 max-w-screen-2xl flex flex-col gap-8 justify-center items-center">
          <p className="text-asya-light text-5xl text-center font-medium leading-normal tracking-widest">
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
      </div>

      <div className="px-48 bg-white">
        <div id="visi" className="py-36 flex justify-between border-b">
          <div>
            <h1 className="uppercase text-asya-dark text-4xl font-medium tracking-widest">
              Visi Asya Kreasi Dahayu
            </h1>
            <div className="h-[35rem] w-[35rem] mt-40 bg-asya-light"></div>
          </div>
          <p className="text-asya-dark text-xl tracking-widest leading-relaxed">
            Visi utama kami adalah memberikan pelayanan paling <br /> unggul dan
            perhatian yang tinggi kepada para kreator <br /> dengan ekosistem
            kerja yang inovatif dan produktif. Hal <br /> ini dilandasi dari
            cita-cita kami untuk menjadi lembaga <br /> industri kreatif yang
            terdepan dan terbesar di Indonesia <br /> dalam hal pelayanan dan
            kinerja untuk klien dan mitra <br /> kerja agar dapat menjadi pilar
            perekonomian negara. 
          </p>
        </div>
        <div id="misi" className="py-36 flex justify-between border-b">
          <div>
            <h1 className="uppercase text-asya-dark text-4xl font-medium tracking-widest">
              Misi Asya Kreasi Dahayu
            </h1>
            <div className="h-[35rem] w-[35rem] mt-40 bg-asya-light"></div>
          </div>
          <p className="text-asya-dark text-xl tracking-widest leading-relaxed">
            Dalam mewujudkan visi kami, kesejahteraan tim serta <br />
            keseimbangan ekosistem kerja adalah yang utama. <br /> Kami
            menciptakan lingkungan kerja yang aman dan <br /> nyaman serta
            memberikan kesempatan berkembang <br /> dengan membina dan
            meningkatkan semangat yang <br /> tinggi kepada tim kami agar setiap
            level dari tim dapat <br /> bekerja sama untuk mewujudkan pelayanan
            terbaik dan <br /> berkualitas sehingga tercipta hubungan kerja sama
            <br /> yang kuat dengan pelanggan dan mitra kerja. <br /> <br />
            Selain itu, kami menerapkan manajemen proyek yang <br />{" "}
            terintegrasi dengan wilayah operasi di Indonesia agar <br /> dapat
            memberikan kepuasan untuk pelanggan, <br /> anggota, dan perusahaan
            serta meningkatkan nilai yang <br /> tinggi bagi investor atau
            pemegang saham.
          </p>
        </div>
      </div>

      <div id="team" className="px-48 py-36 bg-white">
        <div className="flex mb-40">
          <h1 className="self-center w-2/5 uppercase text-asya-dark text-5xl font-medium tracking-widest">
            Our Team
          </h1>
          <p className="flex-1 text-asya-dark text-xl font-light tracking-widest leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exercita. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exercita.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((item, key) => (
            <div key={key} className="h-96 w-full bg-asya-dark"></div>
          ))}
        </div>
      </div>
    </>
  );
}
