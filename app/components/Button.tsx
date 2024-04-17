import { classNames } from "@/utils/appearence";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  link?: string;
  classes?: { link?: string; button?: string };
  disabled?: boolean;
};

function Button({
  children,
  type = "button",
  onClick,
  link,
  classes,
  disabled,
}: ButtonProps) {
  return link ? (
    <Link
      href={link}
      className={classNames(
        "flex items-center justify-center bg-red-primary hover:bg-gray-primary transition ease-in-out duration-300 w-40 h-12",
        classes?.link
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      className={classNames(
        "flex items-center justify-center bg-red-primary hover:bg-gray-primary transition ease-in-out duration-300 w-40 h-12",
        classes?.button,
        disabled ? "opacity-30 cursor-not-allowed pointer-events-none" : ""
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
