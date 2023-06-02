import { SideBarContext } from "@/contexts/SideBarContext";
import { useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";
import Resume from "../Resume";

export const SideBar = ({}) => {
  const { sideBarIsOpen, openSideBar, closeSideBar } =
    useContext(SideBarContext);

  return (
    <div
      className={`w-3/4 h-screen fixed z-10 left-0 top-0 flex justify-start transition-transform ease-in duration-500  ${
        sideBarIsOpen || "-translate-x-full"
      }`}
    >
      <div
        className={`flex-grow h-screen bg-gray-200 dark:bg-gray-700 shadow-indigo-400 py-14 flex flex-col justify-start items-center gap-20 ${
          sideBarIsOpen ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-full inline-flex justify-around items-center">
          <Logo />
          <ToggleTheme />
        </div>
        <Nav />
        <Resume />
      </div>
      <div className="relative">
        <div
          className={`absolute transition-opacity duration-500 bg-gray-200 dark:bg-gray-700  rounded-full p-2 mt-10 ml-4 shadow-sm shadow-indigo-400 ${
            sideBarIsOpen ? "opacity-0 z-0" : "opacity-80 z-20"
          }`}
          onClick={() => openSideBar && openSideBar()}
        >
          <FiMenu className="text-2xl dark:stroke-slate-100" />
        </div>
        <div
          className={`absolute transition-opacity duration-500 bg-gray-200 dark:bg-gray-700  rounded-full p-2 mt-10 ml-4 shadow-sm shadow-indigo-400 ${
            sideBarIsOpen ? "opacity-80 z-20" : "opacity-0 z-0"
          } `}
          onClick={() => closeSideBar && closeSideBar()}
        >
          <FiX className="text-2xl dark:stroke-slate-100" />
        </div>
      </div>
    </div>
  );
};
