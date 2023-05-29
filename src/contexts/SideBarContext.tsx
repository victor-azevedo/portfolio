import { createContext, useCallback, useState } from "react";

interface ISideBarProvider {
  children: React.ReactNode;
}

type SideBarContext = {
  sideBarIsOpen?: boolean;
  openSideBar?: Function;
  closeSideBar?: Function;
};

export const SideBarContext = createContext<SideBarContext>({});

export const SideBarProvider: React.FC<ISideBarProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSideBar = useCallback(() => setIsOpen(true), []);
  const closeSideBar = useCallback(() => setIsOpen(false), []);

  return (
    <SideBarContext.Provider
      value={{ sideBarIsOpen: isOpen, openSideBar, closeSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
