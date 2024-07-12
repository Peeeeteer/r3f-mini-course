"use client";
import GithubSvg from "@/components/Icons/GithubSvg";
import { login } from "./action";
import { useFormState, useFormStatus } from "react-dom";
import { Suspense, useState } from "react";
import Loading from "@/components/Loading";

export default function Login() {
  // State to manage loading
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Start loading
    try {
      await login(); // Attempt to log in
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false); // Stop loading after login attempt
    }
  };

  return (
    <>
      <form className="relative">
        {isLoading && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">
              <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
          </>
        )}
        <main className="min-h-screen relative flex justify-center items-center flex-col  w-full">
          <div className="max-w-[548px] w-full flex flex-col">
            <h3 className="text-[32px] leading-9 font-medium text-white mb-[48px] text-center">
              Log in
            </h3>
            <div className="flex flex-col bg-[#FFFFFF14] border border-[#FFFFFF0F] p-[48px] pb-[40px] rounded-2xl gap-y-[10px] relative">
              <div
                className="bg absolute w-full h-full top-0 left-0"
                style={{
                  backgroundImage: "url(/login/dot.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "56px",
                  zIndex: 0,
                }}
              ></div>
              <div className="flex justify-center items-center  bg-[#FFFFFF14] rounded-lg cursor-pointer z-10 hover:ring-2 hover:ring-gray-300">
                <button
                  className="w-full text-white text-sm cursor-pointer py-[10px] px-[40px] flex justify-center items-center gap-x-2"
                  onClick={handleLogin}
                  disabled={isLoading} // Disable the button while loading
                >
                  <GithubSvg />
                  <span>
                    {isLoading ? "Loading..." : "Continue with Github"}
                  </span>
                </button>
              </div>
              {/* <div className="flex justify-center items-center gap-x-2 bg-[#0052CC] py-[10px] px-[40px] rounded-lg cursor-pointer z-10">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.42 9.1875C17.42 8.6025 17.3675 8.04 17.27 7.5H9.5V10.6913H13.94C13.7488 11.7225 13.1675 12.5963 12.2938 13.1813V15.2512H14.96C16.52 13.815 17.42 11.7 17.42 9.1875Z"
                    fill="white"
                  />
                  <path
                    d="M9.50043 17.2509C11.7279 17.2509 13.5954 16.5121 14.9604 15.2521L12.2942 13.1821C11.5554 13.6771 10.6104 13.9696 9.50043 13.9696C7.35168 13.9696 5.53293 12.5184 4.88418 10.5684H2.12793V12.7059C3.48543 15.4021 6.27543 17.2509 9.50043 17.2509Z"
                    fill="white"
                  />
                  <path
                    d="M4.88375 10.5675C4.71875 10.0725 4.625 9.54373 4.625 8.99998C4.625 8.45623 4.71875 7.92748 4.88375 7.43248V5.29498H2.1275C1.55 6.44463 1.24949 7.71344 1.25 8.99998C1.25 10.3312 1.56875 11.5912 2.1275 12.705L4.88375 10.5675Z"
                    fill="white"
                  />
                  <path
                    d="M9.50043 4.03125C10.7117 4.03125 11.7992 4.4475 12.6542 5.265L15.0204 2.89875C13.5917 1.5675 11.7242 0.75 9.50043 0.75C6.27543 0.75 3.48543 2.59875 2.12793 5.295L4.88418 7.4325C5.53293 5.4825 7.35168 4.03125 9.50043 4.03125Z"
                    fill="white"
                  />
                </svg>

                <button className="text-white text-sm" >
                  Continue with Google
                </button>
              </div>
              <div className="flex justify-center items-center gap-x-2 bg-[#6B4FBB] py-[10px] px-[40px] rounded-lg cursor-pointer z-10">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_644_7401)">
                    <path
                      d="M9.50155 18.3239L12.8339 8.05774H6.17407L9.50155 18.3239Z"
                      fill="white"
                    />
                    <path
                      d="M1.50659 8.05774L0.491816 11.1767C0.399987 11.46 0.499156 11.7726 0.741532 11.9491L9.50164 18.3239L1.50659 8.05774Z"
                      fill="#DDE4EE"
                    />
                    <path
                      d="M1.50684 8.05772H6.17435L4.16558 1.87488C4.06277 1.55855 3.61472 1.55855 3.50821 1.87488L1.50684 8.05772Z"
                      fill="white"
                    />
                    <path
                      d="M17.5019 8.05756L18.513 11.1766C18.6048 11.4598 18.5057 11.7724 18.2633 11.9489L9.50195 18.3237L17.5019 8.05756Z"
                      fill="#DDE4EE"
                    />
                    <path
                      d="M17.5015 8.05772H12.834L14.8391 1.87488C14.9419 1.55855 15.3899 1.55855 15.4964 1.87488L17.5015 8.05772Z"
                      fill="white"
                    />
                    <path
                      d="M9.50195 18.3237L12.8343 8.05756H17.5019L9.50195 18.3237Z"
                      fill="#F1F5F9"
                    />
                    <path
                      d="M9.50183 18.3237L1.50684 8.05756H6.17435L9.50183 18.3237Z"
                      fill="#F1F5F9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_644_7401">
                      <rect
                        width="18"
                        height="18.7326"
                        fill="white"
                        transform="translate(0.5 0.633728)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <button className="text-white text-sm">
                  Continue with Discord
                </button>
              </div> */}
              <p className="mt-[6px] text-white text-center">justcode</p>
            </div>
          </div>
        </main>
      </form>
    </>
  );
}
