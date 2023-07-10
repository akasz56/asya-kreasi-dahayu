import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="px-52 py-32 bg-white">
      <h1 className="text-asya-dark text-5xl font-medium leading-normal tracking-widest">
        Lorem Ipsum Dolor Sit, <br /> Contact Us Through
      </h1>
      <table className="w-1/2 mt-24 ml-auto text-asya-dark text-2xl">
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
            Jl. Ring Road Bubulak No. A-4, Kelurahan Bubulak, Kec. Bogor Barat,
            Kota Bogor, Provinsi Jawa Barat, 16115
          </td>
        </tr>
      </table>
    </div>
  );
}
