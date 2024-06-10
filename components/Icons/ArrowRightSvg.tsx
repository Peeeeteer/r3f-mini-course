interface ArrowRightSvgProps extends React.SVGProps<SVGSVGElement> {}

export default function ArrowRightSvg(props: ArrowRightSvgProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66675 8H13.3334M13.3334 8L9.33341 4M13.3334 8L9.33341 12"
        stroke={props.color || "white"}
        strokeWidth={props.strokeWidth || 1.5}
        strokeLinecap={props.strokeLinecap || "round"}
        strokeLinejoin={props.strokeLinejoin || "round"}
      />
    </svg>
  );
}
