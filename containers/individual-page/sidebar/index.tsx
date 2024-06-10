"use client";
import React, { FC } from "react";
import HeadPhoneSvg from "../../../components/Icons/HeadPhoneSvg";
import Link from "next/link";
import Brand from "@/components/Brand";
import IndividualSelectProcess from "./SidebarSelectProcess";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import SidebarItem from "./SidebarItem";
import SidebarProcess from "./SidebarProcess";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [headPhoneColor, setHeadPhoneColor] = React.useState<string>("#8996A9");
  const { totalMilestoneLeft, listMilestone, introduction } =
    useMilestoneStore();

  return (
    <div className="w-[250px] bg[#232627 ] max-w-[250px] h-screen fixed left-0 top-0 z-40 border-r border-[#303334] ">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-6 border-b  border-[#303334]">
            <Link href={"/"}>
              <Brand />
            </Link>
          </div>
          <Link href={introduction.url}>
            <div
              className="p-4 cursor-pointer relative "
              onMouseOver={() => setHeadPhoneColor("#635AFF")}
              onMouseLeave={() => setHeadPhoneColor("#8996A9")}
            >
              <div className="p-2 flex gap-x-3">
                <HeadPhoneSvg
                  stroke={headPhoneColor}
                  className="relative z-10"
                />
                <span className="text-white font-bold text-sm">
                  {introduction.displayName}
                </span>
              </div>
              <div className="absolute w-full h-full top-0 left-0 hover:bg-[#1d202179]"></div>
            </div>
          </Link>
          <div className="border-b border-[#303334] border-dashed mb-4"></div>
          <div className="pl-[14px] pr-[12px] flex flex-col gap-y-4">
            {(listMilestone === null ? [] : listMilestone)
              .filter(({ id }) => id !== "0")
              .map((milestone, index) => {
                return (
                  <SidebarItem
                    milestone={milestone}
                    order={listMilestone?.length - index}
                    key={milestone.id}
                  />
                );
              })}
          </div>
        </div>
        <SidebarProcess
          totalStep={listMilestone.length}
          totalMilestoneLeft={totalMilestoneLeft}
        />
      </div>
    </div>
  );
};

export default Sidebar;
