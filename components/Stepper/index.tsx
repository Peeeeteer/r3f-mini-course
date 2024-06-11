"use client"
import { FC } from "react";
import { twJoin } from "tailwind-merge";

interface StepperProps {
  steps: Array<string>;
  activeStep: number;
  onChangeStep?: (index: number) => void;
}

const Stepper: FC<StepperProps> = ({ steps, activeStep, onChangeStep }) => {
  return (
    <div className="flex gap-x-[10px]">
      {steps.map((step, index) => {
        return (
          <div
            key={step}
            className="flex items-center justify-between text-white56 cursor-pointer"
            onClick={() => onChangeStep && onChangeStep(index)}
          >
            <div className="flex items-center">
              <div
                className={twJoin(
                  "w-[22px] h-[22px]  rounded-full flex items-center justify-center  text-sm leading-[18px] cursor-pointer",
                  activeStep === index
                    ? "bg-[#FFFFFF] text-[#171819]"
                    : "bg-transparent text-white56 border border-[#FFFFFF33]"
                )}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-xs leading-[18px] text-white hover:text-white56">
                {step}
              </span>
            </div>
            {steps.length - 1 !== index && (
              <div className="h-[1px] w-8 bg-[#ECECEC] ml-[10px]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
