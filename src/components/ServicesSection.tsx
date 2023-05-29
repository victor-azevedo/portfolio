import { FiLayout, FiServer } from "react-icons/fi";
import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Skill } from "./Skill";

export const ServicesSection = () => {
  return (
    <section className="w-full max-w-screen-xl py-20 flex flex-col justify-center items-center gap-10">
      <div className="">
        <AboveTitle text="Serviços" />
        <SectionTitle title="Área de Atuação" />
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <div className="basis-1/3">
          <Skill
            name="Front End"
            description="Desenvolvimento front-end, com expertise em criação de interfaces de usuário interativas e responsivas utilizando tecnologias como React e Next.js. Proficiente em HTML, CSS e JavaScript, e capaz de criar experiências de usuário atraentes e funcionais."
          >
            <FiLayout className="text-3xl fill-indigo-500 stroke-blackText" />
          </Skill>
        </div>
        <div className="basis-1/3 ">
          <Skill
            name="Back End"
            description="Desenvolvimento back-end, com expertise em programação do lado do servidor, desenvolvimento de APIs e gerenciamento de banco de dados. Proficiente na utilização de frameworks como Node.js e NestJs para construir soluções escaláveis e eficientes do lado do servidor."
          >
            <FiServer className="text-3xl fill-indigo-500 stroke-blackText" />
          </Skill>
        </div>
      </div>
    </section>
  );
};
