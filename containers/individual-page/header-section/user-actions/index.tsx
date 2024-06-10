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
  const { user, handleUser } = useUserStore();
  const signOut = async () => {
    let res = await handleSignOut();
    if (res) {
      handleUser(null);
      toast.success("Successfully signed out!");
      router.push("/");
    }
  };

  const getUser = async () => {
    if (!user && targetUser) {
      handleUser(targetUser);
    }
  };
  useEffect(() => {
    console.log(targetUser);
    getUser();
  }, [targetUser]);

  return (
    <div className={`gap-6 justify-end `}>
      <div className={`flex relative flex-col ${user ? "flex" : "hidden"}`}>
        <Link href={"/checkout"}>
          <div className="flex">
            <Basket />
            <h1 className="text-secondaryColor font-bold">
              {user?.basket.length}
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex w-full">
        <div>
          {user ? (
            <div className="flex flex-col gap-3">
              <h1 className="text-primaryColor text-xl font-medium  border-primaryColor">
                {user.displayName.split(" ")[0]}
              </h1>
              <PrimaryButton
                onClick={signOut}
                text="Sign Out"
                className="!bg-secondaryColor !w-max !h-max !py-2"
              />
            </div>
          ) : (
            <div className="flex gap-x-4 w-fit items-center">
              <Link
                href={"/signin"}
                className="text-white font-normal text-sm leading-5"
              >
                Log in
              </Link>
              <button className="bg-[#635AFF] text-white py-[6px] px-3 rounded-md text-sm ">
                Sign up for free
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUserActions;
