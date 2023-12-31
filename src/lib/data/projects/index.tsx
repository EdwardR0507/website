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

export const projects = [
  {
    id: 1,
    title: "Crafter Station",
    description:
      "Crafter Station is a Web Development Agency & Open Source Organization that offers services such as Web Development, Web Design, SEO, and more.",
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
    description:
      "Memora Date offers a simple list of reminders, one-time or recurring events, and the ability to import contacts. Email alerts keep you on track.",
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
    description:
      "Kisaragi is a web application that allows small shops to create their own space on the web and offer their products to customers.",
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
    description:
      "Version mobile of Pets World, a web application that allows you to find your lost pet. This version include an IA that allows you to identify the breed of the lost pet.",
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
    description:
      "Beifong is an application that allows medical establishments to quickly and easily create a system for managing appointments. Also has a focus on accessibility providing accessibility options for the visually impaired.",
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
    description:
      "Pets World is a web application that allows you to find your lost pet. We seek to form a responsible and committed community in order to make those who have no voice heard.",

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
    description:
      "Dragon Ball App is a wiki-like application of some of the characters from the DragonBall Z anime series. Features a character finder.",
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
