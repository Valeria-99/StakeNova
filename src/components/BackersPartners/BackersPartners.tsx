import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const filterCategories = [
  { label: "All", count: 14, value: "all" },
  { label: "Investor", count: 3, value: "investor" },
  { label: "Partner", count: 4, value: "partner" },
  { label: "Grant", count: 3, value: "grant" },
  { label: "Integration", count: 3, value: "integration" },
];

const partners = [
  { logo: "/frame-1000007466.svg", category: "Investor", name: "CAPITAL", logoHeight: "h-9" },
  { logo: "/frame-1000007466-2.svg", category: "Investor", name: "VENTURE LAUNCH", logoHeight: "h-9" },
  { logo: "/frame-1000007466-1.svg", category: "Investor", name: "KUMEKA TEAM", logoHeight: "h-9" },
  { logo: "/group-39515.png", category: "Partner", name: "CIRCLE", logoWidth: "w-[32.2px]", logoHeight: "h-8" },
  { logo: "/frame-1000007467.svg", category: "Partner", name: "METAPLEX", logoHeight: "h-8" },
  { logo: "/component-1.svg", category: "Grant", name: "SOLANA FOUNDATION", logoHeight: "h-9" },
  { logo: "/vector.svg", category: "Grant", name: "ANZA LABS", logoWidth: "w-[41.74px]", logoHeight: "h-9" },
  { logo: "/vector-1.svg", category: "Grant", name: "SUPERTEAM", logoWidth: "w-[38.4px]", logoHeight: "h-8" },
  { logo: "/katman-1.svg", category: "Integration", name: "JUPITER", logoWidth: "w-9", logoHeight: "h-9" },
  { logo: "/subtract-1.svg", category: "Integration", name: "ORCA", logoWidth: "w-[32.73px]", logoHeight: "h-[27.41px]", isWrapped: true },
  { logo: "/component-211.svg", category: "Integration", name: "RAYDIUM", logoWidth: "w-9", logoHeight: "h-9" },
  { logo: "/layer-1.svg", category: "Integration", name: "SERUM", logoWidth: "w-[31.83px]", logoHeight: "h-9" },
  { logo: "/group.png", category: "Partner", name: "BD BOOST3R", logoWidth: "w-[76.92px]", logoHeight: "h-9" },
  { logo: "/subtract.svg", category: "Partner", name: "SANCTUM", logoWidth: "w-[34px]", logoHeight: "h-[26.96px]", isWrapped: true },
];

export const BackersPartners = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("all");

  // застосовуємо фільтр
  const filteredPartners = partners.filter(
    (partner) => activeFilter === "all" || partner.category.toLowerCase() === activeFilter
  );

  return (
    <section className="flex flex-col items-start gap-16 px-6 md:px-20 lg:px-56 py-[100px] w-full border-b border-[#363636]">
      <div className="flex flex-col items-start gap-8 w-full">
        <header className="flex items-end justify-between pb-8 w-full border-b border-[#363636]">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-2xl font-bold text-white">BACKERS & PARTNERS</h2>
            <p className="text-gray-400 text-base">
              Together, we&apos;re building the future of decentralized staking
            </p>
          </div>

          <nav className="flex items-center justify-end gap-6">
            {filterCategories.map((filter) => (
              <Button
                key={filter.value}
                variant="outline"
                onClick={() => setActiveFilter(filter.value.toLowerCase())}
                className={`flex items-center gap-2 px-4 py-2 bg-black border ${
                  activeFilter === filter.value.toLowerCase()
                    ? "border-blue-500"
                    : "border-gray-700"
                } hover:bg-black/80`}
              >
                <span
                  className={`text-base ${
                    activeFilter === filter.value.toLowerCase() ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {filter.label}
                </span>
                <span className="text-gray-400 text-base">[{filter.count}]</span>
              </Button>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          {filteredPartners.map((partner, index) => {
            const isLastRow = index >= filteredPartners.length - 4;
            const isNotLastInRow = (index + 1) % 4 !== 0;

            return (
              <div
                key={`${partner.name}-${index}`}
                className={`flex p-8 items-center gap-2 ${
                  !isLastRow ? "border-b border-[#363636]" : ""
                } ${isNotLastInRow ? "border-r border-[#363636]" : ""}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  {partner.isWrapped ? (
                    <div className="flex flex-col w-9 h-9 items-center justify-center">
                      <img
                        className={`${partner.logoWidth || ""} ${partner.logoHeight || ""}`}
                        alt={partner.name}
                        src={partner.logo}
                      />
                    </div>
                  ) : (
                    <img
                      className={`${partner.logoWidth || ""} ${partner.logoHeight || ""}`}
                      alt={partner.name}
                      src={partner.logo}
                    />
                  )}

                  <div className="flex flex-col h-9 items-start gap-1.5 flex-1">
                    <Badge
                      variant="secondary"
                      className="text-blue-400 bg-transparent border-0 p-0 h-auto"
                    >
                      {partner.category}
                    </Badge>
                    <p className="text-gray-300 text-sm">{partner.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center w-full pt-16 gap-6 border-t border-[#363636]">
          <h3 className="text-white text-xl font-semibold text-center">
            WANT TO PARTNER WITH STAKENOVA?
          </h3>
          <p className="text-gray-400 text-base text-center">
            Reach out to us and let’s build the future together
          </p>
          <Button variant="default" className="bg-azure text-black hover:bg-azure/90 px-6 py-3 text-base font-semibold" >
            CONTACT BUTTON
          </Button>
        </div>
      </div>
    </section>
  );
};
