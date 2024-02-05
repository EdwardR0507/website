import { Badge } from "@/components/atoms";
import { ProjectSection } from "@/components/organisms";
import { getI18N } from "@/utils";

export default function Projects({ params }: { params: { lang?: string } }) {
  const i18n = getI18N(params.lang);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        {i18n.PROJECTS.TITLE}
      </h1>
      <section className="my-4 text-justify text-lg w-full lg:w-[90%] 2xl:w-full">
        {i18n.PROJECTS.DESCRIPTION}
        <ul className="flex flex-col gap-3 my-4 text-left">
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="green" text="Work" />{" "}
            {i18n.PROJECTS.BADGES_DESCRIPTION.WORK}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="purple" text="Open Source" />{" "}
            {i18n.PROJECTS.BADGES_DESCRIPTION.OPEN_SOURCE}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="yellow" text="College" />{" "}
            {i18n.PROJECTS.BADGES_DESCRIPTION.COLLEGE}
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="default" text="Personal" />{" "}
            {i18n.PROJECTS.BADGES_DESCRIPTION.PERSONAL}
          </li>
        </ul>
      </section>
      <ProjectSection
        projectsDescription={i18n.PROJECTS.PROJECTS_DESCRIPTION}
      />
    </>
  );
}
