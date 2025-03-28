import HeaderNav from "@/components/Navs/HeaderNav";
import { HeaderNavs } from "@/containers/home-page/header-section/constants";
import Link from "next/link";
import { FC } from "react";
import Brand from "../../../components/Brand";
import { twMerge } from "tailwind-merge";

interface HeaderSectionProps extends React.HTMLAttributes<HTMLElement> { }

const HeaderSection: FC<HeaderSectionProps> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "w-full flex justify-center border-b border-[#303334] relative"
      )}
    >
      <div className="w-full">
        <div className="">
          <div className="w-full flex items-center">
            <div className="box-content px-[24px] py-6 w-[150px] border-r border-r-[#303334]">
              <Link href={"/"}>
                <Brand />
              </Link>
            </div>
            <nav className="py-6 flex gap-x-8 flex-1 justify-center">
              {HeaderNavs.map((el, _i) => (
                <HeaderNav
                  key={_i}
                  value={el.value}
                  id={el.id}
                  href={el.href}
                />
              ))}
            </nav>
            {/* Empty div to balance the layout */}
            <div className="box-content px-[24px] py-6 w-[150px] border-l border-l-[#303334]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
