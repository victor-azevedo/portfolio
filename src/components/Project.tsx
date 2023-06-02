import Image from "next/image";
import React from "react";
import { FiLink2 } from "react-icons/fi";
import { Project as ProjectType } from "../../mock/projectsList";
import { FaGithub } from "react-icons/fa";

export const Project: React.FC<ProjectType> = ({
  image,
  linkDeploy,
  linkGithub,
  title,
  skills,
}) => {
  return (
    <div className="flex-shrink-0 w-[361px] overflow-hidden object-contain rounded-lg border-slate-200 dark:border-slate-700 border-[1px] hover:scale-105 transition-all duration-1000">
      <a href={linkDeploy} target="_blank" className="pr-4">
        <Image
          src={image}
          width={361}
          height={295}
          alt="project screenshot"
          className="hover:opacity-40 transition-all duration-1000"
        />
        <div className="w-full px-4 py-8 inline-flex flex-col items-start justify-center gap-2">
          <h6 className="font-Jakarta font-semibold">{title}</h6>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {skills.map((skill) => (
              <span
                key={skill}
                className="py-1 px-2 text-[0.725rem] font-light rounded-lg border-slate-200 dark:border-slate-700 border-[1px] "
              >
                {skill}
              </span>
            ))}
          </div>
          <object>
            <a
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end"
            >
              <FaGithub className="self-end text-2xl dark:fill-slate-200 fill-blackText hover:scale-125 transition-all duration-500 " />
            </a>
          </object>
        </div>
      </a>
    </div>
  );
};
