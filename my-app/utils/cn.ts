import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
/** combine class names */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}