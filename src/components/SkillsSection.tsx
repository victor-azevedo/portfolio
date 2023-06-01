import React from "react";
import { Skills } from "../../mock/skillsList";
import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Skill } from "./Skill";

interface ISkillsSection {
  skillsList: Skills[];
}

export const SkillsSection: React.FC<ISkillsSection> = ({ skillsList }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div className="">
        <AboveTitle text="Habilidades" />
        <SectionTitle title="Especializado em" />
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {skillsList.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
};
