import { FaNodeJs } from "react-icons/fa";
import {
  SiBootstrap,
  SiCypress,
  SiDjango,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skills = keyof typeof skillsListIcons;

export const skillsListIcons = {
  Javascript: <SiJavascript className="text-3xl fill-indigo-500" />,
  Typescript: <SiTypescript className="text-3xl fill-indigo-500" />,
  React: <SiReact className="text-3xl fill-indigo-500" />,
  NextJs: <SiNextdotjs className="text-3xl fill-indigo-500" />,
  NodeJs: <FaNodeJs className="text-3xl fill-indigo-500" />,
  NestJs: <SiNestjs className="text-3xl fill-indigo-500" />,
  Python: <SiPython className="text-3xl fill-indigo-500" />,
  Django: <SiDjango className="text-3xl fill-indigo-500" />,
  Bootstrap: <SiBootstrap className="text-3xl fill-indigo-500" />,
  Tailwind: <SiTailwindcss className="text-3xl fill-indigo-500" />,
  Prisma: <SiPrisma className="text-3xl fill-indigo-500" />,
  PostgreSQL: <SiPostgresql className="text-3xl fill-indigo-500" />,
  MongoDB: <SiMongodb className="text-3xl fill-indigo-500" />,
  Jest: <SiJest className="text-3xl fill-indigo-500" />,
  Cypress: <SiCypress className="text-3xl fill-indigo-500" />,
};

export const skillsList = Object.keys(skillsListIcons) as unknown as Skills[];
