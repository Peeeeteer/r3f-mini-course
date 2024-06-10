interface ClockSvgProps extends React.SVGProps<SVGSVGElement> {}

export default function ClockSvg(props?: ClockSvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 4.99999V9.99999L13.3333 11.6667M18.3333 9.99999C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 9.99999C1.66663 5.39762 5.39759 1.66666 9.99996 1.66666C14.6023 1.66666 18.3333 5.39762 18.3333 9.99999Z"
        strokeOpacity={props?.strokeOpacity || 1}
        stroke={props?.color || "white"}
        strokeWidth={props?.strokeWidth || 1.2}
        strokeLinecap={props?.strokeLinecap || "round"}
        strokeLinejoin={props?.strokeLinejoin || "round"}
      />
    </svg>
  );
}
