"use client";

import dynamic from "next/dynamic";

const Astro = dynamic(() => import("./tech/Astro"));
const Bootstrap = dynamic(() => import("./tech/Bootstrap"));
const DarkMode = dynamic(() => import("./DarkMode"));
const Dart = dynamic(() => import("./tech/Dart"));
const Devmente = dynamic(() => import("./Devmente"));
const ExpressJS = dynamic(() => import("./tech/ExpressJS"));
const Flutter = dynamic(() => import("./tech/Flutter"));
const MaterialUI = dynamic(() => import("./tech/MaterialUI"));
const GetX = dynamic(() => import("./tech/GetX"));
const Github = dynamic(() => import("./tech/Github"));
const GraphQL = dynamic(() => import("./tech/GraphQL"));
const JavaScript = dynamic(() => import("./tech/JavaScript"));
const Jest = dynamic(() => import("./tech/Jest"));
const LightMode = dynamic(() => import("./LightMode"));
const LinkedIn = dynamic(() => import("./Linkedin"));
const MongoDB = dynamic(() => import("./tech/MongoDB"));
const NextJS = dynamic(() => import("./tech/NextJS"));
const NodeJS = dynamic(() => import("./tech/NodeJS"));
const PostgreSQL = dynamic(() => import("./tech/PostgreSQL"));
const Python = dynamic(() => import("./tech/Python"));
const ReactJS = dynamic(() => import("./tech/ReactJS"));
const ReactTestingLibrary = dynamic(() => import("./tech/ReactTestingLibrary"));
const Redux = dynamic(() => import("./tech/Redux"));
const StyledComponents = dynamic(() => import("./tech/StyledComponents"));
const TailwindCSS = dynamic(() => import("./tech/TailwindCSS"));
const Twitter = dynamic(() => import("./Twitter"));
const TypeScript = dynamic(() => import("./tech/TypeScript"));
const University = dynamic(() => import("./University"));

interface IconProps {
  name: ETech | Scheme | Institution | ESocialMedia | Other;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, width = 24, height = 24, ...props }: IconProps) => {
  return renderLogo(name, width, height, props);
};

const renderLogo = (
  name: IconProps["name"],
  width: number,
  height: number,
  props: any
) => {
  switch (name) {
    case ETech.JavaScript:
      return <JavaScript width={width} height={height} {...props} />;
    case ETech.TypeScript:
      return <TypeScript width={width} height={height} {...props} />;
    case ETech.Dart:
      return <Dart width={width} height={height} {...props} />;
    case ETech.Python:
      return <Python width={width} height={height} {...props} />;
    case ETech.Flutter:
      return <Flutter width={width} height={height} {...props} />;
    case ETech.MaterialUI:
      return <MaterialUI width={width} height={height} {...props} />;
    case ETech.GetX:
      return <GetX width={width} height={height} {...props} />;
    case ETech.Astro:
      return <Astro width={width} height={height} {...props} />;
    case ETech.Bootstrap:
      return <Bootstrap width={width} height={height} {...props} />;
    case ETech.GraphQL:
      return <GraphQL width={width} height={height} {...props} />;
    case ETech.Express:
      return <ExpressJS width={width} height={height} {...props} />;
    case ETech.Jest:
      return <Jest width={width} height={height} {...props} />;
    case ETech.MongoDB:
      return <MongoDB width={width} height={height} {...props} />;
    case ETech.NextJS:
      return <NextJS width={width} height={height} {...props} />;
    case ETech.NodeJS:
      return <NodeJS width={width} height={height} {...props} />;
    case ETech.PostgreSQL:
      return <PostgreSQL width={width} height={height} {...props} />;
    case ETech.ReactJS:
      return <ReactJS width={width} height={height} {...props} />;
    case ETech.TailwindCSS:
      return <TailwindCSS width={width} height={height} {...props} />;
    case ETech.Redux:
      return <Redux width={width} height={height} {...props} />;
    case ETech.ReactTestingLibrary:
      return <ReactTestingLibrary width={width} height={height} {...props} />;
    case ETech.StyledComponents:
      return <StyledComponents width={width} height={height} {...props} />;
    case Institution.Devmente:
      return <Devmente width={width} height={height} {...props} />;
    case Institution.University:
      return <University width={width} height={height} {...props} />;
    case ESocialMedia.Github:
      return <Github {...props} />;
    case ESocialMedia.Twitter:
      return <Twitter {...props} />;
    case ESocialMedia.LinkedIn:
      return <LinkedIn {...props} />;
    case Scheme.DarkMode:
      return <DarkMode width={width} height={height} {...props} />;
    case Scheme.LightMode:
      return <LightMode width={width} height={height} {...props} />;
    default:
      return <div />;
  }
};

export default Icon;

export enum ESocialMedia {
  Github = "github",
  Twitter = "twitter",
  LinkedIn = "linkedIn",
}

export enum ETech {
  Astro = "Astro",
  Bootstrap = "Bootstrap",
  Dart = "Dart",
  Express = "Express",
  Flutter = "Flutter",
  MaterialUI = "Material UI",
  GetX = "GetX",
  GraphQL = "GraphQL",
  JavaScript = "Javascript",
  Jest = "Jest",
  MongoDB = "MongoDB",
  NextJS = "Next.js",
  NodeJS = "Node.js",
  PostgreSQL = "Postgres",
  Python = "Python",
  ReactJS = "React",
  ReactTestingLibrary = "React Testing Library",
  Redux = "Redux",
  StyledComponents = "Styled Components",
  TailwindCSS = "Tailwind CSS",
  TypeScript = "Typescript",
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
