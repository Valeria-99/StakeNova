import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

const navigationItems = [
  { label: "Dashboard" },
  { label: "Pools" },
  { label: "Create Pool" },
  { label: "Referral" },
  { label: "Widget" },
  { label: "Communities" },
  { label: "Gear" },
  { label: "V1." },
];

const statsData = [
  {
    value: "1 885+",
    label: "TOTAL STAKEDROPS",
  },
  {
    value: "$ 56 123, 45",
    label: "TOTAL USDC PAID OUT",
  },
  {
    value: "$5,1M",
    label: "TOTAL VALUE LOCKED",
  },
];

export const DepositEarn = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="flex h-24 items-center gap-8 px-56 py-6 relative w-full bg-black border-b border-[#363636]">
        <div className="flex items-center gap-8 relative flex-1">
          <img
            className="relative w-[272px] h-12"
            alt="Component"
            src="/component-283.svg"
          />

          <nav className="flex items-center relative flex-1">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-12 px-3 py-2 font-18 font-[number:var(--18-font-weight)] text-moon text-[length:var(--18-font-size)] tracking-[var(--18-letter-spacing)] leading-[var(--18-line-height)] [font-style:var(--18-font-style)] hover:bg-transparent"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="inline-flex items-center gap-4 relative">
            <Button
              variant="outline"
              className="h-12 gap-2 px-4 py-3 bg-black border-[#e8f3ff] font-btn font-[number:var(--btn-font-weight)] text-moon text-[length:var(--btn-font-size)] tracking-[var(--btn-letter-spacing)] leading-[var(--btn-line-height)] [font-style:var(--btn-font-style)]"
            >
              <div className="w-[34px] h-[34px] rounded-full border border-[#363636] [background:url(..//icon.png)_50%_50%_/_cover]" />
              PROFILE
              <ChevronDownIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center pt-0 pb-1 px-56 relative w-full border-b border-[#363636]">
        <div className="flex items-center gap-20 pt-16 pb-10 px-0 relative w-full">
          <div className="flex flex-col items-start gap-6 relative flex-1">
            <h1 className="relative self-stretch font-60-AG font-[number:var(--60-AG-font-weight)] text-moon text-[length:var(--60-AG-font-size)] tracking-[var(--60-AG-letter-spacing)] leading-[var(--60-AG-line-height)] [font-style:var(--60-AG-font-style)]">
              DEPOSIT SOL, <br />
              EARN USDC
            </h1>

            <p className="relative self-stretch font-18 font-[number:var(--18-font-weight)] text-platinum text-[length:var(--18-font-size)] tracking-[var(--18-letter-spacing)] leading-[var(--18-line-height)] [font-style:var(--18-font-style)]">
              Stake SOL and receive stable USDC yield, automatic, simple, and
              transparent
            </p>
          </div>

          <Card className="flex flex-col w-[860px] items-start relative border border-[#363636]">
            <CardContent className="flex flex-col items-start justify-center gap-4 px-8 py-11 relative w-full border-t border-b border-[#363636] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
              <div className="flex items-center justify-between w-full relative">
                <div className="relative flex items-center justify-center w-fit [font-family:'Lexend',Helvetica] font-normal text-moon text-lg leading-[18px]">
                  <span className="text-[#e8f3ff] tracking-[0.13px] leading-7">
                    [ NEXT USDC DEPOSIT //
                  </span>
                  <span className="text-[#3d96ff] tracking-[0.13px] leading-7">
                    {" "}
                    EPOCH #612{" "}
                  </span>
                  <span className="text-[#e8f3ff] tracking-[0.13px] leading-7">
                    ]
                  </span>
                </div>

                <div className="relative w-fit font-24-AG font-[number:var(--24-AG-font-weight)] text-azure text-[length:var(--24-AG-font-size)] tracking-[var(--24-AG-letter-spacing)] leading-[var(--24-AG-line-height)] whitespace-nowrap [font-style:var(--24-AG-font-style)]">
                  49.1233 %
                </div>
              </div>

              <div className="relative w-full h-3 bg-x8-azure rounded-[999999px] border border-[#363636]">
                <Progress
                  value={49.1233}
                  className="h-full bg-transparent [&>div]:bg-azure [&>div]:rounded-[9999999px]"
                />
              </div>
            </CardContent>

            <div className="flex items-center relative w-full">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-3 p-8 relative flex-1 ${
                    index < statsData.length - 1
                      ? "border-r border-[#363636]"
                      : ""
                  }`}
                >
                  <div className="relative w-fit font-32-AG font-[number:var(--32-AG-font-weight)] text-azure text-[length:var(--32-AG-font-size)] tracking-[var(--32-AG-letter-spacing)] leading-[var(--32-AG-line-height)] whitespace-nowrap [font-style:var(--32-AG-font-style)]">
                    {stat.value}
                  </div>

                  <div className="relative w-fit font-16-AG font-[number:var(--16-AG-font-weight)] text-moon text-[length:var(--16-AG-font-size)] tracking-[var(--16-AG-letter-spacing)] leading-[var(--16-AG-line-height)] whitespace-nowrap [font-style:var(--16-AG-font-style)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <img
          className="relative w-full h-[400px] object-cover"
          alt="Galaxy"
          src="/galaxy--1-1472x400.png"
        />

        <Button
          variant="default"
          className="inline-flex flex-col h-[296px] items-center justify-center gap-2.5 px-2 py-5 absolute top-[calc(50.00%_-_148px)] right-0 bg-azure hover:bg-azure/90"
        >
          <img className="relative w-6 h-6" alt="Image" src="/-------.svg" />
          <span className="relative w-fit ml-[-82.00px] mr-[-82.00px] -rotate-90 font-btn font-[number:var(--btn-font-weight)] text-black text-[length:var(--btn-font-size)] tracking-[var(--btn-letter-spacing)] leading-[var(--btn-line-height)] whitespace-nowrap [font-style:var(--btn-font-style)]">
            AWARDS &amp; NOMINEES
          </span>
        </Button>
      </div>
    </section>
  );
};
