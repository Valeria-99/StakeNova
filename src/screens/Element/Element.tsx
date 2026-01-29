import { BackersPartners } from "../../components/BackersPartners/BackersPartners";
import { HowToEarn } from "../../components/HowToEarn/HowToEarn";
import { StakeNovaWidget } from "../../components/StakeNovaWidget/StakeNovaWidget";
import { YieldSources } from "../../components/YieldSources/YieldSources";
import { Footer } from "../../components/layout/Footer/Footer";
import { DepositEarn } from "../../components/DepositEarn/DepositEarn";

export const Element = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full [background:url(..//1920.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] bg-bg-star">
      <DepositEarn />
      <BackersPartners />
      <YieldSources />
      <HowToEarn />
      <StakeNovaWidget />
      <Footer />
    </div>
  );
};
