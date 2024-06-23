"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Basket } from "@/components/Icons/Basket";
import { Profile } from "@/components/Icons/Profile";
import { handleSignOut } from "@/db/auth";
import { useUserStore } from "@/store/useUserStore";
import { TUser } from "@/types/User";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface HeaderUserActionsProps {
  targetUser?: TUser;
}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({ targetUser }) => {
  const router = useRouter();

  return (
    <div
      className={`border-l border-[#FFFFFF1A] h-full flex items-center cursor-pointer hover:bg-[#1d202179]`}
    >
      <div className="">
        <div className="flex w-full px-[50px] relative">
          <div>
            <div className="flex gap-x-4 w-fit items-center">
              <Link
                href={"/auth/login"}
                className="text-white font-normal text-sm leading-5"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUserActions;
