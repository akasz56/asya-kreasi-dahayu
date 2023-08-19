import Display, { DisplayContentItem } from "@/component/Display";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Index() {
  const works: DisplayContentItem[] = [
    { title: "PROJECT A, 2019", href: "/works/project-one" },
    { title: "PROJECT ABCDEF, 2022", href: "/works/project-one" },
    { title: "PROJECT A, 2019", href: "/works/project-one" },
    { title: "PROJECT ABCDEF, 2022", href: "/works/project-one" },
    { title: "PROJECT A, 2019", href: "/works/project-one" },
    { title: "PROJECT ABCDEF, 2022", href: "/works/project-one" },
  ];

  return (
    <>
      <section>
        <motion.h1
          id="title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="py-36 text-asya-dark text-5xl text-center font-medium leading-normal tracking-widest"
        >
          Works Asya Kreasi Dahayu, Lorem <br /> Ipsum Dolor Sit Amet Consect
        </motion.h1>
        <div className="container mx-auto mb-28 grid grid-cols-2 gap-16">
          {works.map((item, key) => (
            <Link key={key} href={item.href}>
              <div className="aspect-square bg-asya-dark"></div>
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
      </section>

      <section id="clients" className="container mx-auto my-32 pt-16">
        <h1 className="uppercase text-asya-dark text-5xl font-medium leading-normal tracking-widest">
          Clients
        </h1>
        <ul className="mt-48 ml-48">
          {[...Array(12)].map((item, key) => (
            <li key={key} className="mb-12">
              <Link href={"/works/project-one"} className="flex gap-16">
                <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                  Nama Klien Lorem Ipsum Dolor
                </span>
                <hr className="flex-1 self-center border-asya-dark" />
                <span className="text-asya-dark text-xl tracking-widest leading-relaxed">
                  Jenis Bidang, 2019
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
