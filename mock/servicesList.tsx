import { FiLayout, FiServer } from "react-icons/fi";

export const servicesList = [
  {
    name: "Front End",
    description:
      "Desenvolvimento front-end, com expertise  em desenvolvimento de interfaces de usuário interativas e responsivas utilizando tecnologias modernas como <em>React</em> e <em>Next.js</em>. Possuo proficiência em <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em> e <em>Typescript</em>, permitindo a criação de experiências de usuário atrativas e funcionais.",
    icon: <FiLayout className="text-3xl fill-indigo-500 stroke-blackText" />,
  },
  {
    name: "Back End",
    description:
      "Desenvolvimento back-end, com expertise em criação de <em>API RESTful</em> utilizando tecnologias como <em>Node</em> e <em>Nest.js</em>, com foco no desenvolvimento back-end. Tenho conhecimento em integração com Bancos de Dados <em>SQL</em> e <em>NoSQL</em>, incluindo <em>PostgreSQL</em>, <em>MongoDB</em> e <em>Elasticsearch</em>, garantindo soluções robustas e escaláveis.",
    icon: <FiServer className="text-3xl fill-indigo-500 stroke-blackText" />,
  },
];

export type ServicesList = typeof servicesList;

export type Service = (typeof servicesList)[number];
