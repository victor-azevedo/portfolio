import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full flex items-center cursor-pointer">
      {theme === "light" ? (
        <FiMoon
          className="text-2xl stroke-blackText fill-none "
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FiSun
          className="text-2xl dark:stroke-slate-200 fill-none animate-spin animate-duration-[10000ms]"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};
