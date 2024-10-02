import React from "react";
import Image from "next/image";
import { mySvgData } from "../../data/svg-data";

function RevolvingIcons() {
  return (
    <div className="flex overflow-hidden py-4">
      <div className="animate-loop-scroll">
        <div className="flex items-center gap-20 px-10">
          {mySvgData.map((svgLink) => (
            <a
              key={svgLink.id}
              href={svgLink.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-10"
            >
              <Image src={svgLink.path} alt="logo" className="w-10" />
            </a>
          ))}
        </div>
      </div>
      <div className="animate-loop-scroll" area-hidden={true}>
        <div className="flex items-center gap-20 px-10">
          {mySvgData.map((svgLink) => (
            <a
              key={svgLink.id}
              href={svgLink.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-10"
            >
              <Image src={svgLink.path} alt="logo" className="w-10" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevolvingIcons;
