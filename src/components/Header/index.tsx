import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { RightContent } from "./RightContent";

export const Header = () => {
  return (
    <header className="h-12 flex justify-between items-center">
      <Logo />
      <Nav />
      <RightContent />
    </header>
  );
};
