import React, { FC } from "react";
import Link from "next/link";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import Brand from "../../../components/Brand";
import HamburgerButton from "@/components/Buttons/HamburgerButton";
import HeaderNav from "@/components/Navs/HeaderNav";
import HeaderUserActions from "./user-actions";
import { User } from "@supabase/supabase-js";
import { TUser } from "@/types/User";

interface HeaderIndividualSectionProps {
  user: User | null;
}

const HeaderIndividualSection: FC<HeaderIndividualSectionProps> = async ({
  user,
}) => {
  const checkUser = async () => {
    return user as TUser | null;
  };

  const targetUser = await checkUser();
  return (
    <header className="w-full bg-[#232627] flex justify-center border-b border-[#FFFFFF1A]  sticky top-0 left-0 z-[41] ">
      <div className="w-full flex items-center justify-between">
        <nav className="p-6 flex items-center gap-x-1">
          <span className="text-[#9CA3AF]">Milestone 1</span>
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
          <span className="text-[#F3F4F6] text-sm font-medium">Make a Navbar</span>
        </nav>
        <div className="border-l border-l-[#303334] py-6 pr-6 pl-8 ">
          <HeaderUserActions targetUser={targetUser} />
        </div>
      </div>
    </header>
  );
};

export default HeaderIndividualSection;
