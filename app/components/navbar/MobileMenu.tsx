"use client";
import { ReactNode, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { classNames } from "@/utils/appearence";
import Button from "../Button";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

export default function MobileMenu({
  navigation,
  logo,
}: {
  navigation: NavigationProps[];
  logo: StaticImageData;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={classNames(
          "hidden",
          isOpen &&
            "flex fixed top-0 right-0 bottom-0 left-0 bg-color-primary z-20 w-full h-full overflow-y-scroll"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <Button
            classes={{
              button: "w-10 h-10 bg-transparent",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose className="text-4xl" />
          </Button>
          <Link href="/" className="mx-auto" onClick={() => setIsOpen(!isOpen)}>
            <Image
              className="w-40"
              src={logo.src}
              sizes="100vw"
              width={logo.width}
              height={logo.height}
              alt="Brain Logo"
            />
          </Link>
          <ul className="flex flex-col text-center text-2xl font-semibold gap-10 mx-auto">
            {navigation.map(({ id, title, link }: NavigationProps) => {
              return (
                <Link key={id} href={link} onClick={() => setIsOpen(!isOpen)}>
                  <li>{title}</li>
                </Link>
              );
            })}
          </ul>
        </Container>
      </div>
      <Button
        classes={{
          button:
            "block xl:hidden bg-transparent hover:bg-red-primary hover:text-white w-8 h-8",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu className="w-5 h-5 m-auto" />
      </Button>
    </>
  );
}
