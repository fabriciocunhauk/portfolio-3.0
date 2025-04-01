import React from "react";
import Card from "./Card";
import cardUrls from "@/data/card-data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Container from "./Container";
import Button from "./Button";

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
                card: "flex flex-col justify-between w-full text-xl overflow-hidden p-0 rounded-md",
              }}
            >
              <div className="overflow-hidden h-[250px]">
                <Image
                  className="shrink-0 object-cover hover:transform hover:scale-125 transition-transform duration-0 hover:duration-[6000ms] ease-linear h-full"
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
                    <Button
                      link={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website <TbWorldWww />
                    </Button>
                  ) : null}
                  <Button
                    link={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FaGithub />
                  </Button>
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
