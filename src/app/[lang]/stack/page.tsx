import { StackSection } from "@/components/organisms";
import { Locale } from "@/i18n-config";
import {
  backend,
  databases,
  frontend,
  programmingLanguages,
  stateManagement,
  testing,
  uiLibraries,
} from "@/lib/data";
import { getDictionary } from "@/lib/lang/get-dictionary";

export default async function Stack({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 lg:mb-4">
        {dictionary.STACK.TITLE}
      </h1>
      <p className="my-2 lg:my-4 text-justify text-lg w-full">
        {dictionary.STACK.DESCRIPTION}
      </p>
      <StackSection
        skills={programmingLanguages}
        title={dictionary.STACK.TECHNOLOGIES.PROGRAMMING_LANGUAGES}
      />
      <StackSection
        skills={frontend}
        title={dictionary.STACK.TECHNOLOGIES.FRONTEND_TECH}
      />
      <StackSection
        skills={stateManagement}
        title={dictionary.STACK.TECHNOLOGIES.STATE_MANAGEMENT}
      />
      <StackSection
        skills={uiLibraries}
        title={dictionary.STACK.TECHNOLOGIES.UI_LIBRARIES}
      />
      <StackSection
        skills={backend}
        title={dictionary.STACK.TECHNOLOGIES.BACKEND_TECH}
      />
      <StackSection
        skills={databases}
        title={dictionary.STACK.TECHNOLOGIES.DATABASES}
      />
      <StackSection
        skills={testing}
        title={dictionary.STACK.TECHNOLOGIES.TESTING}
      />
    </>
  );
}
