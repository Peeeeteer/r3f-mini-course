import React, { FC } from "react";
import Link from "next/link";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import Brand from "../../../components/Brand";
import HamburgerButton from "@/components/Buttons/HamburgerButton";
import HeaderNav from "@/components/Navs/HeaderNav";
import HeaderUserActions from "./user-actions";
import { User } from "@supabase/supabase-js";
import { TUser } from "@/types/User";

interface HeaderSectionProps {
  user: User | null;
}

const HeaderSection: FC<HeaderSectionProps> = async ({ user }) => {
  const checkUser = async () => {
    return user as TUser | null;
  };

  const targetUser = await checkUser();
  return (
    <header className="w-full flex justify-center border-b border-[#FFFFFF1A] relative">
      <div className="w-full flex items-center justify-between">
        <div className="px-6 py-6 border-r border-[#303334] w-[250px]">
          <Link href={"/"}>
            <Brand />
          </Link>
        </div>
        <nav className=" gap-14  py-6 lg:flex">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
        <HeaderUserActions targetUser={targetUser} />
        <div className="flex py-6 lg:hidden">
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
