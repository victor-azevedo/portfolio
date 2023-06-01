import React, { ReactNode } from "react";

interface ISectionContainer {
  children: ReactNode;
  bgAccent?: boolean;
  minHScreen?: boolean;
  id?: string;
}

export const SectionContainer: React.FC<ISectionContainer> = ({
  children,
  bgAccent,
  minHScreen,
  id,
}) => {
  return (
    <section
      id={id}
      className={`w-full md:pt-28 ${
        bgAccent && "bg-zinc-100 dark:bg-gray-700"
      } ${minHScreen && "min-h-screen"}`}
    >
      <div className="w-full max-w-screen-xl p-20 xl:py-40 m-auto">
        {children}
      </div>
    </section>
  );
};
