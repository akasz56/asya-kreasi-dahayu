import React from "react";

export default function Footer() {
  return (
    <footer className="px-48 py-20 flex justify-between bg-asya-dark">
      <div>
        <h2 className="uppercase text-asya-light text-4xl font-medium tracking-widest">
          Asya Kreasi Dahayu
        </h2>
        <p className="mt-16 text-asya-light text-lg tracking-widest">
          Jl. Ring Road Bubulak No. A-4, Kelurahan Bubulak, <br /> Kec. Bogor
          Barat, Kota Bogor, Provinsi Jawa Barat, 16115 <br /> +628 1234 5678
        </p>
      </div>
      <div>
        <p className="text-asya-light text-xl font-medium tracking-widest">
          We’d love to talk to you about our approach <br /> and how we might be
          able to help your brand.
        </p>
        <div className="mt-12 relative">
          <label
            htmlFor="email"
            className="text-asya-light text-xl font-medium tracking-widest"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="block w-full border-b-2 border-asya-light bg-transparent py-1.5 mt-2 text-asya-light text-xl font-medium tracking-widest focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute top-0 right-0 cursor-pointer stroke-asya-light w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
