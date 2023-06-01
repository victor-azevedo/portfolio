import Image from "next/image";
import logo from "/public/assets/logo-light.png";
import { SideBarContext } from "@/contexts/SideBarContext";
import { useContext } from "react";

export const Logo = () => {
  const { closeSideBar } = useContext(SideBarContext);

  const pageNavigate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView && elementToView.scrollIntoView();
    closeSideBar && closeSideBar();
  };
  return (
    <div
      className="sm:pr-5 inline-flex items-center gap-4 cursor-pointer"
      onClick={(e) => pageNavigate(e, "home")}
    >
      <Image
        className="h-10 w-10 dark:invert dark:opacity-50 rounded-md transition-all duration-500"
        src={logo}
        alt="Victor Azevedo logo"
        priority
      />
      <span className="font-extrabold text-lg">Victor</span>
    </div>
  );
};
