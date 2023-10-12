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

export default function Stack() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Stack</h1>
      <p className="my-4 text-justify text-lg w-full lg:w-[90%] 2xl:w-full">
        Welcome to my Stack section. Here, I present to you the technologies,
        tools, and programming languages that form the foundation of my
        technological approach. My &apos;Stack&apos; represents the set of
        resources I&apos;ve worked with and continue to explore. From
        programming languages to frameworks, these are the pillars I use to
        bring my projects to life. Explore my Stack to gain a deeper insight
        into my technological skills and preferences.
      </p>
      <StackSection
        skills={programmingLanguages}
        title="Programming Languages"
      />
      <StackSection skills={frontend} title="Frontend Technologies" />
      <StackSection skills={stateManagement} title="State Management" />
      <StackSection skills={uiLibraries} title="UI Libraries" />
      <StackSection skills={backend} title="Backend Technologies" />
      <StackSection skills={databases} title="Databases" />
      <StackSection skills={testing} title="Testing" />
    </>
  );
}
