import { Footer } from "@/components/Footer";
import { MainSection } from "@/components/MainSection";
import { SideBar } from "@/components/NavBar/SideBar";
import { TopBar } from "@/components/NavBar/TopBar";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { servicesList } from "../../mock/servicesList";
import { Skills, skillsList } from "../../mock/skillsList";
import { SectionContainer } from "@/components/SectionContainer";

export const getStaticProps: GetStaticProps<{
  skillsList: Skills[];
}> = () => {
  return { props: { skillsList } };
};

export default function Home({
  skillsList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <main className="w-screen min-h-screen relative">
      {isSmallScreen ? <SideBar /> : <TopBar />}
      <SectionContainer id="home" minHScreen>
        <MainSection />
      </SectionContainer>
      <SectionContainer id="services" bgAccent>
        <ServicesSection servicesList={servicesList} />
      </SectionContainer>
      <SectionContainer id="skills">
        <SkillsSection skillsList={skillsList} />
      </SectionContainer>
      <Footer />
    </main>
  );
}
