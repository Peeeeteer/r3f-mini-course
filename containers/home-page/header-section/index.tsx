import HeaderNav from "@/components/Navs/HeaderNav";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { FC } from "react";
import Brand from "../../../components/Brand";
import HeaderUserActions from "./user-actions";

interface HeaderSectionProps {
  user: User | null;
}

const HeaderSection: FC<HeaderSectionProps> = async ({ user }) => {
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
        <HeaderUserActions user={user} />
      </div>
    </header>
  );
};

export default HeaderSection;
