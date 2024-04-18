"use client";
import Image from "next/image";
import codeBg from "@/public/images/code-bg.jpg";
import Typical from "react-typical";
import { classNames } from "@/utils/appearence";

export default function Home() {
  return (
    <main>
      <div className="relative text-white flex items-center justify-center">
        <Image
          className={classNames(
            "flex-shrink-0 object-cover w-full h-full brightness-75"
          )}
          sizes="100vw"
          src={codeBg.src}
          width={codeBg.width}
          height={codeBg.height}
          alt=""
        />
        <div className="absolute text-5xl">
          <h1>
            Hi,
            <Typical wrapper="b" steps={[2000, " I'm Fabricio Cunha"]} />
          </h1>
          <p>
            <Typical wrapper="b" steps={[3000, "A Frontend Developer 👨🏻‍💻"]} />
          </p>
        </div>
      </div>
    </main>
  );
}
