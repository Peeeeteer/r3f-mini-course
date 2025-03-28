"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import { useCallback, useMemo } from "react";

import Stepper from "@/components/Stepper";
import FooterProcess from "@/containers/projects/components/FooterProcess";
import { useMilestoneStore } from "@/store/useMilestoneStore";

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const { milestone } = useMilestoneStore();
  const { currentHint = 0, hints = [] } = milestone || {};
  const projectParam = params.project;

  const projectName = useMemo(
    () => (Array.isArray(projectParam) ? projectParam[0] : projectParam),
    [projectParam]
  );

  // All projects are viewable without any payment check
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
