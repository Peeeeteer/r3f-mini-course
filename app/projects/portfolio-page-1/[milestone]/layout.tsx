"use client";

import ProjectPageHeader from "@/containers/projects/components/ProjectPageHeader";
import Sidebar from "@/containers/projects/components/Sidebar";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import Hint1 from "@/containers/project-page/Hint/Hint1";
import Hint2 from "@/containers/project-page/Hint/Hint2";
import Hint3 from "@/containers/project-page/Hint/Hint3";
import Stepper from "@/components/Stepper";

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = useRouter();
  const params = usePathname();
  console.log("🚀 ~ params:", params)

    const { milestone, setMilestoneSelected, projectNameSelected } =
    useMilestoneStore();
  const { currentHint = 0, hints = [] } = milestone || {};

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mb-6">
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
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
