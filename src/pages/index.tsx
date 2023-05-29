import { Footer } from "@/components/Footer";
import { MainSection } from "@/components/MainSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
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
  const [openSideBar, setOpenSideBar] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  return (
    <main className="w-screen min-h-screen px-8">
      <MainSection />
      <ServicesSection servicesList={servicesList} />
      <SkillsSection skillsList={skillsList} />
      <Footer />
    </main>
  );
}
