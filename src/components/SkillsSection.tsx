import { SkillsList, skillsList } from "../../mock/skillsList";
import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Skill } from "./Skill";

export const SkillsSection = () => {
  return (
    <section className="w-full max-w-screen-xl py-20 flex flex-col justify-center items-center gap-10">
      <div className="">
        <AboveTitle text="Habilidades" />
        <SectionTitle title="Especializado em" />
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {skillsList.map((skill: SkillsList) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
};
