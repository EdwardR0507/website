import { getDictionary } from "@/lib/lang/get-dictionary";
import HomeIcon from "../../atoms/icons/HomeIcon";
import Profile from "../../atoms/icons/Profile";
import ProjectsIcon from "../../atoms/icons/ProjectsIcon";
import StackIcon from "../../atoms/icons/StackIcon";

export const navbarItems = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>["COMMON"]["NAVIGATION"]
) => [
  {
    name: dictionary.HOME,
    path: "/",
    icon: <HomeIcon className="w-10 h-10" />,
  },
  {
    name: dictionary.ABOUT,
    path: "/about",
    icon: <Profile className="w-10 h-10" />,
  },
  {
    name: dictionary.STACK,
    path: "/stack",
    icon: <StackIcon className="w-10 h-10" />,
  },
  {
    name: dictionary.PROJECTS,
    path: "/projects",
    icon: <ProjectsIcon className="w-10 h-10" />,
  },
];
