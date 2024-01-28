import { Suspense } from "react";
import { BsLink } from "react-icons/bs";
import { Loading, Section, Slider } from "..";
import Link from "next/link";
import StoryWrapper from "./StoryWrapper";

export default function CarStory() {
  return (
    <Section className="my-6 py-10 gap-8 bg-white dark:bg-black border border-red-50 dark:border-gray-800">
      <div id="car-stories" className="group w-fit flex gap-1 items-center">
        <h1 className="text-6xl md:text-7xl dark:text-white capitalize font-cursive">
          car stories
        </h1>

        <Link
          href={"#car-stories"}
          className="opacity-0 group-hover:opacity-100 text-lg transition-custom self-start"
        >
          <BsLink />
        </Link>
      </div>

      <Suspense fallback={<Loading />}>
        <Slider>
          <StoryWrapper />
        </Slider>
      </Suspense>
    </Section>
  );
}
