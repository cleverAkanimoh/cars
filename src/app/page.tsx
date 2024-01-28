import {
  CarStory,
  HomeSection,
  HomeHeader,
  Main,
  // LocaleSwitcher,
  HomeJoin,
  HomePlans,
  HomeOffers,
} from "@/components";
import { Favourite, Special, Welcome } from "@/components/Home";
// import FileInput from "@/components/input";

export default function HomePage() {

  return (
    <Main noPadding>
      <HomeHeader />

      <Welcome className="sm:hidden" />

      {/* <LocaleSwitcher /> */}

      {/* <FileInput /> */}

      <Favourite />

      <HomeSection />

      <HomeOffers />

      <Special className="sm:hidden" />

      <CarStory />

      <HomeJoin />

      <HomePlans />
    </Main>
  );
}
