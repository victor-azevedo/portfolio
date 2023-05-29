import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialNetworks = () => {
  return (
    <div className="inline-flex justify-start items-center gap-4 mt-8">
      <a
        href="https://www.linkedin.com/in/victor-azevedo-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl dark:fill-slate-200 fill-blackText  " />
      </a>
      <a
        href="https://github.com/victor-azevedo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl dark:fill-slate-200 fill-blackText  " />
      </a>
    </div>
  );
};
