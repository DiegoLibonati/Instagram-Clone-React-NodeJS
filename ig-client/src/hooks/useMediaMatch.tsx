import { useEffect, useState } from "react";
import { UseMediaMatch, WindowMediaQuery } from "../types/types";

export const useMediaMatch = (width: number): UseMediaMatch => {
  const [mediaQuery, setMediaQuery] = useState<WindowMediaQuery>({
    matches: window.innerWidth >= width ? true : false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", setMediaQuery);

    return () => mediaQuery.removeEventListener("change", setMediaQuery);
  }, []);

  return {
    matchMediaQuery: mediaQuery.matches,
  };
};
