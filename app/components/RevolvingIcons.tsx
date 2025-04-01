import React from "react";
import Image from "next/image";
import { mySvgData } from "../../data/svg-data";

/**
 * Renders a single revolving icon section.
 */
const RevolvingIconSection = ({ data }: { data: typeof mySvgData }) => {
  return (
    <div className="flex items-center w-full lg:w-screen h-20 justify-between gap-20 px-10 overflow-hidden">
      {data.map((svgLink) => (
        <a
          key={svgLink.id}
          href={svgLink.link}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`Visit ${svgLink.link}`}
          className="w-10 flex items-center"
        >
          <Image
            src={svgLink.path}
            alt={svgLink.link || "icon"}
            width={40}
            height={40}
            className="flex-shrink-0 object-contain w-10 h-10"
          />
        </a>
      ))}
    </div>
  );
};

/**
 * RevolvingIcons Component
 * Displays a horizontally scrolling list of icons.
 */
function RevolvingIcons() {
  return (
    <div className="flex overflow-hidden py-4">
      {/* First Revolving Section */}
      <div className="animate-loop-scroll">
        <RevolvingIconSection data={mySvgData} />
      </div>

      {/* Duplicate Section for Infinite Scroll Effect */}
      <div className="animate-loop-scroll" aria-hidden="true">
        <RevolvingIconSection data={mySvgData} />
      </div>
    </div>
  );
}

export default RevolvingIcons;
