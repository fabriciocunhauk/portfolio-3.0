"use client";
import React from "react";
import useScrollPosition from "@/utils/useScrollPosition";
import Container from "./Container";
import RevolvingIcons from "./RevolvingIcons";
import { classNames } from "@/utils/appearence";

const AboutSection = () => {
  const activeOnScroll = useScrollPosition(150);

  return (
    <section id="about" className="text-center bg-white w-screen">
      <Container
        classes={{
          container: classNames(
            "space-y-6 py-20 transition-all ease-in duration-300",
            activeOnScroll
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          ),
        }}
      >
        <h1 className="text-4xl">About Me</h1>
        <Description skillAnimation={activeOnScroll} />
      </Container>
      <RevolvingIcons />
    </section>
  );
};

const Description = ({ skillAnimation }: { skillAnimation: boolean }) => {
  return (
    <div className={classNames("text-slate-800")}>
      <p>
        Hi there! I&apos;m Fabricio Cunha, a driven and passionate software
        engineer with a strong track record of delivering outstanding results. I
        have over 3 years of experience in software development, with expertise
        such as frontend development with JavaScript, Typescript, HTML5, CSS3,
        React.js, Next JS, REMIX JS, Tailwind, Sass, Styled-components, MUI,
        PHP, Laravel, Redux, GraphQL, APIs, Git And GitHub.
      </p>
    </div>
  );
};

export default AboutSection;
