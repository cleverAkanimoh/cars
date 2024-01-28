import { metadata } from "@/app/layout";
import { Loading, Main, UniqueBlog } from "@/components";

import { getAllPostsFromWordPress } from "@/lib";
import { Suspense } from "react";

// export const metadata = {
//   title: 'carsInn Blog | blogging from wordpress',
// }

export default async function BlogPageById({ params: { slug } }: { params: { slug: string } }) {

  const uniquePost = await getAllPostsFromWordPress(slug)
  
  metadata.title = uniquePost.title
  metadata.description = uniquePost.excerpt.replace("<p>", " ").substring(0,51).trim().concat("...")

  return (
    <Main>

      <Suspense fallback={<Loading />}>
        <UniqueBlog post={uniquePost} />
      </Suspense>

    </Main>
  )
}