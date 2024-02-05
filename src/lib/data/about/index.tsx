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

export const EXPERIENCE_INFO = (company: CompanyParams) => [
  {
    id: 1,
    institution: company.FIRST.NAME,
    logo: () => <Devmente />,
    website: "https://www.linkedin.com/company/devmenteio",
    position: company.FIRST.POSITION,
    startDate: company.FIRST.START_DATE,
    endDate: company.FIRST.END_DATE,
    responsibilities: company.FIRST.RESPONSIBILITIES,
    isCurrent: true,
  },
  {
    id: 2,
    institution: company.SECOND.NAME,
    logo: () => <University />,
    website: "https://www.unmsm.edu.pe",
    position: company.SECOND.POSITION,
    startDate: company.SECOND.START_DATE,
    endDate: company.SECOND.END_DATE,
    responsibilities: company.SECOND.RESPONSIBILITIES,
    isCurrent: false,
  },
];

type CompanyExperience = {
  NAME: string;
  POSITION: string;
  START_DATE: string;
  END_DATE: string;
  RESPONSIBILITIES: string[];
};

type CompanyParams = {
  FIRST: CompanyExperience;
  SECOND: CompanyExperience;
};
