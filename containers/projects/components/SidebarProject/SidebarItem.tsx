"use client";

import Link from "next/link";
import { FC, use, useMemo } from "react";
import SidebarSelectProcess from "./SidebarSelectProcess";
import { MilestoneStatus, TMilestone } from "@/types/Milestonne";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  milestone: TMilestone;
  order: number;
}

const SidebarItem: FC<SidebarItemProps> = ({ milestone, order }) => {
  const pathName = usePathname();

  const { currentHint, status, url, label } = milestone!;

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

  const isUrlActive = useMemo(() => {
    if (pathName === url) return true;
    const splitPath = pathName.split("/").slice(0, 4);
    const splitUrl = url.split("/").slice(0, 4);

    return splitPath.join("/") === splitUrl.join("/");
  }, [pathName, url]);

  return (
    <div
      className="cursor-pointer hover:bg-[#42424240] rounded-md"
      style={{
        backgroundColor: isUrlActive ? "#424242" : "",
      }}
    >
      <Link
        href={url}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}}
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
              <span className="text-white font-bold text-sm">{label}</span>
            </div>
          </div>
          <SidebarSelectProcess name={label} status={status} order={order} />
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
