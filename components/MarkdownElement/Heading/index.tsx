export const Heading = {
  H1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-[36px] leading-[40px] font-bold text-white">{children}</h1>
  ),
  H2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-[34px] leading-[38px] font-bold text-white">{children}</h2>
  ),
  H3: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-[32px] leading-[36px] font-bold text-white">{children}</h2>
  ),
  H4: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-[30px] leading-[34px] font-bold text-white">{children}</h2>
  ),
  H5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-[28px] leading-[32px] font-bold text-white">{children}</h5>
  ),
    H6: ({ children }: { children: React.ReactNode }) => (
        <h6 className="text-[26px] leading-[30px] font-bold text-white">{children}</h6>
    ),
};
