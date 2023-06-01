import { SideBarContext } from "@/contexts/SideBarContext";
import { useContext } from "react";

export const Nav = () => {
  const { closeSideBar } = useContext(SideBarContext);

  const pageNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView && elementToView.scrollIntoView();
    closeSideBar && closeSideBar();
  };

  return (
    <nav>
      <ul className="flex flex-col justify-between items-center gap-4 md:flex-row md:gap-8 ">
        <li>
          <a onClick={(e) => pageNavigate(e, "services")} href="#">
            Atuação
          </a>
        </li>
        <li>
          <a onClick={(e) => pageNavigate(e, "projects")} href="#">
            Projetos
          </a>
        </li>
        <li>
          <a onClick={(e) => pageNavigate(e, "skills")} href="#">
            Habilidades
          </a>
        </li>
      </ul>
    </nav>
  );
};
