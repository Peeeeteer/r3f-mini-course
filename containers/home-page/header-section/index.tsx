import HeaderNav from "@/components/Navs/HeaderNav";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { FC } from "react";
import Brand from "../../../components/Brand";
import HeaderUserActions from "./user-actions";
import { twMerge } from "tailwind-merge";

interface HeaderSectionProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderSection: FC<HeaderSectionProps> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "w-full flex justify-center border-b border-[#303334] relative"
      )}
    >
      <div className="max-w-[1440px] w-full">
        <div className="">
          <div className="w-full flex items-center justify-between ">
            <div className="box-content px-[46px] py-6 w-[150px] border-r border-r-[#303334]">
              <Link href={"/"}>
                <Brand />
              </Link>
            </div>
            <nav className="py-6 flex gap-x-8">
              {HeaderNavs.map((el, _i) => (
                <HeaderNav
                  key={_i}
                  value={el.value}
                  id={el.id}
                  href={el.href}
                />
              ))}
            </nav>
            <HeaderUserActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
