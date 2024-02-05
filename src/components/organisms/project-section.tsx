"use client";

import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import Reveal from "../atoms/reveal";
import { ProjectCard } from "../molecules/project-card";

interface ProjectSectionProps {
  className?: string;
  projectsDescription: {
    CRAFTER_STATION: string;
    MEMORA_DATE: string;
    KISARAGI: string;
    PETS_WORLD_MOBILE: string;
    BEIFONG: string;
    PETS_WORLD: string;
    DRAGONBALL_PWA: string;
  };
}

export const ProjectSection = ({
  className,
  projectsDescription,
}: ProjectSectionProps) => {
  return (
    <section className={cn("flex flex-col gap-8 mb-16 lg:mb-4", className)}>
      {projects(projectsDescription).map((project) => (
        <Reveal
          key={project.id}
          animationOrder={project.id}
          className={cn({
            "self-end lg:mr-6": project.id % 2 === 0,
          })}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            type={project.type}
            repo={project.repo}
            website={project.website}
            stack={project.stack}
          />
        </Reveal>
      ))}
    </section>
  );
};
