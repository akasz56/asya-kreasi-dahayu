import Display from "@/component/Display";
import { motion } from "framer-motion";
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
      <motion.h1
        id="title"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="py-36 text-asya-dark text-5xl text-center font-medium leading-normal tracking-widest"
      >
        Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
      </motion.h1>

      <div id="display" className="asya-row">
        <Display contents={works} />
      </div>

      <div id="clients" className="asya-row my-32 pt-16">
        <h1 className="uppercase text-asya-dark text-5xl font-medium leading-normal tracking-widest">
          Clients
        </h1>
        <ul className="mt-48 ml-48">
          {[...Array(12)].map((item, key) => (
            <li key={key} className="mb-12">
              <a href="#" className="flex gap-16">
                <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                  Nama Klien Lorem Ipsum Dolor
                </span>
                <hr className="flex-1 self-center border-asya-dark" />
                <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                  Jenis Bidang, 2019
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
