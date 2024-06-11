"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { MilestoneStatus } from "@/types/Milestonne";
import { FC, useEffect, useRef, useState } from "react";

interface SidebarSelectProcessProps {
  name: string;
  status: MilestoneStatus;
  order: number;
}

const SidebarSelectProcess: FC<SidebarSelectProcessProps> = ({
  name,
  status,
  order,
}) => {
  const [selected, setSelected] = useState<MilestoneStatus>(status);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });
  return (
    <div
      className="relative inline-block text-left"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
      ref={ref}
      style={{ zIndex: order }}
    >
      <div
        className="text-sm mr-[2px] bg-[#03D0B0] w-6 h-5 rounded px-2 flex items-center justify-center text-white"
        id={name}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {selected}
      </div>
      {isOpen && (
        <div
          className="absolute left-0 z-10 mt-1 origin-top-right rounded bg-[#353434] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-6"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul className="py-1" role="none">
            <li
              className="block px-[6px] py-[2px] text-sm text-[#ffffffcc] hover:text-white"
              role="menuitem"
              tabIndex={-1}
              onClick={() => setSelected(MilestoneStatus.TO_DO)}
            >
              {MilestoneStatus.TO_DO}
            </li>
            <li
              className="block px-[6px] py-[2px] text-sm text-[#ffffffcc] hover:text-white"
              role="menuitem"
              tabIndex={-1}
              onClick={() => setSelected(MilestoneStatus.WORKING)}
            >
              {MilestoneStatus.WORKING}
            </li>
            <li
              className="block px-[6px] py-[2px] text-sm text-[#ffffffcc] hover:text-white"
              role="menuitem"
              tabIndex={-1}
              onClick={() => setSelected(MilestoneStatus.FINISHED)}
            >
              {MilestoneStatus.FINISHED}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarSelectProcess;
