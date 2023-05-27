import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-white overflow-x-auto ">
      <div className="max-w-screen-xl px-10 py-5 md:px-20 md:py-10">
        <Header />
      </div>
    </main>
  );
}
