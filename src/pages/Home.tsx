import { Hero } from "../sections/Hero/Hero";
import { BackersPartners } from "../components/BackersPartners/BackersPartners";
import { YieldSources } from "../components/YieldSources/YieldSources";
import { HowToEarn } from "../components/HowToEarn/HowToEarn";

export const Home = () => {
  return (
    <main>
      <Hero />
      <BackersPartners />
      <YieldSources />
      <HowToEarn />
    </main>
  );
};
