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
      className="flex flex-col items-center gap-10 py-20 text-zinc-800"
      id="projects-section"
    >
      <h1 className="text-white text-4xl">Projects</h1>
      <Container classes={{ container: "grid grid-cols-3 w-full gap-6" }}>
        {cardUrls.map((card) => {
          return (
            <Card key={card.id} classes={{ card: "w-full space-y-6 text-xl" }}>
              <div className="">
                <Image
                  className="flex-shrink-0 object-cover h-48"
                  width={400}
                  height={200}
                  src={card.imgURL}
                  alt="image"
                />
              </div>
              <h2>{card.name}</h2>
              <div className="flex gap-6">
                {card.link ? (
                  <a
                    href={card.link}
                    className="flex items-center gap-2 bg-zinc-300 p-2 hover:bg-zinc-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website <TbWorldWww />
                  </a>
                ) : null}
                <a
                  href={card.github}
                  className="flex items-center gap-2 bg-zinc-300 p-2 hover:bg-zinc-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default ProjectSections;
