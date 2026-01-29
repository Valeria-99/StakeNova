type Props = {
  value: number;
};

export const ProgressBar = ({ value }: Props) => {
  return (
    <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-emerald-500 transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
