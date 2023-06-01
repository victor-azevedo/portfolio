import Image from "next/image";
import React from "react";
import { FiLink2 } from "react-icons/fi";
import { Project as ProjectType } from "../../mock/projectsList";

export const Project: React.FC<ProjectType> = ({
  image,
  link,
  title,
  skills,
}) => {
  return (
    <div className="flex-shrink-0 w-[361px] overflow-hidden object-contain rounded-lg border-slate-200 dark:border-slate-700 border-[1px] ">
      <Image src={image} width={361} height={295} alt="project screenshot" />
      <div className="p-6">
        <h6 className="font-Jakarta font-semibold my-2">{title}</h6>
        <div className="flex justify-start items-center gap-2 flex-wrap my-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="py-1 px-2 text-[0.725rem] font-light rounded-lg border-slate-200 dark:border-slate-700 border-[1px] "
            >
              {skill}
            </span>
          ))}
          <a href={link} target="_blank">
            <FiLink2 className="text-2xl stroke-blackText dark:stroke-slate-200 fill-none " />
          </a>
        </div>
      </div>
    </div>
  );
};
