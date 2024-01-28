import { Search } from "..";
import { BlogSkeleton } from "../Skeletons/blog-skeleton";
import Blog from "./blog";
import { Suspense } from "react";

export default async function BlogSection({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  return (
    <section className="container my-8 flex flex-col p-2 gap-8">
      <div className="flex flex-wrap gap-6 items-end justify-between px-4">
        <h1 className="text-7xl lg:text-8xl dark:text-white font-bold underline">
          Blog
        </h1>

        <Search placeholder={"search"} className="max-w-[600px]" />
      </div>

      <Suspense key={query + currentPage} fallback={<BlogSkeleton />}>
        <Blog searchValue={query} currentPage={currentPage} />
      </Suspense>
    </section>
  );
}
