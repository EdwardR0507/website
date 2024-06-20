import { PERSONAL_INFO } from "@/lib/data/about";
import { ImageCard } from "../molecules/image-card";
import { getDictionary } from "@/lib/lang/get-dictionary";

interface PersonalInfoSectionProps {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["ABOUT"]["PERSONAL_INFORMATION"];
}

export const PersonalInfoSection = ({
  dictionary,
}: PersonalInfoSectionProps) => {
  const {
    photo: { alt, src },
  } = PERSONAL_INFO;

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-blue-500">{dictionary.TITLE}</h1>
      <div className="flex flex-col lg:flex-row gap-2 justify-around items-center lg:gap-8">
        <div className="flex flex-col lg:max-w-[700px] gap-4">
          <p className="text-justify text-lg">{dictionary.INTRODUCTION}</p>
          <div className="flex flex-col gap-2 lg:gap-2">
            <p className="text-justify text-lg">
              {dictionary.SOFT_SKILLS.TITLE}
            </p>
            <ul className="flex flex-wrap gap-2">
              {dictionary.SOFT_SKILLS.LIST.map((skill) => (
                <li
                  key={skill}
                  className="bg-black/10 text-sm tracking-wider text-black/70 rounded-full dark:text-white/70 dark:bg-white/10 flex items-center px-4 py-2"
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
