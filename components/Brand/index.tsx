import { Logo } from "@/components/Icons/Logo";
import React, { FC } from "react";

interface BrandProps {}

const Brand: FC<BrandProps> = ({}) => {
  return (
    <div className="flex gap-3 items-center w-40">
      <Logo />
      <h1 className="text-white text-xl leading-8 font-bold">justcode</h1>
    </div>
  );
};

export default Brand;
