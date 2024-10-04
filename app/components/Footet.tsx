import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import BrainLogo from "@/public/images/fabricio-cunha-logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { PiStackOverflowLogoFill } from "react-icons/pi";

const navigation = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "/#projects",
  },
];

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 py-20 text-white">
      <Container
        classes={{
          container:
            "flex flex-wrap items-center justify-center sm:justify-between gap-10",
        }}
      >
        <div className="flex flex-col">
          <Link href="/" className="mx-auto sm:m-0 w-28">
            <Image className="w-28" src={BrainLogo} alt="brain logo" />
          </Link>
          <ul className="flex items-center justify-between gap-6">
            {navigation.map(({ id, title, link }: NavigationProps) => {
              return (
                <a key={id} href={link} className="hover:border-b-2 h-8 pb-4">
                  <li>{title}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="flex justify-center sm:justify-start gap-4 text-3xl">
            <Link
              href="https://www.linkedin.com/in/fabricio-cunha-7b7392162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/fabriciocunhauk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </Link>
            <Link
              href="https://stackoverflow.com/users/13144771/fabricio-cunha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiStackOverflowLogoFill />
            </Link>
          </div>
          <ul className="mt-4">
            <li>© 2024 Fabricio Cunha. All rights reserved.</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
