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
            "flex fixed top-0 right-0 bottom-0 left-0 bg-dark-gray z-20 w-full h-full overflow-y-scroll"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <Button
            classes={{
              button: "w-10 h-10 bg-transparent mt-3",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose className="text-4xl hover:text-green-primary" />
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
                <li key={id}>
                  <Link
                    href={link}
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:border-b-2 hover:border-b-green-primary h-8 pb-4"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
      <Button
        classes={{
          button:
            "block xl:hidden bg-transparent hover:text-white w-8 h-8 hover:bg-green-primary",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu className="w-5 h-5 m-auto" />
      </Button>
    </>
  );
}
