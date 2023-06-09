import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Project } from "./Project";
import { ProjectsList } from "../../mock/projectsList";
import useHasMounted from "@/hooks/useHasMounted";

interface IProjectsSection {
  projectsList: ProjectsList;
}

export const ProjectsSection: React.FC<IProjectsSection> = ({
  projectsList,
}) => {
  const hasMounted = useHasMounted();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div>
        <AboveTitle text="Meus Projetos" />
        <SectionTitle title="Portfólio" />
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {hasMounted &&
          projectsList.map((project) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                image={project.image}
                linkDeploy={project.linkDeploy}
                linkGithub={project.linkGithub}
                skills={project.skills}
              />
            );
          })}
      </div>
    </div>
  );
};
