interface TechCardProps {
  tech: string;
  icon: (props: any) => JSX.Element;
  progress: number;
}

export const TechCard = ({
  tech,
  icon: Icon,
  progress = 50,
}: TechCardProps) => {
  const progressBarBackground = `linear-gradient(90deg, #007BFF ${progress}%, transparent ${progress}%)`;

  const progressAnimation = {
    animation: "fillProgressBar 1.2s linear forwards",
    animationDelay: "0.1s",
    width: "0%",
  };
  return (
    <div
      className="flex items-center gap-2 p-1 font-medium transition rounded-lg"
      style={{ background: progressBarBackground, ...progressAnimation }}
    >
      <div className="bg-black/[0.7] p-2 tracking-wider text-white rounded-full dark:text-white/70">
        <Icon />
      </div>
      <p className="max-w-full overflow-hidden select-none whitespace-nowrap text-ellipsis">
        {tech}
      </p>
    </div>
  );
};
