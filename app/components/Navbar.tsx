import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./navbar/MobileMenu";
import { classNames } from "@/utils/appearence";
import BrainLogo from "@/public/images/fabricio-cunha-logo.svg";

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

function Navbar({ classes }: NavbarProps) {
  const navigation = [
    {
      id: 1,
      title: "Home",
      link: "/home",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
    },
  ];

  return (
    <header
      className={classNames(
        "fixed shadow-md text-white z-50 w-full",
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
              <Link key={id} href={link} className="hover:border-b-2 h-10 pb-4">
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>

        <MobileMenu navigation={navigation} logo={BrainLogo} />
      </Container>
    </header>
  );
}

export default Navbar;
