"use client";
import React from "react";
import Container from "./Container";

import Typical from "react-typical";

function Hero() {
  return (
    <div
      id="home-section"
      className="relative flex items-center justify-center h-screen"
    >
      <Container
        classes={{
          container:
            "absolute flex flex-col text-center z-10 text-white text-5xl",
        }}
        element="section"
      >
        <h1>
          Hi,
          <Typical wrapper="b" steps={[2000, " I'm Fabricio Cunha"]} />
        </h1>
        <p>
          <Typical wrapper="b" steps={[3000, "A Frontend Developer 👨🏻‍💻"]} />
        </p>
      </Container>
    </div>
  );
}

export default Hero;
