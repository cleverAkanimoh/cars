import { ListingSection, Loading, Main } from "@/components";
import FilterHeader from "@/components/Listing/FilterHeader";
import { metadata } from "../layout";
import { Suspense } from "react";

export default function Listings({
  searchParams,
}: {
  searchParams?: {
    brand?: string;
    year?: string;
    origin?: string;
    sortby?: string;
    orderby: string;
    search?: string;
    currentPage?: string;
  };
}) {
  metadata.title = "listings in carsinn";

  const brand = searchParams?.brand || "";
  const year = searchParams?.year || "";
  const origin = searchParams?.origin || "";
  const sortby = searchParams?.sortby || "";
  const orderby = searchParams?.orderby || "";
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.currentPage) || 1;

  return (
    <Main>
      <div className="w-full flex flex-col md:flex-row md:items-start items-center  justify-center">
      
        <FilterHeader />

        <Suspense
          key={brand + year + origin + sortby + search + currentPage}
          fallback={<Loading />}
        >
          <ListingSection
            filterQueries={{
              brand,
              year,
              origin,
              sortby,
              orderby,
              search,
              currentPage,
            }}
          />
        </Suspense>
      </div>
    </Main>
  );
}
