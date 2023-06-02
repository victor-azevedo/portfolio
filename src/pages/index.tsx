import { Footer } from "@/components/Footer";
import { MainSection } from "@/components/MainSection";
import { SideBar } from "@/components/NavBar/SideBar";
import { TopBar } from "@/components/NavBar/TopBar";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { servicesList } from "../../mock/servicesList";
import { Skills, skillsList } from "../../mock/skillsList";
import { SectionContainer } from "@/components/SectionContainer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectsList, projectsList } from "../../mock/projectsList";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{
  skillsList: Skills[];
  projectsList: ProjectsList;
}> = () => {
  return { props: { skillsList, projectsList } };
};

export default function Home({
  skillsList,
  projectsList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <Head>
        <title>Victor Azevedo</title>
      </Head>
      <main className="w-screen min-h-screen relative">
        {isSmallScreen ? <SideBar /> : <TopBar />}
        <SectionContainer id="home" minHScreen>
          <MainSection />
        </SectionContainer>
        <SectionContainer id="services" bgAccent>
          <ServicesSection servicesList={servicesList} />
        </SectionContainer>
        <SectionContainer id="projects">
          <ProjectsSection projectsList={projectsList} />
        </SectionContainer>
        <SectionContainer id="skills" bgAccent>
          <SkillsSection skillsList={skillsList} />
        </SectionContainer>
        <Footer />
      </main>
    </>
  );
}
