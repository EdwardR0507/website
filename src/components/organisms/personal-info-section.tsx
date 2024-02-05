import { PERSONAL_INFO } from "@/lib/data/about";
import { ImageCard } from "../molecules/image-card";
import { getI18N } from "@/utils";

interface PersonalInfoSectionProps {
  lang?: string;
}

export const PersonalInfoSection = ({ lang }: PersonalInfoSectionProps) => {
  const i18n = getI18N(lang);

  const {
    introduction,
    photo: { alt, src },
    softSkills,
  } = PERSONAL_INFO;

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-blue-500">
        {i18n.ABOUT.PERSONAL_INFORMATION.TITLE}
      </h1>
      <div className="flex flex-col lg:flex-row gap-2 justify-around items-center lg:gap-8">
        <div className="flex flex-col lg:max-w-[700px] gap-4">
          <p className="text-justify text-lg">
            {i18n.ABOUT.PERSONAL_INFORMATION.INTRODUCTION}
          </p>
          <div className="flex flex-col gap-2 lg:gap-2">
            <p className="text-justify text-lg">
              {i18n.ABOUT.PERSONAL_INFORMATION.SOFT_SKILLS.TITLE}
            </p>
            <ul className="flex flex-wrap gap-2">
              {i18n.ABOUT.PERSONAL_INFORMATION.SOFT_SKILLS.LIST.map((skill) => (
                <li
                  key={skill}
                  className="bg-black/[0.7] px-4 py-2 text-sm tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ImageCard src={src} alt={alt} />
      </div>
    </section>
  );
};
