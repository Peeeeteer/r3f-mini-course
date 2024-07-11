"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Stepper from "@/components/Stepper";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useAuthContext } from "@/contexts/AuthContext";
import { useMilestoneStore } from "@/store/useMilestoneStore";

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const params = usePathname();

  const { milestone } = useMilestoneStore();
  const { isAuthenticated } = useAuthContext()
  const { currentHint = 0, hints = [] } = milestone || {};

  // need to add logic for checking if the user is paid or not
  const isPaid = false;

  const handlePurchaseClick = useCallback(async () => {
    if (isAuthenticated) {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
      );
      if (!stripe) {
        return;
      }
      try {
        const response = await axios.post('/api/stripe/checkout', {
          priceId: 'price_1PP4DJGLPOPU9PEJ67Zo2mpJ'
        });
        const data = response.data;
        if (!data.ok) throw new Error('Something went wrong');
        await stripe.redirectToCheckout({
          sessionId: data.result.id
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigation.push('/auth/login')
    }
  }, [isAuthenticated])

  return (
    isPaid ? <div className="flex flex-col h-full">
      < div className="mb-6" >
        <Stepper
          activeStep={currentHint || 0}
          onChangeStep={(step) => {
            if (!milestone) return;
            const urlSplit = params.split("/");
            urlSplit.shift();
            urlSplit.pop();
            urlSplit.push(step.toLocaleLowerCase());
            const newUrl = urlSplit.join("/");
            navigation.push("/" + newUrl);
          }}
          steps={hints.map((hint) => hint?.label || "")}
        ></Stepper>
      </div >
      <div className="h-[calc(100dvh-290px)] overflow-y-auto scrollable -mr-4 pr-4">{children}</div>
      <FooterProcess />
    </div >
      :
      <div className="w-full h-full flex items-center justify-center">
        <PrimaryButton
          text="Purchase this project"
          type="button"
          className="rounded-md text-white border border-[#FFFFFF0F] bg-[#FFFFFF14]"
          onClick={handlePurchaseClick}
        />
      </div>
  );
}
