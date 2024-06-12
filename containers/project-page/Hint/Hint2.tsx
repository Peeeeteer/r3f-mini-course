import { FC } from "react";

interface Hint1Props {
  title: string;
  description: string;
}

const Hint2: FC<Hint1Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-white font-bold text-lg">{title}</div>
      <div className="text-white text-sm">{description}</div>
    </div>
  );
};

export default Hint2;