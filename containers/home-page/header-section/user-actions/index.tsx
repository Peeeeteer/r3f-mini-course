"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";

interface HeaderUserActionsProps {}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { authUser: user } = useAuthContext();
  const isDashboard = pathname === "/dashboard";

  return (
    <div
      className={`h-full flex items-center cursor-pointer hover:bg-[#1d202179]`}
    >
      <div className="flex w-full relative h-full justify-center items-center border-l border-[#303334]">
        <Link href={"/dashboard"} className="py-[24px] px-[50px]">
          <div className="flex w-full items-center">
            <div className="relative">
              <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full">
                  <div className="w-8 h-8 rounded-full">
                    <Image
                      src={user?.user_metadata?.avatar_url}
                      alt="avatar"
                      fill
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderUserActions;
