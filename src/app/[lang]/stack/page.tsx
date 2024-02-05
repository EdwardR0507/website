import { StackSection } from "@/components/organisms";
import {
  backend,
  databases,
  frontend,
  programmingLanguages,
  stateManagement,
  testing,
  uiLibraries,
} from "@/lib/data";
import { getI18N } from "@/utils";

export default function Stack({ params }: { params: { lang?: string } }) {
  const i18n = getI18N(params.lang);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        {i18n.STACK.TITLE}
      </h1>
      <p className="my-4 text-justify text-lg w-full lg:w-[90%] 2xl:w-full">
        {i18n.STACK.DESCRIPTION}
      </p>
      <StackSection
        skills={programmingLanguages}
        title={i18n.STACK.TECHNOLOGIES.PROGRAMMING_LANGUAGES}
      />
      <StackSection
        skills={frontend}
        title={i18n.STACK.TECHNOLOGIES.FRONTEND_TECH}
      />
      <StackSection
        skills={stateManagement}
        title={i18n.STACK.TECHNOLOGIES.STATE_MANAGEMENT}
      />
      <StackSection
        skills={uiLibraries}
        title={i18n.STACK.TECHNOLOGIES.UI_LIBRARIES}
      />
      <StackSection
        skills={backend}
        title={i18n.STACK.TECHNOLOGIES.BACKEND_TECH}
      />
      <StackSection
        skills={databases}
        title={i18n.STACK.TECHNOLOGIES.DATABASES}
      />
      <StackSection skills={testing} title={i18n.STACK.TECHNOLOGIES.TESTING} />
    </>
  );
}
