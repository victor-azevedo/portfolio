import { useEffect, useMemo, useState } from "react";

export const screenSizes = {
  sm: 480,
  md: 768,
  lg: 976,
  xl: 1440,
};

interface IScreenSizes {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

type ScreenSizes = keyof typeof screenSizes;

export const useGetScreenType = () => {
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [screeWidth, setScreeWidth] = useState<number>(screenSizes["xl"]);

  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      setScreeWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screenType = useMemo(() => {
    const selectScreenType = Object.entries(screenSizes).find(
      ([type, typeWidth]) => {
        if (screeWidth < typeWidth) {
          return type;
        }
      }
    );

    return selectScreenType ? selectScreenType[0] : "xl";
  }, [screeWidth]) as ScreenSizes;

  return screenType;
};
