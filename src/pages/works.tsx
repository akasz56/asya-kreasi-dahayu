import React from "react";

export default function Works() {
  const works = [
    "PROJECT A, 2019",
    "PROJECT ABCDEF, 2022",
    "PROJECT A, 2019",
    "PROJECT ABCDEF, 2022",
    "PROJECT A, 2019",
    "PROJECT ABCDEF, 2022",
  ];

  return (
    <>
      <div id="title" className="py-36 bg-white">
        <h1 className="text-asya-dark text-5xl text-center font-medium leading-normal tracking-widest">
          Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
        </h1>
      </div>

      <div
        id="display"
        className="px-52 bg-white grid grid-cols-2 gap-x-12 gap-y-28"
      >
        {works.map((item, key) => (
          <div key={key} className="">
            <div className="w-full aspect-square bg-asya-light"></div>
            <div className="my-12 flex">
              <h2 className="flex-1 uppercase text-asya-dark text-4xl font-medium tracking-widest">
                {item}
              </h2>
              <a
                href="#"
                className="rounded-md bg-asya-light px-8 py-2 uppercase text-sm font-medium leading-normal tracking-widest text-asya-dark shadow-sm hover:opacity-50"
              >
                Read More
              </a>
            </div>
            <p className="w-2/3 text-asya-dark tracking-widest leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed{" "}
            </p>
          </div>
        ))}
      </div>

      <div id="clients" className="p-52 pb-12 bg-white">
        <h1 className="uppercase text-asya-dark text-5xl font-medium leading-normal tracking-widest">
          Clients
        </h1>
        <ul className="mt-48 ml-48">
          {[...Array(12)].map((item, key) => (
            <li key={key} className="flex gap-16 mb-12">
              <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                Nama Klien Lorem Ipsum Dolor
              </span>
              <hr className="flex-1 self-center border-asya-dark" />
              <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                Jenis Bidang, 2019
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
