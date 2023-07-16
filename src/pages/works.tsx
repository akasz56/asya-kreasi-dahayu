import Display from "@/component/Display";
import React from "react";

// TODO: bg > rows > cols > content
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
      <h1
        id="title"
        className="py-36 text-asya-dark text-5xl text-center font-medium leading-normal tracking-widest"
      >
        Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
      </h1>

      <div id="display" className="container mx-auto px-16">
        <Display contents={works} />
      </div>

      <div id="clients" className="container mx-auto my-32 px-16 pt-16">
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
