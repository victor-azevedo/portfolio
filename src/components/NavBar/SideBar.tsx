import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`p-4 transition-opacity duration-500 absolute ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <FiMenu className="text-2xl" onClick={() => setOpen(true)} />
      </div>
      <div
        className={`p-4 pr-8 transition-opacity duration-500 absolute right-0 ${
          open ? "opacity-100" : "opacity-0"
        } `}
      >
        <FiX className="text-2xl" onClick={() => setOpen(false)} />
      </div>
      {open ? (
        <div
          className={`w-8/12 py-14 flex flex-col justify-between items-center gap-8 z-10 absolute left-0 top-0 md:hidden `}
        >
          <div className="w-full inline-flex justify-around items-center">
            <Logo />
            <ToggleTheme />
          </div>
          <Nav />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
