import { AboveTitle } from "@/components/AboveTitle";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { SocialNetworks } from "./SocialNetworks";

export const MainSection = () => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <section className="w-full h-full md:h-4/5 pt-32 md:pt-10 flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="flex-grow md:basis-1/2 flex flex-col justify-center">
        <AboveTitle text="Meu nome é" />
        <h1 className="font-Jakarta text-5xl text-gray-800 font-bold mt-4 tracking-wide dark:text-gray-100">
          Victor <strong className="text-indigo-500">Azevedo.</strong>
        </h1>
        <p className="mt-12 dark:text-opacity-80">
          Desenvolvedor Web Full Stack com experiência em JavaScript,
          TypeScript, React, Next.js, Node.js, NestJS e bancos de dados SQL e
          NoSQL. Capaz de criar soluções eficientes e funcionais, mantendo-se
          atualizado com as melhores práticas do setor. Habilidades em trabalhar
          em equipe e adaptar-se a ambientes ágeis de desenvolvimento.
        </p>
        <SocialNetworks />
      </div>
      <div className="flex-grow flex-shrink-0 basis-[320px] min-h-[350px] my-12 relative ">
        <div className="w-full h-full ">
          <div className="bg-indigo-400 w-[250px] h-[300px] -rotate-[10deg] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="bg-zinc-200 w-[250px] h-[300px] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};
