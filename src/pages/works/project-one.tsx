import Image from "next/image";
import React from "react";

export default function ProjectOne() {
  return (
    <div className="asya-container">
      <div className="flex">
        <div className="w-1/2 space-y-12">
          {[...Array(4)].map((item, key) => (
            <Image
              key={key}
              src={"/images/hero.jpg"}
              alt={"image"}
              width={1080}
              height={1080}
              className="block object-cover"
            />
          ))}
        </div>
        <div className="w-1/2">
          <div className="h-screen sticky top-0 ml-36 py-32 flex flex-col">
            <h3 className="flex-1 uppercase text-asya-dark text-4xl font-bold tracking-widest leading-normal">
              Project A, 2019
              <span className="block text-xl font-normal tracking-widest">
                Service Lorem Ipsum
              </span>
            </h3>
            <p className="text-asya-dark text-base tracking-widest leading-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
