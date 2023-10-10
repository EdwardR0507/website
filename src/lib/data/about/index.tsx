import Devmente from "@/components/atoms/icons/Devmente";
import University from "@/components/atoms/icons/University";

export const PERSONAL_INFO = {
  introduction:
    "Hello! My name is Edward, I'm a software engineer based in Lima, Peru. Specialized in frontend development. Currently, I work as a Junior Frontend Developer, where I approach every project with enthusiasm and a commitment to excellence, thriving in the fast-paced world of web development, seeing challenges as opportunities to expand my skill set and create a meaningful impact. Let's shape the digital world together, one line of code at a time!",
  photo: {
    src: "/Edward.jpg",
    alt: "Edward Ramos",
  },
  socialMedia: {
    github: "https://github.com/EdwardR0507",
    linkedin: "https://www.linkedin.com/in/edward-ramos-0a3a2b1b4/",
    twitter: "https://twitter.com/EdwardR0507",
  },
  softSkills: [
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Time management",
    "Adaptability",
    "Conflict resolution",
    "Leadership",
  ],
};

export const EXPERIENCE_INFO = [
  {
    id: 1,
    institution: "Devmente",
    logo: () => <Devmente />,
    website: "https://www.linkedin.com/company/devmenteio",
    position: "Frontend Developer Junior",
    startDate: "June 2022",
    endDate: "Present",
    responsibilities: [
      "Develop medium size features from scratch using React, TypeScript, Styled Components, and Apollo.",
      "Develop small size features from using Dart, Flutter, and GetX.",
      "Discuss and propose solutions to improve the product and the development process.",
      "Teach and mentor new trainees developers.",
    ],
    isCurrent: true,
  },
  {
    id: 2,
    institution: "Universidad Nacional Mayor de San Marcos",
    logo: () => <University />,
    website: "https://www.unmsm.edu.pe",
    position: "Software Engineering Student",
    startDate: "April 2018",
    endDate: "July 2023",
    responsibilities: [
      "Learn and apply practices of software development and documentation.",
      "Develop web applications using the React ecosystem.",
      "Develop mobile applications using the Flutter framework.",
    ],
    isCurrent: false,
  },
];
