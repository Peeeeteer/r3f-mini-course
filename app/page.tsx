"use client";
import FaceWithTearSvg from "@/components/Icons/FaceWithTearSvg";
import HeaderSection from "@/containers/home-page/header-section";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { twJoin } from "tailwind-merge";

export default function LandingPage() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  const [headerBackground, setHeaderBackground] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 80) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, [supabase.auth]);
  return (
    <div className="w-full relative">
      <HeaderSection
        user={user}
        className={twJoin(
          "sticky top-0 left-0 z-10",
          headerBackground ? "bg-[#040404]" : ""
        )}
      />
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url(/landing-page/landing-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url(/landing-page/bg-grid.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] relative flex flex-col justify-center items-center">
          <section ref={sectionRef} className="min-h-[900px]">
            <div className="pt-[112px] flex justify-center flex-col items-center gap-y-8">
              <h1 className="text-white text-[56px] leading-[72px] font-bold text-center ">
                No tutorials, No courses <br /> just code{" "}
                <span className="text-[#FFFFFF8F]">lol</span>
              </h1>
              <Image
                src="/landing-page/bg1.png"
                alt="hero"
                width={509}
                height={400}
              />
              <button className="bg-[#DF424C] mt-2 rounded-lg text-white text-5xl leading-[60px] py-4 px-10 font-nanumPenScript">
                Coding is hard
              </button>
            </div>
          </section>
          <section className="min-h-[900px] pt-[140px]">
            <div className="flex justify-center flex-col items-center gap-y-8">
              <h1 className="text-white text-[56px] leading-[72px] font-bold text-center ">
                And that shit makes me sad
              </h1>
              <Image
                src="/landing-page/bg1.png"
                alt="hero"
                width={509}
                height={400}
              />
              <button className="bg-[#0059AB] gap-x-3 flex items-center rounded-lg text-white text-5xl leading-[60px] py-4 px-10 font-nanumPenScript">
                <span>i&apos;m sad</span>
                <FaceWithTearSvg />
              </button>
            </div>
          </section>
          <section className="min-h-[900px] ">
            <div className="pt-[108px] flex justify-center flex-col items-center gap-y-8">
              <h1 className="text-white text-[56px] leading-[72px] font-bold text-center ">
                but there is a solution
                <br />
                and its simple
              </h1>
              <Image
                src="/landing-page/bg1.png"
                alt="hero"
                width={509}
                height={400}
              />
              <button className="bg-[#03D0B0] gap-x-3 flex items-center rounded-lg text-white text-5xl leading-[60px] py-4 px-10 font-nanumPenScript">
                <span>The solution</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
