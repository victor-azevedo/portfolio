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
  {
    title: "Sweet Kalu",
    image:
      "https://repository-images.githubusercontent.com/569517702/5e8b8e07-2706-40bf-8027-853b39eb2fc7",
    linkDeploy: "https://sweetkalu.vercel.app/",
    linkGithub: "https://github.com/d3vNano/sweetKaLu-B",
    skills: ["React.Js", "Node.Js", "Express.Js", "MongoDB"],
  },
  {
    title: "MedicalSys",
    image:
      "https://raw.githubusercontent.com/victor-azevedo/portfolio/main/doc/login_page.png",
    linkDeploy: "https://medicalsys.up.railway.app/",
    linkGithub: "https://github.com/victor-azevedo/medicalsys",
    skills: ["Python", "Django", "Bootstrap"],
  },
];

export type ProjectsList = typeof projectsList;

export type Project = (typeof projectsList)[number];
