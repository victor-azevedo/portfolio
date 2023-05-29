import { FiLayout, FiServer } from "react-icons/fi";

export const servicesList = [
  {
    name: "Front End",
    description:
      "Desenvolvimento front-end, com expertise em criação de interfaces de usuário interativas e responsivas utilizando tecnologias como React e Next.js. Proficiente em HTML, CSS e JavaScript, e capaz de criar experiências de usuário atraentes e funcionais.",
    icon: <FiLayout className="text-3xl fill-indigo-500 stroke-blackText" />,
  },
  {
    name: "Back End",
    description:
      "Desenvolvimento front-end, com expertise em criação de interfaces de usuário interativas e responsivas utilizando tecnologias como React e Next.js. Proficiente em HTML, CSS e JavaScript, e capaz de criar experiências de usuário atraentes e funcionais.",
    icon: <FiServer className="text-3xl fill-indigo-500 stroke-blackText" />,
  },
] as const;

export type ServicesList = typeof servicesList;

export type Service = (typeof servicesList)[number];
