"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main>
      <section className="flex w-full justify-center">
        <div className="flex text-center flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
          <h1 className="text-white max-w-[50rem] text-2xl  md:text-6xl font-bold">
            Payment Successful!
          </h1>
          <p className="text-white max-w-[50rem] text-2xl  md:text-6xl font-bold">
            Thank you for your purchase
          </p>
          <PrimaryButton
            onClick={() => router.push("/")}
            text="Home Page"
          ></PrimaryButton>
        </div>
      </section>
    </main>
  );
}
