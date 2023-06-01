import { SocialNetworks } from "./SocialNetworks";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full p-10 xl:py-20 flex flex-col justify-center items-center gap-5 bg-zinc-100 dark:bg-gray-700">
      <SocialNetworks />
      <span>{year} - Desenvolvedor Victor Azevedo</span>
    </footer>
  );
};
