interface CodeBrowserSvgProps extends React.SVGProps<SVGSVGElement> {}
export default function CodeBrowserSvg(props?: CodeBrowserSvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 7.5H1.66663M11.6666 14.5833L13.75 12.5L11.6666 10.4167M8.33329 10.4167L6.24996 12.5L8.33329 14.5833M1.66663 6.5L1.66663 13.5C1.66663 14.9001 1.66663 15.6002 1.93911 16.135C2.17879 16.6054 2.56124 16.9878 3.03165 17.2275C3.56643 17.5 4.26649 17.5 5.66662 17.5H14.3333C15.7334 17.5 16.4335 17.5 16.9683 17.2275C17.4387 16.9878 17.8211 16.6054 18.0608 16.135C18.3333 15.6002 18.3333 14.9001 18.3333 13.5V6.5C18.3333 5.09987 18.3333 4.3998 18.0608 3.86502C17.8211 3.39462 17.4387 3.01217 16.9683 2.77248C16.4335 2.5 15.7334 2.5 14.3333 2.5L5.66663 2.5C4.2665 2.5 3.56643 2.5 3.03165 2.77248C2.56124 3.01217 2.17879 3.39462 1.93911 3.86502C1.66663 4.3998 1.66663 5.09987 1.66663 6.5Z"
        strokeOpacity={props?.strokeOpacity || 1}
        stroke={props?.color || "white"}
        strokeWidth={props?.strokeWidth || 1.2}
        strokeLinecap={props?.strokeLinecap || "round"}
        strokeLinejoin={props?.strokeLinejoin || "round"}
      />
    </svg>
  );
}
