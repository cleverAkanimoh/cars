import { getAllPostsFromWordPress } from "@/lib";
import { Card, Pagination, Empty } from "..";

type BlogProps = {
  searchValue: string;
  currentPage: number;
};

export default async function Blog({ searchValue, currentPage }: BlogProps) {
  const allPosts: {
    title: string;
    slug: string;
    author: { node: { name: string } };
    date: string;
    excerpt: string;
    id: string | number;
  }[] = await getAllPostsFromWordPress();

  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const displayedPost = searchValue
    ? allPosts.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : allPosts;
  return (
    <>
      {displayedPost.length !== 0 ? (
        <article className="my-6 flex flex-col gap-8 justify-center items-center dark:bg-black bg-white p-4 py-6 container border border-red-50 dark:border-gray-600 rounded-md">
          {searchValue && (
            <p className="w-full text-center">
              showing {displayedPost.length} of {allPosts.length} posts
            </p>
          )}

          <div className="flex flex-wrap gap-8 justify-center">
            {displayedPost.slice(firstPostIndex, lastPostIndex).map((p) => (
              <Card
                key={p.slug}
                title={p.title}
                author={p.author}
                published_at={p.date}
                slug={p.slug}
                desc={p.excerpt}
              />
            ))}
          </div>

          <Pagination
            totalPosts={displayedPost.length}
            postPerPage={postsPerPage}
            currentPage={currentPage}
          />
        </article>
      ) : (
        <Empty />
      )}
    </>
  );
}
