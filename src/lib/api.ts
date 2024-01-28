import { fetchWpAPI, getAPIRequest } from "@/utils";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const getAllPostsFromWordPress = async (slug?: string) => {
  console.log("querying wordpress for blog posts");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("retrieved blog posts after 5 seconds");

  const data = await fetchWpAPI(
    `query FetchPosts($first: Int = 100) {
      posts(first: $first) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          date
          author {
            node {
              name
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        first: 100,
      },
    }
  );


  const result = slug
    ? data.posts.nodes.find((r: { slug: string }) => r.slug === slug)
    : data.posts.nodes;

  if (slug) {
    if (!result) notFound();
  }

  return result;
};

export const getAllCars = async (slug?: string) => {
  const url = "/api/cars";

  console.log("querying cars Api for cars listings");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("retrieved cars listings after 5seconds");

  const response = await getAPIRequest(url);

  return response.cars;
};
