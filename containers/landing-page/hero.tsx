import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function HeroLandingPage() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Lấy vị trí cuộn hiện tại của window
      if (scrollPosition >= 80) {
        setHeaderBackground(true); // Đổi background nếu scroll đến độ cao 80px
      } else {
        setHeaderBackground(false); // Ngược lại, quay lại background ban đầu
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
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
  );
}
