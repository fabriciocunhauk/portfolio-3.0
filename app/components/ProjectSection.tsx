import React from "react";
import Card from "./Card";
import cardUrls from "@/data/card-data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Container from "./Container";

const ProjectSections = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-10 py-20 text-zinc-800"
    >
      <h1 className="text-white text-4xl">Projects</h1>
      <Container
        classes={{
          container:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6",
        }}
      >
        {cardUrls.map((card) => {
          return (
            <Card
              key={card.id}
              classes={{
                card: "w-full text-xl overflow-hidden p-0 rounded-md",
              }}
            >
              <div className="overflow-hidden">
                <Image
                  className="flex-shrink-0 object-cover h-48 hover:transform hover:scale-125 transition-transform duration-0 hover:duration-[6000ms] ease-linear"
                  width={400}
                  height={200}
                  src={card.imgURL}
                  alt="image"
                />
              </div>

              <div className="p-4 space-y-6">
                <h2>{card.name}</h2>
                <div className="flex gap-6">
                  {card.link ? (
                    <a
                      href={card.link}
                      className="flex items-center gap-2 bg-zinc-300 p-2 px-4 hover:bg-zinc-200 rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website <TbWorldWww />
                    </a>
                  ) : null}
                  <a
                    href={card.github}
                    className="flex items-center gap-2 bg-zinc-300 p-2 px-4 hover:bg-zinc-200 rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default ProjectSections;
