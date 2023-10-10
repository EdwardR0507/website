"use client";

import Icon, { ETech } from "@/components/atoms/icons";

export interface ISkill {
  tech: string;
  icon: () => JSX.Element;
  progress: number;
}

export const programmingLanguages: ISkill[] = [
  {
    tech: "JavaScript",
    icon: () => <Icon name={ETech.JavaScript} />,
    progress: 80,
  },
  {
    tech: "TypeScript",
    icon: () => <Icon name={ETech.TypeScript} />,
    progress: 80,
  },
  {
    tech: "Dart",
    icon: () => <Icon name={ETech.Dart} />,
    progress: 40,
  },
  {
    tech: "Python",
    icon: () => <Icon name={ETech.Python} />,
    progress: 20,
  },
];

export const frontend: ISkill[] = [
  {
    tech: "React",
    icon: () => <Icon name={ETech.ReactJS} />,
    progress: 80,
  },
  {
    tech: "Next.js",
    icon: () => <Icon name={ETech.NextJS} />,
    progress: 80,
  },
  {
    tech: "Flutter",
    icon: () => <Icon name={ETech.Flutter} />,
    progress: 40,
  },
  {
    tech: "Astro",
    icon: () => <Icon name={ETech.Astro} />,
    progress: 20,
  },
];

export const stateManagement: ISkill[] = [
  {
    tech: "Redux",
    icon: () => <Icon name={ETech.Redux} />,
    progress: 40,
  },
  {
    tech: "GetX",
    icon: () => <Icon name={ETech.GetX} />,
    progress: 20,
  },
];

export const uiLibraries: ISkill[] = [
  {
    tech: "TailwindCSS",
    icon: () => <Icon name={ETech.TailwindCSS} />,
    progress: 50,
  },
  {
    tech: "Bootstrap",
    icon: () => <Icon name={ETech.Bootstrap} />,
    progress: 30,
  },
  {
    tech: "Styled Components",
    icon: () => <Icon name={ETech.StyledComponents} />,
    progress: 40,
  },
];

export const backend: ISkill[] = [
  {
    tech: "NodeJS",
    icon: () => <Icon name={ETech.NodeJS} />,
    progress: 20,
  },
  {
    tech: "Express",
    icon: () => <Icon name={ETech.Express} />,
    progress: 20,
  },
  {
    tech: "GraphQL",
    icon: () => <Icon name={ETech.GraphQL} />,
    progress: 20,
  },
];

export const databases: ISkill[] = [
  {
    tech: "MongoDB",
    icon: () => <Icon name={ETech.MongoDB} />,
    progress: 20,
  },
  {
    tech: "PostgreSQL",
    icon: () => <Icon name={ETech.PostgreSQL} />,
    progress: 20,
  },
];

export const testing: ISkill[] = [
  {
    tech: "Jest",
    icon: () => <Icon name={ETech.Jest} />,
    progress: 40,
  },
  {
    tech: "React Testing Library",
    icon: () => <Icon name={ETech.ReactTestingLibrary} />,
    progress: 40,
  },
];
