import { FaNodeJs } from "react-icons/fa";
import {
  SiCypress,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
        <Skill name="Javascript">
          <SiJavascript className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="Typescript">
          <SiTypescript className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="React">
          <SiReact className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="NextJs">
          <SiNextdotjs className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="Tailwind">
          <SiTailwindcss className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="NodeJs">
          <FaNodeJs className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="NestJs">
          <SiNestjs className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="Jest">
          <SiJest className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="Cypress">
          <SiCypress className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="PostgreSQL">
          <SiPostgresql className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="Prisma">
          <SiPrisma className="text-3xl fill-indigo-500" />
        </Skill>
        <Skill name="MongoDB">
          <SiMongodb className="text-3xl fill-indigo-500" />
        </Skill>
      </div>
    </section>
  );
};
