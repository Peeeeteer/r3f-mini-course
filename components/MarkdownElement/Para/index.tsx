
export const Para = {
  P: ({ children }: { children: any }) => (
    <p className="text-base leading-[28px] font-normal text-white">
      {children}
    </p>
  ),
  Span: ({ children }: { children: any }) => (
    <span className="text-base leading-[28px] font-normal text-white">
      {children}
    </span>
  ),
  Ul: ({ children, ...props }: { children: any }) => {
    return (
      <ul className="list-disc text-base leading-[28px] font-normal text-white pl-5">
      {children}
    </ul>
    )
  },
  Li: ({ children }: { children: any }) => (
    <li className="text-base leading-[28px] font-normal text-white ">
      {children}
    </li>
  ),
  Href: ({ children, href }: { children: any; href: string }) => (
    <a
      className="text-base leading-[28px] font-normal text-white underline hover:text-[#FFD700]"
      href={href}
    >
      {children}
    </a>
  ),
};
