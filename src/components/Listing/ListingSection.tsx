import { Empty, Pagination, Section } from "..";
import CarsCard from "./CarsCard";
import { getAllCars } from "@/lib";

type ListingSectionProps = {
  filterQueries: {
    brand: string;
    year: string;
    origin: string;
    sortby: string;
    orderby: string;
    search: string;
    currentPage: number;
  };
};

export default async function ListingSection({
  filterQueries
}: ListingSectionProps) {
  // let _year = [new Set(allCars.map((p) => p.Year))]
  // console.log(_year)
    const allCars = await getAllCars();

  const { brand, year, origin, sortby, orderby, search, currentPage } =
    filterQueries;

  const postsPerPage = 20;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const displayedPost = generateFilteredArray(
    allCars,
    brand,
    year,
    origin,
    sortby,
    orderby,
    search
  );

  return (
    <div className="relative w-full py-3 gap-8 flex items-center justify-center transition-custom">
      <div className="md:h-[86vh] md:overflow-hidden md:overflow-y-auto w-full flex justify-center items-start">
        <Section className="md:max-w-full items-center justify-center mb-5 bg-white dark:bg-black border border-red-50 dark:border-gray-800 gap-y-6">
          {displayedPost.length !== 0 && (
            <p className="w-full text-center font-rubik px-4">
              showing&nbsp;
              {displayedPost.length === allCars.length
                ? "all"
                : displayedPost?.length + " of "}
              &nbsp;
              {allCars.length} cars listing
            </p>
          )}

          {displayedPost.length !== 0 ? (
            <>
              {" "}
              <article className="w-full my-2 flex flex-wrap gap-x-4 gap-y-8 justify-center">
                {displayedPost
                  .slice(firstPostIndex, lastPostIndex)
                  .map((p, i) => (
                    <CarsCard
                      key={i}
                      id={i}
                      name={p.Name}
                      miles_per_gallon={p.Miles_per_Gallon}
                      cylinders={p.Cylinders}
                      displacement={p.Displacement}
                      horsepower={p.Horsepower}
                      weight_in_lbs={p.weight_in_lbs}
                      acceleration={p.Acceleration}
                      year={p.Year}
                      origin={p.Origin}
                    />
                  ))}
              </article>
              
              <Pagination
                totalPosts={displayedPost.length}
                postPerPage={postsPerPage}
                currentPage={currentPage}
              />
            </>
          ) : (
            <Empty />
          )}
        </Section>
      </div>
    </div>
  );
}

const generateFilteredArray = (
  array: any[],
  brand?: string,
  year?: string,
  origin?: string,
  sortby?: string,
  orderby?: string,
  search?: string
) => {
  const filteredArray = search
    ? array.filter((p) => p.Name.toLowerCase().includes(search?.toLowerCase()))
    : brand && origin && year
    ? array.filter(
        (p) =>
          p.Name.split(" ")[0] === brand &&
          p.Origin === origin &&
          p.Year === year
      )
    : (brand && origin) || (brand && year) || (year && origin)
    ? array.filter(
        (p) =>
          (p.Name.split(" ")[0] === brand && p.Origin === origin) ||
          (p.Name.split(" ")[0] === brand && p.Year === year) ||
          (p.Origin === brand && p.Year === year)
      )
    : brand || origin || year
    ? array.filter(
        (p) =>
          p.Name.split(" ")[0] === brand ||
          p.Origin === origin ||
          p.Year === year
      )
    : array;

  orderby === "dsc" && sortby === "brand"
    ? filteredArray.sort((a, b) => (a.Name < b.Name ? 1 : -1))
    : orderby === "dsc" && sortby === "origin"
    ? filteredArray.sort((a, b) => (a.Origin < b.Origin ? 1 : -1))
    : orderby === "dsc" && sortby === "year"
    ? filteredArray.sort((a, b) => (a.Year < b.Year ? 1 : -1))
    : sortby === "brand"
    ? filteredArray.sort((a, b) => (a.Name < b.Name ? -1 : 1))
    : sortby === "origin"
    ? filteredArray.sort((a, b) => (a.Origin < b.Origin ? -1 : 1))
    : sortby === "year"
    ? filteredArray.sort((a, b) => (a.Year < b.Year ? -1 : 1))
    : orderby === "asc" && sortby === "brand"
    ? filteredArray.sort((a, b) => (a.Name < b.Name ? -1 : 1))
    : orderby === "asc" && sortby === "origin"
    ? filteredArray.sort((a, b) => (a.Origin < b.Origin ? -1 : 1))
    : orderby === "asc" && sortby === "year"
    ? filteredArray.sort((a, b) => (a.Year < b.Year ? -1 : 1))
    : orderby === "asc"
    ? filteredArray.sort((a, b) => (a.Name < b.Name ? -1 : 1))
    : orderby === "dsc"
    ? filteredArray.sort((a, b) => (a.Name < b.Name ? 1 : -1))
    : filteredArray;

  // switch (sortby) {
  //     case "asc":
  //         return filteredArray.sort((a, b) => a.Name < b.Name ? -1 : 1)
  //     case "dsc":
  //         return filteredArray.sort((a, b) => a.Name < b.Name ? 1 : -1)
  //     default:
  //         return filteredArray
  // }

  return filteredArray;
};
