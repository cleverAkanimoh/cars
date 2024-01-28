import { getAllCars, getAllPostsFromWordPress } from "@/lib";
import FilteredCard from "./FilteredCard";

export default async function FilteredCardsWrapper() {
  const carsArray = await getAllCars();
  
  return (
    <div className="flex gap-3">
      <FilteredCard
        heading={"recently listed"}
        array={carsArray.slice(0, 20)}
      />

      <FilteredCard
        heading={"cars in your location"}
        query={"origin"}
        value={"USA"}
        array={carsArray.filter((c: { Origin: string; }) => c.Origin === "USA")}
      />

      <FilteredCard
        heading={"favourite car brand"}
        query={"brand"}
        value={"toyota"}
        array={carsArray.filter((c: { Name: string; }) => c.Name.toLowerCase().includes("toyota"))}
      />

      <FilteredCard
        heading={"classic cars"}
        query={"category"}
        value={"classic"}
        array={carsArray.filter((c: { Name: string; }) => c.Name.toLowerCase().includes("bmw"))}
      />

      <FilteredCard heading={"view all listing"} array={carsArray} />
    </div>
  );
}
