import React from "react";

interface DisplaysProps {
  contents: string[];
  className?: string;
  gap?: string;
}

export default function Display({ contents, className, gap }: DisplaysProps) {
  className = className ?? "";
  gap = gap ? "gap-" + gap : "gap-12";

  return (
    <div className={className + " grid grid-cols-2 " + gap}>
      {contents.map((item, key) => (
        <div key={key} className="flex flex-col justify-between gap-8">
          <div className="rounded-3xl aspect-square bg-asya-light"></div>
          <div className="flex gap-8">
            <h3 className="flex-1 uppercase text-asya-dark text-3xl font-medium tracking-widest">
              {item}
            </h3>
            <a
              href="#"
              className="self-center rounded-md bg-asya-light px-8 py-2 uppercase text-sm tracking-widest text-asya-dark shadow-sm hover:opacity-50"
            >
              Read More
            </a>
          </div>
          <p className=" text-asya-dark text-lg tracking-widest">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exercita.
          </p>
        </div>
      ))}
    </div>
  );
}
