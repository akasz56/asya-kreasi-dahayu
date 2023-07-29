import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="px-52 py-32 bg-white">
      <motion.h1
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="text-asya-dark text-5xl font-medium leading-normal tracking-widest"
      >
        Lorem Ipsum Dolor Sit, <br /> Contact Us Through
      </motion.h1>
      <motion.table
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="w-1/2 mt-24 ml-auto text-asya-dark text-2xl"
      >
        <tbody>
          <tr>
            <td className="py-2 align-top">Phone</td>
            <td className="py-2 px-8 align-top"> : </td>
            <td className="py-2 align-top">+6212345678</td>
          </tr>
          <tr>
            <td className="py-2 align-top">Email</td>
            <td className="py-2 px-8 align-top"> : </td>
            <td className="py-2 align-top">Info@asya.com</td>
          </tr>
          <tr>
            <td className="py-2 align-top">Address</td>
            <td className="py-2 px-8 align-top"> : </td>
            <td className="py-2 align-top">
              Jl. Ring Road Bubulak No. A-4, Kelurahan Bubulak, Kec. Bogor
              Barat, Kota Bogor, Provinsi Jawa Barat, 16115
            </td>
          </tr>
        </tbody>
      </motion.table>
    </div>
  );
}
