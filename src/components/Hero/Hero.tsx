import { useEffect, useState } from "react";
import { ProgressBar } from "../common/ProgressBar";
import { HERO_PROGRESS_TARGET } from "./hero.data";


export const Hero = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(HERO_PROGRESS_TARGET);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="container grid md:grid-cols-2 gap-12 py-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">
          Stake smarter with StakeNova
        </h1>

        <p className="text-lg opacity-70">
          A next-generation yield engine for decentralized finance
        </p>

        <ProgressBar value={progress} />
      </div>

      {/* Spline */}
      <iframe
        src="https://my.spline.design/scene"
        className="w-full h-[420px]"
        title="StakeNova 3D Scene"
      />
    </section>
  );
};
