import { Logo } from "@/components/Icons/Logo";
import React, { FC } from "react";
import HeadPhoneSvg from "../../components/Icons/HeadPhoneSvg";
import Link from "next/link";
import Brand from "@/components/Brand";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="w-[250px] bg[#232627 ] max-w-[250px] h-screen fixed left-0 top-0 z-40 border-r border-[#303334] ">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-6 border-b  border-[#303334]">
            <Link href={"/"}>
              <Brand />
            </Link>
          </div>
          <div className="p-4">
            <div className="p-2 flex gap-x-3">
              <div className="">
                <HeadPhoneSvg />
              </div>
              <span className="text-white font-bold text-sm">
                Introductions
              </span>
            </div>
          </div>
          <div className="border-b border-[#303334] border-dashed mb-4"></div>
          <div className="px-4 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-x-[6px]">
                <input type="checkbox" className="hidden" id="toggle" />
                <label
                  htmlFor="toggle"
                  className="bg-[#CDF6EF] w-4 h-4 rounded-[3px] block m-1"
                ></label>
                <div className="flex gap-x-3">
                  <span className="text-white font-bold text-sm">
                    Milestones
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm bg-[#03D0B0] w-6 h-5 rounded px-2 flex items-center justify-center text-white">
                  V
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-x-[6px]">
                <input type="checkbox" className="hidden" id="toggle" />
                <label
                  htmlFor="toggle"
                  className="bg-[#68E3CF] w-4 h-4 rounded-[3px] block m-1"
                ></label>
                <div className="flex gap-x-3">
                  <span className="text-white font-bold text-sm">
                    Milestones 2
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm bg-[#FFFFFF1A] w-6 h-5 rounded px-2 flex items-center justify-center text-white56">
                  W
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#2B2F30] rounded-lg mx-2">
            <div className="p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white text-sm font-bold">Progress</p>
                <p className="text-[#8996A9] text-sm text-right">
                  9 milestones left
                </p>
              </div>
              <div className="p-[3px] mb-[10px]">
                <div className="bg-[#FF5A50] h-[6px] w-1/3 rounded-full"></div>
              </div>
              <button className=" flex justify-center items-center border border-[#3C404B] text-white rounded-md px-3 py-[6px] w-full gap-x-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16643 7.33327L2.83309 13.6666M9.84537 2.35892C10.6574 2.89772 11.4379 3.53294 12.1672 4.26227C12.9028 4.99788 13.5427 5.78554 14.0845 6.60511M6.66974 5.26403L4.75316 4.62517C4.53243 4.5516 4.28932 4.59842 4.11171 4.7487L2.20694 6.36043C1.81699 6.69039 1.92777 7.31833 2.40709 7.49492L4.21189 8.15985M8.28712 12.235L8.95205 14.0398C9.12864 14.5191 9.75658 14.6299 10.0865 14.2399L11.6983 12.3351C11.8486 12.1575 11.8954 11.9144 11.8218 11.6937L11.1829 9.77711M13.3988 1.51376L10.1278 2.05892C9.77463 2.11779 9.45067 2.29139 9.20605 2.55288L4.79734 7.26564C3.65456 8.48723 3.68635 10.3949 4.86918 11.5778C6.05202 12.7606 7.95974 12.7924 9.18132 11.6496L13.8941 7.24091C14.1556 6.99629 14.3292 6.67233 14.388 6.31913L14.9332 3.04815C15.0836 2.14572 14.3012 1.36335 13.3988 1.51376Z"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-sm font-medium">Talk on Discord</span>
              </button>
            </div>
          </div>
          <p className="mb-4 text-[#8996A9] tracking-[0.2px] text-xs text-center">
            2024 justcode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
