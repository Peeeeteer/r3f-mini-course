interface CurrencyDollarCircleSvgProps extends React.SVGProps<SVGSVGElement> {}

export default function CurrencyDollarCircleSvg(
  props: CurrencyDollarCircleSvgProps
) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.08335 12.2222C7.08335 13.2961 7.95391 14.1667 9.0278 14.1667H10.8334C11.9839 14.1667 12.9167 13.2339 12.9167 12.0833C12.9167 10.9327 11.9839 9.99999 10.8334 9.99999H9.16669C8.01609 9.99999 7.08335 9.06725 7.08335 7.91666C7.08335 6.76606 8.01609 5.83332 9.16669 5.83332H10.9722C12.0461 5.83332 12.9167 6.70388 12.9167 7.77777M10 4.58332V5.83332M10 14.1667V15.4167M18.3334 9.99999C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 9.99999C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 9.99999Z"
        strokeOpacity={props?.strokeOpacity || 1}
        stroke={props?.color || "white"}
        strokeWidth={props?.strokeWidth || 1.2}
        strokeLinecap={props?.strokeLinecap || "round"}
        strokeLinejoin={props?.strokeLinejoin || "round"}
      />
    </svg>
  );
}
