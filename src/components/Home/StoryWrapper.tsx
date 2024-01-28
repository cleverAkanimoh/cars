import { getAllPostsFromWordPress } from "@/lib";
import Link from "next/link";
import { BsArrowBarRight } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import StoryCard from "./StoryCard";

export default async function StoryWrapper() {
  const story: {
    title: string;
    slug: string;
    author: { node: { name: string } };
    date: string;
    excerpt: string;
    id: string | number;
  }[] = await getAllPostsFromWordPress();
  console.log(story, "story");

  return (
    <>
      {story
        ?.slice(0, 5)
        .map(
          ({
            slug,
            title,
            author,
            date,
            excerpt,
          }) => (
            <SwiperSlide key={slug}>
              <StoryCard
                slug={slug}
                title={title}
                author={author.node.name}
                published_at={date}
                desc={excerpt}
              />
            </SwiperSlide>
          )
        )}

      <SwiperSlide>
        <div className="w-full h-full p-4 flex items-center justify-center bg-gradient-to-r from-gray-200 dark:from-gray-600 rounded-md hover:shadow font-bold">
          <Link
            href={"/blog"}
            className="group hover:underline transition-custom flex items-center justify-center"
          >
            <span>view more</span>
            <BsArrowBarRight className="transition-custom scale-0 group-hover:scale-100 group-hover:translate-x-2" />
          </Link>
        </div>
      </SwiperSlide>
    </>
  );
}
