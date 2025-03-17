import React from "react";
import Image from "next/image";
import { mySvgData } from "../../data/svg-data";

function RevolvingIcons() {
  return (
    <div className="flex overflow-hidden py-4">
      <div className="animate-loop-scroll">
        <div className="flex items-center w-full lg:w-screen h-20 justify-between gap-20 px-10 overflow-hidden">
          {mySvgData.map((svgLink) => (
            <a
              key={svgLink.id}
              href={svgLink.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-10 flex items-center"
            >
              <Image
                src={svgLink.path}
                alt="logo"
                className="fixed flex-shrink-0 object-cover w-10"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="animate-loop-scroll" area-hidden="true">
        <div className="flex items-center w-full lg:w-screen h-20 justify-between gap-20 px-20 py-4 overflow-hidden">
          {mySvgData.map((svgLink) => (
            <a
              key={svgLink.id}
              href={svgLink.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-10 flex items-center"
            >
              <Image
                src={svgLink.path}
                alt="logo"
                className="fixed flex-shrink-0 object-cover w-10"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevolvingIcons;
