"use client";
import { classNames } from "@/utils/appearence";
import Link from "next/link";
import React, { useState } from "react";

type SubNavigationProps = {
  subNavigation: {
    id: number;
    title: string;
    navigation: { id: number; title: string; link: string }[];
  }[];
};

function SubNavigation({ subNavigation }: SubNavigationProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative flex flex-col bg-dark-gray"
      onClick={() => setActive(!active)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {subNavigation.map(({ id, title, navigation }) => {
        return (
          <div key={id} className="cursor-pointer">
            <span>{title}</span>
            <ul
              className={classNames(
                "absolute top-10 lg:top-6 -right-24 lg:right-0 flex flex-col h-0 z-50 bg-dark-gray overflow-hidden",
                active && "h-auto p-2"
              )}
            >
              {navigation.map(({ id, title, link }) => {
                return (
                  <li key={id} className="hover:bg-gray-100 p-2 w-64">
                    <Link href={link}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SubNavigation;
