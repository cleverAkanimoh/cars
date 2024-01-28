import { Loading, Main, UniqueBlog } from "@/components";

import { getAllCars } from "@/lib";
import { Suspense } from "react";

export const metadata = {
  title: 'carsInn Blog | blogging from wordpress',
}

export default async function ListingPageById({ params: { slug } }: { params: { slug: string } }) {

  const carDetail = await getAllCars(slug)

  console.log("cars slug: ",slug)
  console.log(carDetail)

  return (
    <Main>

      <Suspense fallback={<Loading />}>
        {/* <UniqueBlog post={carDetail} /> */}
      </Suspense>
cars cars cars
    </Main>
  )
}