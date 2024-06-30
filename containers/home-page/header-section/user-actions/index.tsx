"use client";
import { BellSvg } from "@/components/Icons/BellSvg";
import { MessageQuestionSvg } from "@/components/Icons/MessageQuestionSvg";
import { handleSignOut } from "@/db/auth";
import useClickOutside from "@/hooks/useClickOutside";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";
import { toast } from "react-toastify";

interface HeaderUserActionsProps {
  user?: User | null;
}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({
  user
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    let res = await handleSignOut();
    if (res) {
      toast.success("Successfully signed out!");
      router.push("/");
    }
  };

  const ref = useRef(null);
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`border-l border-[#FFFFFF1A] h-full flex items-center cursor-pointer hover:bg-[#1d202179]`}
      style={{
        backgroundColor: isOpen ? "transparent" : "",
      }}
    >
      <div className="">
        <div className="flex w-full px-[50px] relative">
          {user && (
            <div className="flex w-full items-center gap-x-3">
              <div className="flex items-center w-full">
                <div className="p-2">
                  <MessageQuestionSvg />
                </div>
                <div className="p-2">
                  <BellSvg />
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-x-3 items-center">
                  <div className="bg-[#1A1E23] w-[1px] h-6"></div>
                  <div className="relative w-8 h-8 rounded-full" ref={ref}>
                    <button
                      onClick={toggleDropdown}
                      className="w-8 h-8 rounded-full"
                    >
                      <Image
                        src={user?.user_metadata?.avatar_url}
                        alt="avatar"
                        fill
                        className="rounded-full"
                      />
                    </button>
                    {isOpen && (
                      <div className="absolute right-0 mt-2 py-2 w-48 bg-[#FFFFFF14] rounded-md shadow-xl z-20 max-w-[150px]">
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm text-white hover:bg-[#FFFFFF1A]"
                          onClick={handleLogout}
                        >
                          Sign out
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {!user && (
            <Link href={"/auth/login"}>
              <div className="flex gap-x-4 w-fit items-center">
                <button className="text-white font-normal text-sm leading-5">
                  Log in
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUserActions;
