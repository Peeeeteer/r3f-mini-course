"use client";

import CodeSyntaxHighlighter from "@/components/CodeBlock";
import Stepper from "@/components/Stepper";
import DescriptionMilestone from "@/containers/individual-page/components/DescriptionMilestone";
import Hint1 from "@/containers/individual-page/Hint/Hint1";
import Hint2 from "@/containers/individual-page/Hint/Hint2";
import Hint3 from "@/containers/individual-page/Hint/Hint3";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Description() {
  const { milestone, handleMilestone } = useMilestoneStore();
  const { currentStep, totalSteps, steps } = milestone;

  const componentDisplay = useMemo(() => {
    switch (currentStep) {
      case 0: {
        return <DescriptionMilestone />;
      }
      case 1: {
        return (
          <Hint1 title="Test hint title 1" description="Description hint 1" />
        );
      }
      case 2: {
        return (
          <Hint2 title="Test hint title 2" description="Description hint 2" />
        );
      }
      case 3: {
        return (
          <Hint3 title="Test hint title 3" description="Description hint 3" />
        );
      }
      default: {
        return <DescriptionMilestone />;
      }
    }
  }, [currentStep]);

  return (
    <main className="flex items-start flex-col pb-[77px]">
      <div className="mb-6">
        <Stepper
          activeStep={currentStep}
          onChangeStep={(newCurrentStep) => {
            handleMilestone({
              ...milestone,
              currentStep: newCurrentStep,
            })
          }}
          steps={steps.map((step) => step?.displayName || "")}
        ></Stepper>
      </div>
      <div>{componentDisplay}</div>
    </main>
  );
}
