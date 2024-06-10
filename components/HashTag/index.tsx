import { useMemo } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface HashTagProps {
  type: "purple" | "yellow" | "danger";
}

export default function HashTag(props: HashTagProps) {
  const bgColor = useMemo(() => {
    switch (props.type) {
      case "purple":
        return "bg-lightPurple";
      case "yellow":
        return "bg-lightYellow";
      case "danger":
        return "bg-orangeRed";
      default:
        return "bg-lightPurple";
    }
  }, [props?.type]);

  return (
    <div className={twJoin(`${bgColor}`, "p-[6px] rounded-[9px]")}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8333 19.8333L25.6666 14L19.8333 8.16667M8.16659 8.16667L2.33325 14L8.16659 19.8333M16.3333 3.5L11.6666 24.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
