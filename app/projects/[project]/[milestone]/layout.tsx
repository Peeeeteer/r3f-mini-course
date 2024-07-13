"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Stepper from "@/components/Stepper";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useAuthContext } from "@/contexts/AuthContext";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { createClient } from "@/utils/supabase/client";
import { freeProjects } from "@/utils/constants";

type ProjectInfoType = {
  id: string;
  price_id: string;
  is_free: boolean;
  is_paid: boolean;
};

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const supabase = createClient();

  const { milestone } = useMilestoneStore();
  const { isAuthenticated, authUser } = useAuthContext();
  const { currentHint = 0, hints = [] } = milestone || {};
  const projectParam = params.project;

  const [projectInfo, setProjectInfo] = useState<ProjectInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const projectName = useMemo(
    () => (Array.isArray(projectParam) ? projectParam[0] : projectParam),
    [projectParam]
  );
  const isFree = freeProjects.includes(projectName);

  const getProjectInfo = useCallback(async () => {
    setIsLoading(true);
    const { data, error } = await supabase.rpc("get_project_info", {
      p_name: projectName,
    });
    setIsLoading(false);

    if (error) {
      console.error(
        "An error occurred while getting project infor from Supabase"
      );
    }

    setProjectInfo(data[0]);
  }, [projectName]);

  useEffect(() => {
    if (isAuthenticated && !isFree) {
      getProjectInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isFree]);

  // const isViewable = true
  const isViewable = useMemo(() => {
    if (isFree) return true;
    if (projectInfo?.is_paid) return true;
    return false;
  }, [projectInfo, isFree]);

  const handlePurchaseClick = useCallback(async () => {
    if (isAuthenticated) {
      if (projectInfo) {
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
        );
        if (!stripe) {
          return;
        }
        try {
          const response = await axios.post("/api/stripe/checkout", {
            priceId: projectInfo.price_id,
            projectId: projectInfo.id,
            userId: authUser?.id,
            projectName,
          });
          const data = response.data;
          if (!data.ok) throw new Error("Something went wrong");
          await stripe.redirectToCheckout({
            sessionId: data.result.id,
          });
        } catch (error) {
          console.log(error);
        }
      }
      {
        getProjectInfo();
      }
    } else {
      navigation.push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, projectInfo, authUser, projectName]);

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }
  if (isViewable) {
    return (
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <Stepper
            activeStep={currentHint || 0}
            onChangeStep={(step) => {
              if (!milestone) return;
              const urlSplit = pathname.split("/");
              urlSplit.shift();
              urlSplit.pop();
              urlSplit.push(step.toLocaleLowerCase());
              const newUrl = urlSplit.join("/");
              navigation.push("/" + newUrl);
            }}
            steps={hints.map((hint) => hint?.label || "")}
          ></Stepper>
        </div>
        <div className="h-[calc(100dvh-290px)] overflow-y-auto scrollable -mr-4 pr-4">
          {children}
        </div>
        <FooterProcess />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* <PrimaryButton
        text="Purchase this project"
        type="button"
        className="rounded-md text-white border border-[#FFFFFF0F] bg-[#FFFFFF14]"
        onClick={handlePurchaseClick}
      /> */}

      <div className="w-full bg-[#FFFFFF05] p-16 rounded-3xl flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[28px] leading-[32px] font-bold">
            This projects is <span className="text-[#635AFF]">paid</span>
          </h1>
          <p className="text-sm font-bold text-[#FFFFFF8F] mt-1 mb-[10px]">
            sorry about that
          </p>
          <p className="text-sm text-[#FFFFFF8F]">
            To see all the remaining
            <span className="text-[#FFFFFFE0] pl-1">10 milestones </span> you
            need to
            <span className="text-[#FFFFFFE0] pl-1">buy the full project</span>
          </p>
          <button
            onClick={handlePurchaseClick}
            className="py-3 mt-8 text-base bg-[#635AFF] rounded-full w-full max-w-[313px] text-white"
          >
            Buy for USD 4.99
          </button>
        </div>
      </div>
    </div>
  );
}
