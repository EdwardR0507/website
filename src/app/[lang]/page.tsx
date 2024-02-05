import Link from "next/link";

import { Button } from "@/components/atoms";
import { getI18N } from "@/utils";

export default function Home({ params }: { params: { lang?: string } }) {
  const i18n = getI18N(params.lang);

  return (
    <div className="flex w-full flex-col lg:flex-row h-[calc(100vh-188px)] items-center justify-center lg:justify-start gap-4">
      <div className="flex flex-col gap-4 lg:gap-10 lg:w-[60vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-500 flex flex-col gap-1 lg:text-3xl">
            {i18n.HOME.GREETING}
            <span className="text-4xl lg:text-6xl  text-black dark:text-white">
              {i18n.HOME.NAME}
            </span>
            <span className="text-4xl lg:text-6xl">{i18n.HOME.SLOGAN}</span>
          </h1>
          <p className="text-xl text-slate-500 lg:text-3xl">
            {i18n.HOME.DESCRIPTION}
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
              {i18n.HOME.CALL_TO_ACTION}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="p-2 text-blue-500 lg:text-xl"
            asChild
          >
            <Link href="/about">{i18n.HOME.SECONDARY_CALL_TO_ACTION}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
