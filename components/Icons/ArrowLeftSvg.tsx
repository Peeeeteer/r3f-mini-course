interface ArrowLeftSvgProps extends React.SVGProps<SVGSVGElement> {}

export default function ArrowLeftSvg(props: ArrowLeftSvgProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6666 7.99967H3.33325M3.33325 7.99967L7.99992 12.6663M3.33325 7.99967L7.99992 3.33301"
        strokeOpacity={props.strokeOpacity || 1}
        stroke={props.stroke || "white"}
        strokeWidth={props.strokeWidth || 1.2}
        strokeLinecap={props.strokeLinecap || "round"}
        strokeLinejoin={props.strokeLinejoin || "round"}
      />
    </svg>
  );
}
