"use client";

import Stepper from "@/components/Stepper";
import Hint1 from "@/containers/project-page/Hint/Hint1";
import Hint2 from "@/containers/project-page/Hint/Hint2";
import Hint3 from "@/containers/project-page/Hint/Hint3";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { use, useEffect, useMemo } from "react";

export default function Page({ params }: { params: { milestone: string } }) {
  const { milestone, setMilestoneSelected } =
    useMilestoneStore();
  const { currentHint = 0, hints = [] } = milestone || {};

  const componentDisplay = useMemo(() => {
    switch (currentHint) {
      case 0: {
        return (
          <Hint1
            title={hints[currentHint]?.label}
            description="Description hint 1"
          />
        );
      }
      case 1: {
        return (
          <Hint2
            title={hints[currentHint]?.label}
            description="Description hint 2"
          />
        );
      }
      case 2: {
        return (
          <Hint3
            title={hints[currentHint]?.label}
            description="Description hint 3"
          />
        );
      }
      default: {
        return (
          <Hint1
            title={hints[currentHint].label}
            description="Description hint 1"
          />
        );
      }
    }
  }, [currentHint, hints]);
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mb-6">
        <Stepper
          activeStep={currentHint || 0}
          onChangeStep={(newCurrentStep) => {
            console.log("newCurrentStep", newCurrentStep);
            if (!milestone) return;
            setMilestoneSelected({
              ...milestone,
              currentHint: newCurrentStep,
            });
          }}
          steps={hints.map((hint) => hint?.label || "")}
        ></Stepper>
      </div>
      <div className="h-full">{componentDisplay}</div>
    </div>
  );
}
