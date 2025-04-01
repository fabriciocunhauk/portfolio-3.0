"use client";

import React from "react";
import useScrollPosition from "@/utils/useScrollPosition";
import Container from "./Container";
import RevolvingIcons from "./RevolvingIcons";
import { classNames } from "@/utils/appearence";

/**
 * AboutSection Component
 * Displays the "About Me" section with a scroll-based animation.
 */
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
        <h1 className="text-4xl font-bold text-slate-900">About Me</h1>
        <Description skillAnimation={activeOnScroll} />
      </Container>
      <RevolvingIcons />
    </section>
  );
};

/**
 * Description Component
 * Displays a detailed introduction and skills list.
 */
const Description = ({ skillAnimation }: { skillAnimation: boolean }) => {
  return (
    <div
      className={classNames(
        "text-slate-800 space-y-6 transition-opacity duration-500",
        skillAnimation ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Hi there! I’m{" "}
        <strong className="text-green-primary">Fabricio Cunha</strong>, a{" "}
        <span className="text-blue-600 font-semibold">software engineer</span>{" "}
        who thrives on turning ideas into innovative, user-friendly solutions.
        With over <span className="font-medium">4+ years of experience</span> in
        the industry, I’ve honed my skills in crafting high-performance web
        applications that deliver exceptional user experiences.
      </p>

      {/* Frontend Expertise */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Frontend Development
        </h2>
        <p className="mb-2">
          My expertise lies in frontend development, where I specialize in:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <ul className="list-disc pl-6 text-left space-y-1">
            <li className="text-slate-700">
              JavaScript, TypeScript, HTML5, CSS3
            </li>
            <li className="text-slate-700">React.js, Next.js, Remix.js</li>
            <li className="text-slate-700">
              Tailwind CSS, Sass, Styled-components, Material-UI (MUI)
            </li>
          </ul>
          <ul className="list-disc pl-6 text-left space-y-1">
            <li className="text-slate-700">
              State management tools like Redux
            </li>
            <li className="text-slate-700">Data querying with GraphQL</li>
            <li className="text-slate-700">
              Seamless integration with RESTful APIs
            </li>
            <li className="text-slate-700">
              Version control using Git and GitHub
            </li>
          </ul>
        </div>
      </div>

      {/* Problem-Solving Mindset */}
      <p className="text-lg leading-relaxed">
        What sets me apart is my{" "}
        <strong className="text-purple-600">problem-solving mindset</strong> and
        commitment to delivering outstanding results. Whether it’s optimizing
        performance, debugging complex issues, or collaborating with
        cross-functional teams, I approach every project with dedication and
        creativity.
      </p>

      {/* Personal Interests */}
      <p className="text-lg leading-relaxed">
        When I’m not coding, you’ll find me exploring new technologies,
        contributing to open-source projects, or brainstorming ways to make
        software more intuitive and accessible. Let’s connect and build
        something amazing together!
      </p>
    </div>
  );
};

export default AboutSection;
