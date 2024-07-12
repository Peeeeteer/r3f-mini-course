"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Stepper from "@/components/Stepper";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useAuthContext } from "@/contexts/AuthContext";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { createClient } from '@/utils/supabase/client'

type ProjectInfoType = {
  id: string
  price_id: string
  is_free: boolean
  is_paid: boolean
}

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const supabase = createClient();

  const { milestone } = useMilestoneStore();
  const { isAuthenticated } = useAuthContext()
  const { currentHint = 0, hints = [] } = milestone || {};
  const projectParam = params.project

  const [projectInfo, setProjectInfo] = useState<ProjectInfoType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getProjectInfo = useCallback(async () => {
    setIsLoading(true)
    const project = Array.isArray(projectParam) ? projectParam[0] : projectParam
    const { data, error } = await supabase.rpc('get_project_info', {
      p_name: project
    })
    setIsLoading(false)

    if (error) {
      console.error('An error occurred while getting project infor from Supabase')
    }

    setProjectInfo(data[0])
  }, [projectParam])

  useEffect(() => {
    if (isAuthenticated) {
      getProjectInfo()
    }
  }, [isAuthenticated])

  const isViewable = useMemo(() => {
    if (projectInfo?.is_free || projectInfo?.is_paid) return true
    return false
  }, [projectInfo])

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
          const response = await axios.post('/api/stripe/checkout', {
            priceId: projectInfo.price_id,
            projectId: projectInfo.id
          });
          const data = response.data;
          if (!data.ok) throw new Error('Something went wrong');
          await stripe.redirectToCheckout({
            sessionId: data.result.id
          });
        } catch (error) {
          console.log(error);
        }
      } {
        getProjectInfo()
      }
    } else {
      navigation.push('/auth/login')
    }
  }, [isAuthenticated, getProjectInfo, projectInfo])

  return (
    isAuthenticated ? <>
      {
        isLoading ? <p className="text-white">Loading</p> :
          (
            isViewable ?
              <div className="flex flex-col h-full">
                < div className="mb-6" >
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
          )
      }
    </>
      :
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-lg font-semibold">You need to log in to see this tutorial</p>
      </div>
  );
}
