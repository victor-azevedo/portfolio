import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const TopBar = () => {
  return (
    <header className="w-full h-28 px-20 hidden md:flex justify-between items-center fixed z-10 -top-28 drop-shadow-sm transition-all duration-500 translate-y-28 ">
      <Logo />
      <Nav />
      <ToggleTheme />
    </header>
  );
};
