import { Card, CardContent } from "../ui/card";
import { STEPS } from "./howToEarn.data";

const steps = [
  {
    number: "01",
    title: "DEPOSIT",
    description: "Deposit SOL tokens",
    icon: "/---------2.svg",
  },
  {
    number: "02",
    title: "WAIT 1 EPOCH",
    description: "Wait approximately 2 days",
    icon: "/---------1.svg",
  },
  {
    number: "03",
    title: "CLAIM USDC",
    description: "Receive your stable yield rewards",
    icon: "/--------.svg",
  },
];

export const HowToEarn = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-20 px-56 py-[100px] border-b border-jet">
      <div className="flex flex-col items-start justify-center gap-4 flex-1">
        <h2 className="self-stretch font-32-AG font-[number:var(--32-AG-font-weight)] text-moon text-[length:var(--32-AG-font-size)] tracking-[var(--32-AG-letter-spacing)] leading-[var(--32-AG-line-height)] [font-style:var(--32-AG-font-style)]">
          HOW TO EARN
        </h2>
        <p className="[font-family:'Lexend',Helvetica] font-normal text-platinum text-base tracking-[0.32px] leading-6">
          Follow these simple steps to start earning
        </p>
      </div>

      <div className="flex flex-col max-w-[860px] w-full items-start justify-center">
        {steps.map((step, index) => (
          <Card
            key={step.number}
            className="w-full border-0 border-b border-jet rounded-none bg-transparent last:border-b"
          >
            <CardContent className="flex items-center gap-8 p-8">
              <div className="flex flex-col items-start gap-6 flex-1">
                <div className="inline-flex h-6 items-center justify-center">
                  <span className="[font-family:'Lexend',Helvetica] font-normal text-azure text-lg tracking-[0.36px]">
                    [ {step.number} ]
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="font-24-AG font-[number:var(--24-AG-font-weight)] text-moon text-[length:var(--24-AG-font-size)] tracking-[var(--24-AG-letter-spacing)] leading-[var(--24-AG-line-height)] [font-style:var(--24-AG-font-style)] whitespace-nowrap">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Lexend',Helvetica] font-normal text-platinum text-base tracking-[0.64px] leading-7 whitespace-nowrap">
                    {step.description}
                  </p>
                </div>
              </div>

              <img
                className="w-[120px] h-[120px]"
                alt={step.title}
                src={step.icon}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
