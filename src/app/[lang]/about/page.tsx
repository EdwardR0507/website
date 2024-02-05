import { ExperienceSection, PersonalInfoSection } from "@/components/organisms";

export default function About({ params }: { params: { lang?: string } }) {
  return (
    <>
      <PersonalInfoSection lang={params.lang} />
      <ExperienceSection lang={params.lang} />
    </>
  );
}
