import { SideBar } from "@/components/NavBar/SideBar";
import { TopBar } from "@/components/NavBar/TopBar";

export default function Home() {
  return (
    <main className=" max-w-screen-xl min-h-screen overflow-x-auto p-5 md:px-20 md:py-10 ">
      <TopBar />
      <SideBar />
    </main>
  );
}
