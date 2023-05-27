import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const RightContent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full flex items-center pl-5">
      {theme === "light" ? (
        <FiMoon className="text-2xl " onClick={() => setTheme("dark")} />
      ) : (
        <FiSun className="text-2xl " onClick={() => setTheme("light")} />
      )}
    </div>
  );
};
