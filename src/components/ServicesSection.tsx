import { AboveTitle } from "./AboveTitle";
import { SectionTitle } from "./SectionTitle";
import { Service } from "./Service";

export const ServicesSection = () => {
  return (
    <section className="w-full max-w-screen-xl py-20 flex flex-col justify-center items-center gap-10">
      <div className="">
        <AboveTitle text="Serviços" />
        <SectionTitle title="Área de Atuação" />
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <div className="basis-1/3">
          <Service
            name="Front End"
            description="Desenvolvimento front-end, com expertise em criação de interfaces de usuário interativas e responsivas utilizando tecnologias como React e Next.js. Proficiente em HTML, CSS e JavaScript, e capaz de criar experiências de usuário atraentes e funcionais."
          />
        </div>
        <div className="basis-1/3 ">
          <Service
            name="Back End"
            description="Desenvolvimento back-end, com expertise em programação do lado do servidor, desenvolvimento de APIs e gerenciamento de banco de dados. Proficiente na utilização de frameworks como Node.js e NestJs para construir soluções escaláveis e eficientes do lado do servidor."
          />
        </div>
      </div>
    </section>
  );
};
