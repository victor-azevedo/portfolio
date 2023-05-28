import { AboveTitle } from "@/components/AboveTitle";
import { SideBar } from "@/components/NavBar/SideBar";
import { TopBar } from "@/components/NavBar/TopBar";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export const MainSection = () => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <section className="w-full max-w-screen-xl h-screen min-h-screen">
      <div className="w-full h-1/5 mx-auto py-4 md:py-8 ">
        {!isSmallScreen ? <TopBar /> : <SideBar />}
      </div>
      <div className="w-full h-4/5 flex flex-col md:flex-row gap-8">
        <div className="flex-grow basis-1/2 flex flex-col justify-center">
          <AboveTitle text="Meu nome é" />
          <h1 className="font-Jakarta text-5xl text-gray-800 font-bold mt-4 tracking-wide dark:text-gray-100">
            Victor <strong className="text-indigo-500">Azevedo.</strong>
          </h1>
          <p className="mt-12 dark:text-opacity-80">
            Desenvolvedor Web Full Stack com experiência em JavaScript,
            TypeScript, React, Next.js, Node.js, NestJS e bancos de dados SQL e
            NoSQL. Capaz de criar soluções eficientes e funcionais, mantendo-se
            atualizado com as melhores práticas do setor. Habilidades em
            trabalhar em equipe e adaptar-se a ambientes ágeis de
            desenvolvimento.
          </p>
        </div>
        <div className="flex-grow basis-[350px] ">
          <div className="w-full h-full relative">
            <div className="bg-indigo-400 w-[300px] h-[360px] -rotate-[10deg] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="bg-zinc-200 w-[300px] h-[360px] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};
