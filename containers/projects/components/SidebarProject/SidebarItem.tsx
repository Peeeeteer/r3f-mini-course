"use client";

import Link from "next/link";
import { FC, use, useMemo } from "react";
import SidebarSelectProcess from "./SidebarSelectProcess";
import { MilestoneStatus, TMilestone } from "@/types/Milestonne";
import { useMilestoneStore } from "@/store/useMilestoneStore";

interface SidebarItemProps {
  milestone: TMilestone;
  order: number;
}

const SidebarItem: FC<SidebarItemProps> = ({ milestone, order }) => {
  const { displayName, status, url } = milestone;
  const { handleMilestone } = useMilestoneStore();
  const bgColor = useMemo(() => {
    switch (status) {
      case MilestoneStatus.TO_DO:
        return "#CDF6EF";
      case MilestoneStatus.FINISHED:
        return "#4BB74A";
      case MilestoneStatus.WORKING:
        return "#68E3CF";
      default:
        return "#CDF6EF";
    }
  }, [status]);

  return (
    <div className="cursor-pointer hover:bg-[#42424240] rounded-md">
      <Link
        href={url}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          handleMilestone(milestone);
        }}
      >
        <div className="flex justify-between items-center p-[2px]">
          <div className="flex justify-between items-center gap-x-[6px]">
            <label
              className="w-4 h-4 rounded-[3px] block m-1 ml-[2px]"
              style={{
                backgroundColor: bgColor,
              }}
            ></label>
            <div className="flex gap-x-3">
              <span className="text-white font-bold text-sm">
                {displayName}
              </span>
            </div>
          </div>
          <SidebarSelectProcess
            name={displayName}
            status={status}
            order={order}
          />
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
