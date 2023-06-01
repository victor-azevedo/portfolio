import { Skills, skillsListIcons } from "../../mock/skillsList";

interface ISkill {
  name: Skills;
}

export const Skill: React.FC<ISkill> = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 animate-fade hover:animate-ping hover:animate-once animate-duration-1000 animate-ease-in">
      <div className="w-14 h-14 bg-zinc-300 rounded-2xl flex items-center justify-center ">
        {skillsListIcons[name]}
      </div>
      <h5 className="font-Jakarta text-lg font-medium text-center min-w-[110px]">
        {name}
      </h5>
    </div>
  );
};
