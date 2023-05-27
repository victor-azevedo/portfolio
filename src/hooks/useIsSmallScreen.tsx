import { useEffect, useState } from "react";
import { useGetScreenType } from "./useGetScreenType";

export const useIsSmallScreen = () => {
  const screenType = useGetScreenType();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(screenType === "sm" || screenType === "md" ? true : false);
  }, [screenType]);

  return isSmallScreen;
};
