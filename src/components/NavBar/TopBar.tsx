import { Logo } from "./ItemLogo";
import { Nav } from "./ItemNav";
import { ToggleTheme } from "./ItemToggleTheme";

export const TopBar = () => {
  return (
    <header className="flex w-full justify-between items-center h-1/5 mx-auto  py-8 ">
      <Logo />
      <Nav />
      <ToggleTheme />
    </header>
  );
};
