import HeaderNav from "@/components/Navs/HeaderNav";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { FC } from "react";
import Brand from "../../../components/Brand";
import HeaderUserActions from "./user-actions";
import { twMerge } from "tailwind-merge";

interface HeaderSectionProps extends React.HTMLAttributes<HTMLElement> {
  user: User | null;
}

const HeaderSection: FC<HeaderSectionProps> = ({ user, className }) => {
  return (
    <header
      className={twMerge(
        "w-full flex justify-center border-b border-[#FFFFFF1A] relative",
        className
      )}
    >
      <div className="w-full flex items-center justify-between max-w-[1440px]">
        <div className="px-6 py-6 w-[250px]">
          <Link href={"/"}>
            <Brand />
          </Link>
        </div>
        <nav className=" gap-14 py-6 lg:flex">
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
