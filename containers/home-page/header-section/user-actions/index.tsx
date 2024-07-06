"use client";
import { BellSvg } from "@/components/Icons/BellSvg";
import { MessageQuestionSvg } from "@/components/Icons/MessageQuestionSvg";
import useClickOutside from "@/hooks/useClickOutside";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface HeaderUserActionsProps {}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({}) => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    let res = await supabase.auth.signOut();
    if (res) {
      toast.success("Successfully signed out!");
      router.push("/");
    }
  };
  const isDashboard = pathname === "/dashboard";
  // const ref = useRef(null);
  // useClickOutside(ref, () => {
  //   setIsOpen(false);
  // });

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, [supabase.auth]);

  return (
    <div
      className={`h-full flex items-center cursor-pointer hover:bg-[#1d202179]`}
    >
      <div className="flex w-full py-[30px]  relative h-full justify-center items-center border-l border-[#303334]">
        {user && (
          <div className="flex w-full items-center  px-[50px]">
            <div className="relative">
              <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full">
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
                  {isOpen && !isDashboard &&(
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-[#FFFFFF14] rounded-md shadow-xl z-20 max-w-[150px]">
                      <Link
                        href={"/dashboard"}
                        className="block px-3 py-1 text-sm text-white hover:bg-[#FFFFFF1A] w-full text-left"
                      >
                        Dashboard
                      </Link>
                      <button
                        className="block px-3 py-1 text-sm text-white hover:bg-[#FFFFFF1A]  w-full text-left"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {!user && (
          <Link
            href={"/auth/login"}
            className="w-full h-full flex justify-center items-center px-[50px]"
          >
            <div className="flex gap-x-4 w-fit items-center">
              <button className="text-white font-normal text-sm leading-5">
                Log in
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderUserActions;
