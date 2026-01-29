import { ProgressBar } from "../../../../components/common/ProgressBar";

export const HeroSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="grid md:grid-cols-2 gap-10">
      <div>
        <h1>Stake smarter with StakeNova</h1>
        <p>The next generation yield engine</p>

        <ProgressBar value={progress} />
      </div>

      <iframe
        src="https://my.spline.design/..."
        className="w-full h-[400px]"
      />
    </section>
  );
};
