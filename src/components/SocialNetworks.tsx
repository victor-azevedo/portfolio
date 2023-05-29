import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialNetworks = () => {
  return (
    <div className="inline-flex justify-center items-center gap-4 mt-8">
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
  );
};
