"use client";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

const Arrow = dynamic(() => import("./Arrow"));
const Astro = dynamic(() => import("./tech/Astro"));
const CloseMenu = dynamic(() => import("./CloseMenu"));
const Dart = dynamic(() => import("./tech/Dart"));
const DarkMode = dynamic(() => import("./DarkMode"));
const Devmente = dynamic(() => import("./Devmente"));
const Flutter = dynamic(() => import("./tech/Flutter"));
const Github = dynamic(() => import("./tech/Github"));
const GetX = dynamic(() => import("./tech/GetX"));
const GraphQL = dynamic(() => import("./tech/GraphQL"));
const JavaScript = dynamic(() => import("./tech/JavaScript"));
const LightMode = dynamic(() => import("./LightMode"));
const LinkedIn = dynamic(() => import("./Linkedin"));
const MongoDB = dynamic(() => import("./tech/MongoDB"));
const NextJS = dynamic(() => import("./tech/NextJS"));
const NodeJS = dynamic(() => import("./tech/NodeJS"));
const OpenMenu = dynamic(() => import("./OpenMenu"));
const Python = dynamic(() => import("./tech/Python"));
const PostgreSQL = dynamic(() => import("./tech/PostgreSQL"));
const ReactJS = dynamic(() => import("./tech/ReactJS"));
const Redux = dynamic(() => import("./tech/Redux"));
const Schedule = dynamic(() => import("./Schedule"));
const Storybook = dynamic(() => import("./tech/Storybook"));
const TailwindCSS = dynamic(() => import("./tech/TailwindCSS"));
const Twitter = dynamic(() => import("./Twitter"));
const University = dynamic(() => import("./University"));
const TypeScript = dynamic(() => import("./tech/TypeScript"));
const VSCode = dynamic(() => import("./VSCode"));

const renderLogo = (name: IconProps["name"]) => {
  switch (name) {
    case ETech.JavaScript:
      return <JavaScript width={24} height={24} />;
    case ETech.TypeScript:
      return <TypeScript width={24} height={24} />;
    case ETech.Dart:
      return <Dart width={24} height={24} />;
    case ETech.Python:
      return <Python width={24} height={24} />;
    case ETech.Flutter:
      return <Flutter width={24} height={24} />;
    case ETech.GetX:
      return <GetX width={24} height={24} />;
    case ETech.Astro:
      return <Astro width={24} height={24} />;
    case ETech.GraphQL:
      return <GraphQL width={24} height={24} />;
    case ETech.MongoDB:
      return <MongoDB width={24} height={24} />;
    case ETech.NextJS:
      return <NextJS width={24} height={24} />;
    case ETech.NodeJS:
      return <NodeJS width={24} height={24} />;
    case ETech.PostgreSQL:
      return <PostgreSQL width={24} height={24} />;
    case ETech.ReactJS:
      return <ReactJS width={24} height={24} />;
    case ETech.TailwindCSS:
      return <TailwindCSS width={24} height={24} />;
    case ETech.Redux:
      return <Redux width={24} height={24} />;
    case ETech.Storybook:
      return <Storybook width={24} height={24} />;
    case ETech.VSCode:
      return <VSCode width={24} height={24} />;
    case Institution.Devmente:
      return <Devmente width={24} height={24} />;
    case Institution.University:
      return <University width={24} height={24} />;
    case ESocialMedia.Github:
      return <Github />;
    case ESocialMedia.Twitter:
      return <Twitter />;
    case ESocialMedia.LinkedIn:
      return <LinkedIn />;
    case Scheme.DarkMode:
      return <DarkMode width={24} height={24} />;
    case Scheme.LightMode:
      return <LightMode width={24} height={24} />;
    case Other.OpenMenu:
      return <OpenMenu width={24} height={24} />;
    case Other.CloseMenu:
      return <CloseMenu width={24} height={24} />;
    case Other.Arrow:
      return <Arrow width={24} height={24} />;
    case Other.Schedule:
      return <Schedule />;
    default:
      return <div />;
  }
};

interface IconProps {
  name: ETech | Scheme | Institution | ESocialMedia | Other;
  href?: string;
  className?: string;
  raw?: boolean;
  onClick?: () => void;
}

const Icon = ({ name, href, className, onClick, raw }: IconProps) => {
  if (raw) return renderLogo(name);
  const component = href ? (
    <a
      id={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "hover:bg-black-100 dark:bg-black-800 dark:hover:bg-black-600 rounded-lg w-10 h-10 flex shadow-lg justify-center items-center",
        className
      )}
    >
      {renderLogo(name)}
    </a>
  ) : (
    <div
      id={name}
      className={cn(
        "hover:bg-black-100 dark:bg-black-800 dark:hover:bg-black-600 rounded-lg w-10 h-10 flex shadow-lg justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      {renderLogo(name)}
    </div>
  );

  return (
    <div className="relative">
      {component}
      <div className="absolute top-0 left-0 w-full h-full bg-black-50 dark:bg-black-800 rounded-lg z-0" />
    </div>
  );
};

export default Icon;

export enum ESocialMedia {
  Github = "github",
  Twitter = "twitter",
  LinkedIn = "linkedIn",
}

export enum ETech {
  Astro = "Astro",
  TypeScript = "Typescript",
  JavaScript = "Javascript",
  Dart = "Dart",
  GetX = "GetX",
  Python = "Python",
  Flutter = "Flutter",
  ReactJS = "React",
  Next = "Next.js",
  TailwindCSS = "Tailwind CSS",
  Supabase = "Supabase",
  SWR = "SWR",
  Framer = "Framer Motion",
  Vercel = "Vercel",
  Prisma = "Prisma",
  PostgreSQL = "Postgres",
  MongoDB = "MongoDB",
  NodeJS = "Node.js",
  Express = "Express",
  Redux = "Redux",
  Docker = "Docker",
  Styled = "Styled Components",
  Ant = "Ant Design",
  Jest = "Jest",
  Playwright = "Playwright",
  Vitest = "Vitest",
  Vite = "Vite",
  Java = "Java",
  GraphQL = "GraphQL",
  NextJS = "Next.js",
  Storybook = "Storybook",
  VSCode = "VSCode",
  Electron = "Electron",
  Arduino = "Arduino",
  Golang = "Golang",
}

export enum Institution {
  Devmente = "Devmente",
  University = "University",
}

export enum Scheme {
  DarkMode = "dark",
  LightMode = "light",
}

export enum Other {
  OpenMenu = "openMenu",
  CloseMenu = "closeMenu",
  Arrow = "arrow",
  Schedule = "schedule",
}
