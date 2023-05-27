import Image from "next/image";
import logo from "/public/assets/logo-light.png";

export const Logo = () => {
  return (
    <div className="sm:pr-5 inline-flex items-center gap-4">
      <Image
        className="h-10 w-10 dark:invert dark:opacity-50 rounded-md transition-all duration-500"
        src={logo}
        alt="Victor Azevedo logo"
        priority
      />
      <span className="font-extrabold text-lg">Victor Azevedo</span>
    </div>
  );
};
