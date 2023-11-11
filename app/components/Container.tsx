import { classNames } from "@/utils/appearence";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: string;
};

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  const sizeMap: any = {
    xs: "max-w-md",
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-7xl",
  };

  const classes = classNames("mx-auto px-4 sm:px-6", sizeMap[size], className);

  return <div className={classes}>{children}</div>;
}
