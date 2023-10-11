import Link from "next/link";

import { Button } from "@/components/atoms";

export default function Home() {
  return (
    <div className="flex w-full flex-col lg:flex-row h-[calc(100vh-188px)] items-center justify-center lg:justify-start gap-4">
      <div className="flex flex-col gap-4 lg:gap-10 lg:w-[60vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-500 flex flex-col gap-1 lg:text-3xl">
            Hi, my name is
            <span className="text-4xl lg:text-6xl text-white">
              Edward Ramos.
            </span>
            <span className="text-4xl lg:text-6xl">
              I make ideas real online
            </span>
          </h1>
          <p className="text-xl text-slate-500 lg:text-3xl">
            I&rsquo;m a software engineer based in Lima, Perú. Specializing in
            building websites, applications, and everything in between.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-4 lg:gap-12">
          <Button
            variant="outline"
            size="lg"
            className="p-2 text-blue-500 lg:text-xl"
            asChild
          >
            <Link href="mailto:ramosedward21@gmail.com">Get In Touch</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="p-2 text-blue-500 lg:text-xl"
            asChild
          >
            <Link href="/about">More About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
