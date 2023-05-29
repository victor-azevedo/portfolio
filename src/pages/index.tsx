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
    <main className="w-screen md:h-screen  md:min-h-screen px-10 max-w-screen-xl relative m-auto">
      {isSmallScreen ? <SideBar /> : <TopBar />}
      <MainSection />
      <ServicesSection servicesList={servicesList} />
      <SkillsSection skillsList={skillsList} />
      <Footer />
    </main>
  );
}
