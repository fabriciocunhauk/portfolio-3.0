import { ReactNode, ElementType } from "react";
import { classNames } from "@/utils/appearence";

type ContainerProps = {
  id?: string | number;
  children: ReactNode;
  element?: ElementType;
  classes?: { container?: string };
  size?: string;
};

type SizeMapProps = {
  [key: string]: string;
};

export default function Container({
  id,
  children,
  element: Tag = "div",
  classes,
  size = "lg",
}: ContainerProps) {
  const sizeMap: SizeMapProps = {
    xs: "max-w-md",
    sm: "max-w-xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
  };

  const className = classNames(
    "mx-auto p-4",
    sizeMap[size],
    classes?.container
  );

  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  );
}
