"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollPosition from "@/utils/useScrollPosition";
import Container from "./Container";
import MobileMenu from "./navbar/MobileMenu";
import BrainLogo from "@/public/images/fabricio-cunha-logo.svg";
import { classNames } from "@/utils/appearence";

type NavbarProps = {
  classes?: {
    wrapper?: string;
    container?: string;
    button?: string;
  };
};

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

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

function Navbar({ classes }: NavbarProps) {
  const activeOnScroll = useScrollPosition(150);

  return (
    <header
      className={classNames(
        "fixed text-white z-20 w-full transition ease-in-out duration-300",
        activeOnScroll && "bg-zinc-800/50",
        classes?.wrapper
      )}
    >
      <Container
        element="nav"
        classes={{
          container: classNames(
            "flex items-center justify-between w-full h-24",
            classes?.container
          ),
        }}
      >
        <Link href="/">
          <Image className="w-28 h-28" src={BrainLogo} alt="brain logo" />
        </Link>
        <ul className="hidden xl:flex items-center text-lg font-semibold justify-between gap-10">
          {navigation.map(({ id, title, link }: NavigationProps) => {
            return (
              <li key={id}>
                <Link
                  href={link}
                  className="hover:border-b-2 hover:border-b-green-primary h-8 pb-4"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <MobileMenu navigation={navigation} logo={BrainLogo} />
      </Container>
    </header>
  );
}

export default Navbar;
