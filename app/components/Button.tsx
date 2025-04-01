import React, { ReactNode } from "react";
import Link from "next/link";
import { classNames } from "@/utils/appearence";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  link?: string;
  classes?: { button?: string };
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  type = "button",
  onClick,
  link,
  classes,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-4 transition ease-in-out duration-300 w-full h-12 rounded-md font-medium";

  const combinedClasses = classNames(
    baseClasses,
    "bg-dark-gray hover:bg-green-primary text-white",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    classes?.button
  );

  return link ? (
    <Link
      href={link}
      className={combinedClasses}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={combinedClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
