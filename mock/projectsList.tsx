export const projectsList = [
  {
    title: "Idioma 360",
    image:
      "https://raw.githubusercontent.com/victor-azevedo/front-idioma360/main/doc/cover.png",
    link: "https://idioma360.vercel.app",
    skills: ["Next.Js", "Node.Js", "PostgreSQL", "Jest"],
  },
  {
    title: "My Wallet",
    image:
      "https://raw.githubusercontent.com/victor-azevedo/front-mywallet/main/doc/cover-mockup.png",
    link: "https://victor-dev-mywallet.vercel.app",
    skills: ["React.Js", "Node.Js", "MongoDB"],
  },
];

export type ProjectsList = typeof projectsList;

export type Project = (typeof projectsList)[number];
