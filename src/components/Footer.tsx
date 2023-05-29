import { SocialNetworks } from "./SocialNetworks";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-full max-w-screen-xl pt-20 pb-10 flex flex-col justify-center items-center gap-10">
      <SocialNetworks />
      <span>{year} - Desenvolvedor Victor Azevedo</span>
    </section>
  );
};
