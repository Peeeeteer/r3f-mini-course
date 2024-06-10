interface SearchLgSvgProps extends React.SVGProps<SVGSVGElement> {}
export default function SearchLgSvg(props?: SearchLgSvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(props || {})}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58329 1.66666C5.21104 1.66666 1.66663 5.21107 1.66663 9.58332C1.66663 13.9556 5.21104 17.5 9.58329 17.5C11.4692 17.5 13.2012 16.8405 14.5611 15.7396L16.9107 18.0892C17.2361 18.4147 17.7638 18.4147 18.0892 18.0892C18.4147 17.7638 18.4147 17.2362 18.0892 16.9107L15.7396 14.5611C16.8405 13.2012 17.5 11.4693 17.5 9.58332C17.5 5.21107 13.9555 1.66666 9.58329 1.66666ZM3.33329 9.58332C3.33329 6.13154 6.13151 3.33332 9.58329 3.33332C13.0351 3.33332 15.8333 6.13154 15.8333 9.58332C15.8333 13.0351 13.0351 15.8333 9.58329 15.8333C6.13151 15.8333 3.33329 13.0351 3.33329 9.58332Z"
        fill={props?.fill || "white"}
        fillOpacity={props?.fillOpacity || 0.32}
      />

    </svg>
  );
}
