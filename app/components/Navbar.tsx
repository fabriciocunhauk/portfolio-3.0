import React from "react";
import Container from "@/app/components/Container";
import BrainLogo from "@/public/images/fabricio-cunha-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="w-full h-32 py-20 text-white">
        <Container className="flex items-center justify-between">
          <Image className="w-28 h-28" src={BrainLogo} alt="brain logo" />
          <div>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link href="/about-me">ABOUT ME</Link>
              </li>
            </ul>
          </div>
          <div>Socials</div>
        </Container>
      </nav>
    </header>
  );
}
