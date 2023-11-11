import { twMerge } from "tailwind-merge";

export function classNames(...classes: any[]) {
  return twMerge(classes.filter(Boolean).join(" ").trim());
}