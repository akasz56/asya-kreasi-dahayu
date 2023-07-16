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
      <div
        id="hero"
        className="h-screen bg-asya-light flex flex-col justify-evenly"
      >
        <div className="asya-row">
          <div className="grid grid-cols-2 items-center">
            <h1 className="uppercase text-asya-dark text-5xl font-medium tracking-widest">
              Our Services
            </h1>
            <p className="text-asya-dark font-light tracking-widest leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercita.
            </p>
          </div>
        </div>
        <div className="asya-row">
          <div className="grid grid-cols-4 items-center">
            {services.map((item, key) => (
              <div key={key}>
                <div className="mx-auto mb-8 h-14 w-14 bg-asya-dark rounded-full"></div>
                <h4 className="uppercase text-center text-asya-dark text-xl font-bold leading-normal tracking-widest">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
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
