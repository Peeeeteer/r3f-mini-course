"use client";
import ArrowLeftSvg from "@/components/Icons/ArrowLeftSvg";
import ArrowRightSvg from "@/components/Icons/ArrowRightSvg";
import { useMilestoneStore } from "@/store/useMilestoneStore";
import { TMilestone } from "@/types/Milestonne";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback, useMemo } from "react";

interface FooterProcessProps {
  labelNextBtn?: string;
  labelPrevBtn?: string;
}

const FooterProcess: FC<FooterProcessProps> = ({
  labelNextBtn = "Reveal Hint",
  labelPrevBtn = "Back",
}) => {
  const { milestone, isReveal, toggleReveal } = useMilestoneStore();

  const params = usePathname();
  const navigation = useRouter();

  const currentHint = useMemo(() => {
    if (!milestone) return 0;
    return milestone?.currentHint || 0;
  }, [milestone]);

  const totalHint = useMemo(() => {
    if (!milestone) return 0;
    return milestone?.totalHint || 0;
  }, [milestone]);

  const process = useMemo(() => {
    if (!milestone) return 0;
    if (isReveal) return 100;
    return (
      ((currentHint < totalHint ? currentHint : totalHint) /
        totalHint) *
      100
    );
  }, [currentHint, milestone, totalHint, isReveal]);

  const handleRevealTheFinalCode = useCallback(() => {
    const urlSplit = params.split("/");
    urlSplit.shift();
    urlSplit.pop();
    urlSplit.push("solution");
    const newUrl = urlSplit.join("/");
    navigation.push("/" + newUrl);
    toggleReveal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const isIntroductionPage = useMemo(() => {
    return params.includes("introduction");
  }, [params]);

  const goToNextHint = useCallback(() => {
    if (!params.includes("introduction")) return;
    const urlSplit = params.split("/");
    urlSplit.shift();
    urlSplit.pop();

    const newUrl = urlSplit.join("/");
    navigation.push("/" + newUrl + "/1/description");
  }, [navigation, params]);

  return (
    <div className="fixed bottom-0 right-0 w-[calc(100%-250px)] z-50 bg-[#232627]">
      <div className="pb-8 px-5">
        <div className="w-full bg-[#FFFFFF1A] h-[2px] relative mb-10">
          <div
            className="absolute h-[2px] left-0 top-0 bg-[#5533FF]"
            style={{
              width: `${process}%`,
            }}
          ></div>
        </div>
        {!isIntroductionPage && (
          <div className="flex justify-between items-center">
            <button
              className="w-fit bg-[#FFFFFF14] px-[10px] py-2 rounded-md border border-[#FFFFFF0F] flex gap-x-1 items-center text-white text-sm hover:text-white56 hover-effect"
              onClick={() => {
                handleRevealTheFinalCode();
              }}
            >
              <span className=" text-sm ">Reveal the final code</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.12"
                  d="M8.66675 2L9.82287 5.00591C10.0109 5.49473 10.1049 5.73914 10.2511 5.94472C10.3806 6.12693 10.5398 6.28613 10.722 6.41569C10.9276 6.56187 11.172 6.65587 11.6608 6.84388L14.6667 8L11.6608 9.15612C11.172 9.34413 10.9276 9.43813 10.722 9.58431C10.5398 9.71387 10.3806 9.87307 10.2511 10.0553C10.1049 10.2609 10.0109 10.5053 9.82287 10.9941L8.66675 14L7.51063 10.9941C7.32262 10.5053 7.22862 10.2609 7.08244 10.0553C6.95287 9.87307 6.79368 9.71387 6.61147 9.58431C6.40589 9.43813 6.16148 9.34413 5.67266 9.15612L2.66675 8L5.67265 6.84388C6.16148 6.65587 6.40589 6.56187 6.61147 6.41569C6.79368 6.28613 6.95287 6.12693 7.08243 5.94472C7.22862 5.73914 7.32262 5.49473 7.51063 5.00591L8.66675 2Z"
                  fill="black"
                />
                <path
                  d="M2.99992 14.6663V11.333M2.99992 4.66634V1.33301M1.33325 2.99967H4.66659M1.33325 12.9997H4.66659M8.66658 1.99967L7.51047 5.00558C7.32246 5.4944 7.22845 5.73881 7.08227 5.9444C6.95271 6.12661 6.79352 6.2858 6.61131 6.41536C6.40572 6.56154 6.16131 6.65555 5.67249 6.84356L2.66659 7.99967L5.67249 9.15579C6.16131 9.3438 6.40572 9.4378 6.61131 9.58399C6.79352 9.71355 6.95271 9.87274 7.08227 10.0549C7.22845 10.2605 7.32246 10.5049 7.51047 10.9938L8.66659 13.9997L9.8227 10.9938C10.0107 10.5049 10.1047 10.2605 10.2509 10.055C10.3805 9.87274 10.5397 9.71355 10.7219 9.58399C10.9274 9.4378 11.1719 9.3438 11.6607 9.15579L14.6666 7.99967L11.6607 6.84356C11.1719 6.65555 10.9274 6.56154 10.7219 6.41536C10.5397 6.2858 10.3805 6.12661 10.2509 5.9444C10.1047 5.73881 10.0107 5.4944 9.8227 5.00558L8.66658 1.99967Z"
                  stroke="#635AFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {!isReveal && <div className="flex gap-x-4">
              <div className="flex gap-x-2 px-3 py-2 items-center w-fit cursor-pointer hover-lighter">
                <button
                  onClick={() => {
                    if (!milestone || currentHint === 0 || isReveal) return;
                    const urlSplit = params.split("/");
                    urlSplit.shift();
                    urlSplit.pop();
                    urlSplit.push(
                      milestone.hints[currentHint - 1].label.toLocaleLowerCase()
                    );
                    const newUrl = urlSplit.join("/");
                    navigation.push("/" + newUrl);
                  }}
                  className="text-[#FFFFFF33] text-sm flex gap-x-2 items-center"
                  style={{
                    cursor: "pointer",
                    color: currentHint === 0 ? "#FFFFFF33" : "#FFFFFF",
                  }}
                >
                  <ArrowLeftSvg
                    strokeWidth={"1.2"}
                    stroke={currentHint === 0 ? "#FFFFFF33" : "#FFFFFF"}
                  ></ArrowLeftSvg>
                  {labelPrevBtn}
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    if (!milestone || currentHint > milestone.hints.length - 2 || isReveal)
                      return;
                    const urlSplit = params.split("/");
                    urlSplit.shift();
                    urlSplit.pop();
                    urlSplit.push(
                      milestone.hints[currentHint + 1].label.toLocaleLowerCase()
                    );
                    const newUrl = urlSplit.join("/");
                    navigation.push("/" + newUrl);
                  }}
                  disabled={currentHint > (milestone?.hints?.length || 0) - 2}
                  className="hover:text-white56 flex items-center gap-x-2 bg-[#635AFF] rounded-md px-3 py-[6px] w-fit text-white "
                >
                  <span className="text-sm font-bold block ">
                    {labelNextBtn}{" "}
                    {currentHint + 1 < totalHint ? currentHint + 1 : totalHint}
                  </span>
                  <ArrowRightSvg
                    color="#FFFFFF"
                    strokeWidth={"1.5"}
                  ></ArrowRightSvg>
                </button>
              </div>
            </div>}
          </div>
        )}

        {isIntroductionPage && (
          <div className="flex justify-end">
            <button
              onClick={goToNextHint}
              className="hover:text-white56 flex items-center gap-x-2 bg-[#635AFF] rounded-md px-3 py-[6px] w-fit text-white "
            >
              <span className="text-sm font-bold block ">
                Go to Milestone 1
              </span>
              <ArrowRightSvg
                color="#FFFFFF"
                strokeWidth={"1.5"}
              ></ArrowRightSvg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterProcess;