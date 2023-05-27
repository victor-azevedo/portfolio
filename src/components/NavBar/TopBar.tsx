import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const TopBar = () => {
  return (
    <header className="hidden md:flex w-full h-12 flex-row justify-between items-center ">
      <Logo />
      <Nav />
      <ToggleTheme />
    </header>
  );
};
