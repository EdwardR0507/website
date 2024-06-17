import Link from "next/link";

import { Button } from "@/components/atoms";
import { CustomLink } from "@/components/molecules/custom-link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/lang/get-dictionary";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="flex w-full flex-col lg:flex-row justify-center items-center my-auto">
      <div className="flex flex-col gap-4 lg:gap-10 md:w-[60vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-500 flex flex-col gap-1 lg:text-3xl">
            {dictionary.HOME.GREETING}
            <span className="text-4xl lg:text-6xl  text-black dark:text-white">
              {dictionary.HOME.NAME}
            </span>
            <span className="text-4xl lg:text-6xl">
              {dictionary.HOME.SLOGAN}
            </span>
          </h1>
          <p className="text-xl text-slate-500 lg:text-3xl">
            {dictionary.HOME.DESCRIPTION}
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-4 lg:gap-12">
          <Button
            variant="outline"
            size="lg"
            className="p-2 text-blue-500 lg:text-xl"
            asChild
          >
            <Link href="mailto:ramosedward21@gmail.com">
              {dictionary.HOME.CALL_TO_ACTION}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="p-2 text-blue-500 lg:text-xl"
            asChild
          >
            <CustomLink lang={params.lang} href="/about">
              {dictionary.HOME.SECONDARY_CALL_TO_ACTION}
            </CustomLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
