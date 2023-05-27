import Image from "next/image";
import logo from "/public/assets/logo-light.png";

export const Logo = () => {
  return (
    <div className="sm:pr-5">
      <Image
        className="h-10 w-10 dark:invert dark:opacity-50 rounded-md transition-all duration-500"
        src={logo}
        alt="Victor Azevedo logo"
        priority
      />
    </div>
  );
};
