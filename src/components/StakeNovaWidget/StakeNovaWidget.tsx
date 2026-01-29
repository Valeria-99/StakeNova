import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "DEPOSIT",
    description: "Deposit SOL tokens",
    image: "/frame-1000007598-1.svg",
  },
  {
    number: "02",
    title: "MINT NOVASOL",
    description: "Sent to your wallet",
    image: "/frame-1000007598.svg",
  },
  {
    number: "03",
    title: "EARN",
    description: "Automatically",
    image: null,
  },
];

const earningFeatures = [
  { icon: "/frame-3.svg", label: "USDC Yield" },
  { icon: "/frame-7.svg", label: "StakeDrops" },
  { icon: "/frame-4.svg", label: "Referral Fees" },
  { icon: "/frame-3.svg", label: "Platform Fees" },
];

export const StakeNovaWidget = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 px-4 md:px-56 py-[100px] w-full max-w-[1920px] mx-auto">
      <header className="flex items-center gap-4 w-full">
        <div className="inline-flex flex-col gap-4 items-start">
          <h2 className="font-32-AG font-[number:var(--32-AG-font-weight)] text-moon text-[length:var(--32-AG-font-size)] tracking-[var(--32-AG-letter-spacing)] leading-[var(--32-AG-line-height)] [font-style:var(--32-AG-font-style)]">
            THE ENGINE OF STAKENOVA
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start justify-center w-full">
        <div className="inline-flex flex-col items-start gap-2.5 px-8 py-0 z-[1]">
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-0 bg-black">
            <p className="flex items-center justify-center [font-family:'Lexend',Helvetica] font-normal text-moon text-lg tracking-[0.36px] leading-[normal]">
              <span className="text-[#e8f3ff] tracking-[0.06px]">[ </span>
              <span className="text-[#3d96ff] tracking-[0.06px]">EARNING</span>
              <span className="text-[#e8f3ff] tracking-[0.06px]">
                {" "}
                PROCESS ]
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-11 pb-8 px-8 w-full -mt-2.5 z-0 border border-solid border-[#363636]">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4 flex-1">
              <Card className="flex flex-col items-center justify-center gap-6 p-6 flex-1 h-full bg-black border border-dashed border-[#ffffff36]">
                <div className="top-0 left-0 absolute w-4 h-4 border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-[#e8f3ff]" />
                <div className="top-0 right-0 rotate-180 absolute w-4 h-4 border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-[#e8f3ff]" />
                <div className="left-0 bottom-0 absolute w-4 h-4 border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-[#e8f3ff]" />
                <div className="right-0 bottom-0 rotate-180 absolute w-4 h-4 border-t-2 [border-top-style:solid] border-l-2 [border-left-style:solid] border-[#e8f3ff]" />

                <CardContent className="flex flex-col items-start gap-6 w-full p-0">
                  <div className="inline-flex h-6 items-center justify-center gap-2.5">
                    <span className="flex items-center justify-center text-azure text-lg tracking-[0.36px] leading-[normal] [font-family:'Lexend',Helvetica] font-normal">
                      <span className="text-[#3d96ff] tracking-[0.06px]">
                        [ {step.number} ]
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="inline-flex items-center gap-3">
                      <h3 className="font-normal text-2xl tracking-[0.96px] leading-9 [font-family:'Lexend',Helvetica] text-moon whitespace-nowrap">
                        {step.title}
                      </h3>
                    </div>
                    <p className="[font-family:'Lexend',Helvetica] font-normal text-platinum text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                      {step.description}
                    </p>
                  </div>

                  {step.image ? (
                    <img
                      className="w-full h-56"
                      alt="Process illustration"
                      src={step.image}
                    />
                  ) : (
                    <div className="flex flex-col items-start gap-4 w-full">
                      {earningFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 px-4 py-2 w-full border border-solid border-[#363636]"
                        >
                          <img
                            className="w-6 h-6"
                            alt={feature.label}
                            src={feature.icon}
                          />
                          <span className="[font-family:'Lexend',Helvetica] font-normal text-moon text-lg tracking-[0.36px] leading-7 whitespace-nowrap">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {index < processSteps.length - 1 && (
                <img
                  className="w-[72px]"
                  alt="Arrow"
                  src="/frame-1000007596.svg"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="flex items-center gap-8 p-8 w-full bg-black border border-solid border-[#363636]">
        <img
          className="w-[164px] h-[164px]"
          alt="Widget preview"
          src="/---------3.svg"
        />

        <CardContent className="flex flex-col items-start gap-4 flex-1 p-0">
          <div className="inline-flex items-center gap-3">
            <img
              className="w-6 h-6"
              alt="Coming soon icon"
              src="/frame-20.svg"
            />
            <Badge
              variant="outline"
              className="flex items-center justify-center [font-family:'Lexend',Helvetica] font-normal text-azure text-base tracking-[0.32px] leading-6 whitespace-nowrap bg-transparent border-none"
            >
              Coming soon
            </Badge>
          </div>

          <h3 className="font-32-AG font-[number:var(--32-AG-font-weight)] text-moon text-[length:var(--32-AG-font-size)] tracking-[var(--32-AG-letter-spacing)] leading-[var(--32-AG-line-height)] [font-style:var(--32-AG-font-style)]">
            STAKENOVA WIDGET - JUST COPY AND PASTE
          </h3>

          <p className="[font-family:'Lexend',Helvetica] font-normal text-platinum text-base tracking-[0.32px] leading-6 whitespace-nowrap">
            Install staking in 30 seconds, generate SOL today
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
