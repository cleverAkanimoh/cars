import {
  CarStory,
  HomeSection,
  HomeHeader,
  Main,
  HomeJoin,
  HomePlans,
  HomeOffers,
} from "@/components";
import { Favourite, Special, Welcome } from "@/components/Home";

export default function HomePage() {

  return (
    <Main noPadding>
      <HomeHeader />

      <Welcome className="sm:hidden" />

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
