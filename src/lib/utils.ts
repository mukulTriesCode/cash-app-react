import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const emojis = [
  "🥳",
  "🎉",
  "🎊",
  "🎈",
  "🍾",
  "🥂",
  "🍻",
  "🎂",
  "🍰",
  "🎶",
  "🎵",
  "🎤",
  "🎧",
  "🎷",
  "🎸",
  "🎺",
  "🥁",
  "🎹",
  "🕺",
  "💃",
  "👯‍♂️",
  "👯‍♀️",
  "🎇",
  "🎆",
  "🍸",
  "🍹",
  "🍷",
  "🍕",
  "🌟",
];

export const months = [
  { label: "JAN", val: 'January' },
  { label: "FEB", val: 'February' },
  { label: "MAR", val: 'March' },
  { label: "APR", val: 'April' },
  { label: "MAY", val: 'May' },
  { label: "JUN", val: 'June' },
  { label: "JUL", val: 'July' },
  { label: "AUG", val: 'August' },
  { label: "SEP", val: 'September' },
  { label: "OCT", val: 'October' },
  { label: "NOV", val: 'November' },
  { label: "DEC", val: 'December' },
];
