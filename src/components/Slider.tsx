"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";

import { useResize } from "@/utils";
import Link from "next/link";
import { BsArrowBarRight } from "react-icons/bs";
import StoryCard from "./Home/StoryCard";

type SliderProps = {
  story: {
    title: string;
    slug: string;
    author: { node: { name: string } };
    date: string;
    excerpt: string;
    id: string | number;
  }[] | null;
};

export default function Slider({ story }: SliderProps) {
  const pageWidth = useResize();

  return (
    <Swiper
      className="w-full slider"
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={
        pageWidth >= 450 && pageWidth <= 768
          ? 2
          : pageWidth >= 800 && pageWidth <= 1199
          ? 3
          : pageWidth >= 1200
          ? 4
          : 1
      }
      pagination={{ clickable: true }}
    >
      {story ? (
        <>
          {story.slice(0, 5).map(({ slug, title, author, date, excerpt }) => (
            <SwiperSlide key={slug}>
              <StoryCard
                slug={slug}
                title={title}
                author={author.node.name}
                published_at={date}
                desc={excerpt}
              />
            </SwiperSlide>
          ))}

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
      ) : (
        <p>something went wrong, check your network connection</p>
      )}
    </Swiper>
  );
}
