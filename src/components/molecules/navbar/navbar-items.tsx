import HomeIcon from "../../atoms/icons/HomeIcon";
import Profile from "../../atoms/icons/Profile";
import ProjectsIcon from "../../atoms/icons/ProjectsIcon";
import StackIcon from "../../atoms/icons/StackIcon";

export const navbarItems = [
  {
    name: "home",
    path: "/",
    icon: <HomeIcon className="w-10 h-10" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <Profile className="w-10 h-10" />,
  },
  {
    name: "stack",
    path: "/stack",
    icon: <StackIcon className="w-10 h-10" />,
  },
  {
    name: "projects",
    path: "/projects",
    icon: <ProjectsIcon className="w-10 h-10" />,
  },
];
