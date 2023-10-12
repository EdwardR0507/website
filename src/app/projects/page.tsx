import { Badge } from "@/components/atoms";
import { ProjectSection } from "@/components/organisms";

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Projects</h1>
      <section className="my-4 text-justify text-lg w-full lg:w-[90%] 2xl:w-full">
        Welcome to my projects section, where you will find a diverse range of
        experiences! Each project tells its own story and highlights my unique
        skills and approaches in each of these areas. Join me on this journey
        through my professional and creative endeavors! I invite you to explore
        my work in different categories:
        <ul className="flex flex-col gap-3 my-4 text-left">
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="green" text="Work" /> for
            professional projects
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="purple" text="Open Source" /> for
            contributions to the community
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="yellow" text="College" /> for
            academic experiences
          </li>
          <li className="list-disc ml-6">
            <Badge className="mr-1" variant="default" text="Personal" /> for
            passion-driven creations.
          </li>
        </ul>
      </section>
      <ProjectSection />
    </>
  );
}
