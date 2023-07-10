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

  return (
    <>
      <div id="hero" className="h-screen px-52 bg-asya-light">
        <div className="h-1/2 flex justify-between">
          <h1 className="self-center flex-1 uppercase text-asya-dark text-5xl font-medium tracking-widest">
            Our Services
          </h1>
          <p className="self-center flex-1 pl-24 text-asya-dark text-xl font-light tracking-widest leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exercita.
          </p>
        </div>
        <div className="h-1/2 flex justify-between">
          {services.map((item, key) => (
            <div key={key} className="mx-4 mt-20">
              <div className="mx-auto mb-8 h-14 w-14 bg-asya-dark rounded-full"></div>
              <h4 className="uppercase text-center text-asya-dark text-xl font-bold leading-normal tracking-widest">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {services.map((item, key) => (
        <div
          key={key}
          id={"section" + key}
          className="px-48 pt-24 pb-8 bg-white"
        >
          <div className="mb-24 flex">
            <h1 className="self-center w-2/5 uppercase text-asya-dark text-5xl font-medium tracking-widest">
              {item}
            </h1>
            <p className="flex-1 text-asya-dark text-xl font-light tracking-widest leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercita.
            </p>
          </div>
          <div className="w-full aspect-video bg-asya-light"></div>
          <ul className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-24">
            {characteristics.map((item, key) => (
              <li key={key}>
                <h4 className="uppercase text-asya-dark text-2xl font-bold leading-normal tracking-widest">
                  {item}
                </h4>
                <p className="mt-10 text-asya-dark leading-normal tracking-widest">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="p-12 bg-white"></div>
    </>
  );
}
