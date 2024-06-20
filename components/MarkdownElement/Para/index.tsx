
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
  Ul: ({ children }: { children: any }) => (
    <ul className="text-base leading-[28px] font-normal text-white">
      {children}
    </ul>
  ),
  Li: ({ children }: { children: any }) => (
    <li className="text-base leading-[28px] font-normal text-white pl-4">
      {children}
    </li>
  ),
};
