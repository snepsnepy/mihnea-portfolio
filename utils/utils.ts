import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ObjectValues<T> = T[keyof T];

const breakpoints = useBreakpoints(breakpointsTailwind);

export const smallerOrEqualThanXl = breakpoints.smallerOrEqual("xl");
export const smallerOrEqualThanMd = breakpoints.smallerOrEqual("md");
