import { MilestoneStatus, TMilestone } from "@/types/Milestonne";
import { create } from "zustand";

type MilestoneStore = {
  milestone: TMilestone;
  introduction: TMilestone;
  listMilestone: TMilestone[];
  handleMilestone: (milestone: TMilestone) => void;
  totalMilestoneLeft: number;
  nextStepMilestone: () => void;
  prevStepMilestone: () => void;
  setShowCode: (isShowCode: boolean) => void;
};

const listMilestone: TMilestone[] = [
  {
    id: "0",
    currentStep: 0,
    displayName: "Introductions",
    status: MilestoneStatus.TO_DO,
    steps: [
      {
        id: "0",
        displayName: "Description",
      },
      {
        id: "1",
        displayName: "Hint 1",
      },
      {
        id: "2",
        displayName: "Hint 2",
      },
      {
        id: "3",
        displayName: "Hint 3",
      },
    ],
    totalSteps: 4,
    url: "/individual/introduction",
    isShowCode: false,
  },
  {
    id: "1",
    currentStep: 0,
    displayName: "Milestone 1",
    status: MilestoneStatus.TO_DO,
    steps: [
      {
        id: "1",
        displayName: "Step 1",
      },
      {
        id: "2",
        displayName: "Step 2",
      },
      {
        id: "3",
        displayName: "Step 3",
      },
    ],
    totalSteps: 3,
    url: "/individual/milestones-1",
    isShowCode: false,
  },
  {
    id: "2",
    currentStep: 0,
    displayName: "Milestone 2",
    status: MilestoneStatus.FINISHED,
    steps: [
      {
        id: "1",
        displayName: "Step 1",
      },
      {
        id: "2",
        displayName: "Step 2",
      },
      {
        id: "3",
        displayName: "Step 3",
      },
    ],
    totalSteps: 3,
    url: "/individual/milestones-2",
    isShowCode: false,
  },
  {
    id: "3",
    currentStep: 0,
    displayName: "Milestone 3",
    status: MilestoneStatus.WORKING,
    steps: [
      {
        id: "1",
        displayName: "Step 1",
      },
      {
        id: "2",
        displayName: "Step 2",
      },
      {
        id: "3",
        displayName: "Step 3",
      },
    ],
    totalSteps: 3,
    url: "/individual/milestones-3",
    isShowCode: false,
  },
];

export const useMilestoneStore = create<MilestoneStore>((set) => ({
  milestone: listMilestone[0],
  introduction: listMilestone[0],
  listMilestone: listMilestone,
  totalMilestoneLeft: listMilestone.filter(
    (milestone) => milestone.status !== "F"
  ).length,
  handleMilestone: (newMilestone) =>
    set((state) => ({ milestone: newMilestone })),
  nextStepMilestone: () =>
    set((state) => {
      if (state.milestone.currentStep === state.milestone.totalSteps - 1)
        return state;
      return {
        milestone: {
          ...state.milestone,
          currentStep: state.milestone.currentStep + 1,
        },
      };
    }),
  prevStepMilestone: () =>
    set((state) => {
      if (state.milestone.currentStep === 0) return state;
      return {
        milestone: {
          ...state.milestone,
          currentStep: state.milestone.currentStep - 1,
        },
      };
    }),
  setShowCode: (isShowCode: boolean) =>
    set((state) => ({ milestone: { ...state.milestone, isShowCode } })),
}));
