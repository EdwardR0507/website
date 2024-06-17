import { Badge } from "@/components/atoms";
import { ProjectSection } from "@/components/organisms";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/lang/get-dictionary";

export default async function Projects({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        {dictionary.PROJECTS.TITLE}
      </h1>
      <section className="my-4 text-justify text-lg w-full">
        {dictionary.PROJECTS.DESCRIPTION}
        <ul className="flex flex-col gap-3 my-4 text-left">
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="green" text="Work" />{" "}
            {dictionary.PROJECTS.BADGES_DESCRIPTION.WORK}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="purple" text="Open Source" />{" "}
            {dictionary.PROJECTS.BADGES_DESCRIPTION.OPEN_SOURCE}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="yellow" text="College" />{" "}
            {dictionary.PROJECTS.BADGES_DESCRIPTION.COLLEGE}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="default" text="Personal" />{" "}
            {dictionary.PROJECTS.BADGES_DESCRIPTION.PERSONAL}
          </li>
        </ul>
      </section>
      <ProjectSection
        projectsDescription={dictionary.PROJECTS.PROJECTS_DESCRIPTION}
      />
    </>
  );
}
