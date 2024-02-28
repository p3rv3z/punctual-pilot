import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...arg: ClassValue[]): string => {
  return twMerge(clsx(...arg));
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "UTC",
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const formatDateFromMs = (ms: number) => dateFormatter.format(ms);
