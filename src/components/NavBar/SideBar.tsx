import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const SideBar = () => {
  return (
    <div className="w-8/12 flex flex-col justify-between items-center gap-8 z-10 absolute left-0 md:hidden">
      <div className="w-full inline-flex justify-around items-center">
        <Logo />
        <ToggleTheme />
      </div>
      <Nav />
    </div>
  );
};
