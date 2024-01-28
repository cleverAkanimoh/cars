import { fetchWpAPI, getAPIResponse } from "@/utils";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const getAllPostsFromWordPress = async (slug?: string) => {
  console.log("querying wordpress for blog posts");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("retrieved blog posts after 5 seconds");

  try {
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
  } catch (error) {
    console.error("error fetching post");
  }
};

export const getAllCars = async (slug?: string) => {
  const url = "/api/cars";

  console.log("querying cars Api for cars listings");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("retrieved cars listings after 5seconds");

  try {
    const response = await getAPIResponse(url);

    return response.cars;
  } catch (error) {
    console.error("error fetching cars list");
  }
};
