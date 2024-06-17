import { ExperienceSection, PersonalInfoSection } from "@/components/organisms";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/lang/get-dictionary";

export default async function About({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <PersonalInfoSection dictionary={dictionary.ABOUT.PERSONAL_INFORMATION} />
      <ExperienceSection dictionary={dictionary.ABOUT.EXPERIENCE} />
    </>
  );
}
