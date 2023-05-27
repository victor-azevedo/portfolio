import { SideBar } from "@/components/NavBar/SideBar";
import { TopBar } from "@/components/NavBar/TopBar";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { useState } from "react";

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  return (
    <main className="w-screen min-h-screen">
      <div className="w-full h-full max-w-screen-xl mx-auto overflow-x-auto p-5 md:px-20 md:py-10 ">
        {!isSmallScreen ? <TopBar /> : <SideBar />}
      </div>
    </main>
  );
}
