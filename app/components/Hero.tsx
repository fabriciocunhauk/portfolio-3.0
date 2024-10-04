"use client";
import React from "react";
import Container from "./Container";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      id="home-section"
      className="relative flex items-center justify-center h-screen"
    >
      <Container
        classes={{
          container: "absolute flex flex-col text-center z-10 text-white",
        }}
        element="section"
      >
        <h1 className="text-5xl">
          Hi,
          <TypeAnimation
            sequence={["I'm Fabricio Cunha"]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={1}
          />
        </h1>
        <h2 className="text-4xl">
          <TypeAnimation
            sequence={[1000, "A Frontend Developer"]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={1}
          />
        </h2>
      </Container>
    </div>
  );
}

export default Hero;
