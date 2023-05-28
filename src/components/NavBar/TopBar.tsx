import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const TopBar = () => {
  return (
    <header className="hidden md:flex w-full justify-between items-center ">
      <Logo />
      <Nav />
      <ToggleTheme />
    </header>
  );
};
