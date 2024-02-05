import Icon, { ETech } from "@/components/atoms/icons";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  repo?: string;
  website?: string;
  stack: {
    tech: string;
    icon: () => JSX.Element;
  }[];
}

type ProjectParams = {
  CRAFTER_STATION: string;
  MEMORA_DATE: string;
  KISARAGI: string;
  PETS_WORLD_MOBILE: string;
  BEIFONG: string;
  PETS_WORLD: string;
  DRAGONBALL_PWA: string;
};

export const projects = (description: ProjectParams) => [
  {
    id: 1,
    title: "Crafter Station",
    description: description.CRAFTER_STATION,
    image: "/images/Crafter-station.png",
    type: "Open Source",
    repo: "https://github.com/crafter-station/website",
    website: "https://www.crafter-station.com/",
    stack: [
      {
        tech: "TailwindCSS",
        icon: () => <Icon name={ETech.TailwindCSS} />,
      },
      {
        tech: "TypeScript",
        icon: () => <Icon name={ETech.TypeScript} />,
      },
      {
        tech: "Astro",
        icon: () => <Icon name={ETech.Astro} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
    ],
  },
  {
    id: 2,
    title: "Memora Date",
    description: description.MEMORA_DATE,
    image: "/images/Memora-date.png",
    type: "Open Source",
    repo: "https://github.com/Railly/memora-date",
    website: "https://memora-date.vercel.app/",
    stack: [
      {
        tech: "TailwindCSS",
        icon: () => <Icon name={ETech.TailwindCSS} />,
      },
      {
        tech: "TypeScript",
        icon: () => <Icon name={ETech.TypeScript} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
      {
        tech: "NextJS",
        icon: () => <Icon name={ETech.NextJS} />,
      },
    ],
  },
  {
    id: 3,
    title: "Kisaragi",
    description: description.KISARAGI,
    image: "/images/Kisaragi.png",
    type: "College",
    repo: "https://github.com/EdwardR0507/kisaragi-front",
    // website: "",
    stack: [
      {
        tech: "MaterialUI",
        icon: () => <Icon name={ETech.MaterialUI} />,
      },
      {
        tech: "TypeScript",
        icon: () => <Icon name={ETech.TypeScript} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
      {
        tech: "NextJS",
        icon: () => <Icon name={ETech.NextJS} />,
      },
      {
        tech: "Jest",
        icon: () => <Icon name={ETech.Jest} />,
      },
    ],
  },
  {
    id: 4,
    title: "Pets World Mobile",
    description: description.PETS_WORLD_MOBILE,
    image: "/images/Pets-world-mobile.png",
    type: "College",
    repo: "https://github.com/EdwardR0507/Pets-world-flutter",
    // website: "",
    stack: [
      {
        tech: "Dart",
        icon: () => <Icon name={ETech.Dart} />,
      },
      {
        tech: "Flutter",
        icon: () => <Icon name={ETech.Flutter} />,
      },
      {
        tech: "GetX",
        icon: () => <Icon name={ETech.GetX} />,
      },
    ],
  },
  {
    id: 5,
    title: "Beifong",
    description: description.BEIFONG,
    image: "/images/Beifong.png",
    type: "College",
    repo: "https://github.com/EdwardR0507/beifong-front",
    // website: "",
    stack: [
      {
        tech: "TailwindCSS",
        icon: () => <Icon name={ETech.TailwindCSS} />,
      },
      {
        tech: "JavaScript",
        icon: () => <Icon name={ETech.JavaScript} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
      {
        tech: "NextJS",
        icon: () => <Icon name={ETech.NextJS} />,
      },
    ],
  },
  {
    id: 6,
    title: "Pets World",
    description: description.PETS_WORLD,
    image: "/images/Pets-world.png",
    type: "College",
    repo: "https://github.com/EdwardR0507/Pets-world",
    // website: "pets-world-green.vercel.app",
    stack: [
      {
        tech: "MaterialUI",
        icon: () => <Icon name={ETech.MaterialUI} />,
      },
      {
        tech: "JavaScript",
        icon: () => <Icon name={ETech.JavaScript} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
      {
        tech: "Redux",
        icon: () => <Icon name={ETech.Redux} />,
      },
    ],
  },
  {
    id: 7,
    title: "DragonBall PWA",
    description: description.DRAGONBALL_PWA,
    image: "/images/DB-app-pwa.png",
    type: "Personal",
    repo: "https://github.com/EdwardR0507/Dragon-ball-pwa",
    website: "https://db-app-react.netlify.app/home",
    stack: [
      {
        tech: "Bootstrap",
        icon: () => <Icon name={ETech.Bootstrap} />,
      },
      {
        tech: "JavaScript",
        icon: () => <Icon name={ETech.JavaScript} />,
      },
      {
        tech: "ReactJS",
        icon: () => <Icon name={ETech.ReactJS} />,
      },
    ],
  },
];
