export const projectsList = [
  {
    title: "Idioma 360",
    image:
      "https://raw.githubusercontent.com/victor-azevedo/front-idioma360/main/doc/cover.png",
    linkDeploy: "https://idioma360.vercel.app",
    linkGithub: "https://github.com/victor-azevedo/front-idioma360",

    skills: ["Next.Js", "Node.Js", "PostgreSQL", "Jest"],
  },
  {
    title: "My Wallet",
    image:
      "https://raw.githubusercontent.com/victor-azevedo/front-mywallet/main/doc/cover-mockup.png",
    linkDeploy: "https://victor-dev-mywallet.vercel.app",
    linkGithub: "https://github.com/victor-azevedo/front-mywallet",
    skills: ["React.Js", "Node.Js", "MongoDB"],
  },
];

export type ProjectsList = typeof projectsList;

export type Project = (typeof projectsList)[number];
