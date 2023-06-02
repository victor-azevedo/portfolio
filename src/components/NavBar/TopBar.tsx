import Resume from "../Resume";
import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const TopBar = () => {
  return (
    <header className="w-full h-20 px-20 hidden md:flex justify-between items-center fixed z-10 shadow-md animate-fade-down">
      <Logo />
      <Nav />
      <Resume />
      <ToggleTheme />
    </header>
  );
};
