import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/lib/data";
import { getBadgeVariantByType } from "@/utils";
import { Badge, Button } from "../atoms";

import Github from "../atoms/icons/tech/Github";
import PlayIcon from "../atoms/icons/PlayIcon";

type ProjectWithoutId = Omit<IProject, "id">;

interface CardProps extends ProjectWithoutId {
  type: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  type,
  repo,
  website,
  stack,
}: CardProps) => {
  return (
    <section className="group bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            {title}
          </h3>
          <Badge text={type} variant={getBadgeVariantByType(type)} />
        </div>
        <p className="leading-relaxed text-gray-700 dark:text-white/70 text-justify">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {stack.map(({ tech, icon: Icon }) => {
            return (
              <li
                key={`${title}-${tech}`}
                className="bg-black/[0.7] p-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                <Icon />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center gap-4 sm:hidden">
          <ProjectButtons repo={repo} website={website} />
        </div>
      </div>

      <div className="group">
        <Image
          src={image}
          alt={title}
          quality={95}
          width={390}
          height={390}
          priority
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                     transition 
                     group-hover:scale-[1.04]
                     group-hover:-translate-x-3
                     group-hover:translate-y-3
                     group-hover:-rotate-2"
        />
        <div
          className="absolute hidden sm:block top-6 -right-36 w-[28.25rem] rounded-t-lg shadow-2xl h-full
                     group-hover:scale-[1.04]
                     group-hover:-translate-x-3
                     group-hover:translate-y-3
                     group-hover:-rotate-2
                     opacity-0 bg-opacity-80 backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          <div className="flex gap-4 mt-28 ml-20">
            <ProjectButtons repo={repo} website={website} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectButtonsProps {
  repo?: string;
  website?: string;
}

const ProjectButtons = ({ repo, website }: ProjectButtonsProps) => (
  <>
    {repo && (
      <Button variant="dark" className="flex items-center gap-2 p-3" asChild>
        <Link href={repo} target="_blank">
          <Github />
          <span>Repo</span>
        </Link>
      </Button>
    )}
    {website && (
      <Button variant="dark" className="flex items-center gap-2 p-3" asChild>
        <Link href={website} target="_blank">
          <PlayIcon />
          <span>Demo</span>
        </Link>
      </Button>
    )}
  </>
);
