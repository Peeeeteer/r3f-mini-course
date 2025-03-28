"use client"
import { FC } from "react";

interface SubscribeBoxProps { }

const SubscribeBox: FC<SubscribeBoxProps> = ({ }) => {
  return (
    <section className="bg-[#202223] rounded-[26px] flex justify-center items-center h-full py-[65px] px-4">
      <h3 className="text-center text-2xl leading-7 font-bold text-white">
        More projects coming soon.
      </h3>
    </section>
  );
};

export default SubscribeBox;
