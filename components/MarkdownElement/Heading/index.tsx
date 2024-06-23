export const Heading = {
  H1: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h1 className="text-[36px] leading-[40px] font-bold text-white" {...rest}>
      {children}
    </h1>
  ),
  H2: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h2 className="text-[34px] leading-[38px] font-bold text-white" {...rest}>
      {children}
    </h2>
  ),
  H3: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h2 className="text-[32px] leading-[36px] font-bold text-white" {...rest}>
      {children}
    </h2>
  ),
  H4: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h2 className="text-[30px] leading-[34px] font-bold text-white" {...rest}>
      {children}
    </h2>
  ),
  H5: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h5 className="text-[28px] leading-[32px] font-bold text-white" {...rest}>
      {children}
    </h5>
  ),
  H6: ({
    children,
    className,
    node,
    ...rest
  }: {
    children: React.ReactNode;
    node: any;
    className: string;
  }) => (
    <h6 className="text-[26px] leading-[30px] font-bold text-white">
      {children}
    </h6>
  ),
};
