"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface HeaderUserActionsProps {}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({}) => {
  const supabase = createClient();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { isAuthenticated, authUser: user } = useAuthContext();

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

  return (
    <div
      className={`h-full flex items-center cursor-pointer hover:bg-[#1d202179]`}
    >
      <div className="flex w-full relative h-full justify-center items-center border-l border-[#303334]">
        {isAuthenticated ? (
          <Link href={"/dashboard"} className="py-[30px]  px-[50px] ">
            <div className="flex w-full items-centerpx-[50px]">
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
                    {/* {isOpen && !isDashboard && (
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
                  )} */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link
            href={"/auth/login"}
            className="w-full h-full py-[30px]  flex justify-center items-center px-[50px]"
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
