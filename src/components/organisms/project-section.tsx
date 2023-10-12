"use client";

import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import Reveal from "../atoms/reveal";
import { ProjectCard } from "../molecules/project-card";

interface ProjectSectionProps {
  className?: string;
}

const animationVariants = {
  visible: { opacity: 1, translateX: 0, translateY: 0 },
  hidden: { opacity: 0, translateX: -50, translateY: 50 },
};

const animationVariantsAlternate = {
  ...animationVariants,
  hidden: { ...animationVariants.hidden, translateX: 50 },
};

export const ProjectSection = ({ className }: ProjectSectionProps) => {
  return (
    <section className={cn("flex flex-col gap-8 mb-16 lg:mb-4", className)}>
      {projects.map((project) => (
        <Reveal
          key={project.id}
          animationVariants={
            project.id % 2 === 0
              ? animationVariantsAlternate
              : animationVariants
          }
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
