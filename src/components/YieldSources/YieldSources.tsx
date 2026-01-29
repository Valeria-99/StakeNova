import { Card, CardContent } from "../ui/card";

const baseSolYieldItems = [
  { icon: "/frame-1.svg", label: "Inflation" },
  { icon: "/frame-2.svg", label: "MEV Rewards" },
  { icon: "/frame-19.svg", label: "Block Rewards" },
  { icon: "/frame-3.svg", label: "Trade Fees" },
];

const stakeNovaExclusives = [
  { icon: "/frame-3.svg", label: "Platform Fees" },
  { icon: "/frame-7.svg", label: "StakeDrops" },
  { icon: "/frame-4.svg", label: "Referral Fees" },
  { icon: "/frame-8.svg", label: "Creator Fees" },
  { icon: "/frame.svg", label: "Stardust" },
];

export const YieldSources = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 px-4 md:px-56 py-[100px] border-b border-solid border-jet">
      <header className="flex items-center gap-4 w-full max-w-[1304px]">
        <div className="inline-flex flex-col gap-4 items-start">
          <h2 className="font-32-AG font-[number:var(--32-AG-font-weight)] text-moon text-[length:var(--32-AG-font-size)] tracking-[var(--32-AG-letter-spacing)] leading-[var(--32-AG-line-height)] [font-style:var(--32-AG-font-style)]">
            A UNIVERSE OF YIELD SOURCES
          </h2>
          <p className="[font-family:'Lexend',Helvetica] font-normal text-platinum text-base tracking-[0.32px] leading-6">
            StakeNova combines base SOL yield with exclusive platform rewards
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[1304px]">
        <Card className="w-full bg-black border-0">
          <CardContent className="relative h-[466px] p-0">
            <div className="inline-flex flex-col items-start gap-6 absolute top-[99px] left-[9px]">
              <div className="[font-family:'Lexend',Helvetica] font-normal text-moon text-lg tracking-[0.36px] leading-[normal]">
                <span className="text-[#e8f3ff] tracking-[0.06px]">[ </span>
                <span className="text-[#3d96ff] tracking-[0.06px]">BASE</span>
                <span className="text-[#e8f3ff] tracking-[0.06px]">
                  {" "}
                  SOL YIELD ]
                </span>
              </div>

              <div className="inline-flex flex-col gap-4 items-start">
                {baseSolYieldItems.map((item, index) => (
                  <div
                    key={`base-${index}`}
                    className="flex items-center gap-2.5 px-4 py-2 border border-solid border-[#6e7d8d]"
                  >
                    <img className="w-6 h-6" alt={item.label} src={item.icon} />
                    <span className="[font-family:'Lexend',Helvetica] font-normal text-moon text-lg tracking-[0.36px] leading-7 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <img
              className="absolute top-[82px] left-[459px] w-[325px] h-[322px]"
              alt="Yield sources diagram"
              src="/frame-1000007587.svg"
            />

            <div className="inline-flex flex-col items-start gap-6 absolute top-12 left-[1035px]">
              <div className="text-moon text-lg tracking-[0.36px] leading-[normal] [font-family:'Lexend',Helvetica] font-normal">
                <span className="text-[#e8f3ff] tracking-[0.06px]">
                  [ STAKENOVA{" "}
                </span>
                <span className="text-[#3d96ff] tracking-[0.06px]">
                  EXCLUSIVES
                </span>
                <span className="text-[#e8f3ff] tracking-[0.06px]">]</span>
              </div>

              <div className="flex flex-col items-start gap-4">
                {stakeNovaExclusives.map((item, index) => (
                  <div
                    key={`exclusive-${index}`}
                    className="flex items-center gap-2.5 px-4 py-2 border border-solid border-[#6e7d8d]"
                  >
                    <img className="w-6 h-6" alt={item.label} src={item.icon} />
                    <span className="[font-family:'Lexend',Helvetica] font-normal text-moon text-lg tracking-[0.36px] leading-7 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <img
              className="absolute top-[116px] left-[797px] w-[239px] h-[42px]"
              alt="Connection line"
              src="/vector-1-1.svg"
            />

            <img
              className="absolute top-[167px] left-[207px] w-[239px] h-[42px]"
              alt="Connection line"
              src="/vector-5.svg"
            />

            <img
              className="absolute top-[229px] left-[207px] w-[238px] h-0.5"
              alt="Connection line"
              src="/group-39530.png"
            />

            <img
              className="absolute top-[287px] left-[207px] w-[238px] h-0.5"
              alt="Connection line"
              src="/group-39531.png"
            />

            <img
              className="absolute top-[168px] left-[284px] w-[58px] h-[3px]"
              alt="Connection line"
              src="/vector-10--stroke-.svg"
            />

            <img
              className="absolute top-[310px] left-[207px] w-[239px] h-[41px]"
              alt="Connection line"
              src="/group-39529.png"
            />

            <img
              className="absolute top-[298px] left-[797px] w-[238px] h-0.5"
              alt="Connection line"
              src="/group-39533.png"
            />

            <img
              className="absolute top-[321px] left-[797px] w-[239px] h-[42px]"
              alt="Connection line"
              src="/group-39532.png"
            />

            <img
              className="absolute top-[182px] left-[798px] w-[238px] h-0.5"
              alt="Connection line"
              src="/group-39534.png"
            />

            <img
              className="absolute top-[239px] left-[798px] w-[238px] h-0.5"
              alt="Connection line"
              src="/group-39535.png"
            />

            <img
              className="absolute top-[116px] left-[924px] w-[58px] h-1"
              alt="Connection line"
              src="/vector-9--stroke-.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
