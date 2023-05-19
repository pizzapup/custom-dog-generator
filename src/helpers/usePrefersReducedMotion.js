import {useEffect, useState} from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";
const getInitialState = () => {
  // value overwritten on the client before any animations occur
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      mediaQueryList.addListener(listener);
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);
  return prefersReducedMotion;
}
