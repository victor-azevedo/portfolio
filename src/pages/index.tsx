import { Footer } from "@/components/Footer";
import { MainSection } from "@/components/MainSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { useState } from "react";

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  return (
    <main className="w-screen min-h-screen overflow-x-hidden px-8 inline-flex flex-col items-center">
      <MainSection />
      <ServicesSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
