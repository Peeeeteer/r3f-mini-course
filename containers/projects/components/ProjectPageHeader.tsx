"use client";

import { useMilestoneStore } from "@/store/useMilestoneStore";
import { TUser } from "@/types/User";
import { User } from "@supabase/supabase-js";
import React, { FC } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface ProjectPageHeaderSectionProps
  extends React.HTMLAttributes<HTMLElement> {}

const ProjectPageHeaderSection: FC<ProjectPageHeaderSectionProps> = ({
  className,
}) => {
  const { milestone } = useMilestoneStore();

  return (
    <header
      className={twMerge(
        "w-full bg-bgGray flex justify-center border-b border-[#FFFFFF1A] sticky top-0 left-0 z-[41]",
        className
      )}
    >
      <div className="w-full flex items-center">
        <nav className="p-6 flex items-center gap-x-1 h-[80px]">
          <span className="text-[#9CA3AF]">{milestone?.label}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
              stroke="#9CA3AF"
              strokeWidth="1.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#f3f4f6] hover:text-[#f3f4f6c2] text-sm font-medium cursor-pointer">
            {milestone?.description}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default ProjectPageHeaderSection;
