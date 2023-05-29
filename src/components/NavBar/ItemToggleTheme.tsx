import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full flex items-center sm:pl-5">
      {theme === "light" ? (
        <FiMoon
          className="text-2xl stroke-blackText fill-none"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FiSun
          className="text-2xl dark:stroke-slate-200  fill-none"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};
