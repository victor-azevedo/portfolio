import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-full max-w-screen-xl py-20 flex flex-col justify-center items-center gap-10">
      <div className="inline-flex justify-center items-center gap-4 ">
        <a
          href="https://www.linkedin.com/in/victor-azevedo-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl " />
        </a>
        <a
          href="https://github.com/victor-azevedo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl " />
        </a>
      </div>
      {year} - Desenvolvedor Victor Azevedo
    </section>
  );
};
