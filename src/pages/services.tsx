import { motion } from "framer-motion";
import React from "react";

export default function Services() {
  const services = [
    "Mice & EO",
    "Multimedia",
    "Konsultan Kreatif",
    "Garment & Fashion",
  ];

  const characteristics = [
    "Keunggulan",
    "Jasa yang disediakan",
    "Fitur tambahan",
  ];

  const heroVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <>
      <div
        id="hero"
        className="h-screen bg-asya-light flex flex-col justify-evenly"
      >
        <motion.div
          className="asya-row"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <div className="grid grid-cols-2 items-center">
            <motion.h1
              variants={heroVariants}
              className="uppercase text-asya-dark text-5xl font-medium tracking-widest"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={heroVariants}
              className="text-asya-dark font-light tracking-widest leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercita.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="asya-row"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
        >
          <div className="flex justify-between">
            {services.map((item, key) => (
              <motion.a
                key={key}
                href={"#section" + key}
                variants={heroVariants}
              >
                <div className="mx-auto mb-8 h-14 w-14 bg-asya-dark rounded-full"></div>
                <h4 className="uppercase text-center text-asya-dark text-xl font-bold leading-normal tracking-widest">
                  {item}
                </h4>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {services.map((item, key) => (
        <div key={key} id={"section" + key} className="my-32">
          <div className="asya-row">
            <div className="mb-24 asya-section-title">
              <h1 className="text-asya-dark">{item}</h1>
              <p className="text-asya-dark">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exercita.
              </p>
            </div>
            <div className="w-full aspect-video bg-asya-light"></div>
            <ul className="mt-20 grid grid-cols-3 gap-24">
              {characteristics.map((item, key) => (
                <li key={key} className="flex flex-col justify-between">
                  <h4 className="mb-10 uppercase text-asya-dark text-2xl font-bold leading-normal tracking-widest">
                    {item}
                  </h4>
                  <p className="text-asya-dark leading-normal tracking-widest">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
