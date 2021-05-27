import React from "react";
import useIncrementingNumber from "./use-incrementing-number.hook";

const range = function (start, end, step) {
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;

  if (step === 0) {
    throw TypeError("Step cannot be zero.");
  }

  if (typeof end === "undefined" && typeof "step" === "undefined") {
    end = start;
    start = 0;
    typeofStart = typeof start;
    typeofEnd = typeof end;
  }

  if (typeofStart === undefined || typeofEnd === undefined) {
    throw TypeError("Must pass start and end arguments.");
  } else if (typeofStart !== typeofEnd) {
    throw TypeError("Start and end arguments must be of the same type");
  }

  typeof step === "undefined" && (step = 1);

  if (end < start) {
    step = -step;
  }

  if (typeofStart === "number") {
    while (step > 0 ? end >= start : start >= end) {
      range.push(start);
      start += step;
    }
  } else if (typeofStart === "string") {
    if (start.length !== 1 || end.length !== 1) {
      throw TypeError("Only strings with one character are supported.");
    }

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : start >= end) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } else {
    throw TypeError("Only string and number types are supported.");
  }

  return range;
};

const generateID = function (len = 4) {
  const sample = (arr, len = 1) => {
    let output = [];
    for (let i = 0; i < len; i++) {
      output.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return output;
  };
  const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return sample(characters, len).join("");
};

const gradientColors = [
  "rgba(17, 35, 50, 1)",
  "rgba(15, 35, 53, 1)",
  "rgba(13, 36, 55, 1)",
  "rgba(11, 36, 57, 1)",
  "rgba(9, 37, 59, 1)",
  "rgba(7, 37, 62, 1)",
];
const paletteSize = gradientColors.length;
const WINDOW_SIZE = 3;

const hasBrowserSupport = typeof window !== "undefined" ? typeof window.CSS.registerProperty == "function" : false;

const getColorPropName = (id, index) => `--fluid-flow-color-${id}-${index}`;

const useFluidFlow = ({ intervalDelay = 2000 }) => {
  const prefersReducedMotion =
    typeof window === "undefined" ? true : window.matchMedia("(prefers-reduced-motion: no-preference)");

  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  const { current: uniqueID } = React.useRef(generateID());

  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }
    console.log(uniqueID);
    console.log(range(0, WINDOW_SIZE));
    range(0, WINDOW_SIZE).map((index) => {
      const name = getColorPropName(uniqueID, index);
      const initialValue = gradientColors[index];

      CSS.registerProperty({
        name,
        initialValue,
        syntax: "<color>",
        inherits: false,
      });
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;
    const name = getColorPropName(uniqueID, index);
    const value = gradientColors[(effectiveIntervalCount + index) % paletteSize];
    return { ...acc, [name]: value };
  }, {});
};

export default useFluidFlow;
