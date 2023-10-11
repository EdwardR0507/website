import Link from "next/link";

import { EXPERIENCE_INFO } from "@/lib/data";
import { Badge } from "../atoms";

export const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-4 mb-12 lg:mb-0">
      <h2 className="text-2xl font-bold text-blue-500">My Experience</h2>
      <ul>
        {EXPERIENCE_INFO.map((experience) => {
          const {
            id,
            institution,
            logo: Logo,
            endDate,
            website,
            position,
            startDate,
            responsibilities,
            isCurrent,
          } = experience;
          return (
            <li className="relative group" key={id}>
              <div className="pl-8 h-full ml-3 border-l-2 border-gray-300 dark:border-gray-700 group-last:border-none">
                <span className="absolute flex items-center justify-center w-8 h-8 ml-3 rounded-full bg-blue-100 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500 p-1">
                  <Logo />
                </span>
                <div className="flex flex-col gap-2 mb-2 sm:mb-1 sm:items-center sm:flex-row">
                  <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-white">
                    {position}
                    {isCurrent && (
                      <Badge
                        text="Latest"
                        className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                      />
                    )}
                  </h3>
                  <span className="hidden sm:block">·</span>
                  <h4 className="flex items-center text-base font-semibold text-black-500 dark:text-black-300">
                    <Link
                      href={website}
                      target="_blank"
                      className="hover:underline hover:text-blue-500"
                    >
                      {institution}
                    </Link>
                  </h4>
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-white dark:text-white/70">
                  {startDate} - {endDate}
                </time>
                <ul className="pb-4 text-base font-normal text-black-800 dark:text-black-200">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-2 ml-6 list-disc">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
