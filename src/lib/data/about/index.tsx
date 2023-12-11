import Devmente from "@/components/atoms/icons/Devmente";
import University from "@/components/atoms/icons/University";

export const PERSONAL_INFO = {
  introduction:
    "Hello! My name is Edward, I'm a software engineer based in Lima, Peru. Specialized in frontend development with +1.5 years of experience. Currently, I work as a Junior Frontend Developer, where I approach every project with enthusiasm and a commitment to excellence, thriving in the fast-paced world of web development, seeing challenges as opportunities to expand my skill set and create a meaningful impact. Let's shape the digital world together, one line of code at a time!",
  photo: {
    src: "/images/Edward.jpg",
    alt: "Edward Ramos",
  },
  socialMedia: {
    github: "https://github.com/EdwardR0507",
    linkedin: "https://www.linkedin.com/in/edwardramosvillarreal",
    twitter: "https://twitter.com/EdRamosV",
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
      "Engaged in regular communication to ensure alignment on project requirements and milestones.",
      "Discussed and proposed innovative solutions to improve both the product and the development process.",
      "Assumedamentorship role by teaching and guiding two new trainee developers.",
      "Diligently identified, troubleshooted, and resolved frontend issues and bugs in a timely manner.",
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
      "Learned and applied practices of software development and documentation.",
      "Developed web applications using the React ecosystem.",
      "Developed mobile applications using the Flutter framework.",
    ],
    isCurrent: false,
  },
];
