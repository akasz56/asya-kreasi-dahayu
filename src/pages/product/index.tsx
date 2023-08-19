import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Index() {
  const collections = {
    title: "All Collection",
    collections: [
      "Collection A",
      "Lorem Ipsum",
      "Collection B",
      "Lorem Ipsum",
      "Collection C",
      "Lorem Ipsum",
    ],
  };

  const availability = {
    title: "Availability",
    collections: ["In Stock (10)", "Out of Stock (3)"],
  };

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
        className="relative py-40 bg-hero-landing bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      >
        <motion.p
          variants={item}
          className="text-white text-center text-4xl 2xl:text-5xl font-medium leading-normal 2xl:leading-normal tracking-widest"
        >
          Our Newest Collection “Lorem Ipsum”
        </motion.p>
      </motion.div>

      {/* <section id="catalog" className="flex justify-items-center py-[5vw]">
        <div className="w-1/4 flex flex-col items-center space-y-8">
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {collections.title}
            </li>
            {collections.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {availability.title}
            </li>
            {availability.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex-1 flex flex-wrap justify-around">
          {[...Array(12)].map((item, key) => (
            <motion.li key={key} className="m-8" whileHover={{ scale: 1.05 }}>
              <Link href={"/product/product-one"}>
                <div className="w-96 h-96 bg-asya-dark"></div>
                <div className="block mt-6">
                  <p className="text-asya-dark text-center text-xl font-bold tracking-widest leading-relaxed">
                    Hijab Lorem Ipsum
                  </p>
                  <p className="text-asya-dark text-center text-xl tracking-widest leading-relaxed">
                    Rp200.000
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section> */}

      <section id="catalog" className="flex container mx-auto py-[5vw]">
        <div className="w-1/4 flex flex-col items-center space-y-8">
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {collections.title}
            </li>
            {collections.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="asya-link text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  <span className="after:bg-asya-dark">{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-asya-dark font-bold text-xl tracking-widest leading-relaxed mb-8">
              {availability.title}
            </li>
            {availability.collections.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="asya-link text-asya-dark text-xl tracking-widest leading-relaxed"
                >
                  <span className="after:bg-asya-dark">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex-1 grid grid-cols-3 gap-8">
          {[...Array(12)].map((item, key) => (
            <motion.li key={key} className="m-8" whileHover={{ scale: 1.05 }}>
              <Link href={"/product/product-one"}>
                <div className="aspect-square bg-asya-dark"></div>
                <div className="block mt-6">
                  <p className="text-asya-dark text-center text-xl font-bold tracking-widest leading-relaxed">
                    Hijab Lorem Ipsum
                  </p>
                  <p className="text-asya-dark text-center text-xl tracking-widest leading-relaxed">
                    Rp200.000
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}
