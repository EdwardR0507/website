import { PERSONAL_INFO } from "@/lib/data/about";
import { ImageCard } from "../molecules/image-card";

export const PersonalInfoSection = () => {
  const {
    introduction,
    photo: { alt, src },
    softSkills,
  } = PERSONAL_INFO;

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-blue-500">About me</h1>
      <div className="flex flex-col lg:flex-row gap-2 justify-around items-center lg:gap-8">
        <div className="flex flex-col lg:max-w-[700px] gap-4">
          <p className="text-justify text-lg">{introduction}</p>
          <div className="flex flex-col gap-2 lg:gap-2">
            <p className="text-justify text-lg">Some of my soft skills are:</p>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="bg-black/[0.7] p-2 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/70"
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
